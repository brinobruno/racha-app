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
    background: linear-gradient(180deg, #0E1647 0%, #0E1546 7.62%, #0A1033 100%);
    color: ${(props) => props.theme['neutral-100']};
    -webkit-font-smoothing: antialiased;

    overflow-y: scroll
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
    color: ${(props) => props.theme['neutral-100']};

    padding: 1rem;

    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }
  
  li {
    list-style: none;
  }
`
