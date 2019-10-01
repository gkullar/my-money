import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import UnAuthenticatedLayout from './unauthenticated-layout';

const NotFound: FunctionComponent<{}> = () => (
  <UnAuthenticatedLayout>
    <h3>You have lost your way</h3>
    <p>
      Come back <Link to="/">here</Link>.
    </p>
  </UnAuthenticatedLayout>
);

export default NotFound;
