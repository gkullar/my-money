import styled from 'styled-components';
import { rgba } from 'polished';
import { Props, WithPalette } from './with-palette';

const Card = WithPalette(styled.div<Props>`
  padding: 20px;
  position: relative;
  border-radius: 15px;
  color: ${props => props.theme[props.palette].text};
  background: ${props => rgba(props.theme[props.palette].background, 0.9)};
  box-shadow: 8px 8px 4px -4px ${props => rgba(props.theme[props.palette].border, 0.4)};
`);

export default Card;
