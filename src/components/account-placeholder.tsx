import styled from 'styled-components';
import { rgba, invert } from 'polished';
import AccountCard from './account-card';
import { Props, WithPalette } from './with-palette';

const AccountPlaceholder = WithPalette(styled(AccountCard)<Props>`
  background: ${props =>
    rgba(invert(props.theme[props.palette].background), 0.1)};
  box-shadow: none;
  border: 2px dashed
    ${props => rgba(invert(props.theme[props.palette].background), 0.3)};
`);

export default AccountPlaceholder;
