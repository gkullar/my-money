import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { Props as PaletteProps, WithPalette } from './with-palette';
import { fadeIn } from '../theme/animations';
import { respondTo } from '../theme/mixins';

interface Props extends PaletteProps {
  show: boolean;
}

const Snackbar = WithPalette(styled.div<Props>`
  background-color: ${props => props.theme[props.palette].error};
  color: ${props => props.theme[props.palette].text};
  box-shadow: 8px 8px 4px -4px ${props => rgba(props.theme[props.palette].error, 0.4)};
  border-radius: 2px;
  padding: 15px;
  text-align: center;
  position: fixed;
  width: 300px;
  margin-left: -150px;
  left: 50%;
  bottom: 30px;
  z-index: 1;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  ${props =>
    props.show &&
    css`
      animation: ${fadeIn} 0.3s;
    `};

  ${respondTo.xs`
    width: 400px;
    margin-left: -200px;
  `}
`);

export default Snackbar;
