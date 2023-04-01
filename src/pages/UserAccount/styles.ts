import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.5rem;

  h1 {
    padding-bottom: 3.5rem;
  }
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

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`

export const UserInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  span {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  strong {
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 400;
  }
`
