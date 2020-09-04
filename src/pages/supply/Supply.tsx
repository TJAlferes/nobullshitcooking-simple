import React from 'react';

import './supply.css';

// TO DO: just make this a page in the CMS?

export function Supply({ oneColumnATheme }: Props): JSX.Element {
  return (
    <div className={`supply one-column-a ${oneColumnATheme}`}>
      <h1>Supply (marketing page)</h1>
    </div>
  );
}

type Props = {
  oneColumnATheme: string;
};