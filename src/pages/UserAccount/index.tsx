import { useUser } from 'src/services/hooks/useUser'
import {
  Container,
  UserImageContainer,
  UserInfoContainer,
  UserInfoItem,
} from './styles'
import ProfilePic from 'src/assets/profile-pic.png'

export function UserAccount() {
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

        {isLoading && <span>Carregando...</span>}
        {typeof error === 'string' && <span>Erro: {error}</span>}
      </UserInfoContainer>
    </Container>
  )
}
