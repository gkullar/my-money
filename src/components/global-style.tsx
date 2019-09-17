import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  height: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #14233c;
  color: #fff;
}
`;

export default GlobalStyle;
