import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MockedProvider } from '@apollo/client/testing/react'
import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client'
import { Observable } from '@apollo/client/utilities'
import { ApolloProvider } from '@apollo/client/react'
import { test, expect } from 'vitest'
import CharacterPage from '@/app/page'
import { ALL_PEOPLE } from '@/lib/queries'

const mockData = {
  allPeople: {
    people: [
      {
        id: '1',
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
      {
        id: '2',
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
    ],
    totalCount: 2,
    pageInfo: { hasNextPage: false, endCursor: null },
  },
}

const mockLink = new ApolloLink(() => {
  return new Observable(observer => {
    observer.next({ data: mockData })
    observer.complete()
  })
})

const mockClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: mockLink,
})

const mocks = [
  {
    request: {
      query: ALL_PEOPLE,
      variables: {},
    },
    result: {
      data: mockData,
    },
  },
]

test('renders page with characters and filters work correctly', async () => {
  const user = userEvent.setup()

  render(
    <MockedProvider mocks={mocks}>
      <CharacterPage />
    </MockedProvider>,
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
    expect(screen.getByText('Darth Vader')).toBeDefined()
    expect(screen.getByText('Luke Skywalker')).toBeDefined()
  })

  fireEvent.click(screen.getByRole('combobox'))
  fireEvent.click(screen.getByText('Name: Z to A'))

  const characterNames = screen.getAllByText(/Dart|Luke/)
  expect(characterNames[0].textContent).toContain('Luke Skywalker')
})

test('shows loading spinner initially', () => {
  render(
    <ApolloProvider client={mockClient}>
      <CharacterPage />
    </ApolloProvider>,
  )

  expect(screen.getByTestId('loading-spinner')).toBeDefined()
})
