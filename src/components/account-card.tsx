import styled, { css } from 'styled-components';
import Card from './card';
import { Props as PaletteProps, WithPalette } from './with-palette';
import { leftToRight } from '../theme/animations';
import { respondTo } from '../theme/mixins';

interface Props extends PaletteProps {
  isLink: boolean;
}

const AccountCard = WithPalette(styled(Card)<Props>`
  width: 310px;
  height: 225px;

  ${respondTo.xs`
    width: 350px;
  `}

  ${props =>
    props.isLink &&
    css`
      position: relative;
      overflow: hidden;
      transition: all 0.2s ease-in-out;

      &:hover {
        cursor: pointer;
        transform: scale(1.05);
        background: ${props.theme[props.palette].background};
        border: 1px solid ${props.theme[props.palette].border};
        box-shadow: none;
      }

      &:hover:after {
        display: block;
        position: absolute;
        top: 0;
        content: '';
        width: 50%;
        height: 100%;
        transform: translate(50%);
        background-image: linear-gradient(
          to right,
          transparent,
          rgba(255, 255, 255, 0.7),
          transparent
        );
        animation: ${leftToRight} 0.4s linear 1 forwards;
      }
    `}
`);

export default AccountCard;
