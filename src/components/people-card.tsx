import type { Person } from '@/types/swapi'

type PeopleCardProps = {
  person: Person
}

export default function PeopleCard({ person }: PeopleCardProps) {
  return <div>{person.name}</div>
}
