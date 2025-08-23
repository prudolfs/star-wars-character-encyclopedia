import type { Person } from '@/types/swapi'

type CharacterCardProps = {
  character: Person
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return <div>{character.name}</div>
}
