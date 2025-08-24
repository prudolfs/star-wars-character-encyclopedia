import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import CharacterCard from '@/components/character-card'
import { Person } from '@/types/swapi'

const mockCharacter: Person = {
  id: '1',
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hairColor: 'blond',
  skinColor: 'fair',
  eyeColor: 'blue',
  birthYear: '19BBY',
  gender: 'male',
  homeworld: {
    id: '1',
    name: 'Tatooine',
    rotationPeriod: 23,
    orbitalPeriod: 304,
    diameter: 10465,
    climates: ['arid'],
    gravity: '1 standard',
    terrains: ['desert'],
    surfaceWater: 1,
    population: 200000,
    residentConnection: {
      residents: [],
      totalCount: 0,
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: '',
        endCursor: '',
      },
    },
    filmConnection: {
      films: [],
      totalCount: 0,
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: '',
        endCursor: '',
      },
    },
    created: '',
    edited: '',
  },
  species: [
    {
      id: '1',
      name: 'Human',
      classification: 'mammal',
      designation: 'sentient',
      averageHeight: 180,
      skinColors: ['fair'],
      hairColors: ['blond'],
      eyeColors: ['blue'],
      averageLifespan: 120,
      homeworld: {
        id: '1',
        name: 'Tatooine',
        rotationPeriod: 23,
        orbitalPeriod: 304,
        diameter: 10465,
        climates: ['arid'],
        gravity: '1 standard',
        terrains: ['desert'],
        surfaceWater: 1,
        population: 200000,
        residentConnection: {
          residents: [],
          totalCount: 0,
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: '',
            endCursor: '',
          },
        },
        filmConnection: {
          films: [],
          totalCount: 0,
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: '',
            endCursor: '',
          },
        },
        created: '',
        edited: '',
      },
      language: 'Galactic Basic',
      personConnection: {
        people: [],
        totalCount: 0,
        pageInfo: {
          hasNextPage: false,
          hasPreviousPage: false,
          startCursor: '',
          endCursor: '',
        },
      },
      filmConnection: {
        films: [],
        totalCount: 0,
        pageInfo: {
          hasNextPage: false,
          hasPreviousPage: false,
          startCursor: '',
          endCursor: '',
        },
      },
      created: '',
      edited: '',
    },
  ],
  filmConnection: {
    films: [
      {
        id: '1',
        episodeID: 4,
        title: 'A New Hope',
        openingCrawl: '',
        director: 'George Lucas',
        producers: ['Gary Kurtz'],
        releaseDate: '1977-05-25',
        characterConnection: {
          characters: [],
          totalCount: 0,
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: '',
            endCursor: '',
          },
        },
        planetConnection: {
          planets: [],
          totalCount: 0,
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: '',
            endCursor: '',
          },
        },
        starshipConnection: {
          starships: [],
          totalCount: 0,
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: '',
            endCursor: '',
          },
        },
        vehicleConnection: {
          vehicles: [],
          totalCount: 0,
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: '',
            endCursor: '',
          },
        },
        speciesConnection: {
          species: [],
          totalCount: 0,
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: '',
            endCursor: '',
          },
        },
        created: '',
        edited: '',
      },
      {
        id: '2',
        episodeID: 5,
        title: 'The Empire Strikes Back',
        openingCrawl: '',
        director: 'Irvin Kershner',
        producers: ['Gary Kurtz'],
        releaseDate: '1980-05-21',
        characterConnection: {
          characters: [],
          totalCount: 0,
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: '',
            endCursor: '',
          },
        },
        planetConnection: {
          planets: [],
          totalCount: 0,
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: '',
            endCursor: '',
          },
        },
        starshipConnection: {
          starships: [],
          totalCount: 0,
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: '',
            endCursor: '',
          },
        },
        vehicleConnection: {
          vehicles: [],
          totalCount: 0,
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: '',
            endCursor: '',
          },
        },
        speciesConnection: {
          species: [],
          totalCount: 0,
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: '',
            endCursor: '',
          },
        },
        created: '',
        edited: '',
      },
    ],
    totalCount: 2,
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: '',
      endCursor: '',
    },
  },
  vehicleConnection: {
    vehicles: [],
    totalCount: 0,
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: '',
      endCursor: '',
    },
  },
  starshipConnection: {
    starships: [],
    totalCount: 0,
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: '',
      endCursor: '',
    },
  },
  created: '',
  edited: '',
}

test('renders character information correctly', () => {
  render(<CharacterCard character={mockCharacter} />)

  expect(screen.getByText('Luke Skywalker')).toBeDefined()
  expect(screen.getByText(/Born:\s+19BBY/i)).toBeDefined()
  expect(screen.getByText('male')).toBeDefined()
  expect(screen.getByText('Tatooine')).toBeDefined()
  expect(screen.getByText('Human')).toBeDefined()
})

test('renders view details link with correct href', () => {
  render(<CharacterCard character={mockCharacter} />)

  const link = screen.getByRole('link', { name: /view details/i })
  expect(link.getAttribute('href')).toBe('/character/1')
})
