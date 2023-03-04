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

  body {
    background: ${(props) => props.theme['secondary-700']};
    color: ${(props) => props.theme['neutral-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    border: none;

    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 1.125rem
  }

  h1 {
    font-size: 3rem;
    line-height: 62.4px;
    color: ${(props) => props.theme['neutral-100']};
  }

  h2 {
    font-size: 2rem;
    line-height: 41.6px;
    color: ${(props) => props.theme['neutral-100']};
  }

  h3 {
    line-height: 23.4px;
  }

  button {
    cursor: pointer;
  }

  input, textarea, button {
    border-radius: 5px;
    /* width: 100%; */
  }

  input, textarea {
    padding: 0.9rem;
    background: ${(props) => props.theme['neutral-100']};
  }
  
  button {
    /* font-size: 1.25rem;
    font-weight: 600; */
    
    background: ${(props) => props.theme['primary-500']};
    color: ${(props) => props.theme['neutral-100']};

    padding: 1rem;
  }
  
  a {
    text-decoration: none;
  }
  
  li {
    list-style: none;
  }
`
