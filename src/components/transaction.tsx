import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faCheckCircle,
  faCoins,
  faHome,
  faLightbulb,
  faPiggyBank,
  faShapes,
  faShoppingBag,
  faShoppingBasket,
  faSmile,
  faTimesCircle,
  faUtensils
} from '@fortawesome/free-solid-svg-icons';
import { Props as PaletteProps, WithPalette } from './with-palette';
import { respondTo } from '../theme/mixins';
import { PaletteTypes } from '../theme/theme';
import { toDateTime } from '../utils/datetime-formatter';
import { toGBP } from '../utils/currency-formatter';

export interface TransactionItem {
  amount: number;
  category: string;
  created: string; // ISO RFC3339
  description: string;
  merchant: {
    logo: string;
    name: string;
  };
  decline_reason?: string;
}

interface Props {
  transaction: TransactionItem;
}

const StyledTransaction = WithPalette(styled.div<PaletteProps>`
  &:not(:last-of-type) {
    border-bottom: 2px dashed
      ${props => rgba(props.theme[props.palette].border, 0.2)};
  }
  padding: 20px 10px;
`);

const Section = styled.div`
  display: block;
  flex-direction: column;
  letter-spacing: 1px;
  word-wrap: break-word;
  text-transform: capitalize;
  vertical-align: middle;
  line-height: 1em;
  min-width: 40px;

  ${respondTo.sm`
    display: inline-block;
  `}
`;

const AmountSection = styled(Section)`
  font-size: 1.15rem;

  ${respondTo.sm`
    min-width: 125px;
  `}
`;

const CategorySection = styled(Section)`
  display: none;
  text-align: right;
`;

const DescriptionSection = styled(Section)`
  ${respondTo.sm`
    margin-left: 10px;
    min-width: 280px;
  `}
`;

interface StatusProps extends PaletteProps {
  isSuccess: boolean;
}

const StatusSection = WithPalette(styled(Section)<StatusProps>`
  display: none;
  color: ${props =>
    props.isSuccess
      ? props.theme[props.palette].background
      : props.theme[props.palette].error}
    };
`);

function getIcon(category: string): IconDefinition {
  switch (category) {
    case 'bills':
      return faLightbulb;
    case 'eating_out':
      return faUtensils;
    case 'entertainment':
      return faSmile;
    case 'family':
      return faHome;
    case 'finances':
      return faCoins;
    case 'groceries':
      return faShoppingBasket;
    case 'shopping':
      return faShoppingBag;
    default:
      return faShapes;
  }
}

const Transaction: FunctionComponent<Props> = ({ transaction }) => {
  const isSavingsPot = transaction.description.substring(0, 4) === 'pot_';

  return (
    <StyledTransaction>
      <AmountSection>{toGBP(Math.abs(transaction.amount))}</AmountSection>
      <CategorySection>
        <FontAwesomeIcon
          icon={isSavingsPot ? faPiggyBank : getIcon(transaction.category)}
          size="lg"
          title={transaction.category}
        />
      </CategorySection>
      <DescriptionSection>
        <div>
          {transaction.merchant
            ? transaction.merchant.name
            : isSavingsPot
            ? 'savings pot'
            : transaction.description}
        </div>
        <small>{toDateTime(transaction.created)}</small>
      </DescriptionSection>
      <StatusSection
        palette={PaletteTypes.Accent}
        isSuccess={!transaction.decline_reason}
      >
        <FontAwesomeIcon
          icon={!transaction.decline_reason ? faCheckCircle : faTimesCircle}
          size="lg"
          title={!transaction.decline_reason ? 'successful' : 'declined'}
        />
      </StatusSection>
    </StyledTransaction>
  );
};

export default Transaction;
