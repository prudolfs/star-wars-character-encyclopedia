import { gql } from '@apollo/client'

export const ALL_PEOPLE = gql`
  query AllPeople($first: Int, $after: String) {
    allPeople(first: $first, after: $after) {
      people {
        id
        name
        birthYear
      }
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`
