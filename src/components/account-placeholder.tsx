import styled from 'styled-components';
import { rgba, invert } from 'polished';
import AccountCard from './account-card';
import { Props, withPalette } from './with-palette';

const AccountPlaceholder = withPalette(styled(AccountCard)<Props>`
  background: ${props =>
    rgba(invert(props.theme[props.palette].background), 0.1)};
  box-shadow: none;
  border: 2px dashed
    ${props => rgba(invert(props.theme[props.palette].background), 0.3)};
`);

export default AccountPlaceholder;
