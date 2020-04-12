import React from 'react';

import './contests.css';

const Contests = ({ oneColumnATheme }) => (
  <div className={`contests one-column-a ${oneColumnATheme}`}>
    <h1 className="contests__heading">Contests</h1>
    <p className="contests__text">Celebrating excellence!</p>
  </div>
);

export default Contests;