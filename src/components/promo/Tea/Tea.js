import React from 'react';

import LeftNav from '../../../LeftNav/LeftNav';
import './tea.css';

const Tea = ({ twoColumnATheme }) => (
  <div className={`tea two-column-a ${twoColumnATheme}`}>

    <LeftNav />

    <section>

      <h1>Tea</h1>

    </section>

  </div>
);

export default Tea;