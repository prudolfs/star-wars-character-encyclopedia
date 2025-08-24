import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import { test, expect } from 'vitest'
import CharacterPage from '@/app/page'

const mockData = {
  allPeople: {
    people: [
      {
        id: '1',
        name: 'Luke Skywalker',
        birthYear: '19BBY',
        gender: 'male',
        homeworld: {
          name: 'Tatooine',
          climates: ['arid'],
          terrains: ['desert'],
        },
        species: [{ name: 'Human' }],
        filmConnection: {
          films: [{ id: '1', episodeID: 4, title: 'A New Hope' }],
        },
      },
      {
        id: '2',
        name: 'Darth Vader',
        birthYear: '41.9BBY',
        gender: 'male',
        homeworld: {
          name: 'Tatooine',
          climates: ['arid'],
          terrains: ['desert'],
        },
        species: [{ name: 'Human' }],
        filmConnection: {
          films: [{ id: '1', episodeID: 4, title: 'A New Hope' }],
        },
      },
    ],
    totalCount: 2,
    pageInfo: { hasNextPage: false, endCursor: null },
  },
}

const mockClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: {
    request: () => Promise.resolve({ data: mockData }),
  } as any,
})

test('renders page with characters and filters work correctly', async () => {
  const user = userEvent.setup()

  render(
    <ApolloProvider client={mockClient}>
      <CharacterPage />
    </ApolloProvider>,
  )

  await waitFor(() => {
    expect(screen.getByText('Luke Skywalker')).toBeDefined()
  })

  expect(screen.getByText('Darth Vader')).toBeDefined()

  const searchInput = screen.getByPlaceholderText(
    'Search characters by name...',
  )
  await user.type(searchInput, 'Luke')

  await waitFor(() => {
    expect(screen.getByText('Luke Skywalker')).toBeDefined()
    expect(screen.queryByText('Darth Vader')).toBeNull()
  })

  await user.clear(searchInput)

  await waitFor(() => {
    expect(screen.getByText('Luke Skywalker')).toBeDefined()
    expect(screen.getByText('Darth Vader')).toBeDefined()
  })

  await user.click(screen.getByRole('combobox'))
  await user.click(screen.getByText('Name: Z to A'))

  const characterNames = screen.getAllByText(/Skywalker|Vader/)
  expect(characterNames[0].textContent).toContain('Darth Vader')
})

test('shows loading spinner initially', () => {
  render(
    <ApolloProvider client={mockClient}>
      <CharacterPage />
    </ApolloProvider>,
  )

  expect(screen.getByTestId('loading-spinner')).toBeDefined()
})
