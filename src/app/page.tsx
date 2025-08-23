'use client'

import { useState, useMemo } from 'react'
import { useQuery } from '@apollo/client/react'
import { AlertCircle, Users } from 'lucide-react'
import LoadingSpinner from '@/components/loading-spinner'
import Filters from '@/components/filters'
import CharacterList from '@/components/character-list'
import { ALL_PEOPLE } from '@/lib/queries'
import { Alert, AlertDescription } from '@/components/ui/alert'
import type { AllPeopleResponse, PaginationVariables } from '@/types/swapi'

export default function CharacterPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const { data, loading, error } = useQuery<
    AllPeopleResponse,
    PaginationVariables
  >(ALL_PEOPLE, {
    variables: { first: 82 },
  })

  const characters = useMemo(() => {
    if (!data?.allPeople?.people) {
      return []
    }

    return data.allPeople.people
      .filter((person) => {
        return person.name.toLowerCase().includes(searchTerm.toLowerCase())
      })
      .toSorted((a, b) => {
        if (sortOrder === 'asc') {
          return a.name.localeCompare(b.name)
        } else {
          return b.name.localeCompare(a.name)
        }
      })
  }, [data, searchTerm, sortOrder])

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 pt-8">
          <Alert className="border-red-500 bg-red-500/10">
            <AlertCircle className="w- h-4" fill="white" />
            <AlertDescription className="text-red-400">
              Error loading characters: {error?.message}
            </AlertDescription>
          </Alert>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <Users className="h-8 w-8 text-yellow-400" />
            <h1 className="text-2xl font-bold text-white md:text-3xl">
              Star Wars Characters
            </h1>
          </div>
          <p className="mt-2 text-gray-400">
            Explore the galaxy&apos;s most iconic characters
          </p>
        </div>
      </header>

      <Filters
        searchTerm={searchTerm}
        sortOrder={sortOrder}
        onSearchChange={setSearchTerm}
        onSortChange={setSortOrder}
      />

      <main className="container mx-auto px-4">
        <div className="py-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-400">
              Showing {characters.length} characters
            </p>
          </div>
          <CharacterList characters={characters} />
        </div>
      </main>
    </div>
  )
}
