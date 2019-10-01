import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Props, withPalette } from './with-palette';

const StyledCard = withPalette(styled.div<Props>`
  padding: 20px;
  position: relative;
  border-radius: 5px;
  background: ${props => rgba(props.theme[props.palette].background, 0.9)};
  box-shadow: 18px 16px 22px -10px ${props => rgba(props.theme[props.palette].borderColor, 0.5)};
`);

const CardComponent: FunctionComponent<Partial<Props>> = (
  props: Partial<Props>
) => <StyledCard {...props} />;

const Card = styled(CardComponent)``;

export default Card;
