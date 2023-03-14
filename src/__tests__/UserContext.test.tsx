import { render, screen } from '@testing-library/react'
import { UserContextProvider } from './../contexts/UserContext'
import { describe, test } from 'vitest'

describe('UserContextProvider', () => {
  test('renders children', (t) => {
    render(
      <UserContextProvider>
        <div data-testid="child-component" />
      </UserContextProvider>,
    )

    const childComponent = screen.getByTestId('child-component')
    t.expect(document.contains(childComponent)).toBe(true)
  })
})
