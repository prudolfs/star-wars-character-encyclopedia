import type { Person } from '@/types/swapi'

type CharacterCardProps = {
  person: Person
}

export default function PeopleCard({ person }: CharacterCardProps) {
  return <div>{person.name}</div>
}
