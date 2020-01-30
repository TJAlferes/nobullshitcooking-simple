import React from 'react';

import LeftNav from '../../../LeftNav/LeftNav';
import './coffee.css';

const Coffee = ({ twoColumnATheme }) => (
  <div className={`coffee two-column-a ${twoColumnATheme}`}>

    <LeftNav />

    <section>

      <h1>Coffee</h1>

    </section>

  </div>
);

export default Coffee;