import React from 'react';

import LeftNav from '../../../LeftNav/LeftNav';
import './garden.css';

const Garden = ({ twoColumnATheme }) => (
  <div className={`garden two-column-a ${twoColumnATheme}`}>

    <LeftNav />

    <section>

      <h1>Garden</h1>

    </section>

  </div>
);

export default Garden;