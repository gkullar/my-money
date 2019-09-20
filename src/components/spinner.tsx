import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Props as PaletteProps, withPalette } from './with-palette';
import { rotate } from '../theme/animations';

interface Props extends PaletteProps {
  size?: string;
}

const StyledSpinner = withPalette(styled.div<Props>`
  display: inline-block;
  width: ${props => props.size};
  height: ${props => props.size};

  &:after {
    content: ' ';
    display: block;
    width: ${props => props.size};
    height: ${props => props.size};
    border-radius: 50%;
    border: 3px solid ${props => props.theme[props.palette].text};
    border-color: ${props => props.theme[props.palette].text} transparent
      ${props => props.theme[props.palette].text} transparent;
    animation: ${rotate} infinite 1s linear;
  }
`);

StyledSpinner.defaultProps = {
  size: '24px'
};

const SpinnerComponent: FunctionComponent<{}> = () => <StyledSpinner />;

const Spinner = styled(SpinnerComponent)``;

export default Spinner;
