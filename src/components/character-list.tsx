import { useVirtualizer } from '@tanstack/react-virtual'
import { useRef } from 'react'
import CharacterCard from '@/components/character-card'
import type { Person } from '@/types/swapi'

type CharacterListProps = {
  characters: Person[]
}

export default function CharacterList({ characters }: CharacterListProps) {
  const container = useRef<HTMLDivElement>(null)

  const virtualizer = useVirtualizer({
    count: characters.length,
    getScrollElement: () => container.current,
    estimateSize: () => 294,
    overscan: 2,
    scrollMargin: 0,
  })

  return (
    <div
      ref={container}
      className="h-[calc(100vh-200px)] overflow-auto"
      style={{ contain: 'strict', WebkitOverflowScrolling: 'touch' }}
    >
      <div
        style={{
          height: virtualizer.getTotalSize(),
          width: '100%',
          position: 'relative',
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
    </div>
  )
}
