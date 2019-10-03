import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Props as PaletteProps, withPalette } from './with-palette';

interface Props extends PaletteProps {
  clickAction: () => void;
  leftText?: string;
  rightText?: string;
  checked?: boolean;
}

const StyledToggleButton = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleText = withPalette(styled.div<Props>`
  color: ${props => props.theme[props.palette].text};
  text-transform: capitalize;
  margin: 0 10px;
`);

const ToggleSwitch = withPalette(styled.label<Props>`
  display: inline-block;
  height: 20px;
  width: 40px;
  background: ${props => rgba(props.theme[props.palette].text, 0.2)};
  border-radius: 20px;
  cursor: pointer;
`);

const ToggleSwitchArea = styled(
  withPalette(styled.div<Props>`
    height: 20px;
    width: 20px;
    border-radius: 20px;
    background: ${props => props.theme[props.palette].background};
    box-shadow: 0 1px 3px
      ${props => rgba(props.theme[props.palette].border, 0.3)};
    transition: all 0.3s;
  `)
)``;

const ToggleSwitchInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + ${ToggleSwitchArea} {
    transform: translate3d(100%, 0, 0);
  }
`;

const ToggleButton: FunctionComponent<Partial<Props>> = props => (
  <StyledToggleButton>
    <ToggleText>{props.leftText}</ToggleText>
    <ToggleSwitch>
      <ToggleSwitchInput
        type="checkbox"
        onClick={props.clickAction}
        defaultChecked={props.checked}
      />
      <ToggleSwitchArea />
    </ToggleSwitch>
    <ToggleText>{props.rightText}</ToggleText>
  </StyledToggleButton>
);

export default ToggleButton;
