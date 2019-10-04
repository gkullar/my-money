import React, { FunctionComponent } from 'react';
import ToggleButton from './toggle-button';
import { useTheme } from '../hooks/use-theme';
import { ThemeTypes } from '../theme/theme';

const ThemeToggle: FunctionComponent<{}> = () => {
  const { themeType, toggle } = useTheme();
  const checked = themeType === ThemeTypes.Dark ? true : false;

  return (
    <ToggleButton
      clickAction={toggle}
      leftText="light"
      rightText="dark"
      checked={checked}
    />
  );
};

export default ThemeToggle;
