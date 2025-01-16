import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    font-family: 'Arial, sans-serif';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  a {
    color: ${(props) => props.theme.primaryColor};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.primaryHoverColor};
    }
  }
`;

export default GlobalStyles;
