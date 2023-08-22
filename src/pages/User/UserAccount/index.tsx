import { useState } from 'react'
import { useTheme } from 'styled-components'
import { PencilSimple, Trash } from 'phosphor-react'

import ProfilePic from 'src/assets/profile-pic.png'
import { UseUserContext } from 'src/hooks/UseUserContext'
import { Logout } from 'src/components/@Desktop/Logout'
import { GlobalModal } from 'src/components/GlobalModal'
import { EditUserForm } from 'src/components/EditUserForm'
import {
  Container,
  UserImageContainer,
  UserInfoActions,
  UserInfoContainer,
  UserInfoItem,
} from './styles'

export function UserAccount() {
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false)
  const currentTheme = useTheme()
  const { getUser } = UseUserContext()

  const user = getUser()

  const handleOpenEditUserModal = () => setIsEditUserModalOpen(true)
  const handleCloseEditUserModal = () => setIsEditUserModalOpen(false)

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
      </UserInfoContainer>

      <UserInfoActions>
        <button>
          <PencilSimple size={28} color={currentTheme['neutral-100']} />
          <span onClick={handleOpenEditUserModal}>Editar meus dados</span>
        </button>

        <button>
          <Trash size={28} color={currentTheme['neutral-100']} />
          <span>Deletar minha conta</span>
        </button>

        <div>
          <Logout btnWeight="regular" btnSize={28} />
        </div>

        <div>
          <GlobalModal
            isOpen={isEditUserModalOpen}
            contentLabel="Editar meus dados"
            title="Editar meus dados"
            onRequestClose={handleCloseEditUserModal}
          >
            <EditUserForm onCloseModal={handleCloseEditUserModal} />
          </GlobalModal>
        </div>
      </UserInfoActions>
    </Container>
  )
}
