'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { User, MapPin, Users } from 'lucide-react'
import type { Person } from '@/types/swapi'

type CharacterCardProps = {
  character: Person
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Card className="border-gray-800 bg-gray-900 transition-colors duration-200 hover:border-yellow-400">
      <CardContent className="p-4">
        <div className="mb-3 flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5 text-yellow-400" />
            <h3 className="truncate text-lg font-semibold text-white">
              {character.name}
            </h3>
          </div>
          <Badge
            variant="secondary"
            className="border-yellow-400/20 bg-yellow-400/10 text-yellow-400"
          >
            {character.gender}
          </Badge>
        </div>

        <div className="mb-4 space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <MapPin className="h-4 w-4" />
            <span>{character.homeworld?.name || 'Unknown'}</span>
          </div>
          {character.species?.length > 0 && (
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Users className="h-4 w-4" />
              <span>{character.species[0].name}</span>
            </div>
          )}
          <p className="text-sm text-gray-400">Born: {character.birthYear || 'Unknown'}</p>
        </div>

        <div className="mb-4 flex flex-wrap gap-1">
          {character.filmConnection?.films?.slice(0, 3).map((film) => (
            <Badge
              key={film.id}
              variant="outline"
              className="border-blue-400/30 text-xs text-blue-400"
            >
              Ep. {film.title}
            </Badge>
          ))}
          {character.filmConnection?.films?.length > 3 && (
            <Badge
              variant="outline"
              className="border-blue-400/30 text-xs text-blue-400"
            >
              +{character.filmConnection.films.length - 3} more
            </Badge>
          )}
        </div>

        <Link href={`/character/${character.id}`} passHref>
          <Button
            className="w-full bg-yellow-400 font-medium text-black hover:bg-yellow-300"
            size="sm"
          >
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
