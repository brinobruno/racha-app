import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { Home } from './../'

describe('Home', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )
  })

  afterEach(() => {
    cleanup()
  })

  it('renders the component without errors', () => {
    const titleElement = screen.getByText(
      /Gerencie times para jogar com os amigos/i,
    )
    expect(titleElement).toBeTruthy()

    const signInButton = screen.getByRole('button', { name: /Entrar/i })
    expect(signInButton).toBeTruthy()

    const signUpLink = screen.getByRole('link', { name: /Criar conta/i })
    expect(signUpLink).toBeTruthy()
  })
})
