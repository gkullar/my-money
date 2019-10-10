import React, { FunctionComponent } from 'react';
import { AuthProvider } from './hooks/use-auth';
import { ThemeProvider } from './hooks/use-theme';
import { SnackbarProvider } from './hooks/use-snackbar';

const AppProviders: FunctionComponent<{}> = ({ children }) => (
  <ThemeProvider>
    <SnackbarProvider>
      <AuthProvider>{children}</AuthProvider>
    </SnackbarProvider>
  </ThemeProvider>
);

export default AppProviders;
