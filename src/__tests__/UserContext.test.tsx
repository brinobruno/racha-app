import { render, screen } from '@testing-library/react'
import { UserContext, UserContextProvider } from './../contexts/UserContext'
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

  test('user context value is null by default', (t) => {
    render(
      <UserContextProvider>
        <UserContext.Consumer>
          {({ user }) => (
            <div data-testid="user-value">{JSON.stringify(user)}</div>
          )}
        </UserContext.Consumer>
      </UserContextProvider>,
    )

    const userValue = screen.getByTestId('user-value')
    t.expect(userValue.textContent, 'null')
  })
})
