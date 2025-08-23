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
        }
        species {
          name
        }
        birthYear
        filmConnection {
          films {
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
