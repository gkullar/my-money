import React, { FunctionComponent } from 'react';

const Permissions: FunctionComponent<{}> = () => (
  <p>
    Insufficient Permissions: Please check you have given permissions via the
    Monzo App, then <a href="/">refresh</a> the page.
  </p>
);

export default Permissions;
