import styled from 'styled-components';
import { darken, rgba } from 'polished';
import { Props as PaletteProps, withPalette } from './with-palette';
import background1 from '../assets/background1.jpg';
import background2 from '../assets/background2.jpg';

interface Props extends PaletteProps {
  isAuth?: boolean;
}

const FullScreenBackground = withPalette(styled.div<Props>`
  background: url(${props => (props.isAuth ? background1 : background2)})
    no-repeat center center fixed;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px
    ${props =>
      rgba(
        darken(0.5, props.theme[props.palette].background),
        props.isAuth ? 0.8 : 0.3
      )};
`);

FullScreenBackground.defaultProps = {
  isAuth: false
};

export default FullScreenBackground;
