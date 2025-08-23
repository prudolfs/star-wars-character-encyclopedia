import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export function makeApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: '/api/swapi',
    }),
    cache: new InMemoryCache(),
  })
}
