import React, { ComponentType } from 'react';
import { PaletteTypes } from '../theme/theme';

export interface Props {
  palette: PaletteTypes;
}

export const WithPalette = <P extends Props>(
  WrappedComponent: ComponentType<P>
): ComponentType<Partial<P>> => (props: Partial<P>) => (
  <WrappedComponent
    palette={PaletteTypes.Base}
    {...(props as P)}
  ></WrappedComponent>
);
