import { useUser } from 'src/services/hooks/useUser'
import { Container, UserImageContainer, UserInfoContainer } from './styles'
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
        <span>{user?.email}</span>
        <br />
        <span>{user?.username}</span>

        {isLoading && <span>Carregando...</span>}
        {typeof error === 'string' && <span>Erro: {error}</span>}
      </UserInfoContainer>
    </Container>
  )
}
