import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MemoryRouter } from 'react-router-dom'

import { SignUpForm } from './../'

describe('SignUpForm', () => {
  let queryClient: QueryClient

  beforeEach(() => {
    queryClient = new QueryClient()

    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <SignUpForm />
        </QueryClientProvider>
      </MemoryRouter>,
    )
  })

  afterEach(() => {
    cleanup()
  })

  it('renders all input fields correctly', () => {
    const usernameLabel = screen.getByLabelText('Apelido')
    const emailLabel = screen.getByLabelText('Email')
    const passwordLabel = screen.getByLabelText('Password')

    expect(usernameLabel && emailLabel && passwordLabel).toBeTruthy()
  })

  it('validates input fields on submit', async () => {
    const usernameLabel = screen.getByLabelText('Apelido')
    const emailLabel = screen.getByLabelText('Email')
    const passwordLabel = screen.getByLabelText('Password')

    fireEvent.input(usernameLabel, { target: { value: 'a' } })
    fireEvent.input(emailLabel, { target: { value: 'invalid_email' } })
    fireEvent.input(passwordLabel, { target: { value: 'a' } })

    fireEvent.submit(screen.getByTestId('signup-submit'))
  })
})
