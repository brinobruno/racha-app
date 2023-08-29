import { ReactNode } from 'react'
import { Container } from './styles'

interface TeamControlButtonProps {
  icon: ReactNode
  text: string
}

export function TeamControlButton({ icon, text }: TeamControlButtonProps) {
  return (
    <Container>
      {icon}
      <span>{text}</span>
    </Container>
  )
}
