import React from 'react';

import './notFound.css';

const NotFound = ({ oneColumnATheme }) => (
  <div className={`not-found one-column-a ${oneColumnATheme}`}>
    <h1 className="not-found__heading">404 Not Found</h1>
  </div>
);

export default NotFound;