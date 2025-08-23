'use client'

import Link from 'next/link'
import { useQuery } from '@apollo/client/react'
import { useParams } from 'next/navigation'
import {
  ArrowLeft,
  User,
  MapPin,
  Users,
  Film,
  Calendar,
  Eye,
  Ruler,
  Weight,
  AlertCircle,
} from 'lucide-react'
import LoadingSpinner from '@/components/loading-spinner'
import { GET_PERSON_DETAILS } from '@/lib/queries'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Person } from '@/types/swapi'

export default function CharacterDetailsPage() {
  const params = useParams()
  const characterId = params.id as string

  const { data, loading, error } = useQuery<{ person: Person }>(
    GET_PERSON_DETAILS,
    {
      variables: { id: characterId },
    },
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white">
        <LoadingSpinner />
      </div>
    )
  }

  if (error || !data?.person) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="border-b border-gray-800 bg-black/90 py-6 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <Alert className="border-red-500 bg-red-500/10">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-red-400">
                {error
                  ? `Error loading character: ${error.message}`
                  : 'Character not found'}
              </AlertDescription>
            </Alert>
            <div className="container mt-10">
              <Link href="/">
                <Button variant="secondary">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Characters
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const character = data.person

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <User className="h-8 w-8 text-yellow-400" />
            <h1 className="text-2xl font-bold text-white md:text-3xl">
              {character.name}
            </h1>
          </div>
          <p className="mt-2 text-gray-400">Character Details</p>
        </div>
      </header>

      <div className="sticky top-0 z-10 border-b border-gray-800 bg-black/90 p-4 backdrop-blur-sm">
        <div className="container mx-auto px-0.5 py-6 sm:px-1 md:px-4">
          <Link href="/">
            <Button variant="secondary" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Characters
            </Button>
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="border-gray-800 bg-gray-900">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-400">
                <User className="mr-2 h-5 w-5" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400">Birth Year</p>
                  <p className="flex items-center font-medium text-white">
                    <Calendar className="mr-2 h-4 w-4" />
                    {character.birthYear}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Gender</p>
                  <Badge className="border-yellow-400/20 bg-yellow-400/10 text-yellow-400">
                    {character.gender}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Height</p>
                  <p className="flex items-center font-medium text-white">
                    <Ruler className="mr-2 h-4 w-4" />
                    {character.height} cm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Mass</p>
                  <p className="flex items-center font-medium text-white">
                    <Weight className="mr-2 h-4 w-4" />
                    {character.mass} kg
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 border-t border-gray-800 pt-4 sm:grid-cols-3">
                <div>
                  <p className="text-sm text-gray-400">Eye Color</p>
                  <p className="flex items-center font-medium text-white">
                    <Eye className="mr-2 h-4 w-4" />
                    {character.eyeColor}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Hair Color</p>
                  <p className="font-medium text-white">
                    {character.hairColor}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Skin Color</p>
                  <p className="font-medium text-white">
                    {character.skinColor}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {character.homeworld && (
            <Card className="border-gray-800 bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-400">
                  <MapPin className="mr-2 h-5 w-5" />
                  Homeworld
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  {character.homeworld.name}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm text-gray-400">Climate</p>
                    <div className="flex gap-2">
                      {character.homeworld?.climates?.map((climate, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-blue-400 text-blue-400"
                        >
                          {climate}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Terrain</p>
                    <div className="flex gap-2">
                      {character.homeworld?.terrains?.map((terrain, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-blue-400 text-blue-400"
                        >
                          {terrain}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Population</p>
                    <p className="text-white">
                      {character.homeworld.population}
                    </p>
                  </div>
                  {character.homeworld.diameter && (
                    <div>
                      <p className="text-sm text-gray-400">Diameter</p>
                      <p className="text-white">
                        {character.homeworld.diameter} km
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {character.species && character.species.length > 0 && (
            <Card className="border-gray-800 bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center text-green-400">
                  <Users className="mr-2 h-5 w-5" />
                  Species
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {character.species.map((species) => (
                  <div
                    key={species.id}
                    className="border-b border-gray-800 pb-3 last:border-b-0 last:pb-0"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {species.name}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-sm text-gray-400">Classification</p>
                        <p className="text-white">{species.classification}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Language</p>
                        <p className="text-white">{species.language}</p>
                      </div>
                      {species.averageHeight && (
                        <div>
                          <p className="text-sm text-gray-400">
                            Average Height
                          </p>
                          <p className="text-white">
                            {species.averageHeight} cm
                          </p>
                        </div>
                      )}
                      {species.averageLifespan && (
                        <div>
                          <p className="text-sm text-gray-400">
                            Average Lifespan
                          </p>
                          <p className="text-white">
                            {species.averageLifespan} years
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {character.filmConnection?.films &&
            character.filmConnection.films.length > 0 && (
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-400">
                    <Film className="mr-2 h-5 w-5" />
                    Films ({character.filmConnection.films.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {character.filmConnection.films
                      .toSorted((a, b) => a.episodeID - b.episodeID)
                      .map((film) => (
                        <div
                          key={film.id}
                          className="rounded-lg bg-gray-800 p-3"
                        >
                          <div className="mb-2 flex items-start justify-between">
                            <h4 className="font-semibold text-white">
                              {film.title}
                            </h4>
                            <Badge
                              variant="outline"
                              className="border-purple-400/30 text-purple-400"
                            >
                              Episode {film.episodeID}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-400">
                            Released: {film.releaseDate}
                          </p>
                          {film.director && (
                            <p className="text-sm text-gray-400">
                              Director: {film.director}
                            </p>
                          )}
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            )}
        </div>
      </main>
    </div>
  )
}
