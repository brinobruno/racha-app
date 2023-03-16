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
      'Gerencie times para jogar com os amigos',
    )
    expect(titleElement).toBeTruthy()

    const signInButton = screen.getByRole('button', { name: 'Entrar' })
    expect(signInButton).toBeTruthy()

    const signUpLink = screen.getByRole('link', { name: 'Criar conta' })
    expect(signUpLink).toBeTruthy()
  })

  it('displays the correct image', () => {
    const imageElement = screen.getByAltText('Messi')
    expect(imageElement).toBeTruthy()
    expect(imageElement.getAttribute('src')).toEqual(
      '/src/assets/desktop-cover.webp',
    )
  })

  it('navigates to the sign in page when the Signin button is clicked', () => {
    cleanup()

    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )

    const signInButton = screen.getByRole('button', { name: 'Entrar' })
    signInButton.click()

    expect(container.innerHTML).toMatch('Entrar')
  })
})
