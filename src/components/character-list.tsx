import { useWindowVirtualizer } from '@tanstack/react-virtual'
import { useRef } from 'react'
import CharacterCard from '@/components/character-card'
import type { Person } from '@/types/swapi'

type CharacterListProps = {
  characters: Person[]
}

export default function CharacterList({ characters }: CharacterListProps) {
  const container = useRef<HTMLDivElement | null>(null)

  const virtualizer = useWindowVirtualizer({
    count: characters.length,
    estimateSize: () => 256,
    overscan: 5,
    scrollMargin: 0,
  })

  return (
    <div
      ref={container}
      className="relative overflow-auto"
      style={{
        contain: 'strict',
        WebkitOverflowScrolling: 'touch',
        height: `${virtualizer.getTotalSize()}px`,
      }}
    >
      {virtualizer.getVirtualItems().map((virtualRow) => {
        const person = characters[virtualRow.index]
        return (
          <div
            key={virtualRow.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: virtualRow.size,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <CharacterCard character={person} />
          </div>
        )
      })}
    </div>
  )
}
