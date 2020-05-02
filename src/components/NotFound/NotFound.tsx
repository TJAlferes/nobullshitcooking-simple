import React from 'react';

import './notFound.css';

export function NotFound({ oneColumnATheme }: Props): JSX.Element {
  return (
    <div className={`not-found one-column-a ${oneColumnATheme}`}>
      <h1 className="not-found-heading">404 Not Found</h1>
    </div>
  );
}

type Props = {
  oneColumnATheme: string;
};