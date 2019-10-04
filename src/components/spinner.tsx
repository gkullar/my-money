import styled from 'styled-components';
import { Props as PaletteProps, withPalette } from './with-palette';
import { rotate } from '../theme/animations';

interface Props extends PaletteProps {
  size?: string;
}

const Spinner = withPalette(styled.div<Props>`
  display: inline-block;
  width: ${props => props.size};
  height: ${props => props.size};

  &:after {
    content: ' ';
    display: block;
    width: ${props => props.size};
    height: ${props => props.size};
    border-radius: 50%;
    border: 3px solid;
    border-color: ${props => props.theme[props.palette].text} transparent
      ${props => props.theme[props.palette].text} transparent;
    animation: ${rotate} infinite 1s linear;
  }
`);

Spinner.defaultProps = {
  size: '24px'
};

export default Spinner;
