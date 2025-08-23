'use client'

import { useState, useMemo } from 'react'
import { useQuery } from '@apollo/client/react'
import { ALL_PEOPLE } from '@/lib/queries'
import PeopleList from '@/components/people-list'
import type { AllPeopleResponse, PaginationVariables } from '@/types/swapi'

export default function PeoplePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const { data, loading } = useQuery<AllPeopleResponse, PaginationVariables>(ALL_PEOPLE, {
    variables: { first: 82 },
  })

  const people = useMemo(() => {
    if (!data?.allPeople?.people) {
      return []
    }

    return data.allPeople.people
      .filter((person) => {
        return (
          person.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })
      .toSorted((a, b) => {
        if (sortOrder === 'asc') {
          return a.name.localeCompare(b.name)
        } else {
          return b.name.localeCompare(a.name)
        }
      })
  }, [data, searchTerm, sortOrder])

  if (loading) return <p>Loading…</p>
  if (!data?.allPeople?.people) return <p>No data available</p>

  return (
    <main className="container mx-auto px-4">
      <div className="py-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-400 text-sm">
            Showing {people.length} characters
          </p>
        </div>
        <PeopleList people={people} />
      </div>
    </main>
  )
}
