import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock Next.js Link globally
vi.mock('next/link', () => {
  return {
    default: ({ children, href }: { children: React.ReactNode; href: string }) => (
      <a href={href}>{children}</a>
    ),
  }
})