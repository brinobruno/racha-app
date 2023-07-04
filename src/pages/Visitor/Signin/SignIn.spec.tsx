import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { QueryClient, QueryClientProvider } from 'react-query'
import { cleanup, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { Signin } from './'

describe('Signin component', () => {
  let queryClient: QueryClient

  beforeEach(() => {
    // const sessionHook = vi.mock('src/hooks/useRedirectIfAuthenticated') as any

    // sessionHook.mockImplementation(() => ({
    //   isLoggedIn: false,
    //   user: null,
    // }))

    queryClient = new QueryClient()

    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Signin />
        </QueryClientProvider>
      </MemoryRouter>,
    )
  })

  afterEach(() => {
    cleanup()
  })

  it('should render the title', () => {
    expect(screen.getByText('Que bom te ver por aqui 👋')).toBeTruthy()
  })

  it('should render the SignInForm', () => {
    expect(screen.getByLabelText('Email')).toBeTruthy()
    expect(screen.getByLabelText('Password')).toBeTruthy()
    expect(screen.getByRole('button')).toBeTruthy()
  })

  it('should render the create account link', () => {
    expect(screen.getByText('Novo por aqui?')).toBeTruthy()

    const signUpLink = screen.getByRole('link', { name: 'Criar conta' })
    expect(signUpLink.getAttribute('href')).toEqual('/signup')
  })

  it.todo('should call useRedirectIfAuthenticated hook')
})
