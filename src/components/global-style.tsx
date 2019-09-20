import { createGlobalStyle } from 'styled-components';
import { Props as PaletteProps, withPalette } from './with-palette';

interface Props extends PaletteProps {
  theme: any;
}

const GlobalStyle = createGlobalStyle<Props>`
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
  background: ${props => props.theme[props.palette].background};
  color: ${props => props.theme[props.palette].text};
}
`;

export default withPalette(GlobalStyle);
