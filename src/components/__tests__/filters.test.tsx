import { render, screen, fireEvent } from '@testing-library/react'
import { vi, test, expect, beforeEach } from 'vitest'
import Filters from '@/components/filters'

const mockProps = {
  searchTerm: '',
  sortOrder: 'asc' as const,
  onSearchChange: vi.fn(),
  onSortChange: vi.fn(),
}

beforeEach(() => {
  vi.clearAllMocks()
})

test('renders search input and sort select', () => {
  render(<Filters {...mockProps} />)

  expect(
    screen.getByPlaceholderText('Search characters by name...'),
  ).toBeDefined()
  expect(screen.getByRole('combobox')).toBeDefined()
})

test('calls onSearchChange when typing in search input', () => {
  render(<Filters {...mockProps} />)

  const searchInput = screen.getByPlaceholderText(
    'Search characters by name...',
  )
  fireEvent.change(searchInput, { target: { value: 'Luke' } })

  expect(mockProps.onSearchChange).toHaveBeenCalledWith('Luke')
})

test('displays current search term', () => {
  render(<Filters {...mockProps} searchTerm="Vader" />)

  expect(screen.getByDisplayValue('Vader')).toBeDefined()
})

test('calls onSortChange when selecting sort option', async () => {
  render(<Filters {...mockProps} />)

  fireEvent.click(screen.getByRole('combobox'))
  fireEvent.click(screen.getByText('Name: Z to A'))

  expect(mockProps.onSortChange).toHaveBeenCalledWith('desc')
})
