import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Permissions: FunctionComponent<{}> = () => (
  <p>
    Insufficient Permissions: Please check you have given permissions via the
    Monzo App, then you may <Link to="/">proceed</Link>.
  </p>
);

export default Permissions;
