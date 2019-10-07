import { createGlobalStyle } from 'styled-components';
import { Props as PaletteProps, WithPalette } from './with-palette';
import '../fonts/stylesheet.css';

interface Props extends PaletteProps {
  theme: any;
}

const GlobalStyle = createGlobalStyle<Props>`
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

html,
body {
  height: 100%;
}

body {
  font-family: 'Flama', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${props => props.theme[props.palette].background};
  color: ${props => props.theme[props.palette].text};
  font-size: 14px;
}

a {
  color: ${props => props.theme[props.palette].text};
  text-transform: uppercase;

  &:hover {
    text-decoration: none;
  }

  &:visited {
    color: ${props => props.theme[props.palette].text};
  }
}
`;

export default WithPalette(GlobalStyle);
