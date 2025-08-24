import { render, screen, waitFor } from '@testing-library/react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import { GraphQLError } from 'graphql'
import { test, expect } from 'vitest'
import CharacterPage from '@/app/page'

const mockClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: {
    request: () => {
      throw new GraphQLError('Network error')
    }
  } as any,
})

test('displays error message when query fails', async () => {
  render(
    <ApolloProvider client={mockClient}>
      <CharacterPage />
    </ApolloProvider>
  )

  await waitFor(() => {
    expect(screen.getByText(/Error loading characters: Network error/i)).toBeDefined()
  })
})