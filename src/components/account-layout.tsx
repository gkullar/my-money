import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Props as PaletteProps, withPalette } from './with-palette';
import { PaletteTypes } from '../theme/theme';

interface Props {
  top: any;
  middle: any;
  bottomItemOne: any;
  bottomItemTwo: any;
}

const Layout = styled.div`
  padding: 0px 5px;
`;

const LayoutTop = styled.div`
  margin-top: 5px;
  margin-bottom: 30px;
`;

const LayoutMiddle = withPalette(styled.div<PaletteProps>`
  border-bottom: 1px solid ${props => props.theme[props.palette].text};
  padding-bottom: 20px;
  margin-bottom: 20px;
`);

const LayoutBottom = styled.div`
  display: flex;
`;

const LayoutBottomItem = styled.div`
  width: 50%;
`;

const AccountLayout: FunctionComponent<Props> = ({
  top,
  middle,
  bottomItemOne,
  bottomItemTwo
}) => (
  <Layout>
    <LayoutTop>{top}</LayoutTop>
    <LayoutMiddle palette={PaletteTypes.Accent}>{middle}</LayoutMiddle>
    <LayoutBottom>
      <LayoutBottomItem>{bottomItemOne}</LayoutBottomItem>
      <LayoutBottomItem>{bottomItemTwo}</LayoutBottomItem>
    </LayoutBottom>
  </Layout>
);

export default AccountLayout;
