import styled from 'styled-components';
import { lighten } from 'polished';
import { Props, withPalette } from './with-palette';

const Button = withPalette(styled.button<Props>`
  background: ${props => props.theme[props.palette].background};
  color: ${props => props.theme[props.palette].text};
  font-weight: 600;
  border-radius: 3px;
  border: 1px solid ${props => props.theme[props.palette].borderColor};
  padding: 5px 10px;
  text-transform: capitalize;
  transition: background 0.3s linear;

  &:hover {
    cursor: pointer;
    background: ${props => lighten(0.2, props.theme[props.palette].background)};
  }
`);

export default Button;
