import { useUser } from 'src/services/hooks/useUser'
import {
  Container,
  UserImageContainer,
  UserInfoActions,
  UserInfoContainer,
  UserInfoItem,
} from './styles'
import ProfilePic from 'src/assets/profile-pic.png'
import { PencilSimple } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function UserAccount() {
  const currentTheme = useTheme()
  const { data, isLoading, error } = useUser()

  const user = data && data.user

  return (
    <Container>
      <h1>Minha conta</h1>

      <UserImageContainer>
        <img src={ProfilePic} alt="Perfil" />
      </UserImageContainer>

      <UserInfoContainer>
        <UserInfoItem>
          <span>Apelido</span>
          <strong>{user?.username}</strong>
        </UserInfoItem>

        <UserInfoItem>
          <span>Email</span>
          <strong>{user?.email}</strong>
        </UserInfoItem>

        <UserInfoItem>
          <span>Senha</span>
          <strong>*************</strong>
        </UserInfoItem>

        {isLoading && <span>Carregando...</span>}
        {typeof error === 'string' && <span>Erro: {error}</span>}
      </UserInfoContainer>

      <UserInfoActions>
        <button>
          <PencilSimple size={28} color={currentTheme['neutral-100']} />
          <span>Editar meus dados</span>
        </button>
      </UserInfoActions>
    </Container>
  )
}
