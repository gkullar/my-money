import styled from 'styled-components';
import { darken, rgba } from 'polished';
import { Props, withPalette } from './with-palette';
import background from '../assets/background.jpg';

const FullScreenBackground = withPalette(styled.div<Props>`
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px
    ${props => rgba(darken(0.5, props.theme[props.palette].background), 0.3)};
`);

export default FullScreenBackground;
