import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme['secondary-700']};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['secondary-600']};
  }

  body {
    background: ${(props) => props.theme['secondary-700']};
    color: ${(props) => props.theme['neutral-100']};
    -webkit-font-smoothing: antialiased;

    scroll-behavior: smooth;
  }

  a {
    color: ${(props) => props.theme['neutral-100']};
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;

    font-size: 2.25rem;
    line-height: 2.875rem;
  }

  strong {
    font-weight: 700;
  }

  input, textarea, button {
    border: none;
    border-radius: 5px;
    /* width: 100%; */
  }

  input, textarea {
    padding: 0.9rem;
    background: ${(props) => props.theme['neutral-100']};
  }
  
  button {
    font-size: 1.25rem;
    font-weight: 600;
    
    background: ${(props) => props.theme['primary-500']};
    color: #E9EDF5;

    padding: 1rem;

    transition: 0.25s ease-in-out;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['primary-hover']};
    }
  }
  
  a {
    text-decoration: none;
  }
  
  li {
    list-style: none;
  }
`
