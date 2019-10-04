import styled from 'styled-components';
import { rgba } from 'polished';
import { Props, withPalette } from './with-palette';

const Button = withPalette(styled.button<Props>`
  background: ${props => props.theme[props.palette].background};
  color: ${props => props.theme[props.palette].text};
  border-radius: 3px;
  border: 1px solid ${props => props.theme[props.palette].border};
  padding: 5px 10px;
  text-transform: capitalize;
  transition: background 0.3s linear;

  &:hover {
    cursor: pointer;
    background: ${props => rgba(props.theme[props.palette].border, 0.3)};
  }
`);

export default Button;
