import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { Props, withPalette } from './with-palette';

const Button = withPalette(styled.button<Props>`
  background: ${props => props.theme[props.palette].background};
  color: ${props => props.theme[props.palette].text};
  border-radius: 3px;
  border: 1px solid
    ${props => darken(0.2, props.theme[props.palette].background)};
  padding: 5px 10px;
  transition: background 0.3s linear;

  &:hover {
    cursor: pointer;
    background: ${props => lighten(0.2, props.theme[props.palette].background)};
  }
`);

export default Button;
