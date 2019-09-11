import React, { FunctionComponent } from 'react';
import { AuthProvider } from './_utils/use-auth';

const AppProviders: FunctionComponent<{}> = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProviders;
