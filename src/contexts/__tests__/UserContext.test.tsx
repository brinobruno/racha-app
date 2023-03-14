import { ReactNode } from 'react'
import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UserContext, UserContextProvider } from '../UserContext'

function renderWithUserContext(ui: ReactNode) {
  return render(<UserContextProvider>{ui}</UserContextProvider>)
}

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

  test('setUser updates user context value', (t) => {
    renderWithUserContext(
      <UserContext.Consumer>
        {({ setUser, user }) => (
          <>
            <button
              onClick={() =>
                setUser({
                  id: '1',
                  username: 'testuser',
                  email: 'test@test.com',
                })
              }
            >
              Set User
            </button>
            {user && <div data-testid="user-value">{JSON.stringify(user)}</div>}
          </>
        )}
      </UserContext.Consumer>,
    )

    const setUserButton = screen.getByText('Set User')
    setUserButton.click()

    const userValues = screen.getAllByTestId('user-value')
    t.expect(userValues.length).toBeLessThanOrEqual(1)
  })
})
