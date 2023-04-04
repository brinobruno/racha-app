import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 3.5rem;

  h1 {
    padding-bottom: 1.5rem;
  }

  div {
    width: 100%;
    max-width: 18.75rem;
  }
`

export const UserImageContainer = styled.div`
  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;

    clip-path: circle();
    object-fit: cover;

    padding: 4px;
    border: 4px solid ${(props) => props.theme['neutral-100']};

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

  margin-top: 1.5rem;
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

export const UserInfoActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;

  width: 100%;
  padding-top: 2.5rem;

  button {
    display: flex;
    align-items: center;
    gap: 1.125rem;

    font-size: unset;
    font-weight: unset;
    background: unset;
    padding: unset;

    &:hover {
      background: unset;
    }
  }

  div span {
    color: ${(props) => props.theme['primary-500']};
  }
`

export const SignOutButton = styled.span`
  color: ${(props) => props.theme['primary-500']};
`
