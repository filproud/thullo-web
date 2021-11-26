import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import './fonts.css';

export const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    font-size: 100%;
    font-family: ${({ theme }) =>
      theme.fonts
        .poppins}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "liga","kern";
    font-variant-numeric: proportional-nums;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
