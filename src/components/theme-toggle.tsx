import React, { FunctionComponent } from 'react';
import Button from './button';
import { useTheme } from '../hooks/use-theme';
import { ThemeTypes } from '../theme/theme';

const ThemeToggle: FunctionComponent<{}> = () => {
  const { themeType, toggle } = useTheme();

  const text = themeType === ThemeTypes.Light ? 'Dark Theme' : 'Light Theme';

  return <Button onClick={toggle}>{text}</Button>;
};

export default ThemeToggle;
