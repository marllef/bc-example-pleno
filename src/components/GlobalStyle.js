import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }

  * {
    padding: 0;
    margin: 0;
    font-family: 'Courier New', Courier, monospace;
    box-sizing: border-box;
  }
`;
