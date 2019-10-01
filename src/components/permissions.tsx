import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import UnAuthenticatedLayout from './unauthenticated-layout';

const Permissions: FunctionComponent<{}> = () => (
  <UnAuthenticatedLayout>
    <h3>Insufficient Permissions</h3>
    <p>
      Please check you have given permission via your Monzo app, then you may{' '}
      <Link to="/">proceed</Link>.
    </p>
  </UnAuthenticatedLayout>
);

export default Permissions;
