import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { SignUpForm } from './../'

describe('SignUpForm', () => {
  it('renders all input fields correctly', () => {
    const queryClient = new QueryClient()

    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <SignUpForm />
        </QueryClientProvider>
      </MemoryRouter>,
    )

    const usernameLabel = screen.getByLabelText('Apelido')
    const emailLabel = screen.getByLabelText('Email')
    const passwordLabel = screen.getByLabelText('Password')

    expect(usernameLabel && emailLabel && passwordLabel).toBeTruthy()
  })
})
