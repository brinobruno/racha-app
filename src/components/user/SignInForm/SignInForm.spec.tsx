import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MemoryRouter } from 'react-router-dom'

import { SignInForm } from './'

describe('SignInForm', () => {
  let queryClient: QueryClient

  beforeEach(() => {
    queryClient = new QueryClient()

    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <SignInForm />
        </QueryClientProvider>
      </MemoryRouter>,
    )
  })

  afterEach(() => {
    cleanup()
  })

  it('renders all input fields correctly', () => {
    const emailLabel = screen.getByLabelText('Email')
    const passwordLabel = screen.getByLabelText('Password')

    expect(emailLabel && passwordLabel).toBeTruthy()
  })

  it('validates input fields on submit', async () => {
    const emailLabel = screen.getByLabelText('Email')
    const passwordLabel = screen.getByLabelText('Password')

    fireEvent.input(emailLabel, { target: { value: 'invalid_email' } })
    fireEvent.input(passwordLabel, { target: { value: 'a' } })

    fireEvent.submit(screen.getByTestId('signin-submit'))

    // Add validation errors later
  })

  it('submits the form when input fields are valid', async () => {
    const emailLabel = screen.getByLabelText('Email')
    const passwordLabel = screen.getByLabelText('Password')

    fireEvent.input(emailLabel, { target: { value: 'invalid_email' } })
    fireEvent.input(passwordLabel, { target: { value: 'a' } })

    fireEvent.submit(screen.getByTestId('signin-submit'))

    // Add mock mutation later
  })
})
