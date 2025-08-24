import { render, screen, waitFor } from '@testing-library/react'
import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client'
import { Observable } from '@apollo/client/utilities'
import { ApolloProvider } from '@apollo/client/react'
import { GraphQLError } from 'graphql'
import { test, expect } from 'vitest'
import CharacterPage from '@/app/page'

const mockLink = new ApolloLink(() => {
  return new Observable(observer => {
    observer.error(new GraphQLError('Network error'))
  })
})

const mockClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: mockLink,
})

test('displays error message when query fails', async () => {
  render(
    <ApolloProvider client={mockClient}>
      <CharacterPage />
    </ApolloProvider>,
  )

  await waitFor(() => {
    expect(
      screen.getByText(/Error loading characters: Network error/i),
    ).toBeDefined()
  })
})
