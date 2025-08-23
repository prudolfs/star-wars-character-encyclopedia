import { gql } from '@apollo/client'

export const ALL_PEOPLE = gql`
  query AllPeople($first: Int, $after: String) {
    allPeople(first: $first, after: $after) {
      people {
        id
        name
        birthYear
        gender
        homeworld {
          name
          climates
          terrains
        }
        species {
          name
        }
        birthYear
        filmConnection {
          films {
            id
            episodeID
            title
          }
        }
      }
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

export const GET_PERSON_DETAILS = gql`
  query GetPersonDetails($id: ID!) {
    person(id: $id) {
      id
      name
      height
      mass
      hairColor
      skinColor
      eyeColor
      birthYear
      gender
      homeworld {
        id
        name
        climates
        terrains
        population
        diameter
      }
      species {
        id
        name
        classification
        language
        averageHeight
        averageLifespan
      }
      filmConnection {
        films {
          id
          title
          episodeID
          releaseDate
          director
        }
      }
    }
  }
`
