import styled from 'styled-components';
import Card from './card';
import { respondTo } from '../theme/mixins';

const AccountCard = styled(Card)`
  width: 310px;
  height: 225px;

  ${respondTo.xs`
    width: 350px;
  `}
`;

export default AccountCard;
