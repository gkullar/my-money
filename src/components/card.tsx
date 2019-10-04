import styled from 'styled-components';
import { rgba } from 'polished';
import { Props, withPalette } from './with-palette';

const Card = withPalette(styled.div<Props>`
  padding: 20px;
  position: relative;
  border-radius: 15px;
  color: ${props => props.theme[props.palette].text};
  background: ${props => rgba(props.theme[props.palette].background, 0.9)};
  box-shadow: 10px 8px 12px -6px ${props => rgba(props.theme[props.palette].border, 0.4)};
`);

export default Card;
