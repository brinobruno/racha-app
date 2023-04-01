import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  padding: 3.5rem;
`

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UserImageContainer = styled.div`
  max-width: 12.5rem;

  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;

    clip-path: circle();
    object-fit: cover;

    padding: 2px;
    border: 2px solid ${(props) => props.theme['neutral-100']};

    border-radius: 100%;
    background-size: cover;
    background-clip: content-box;
  }
`
