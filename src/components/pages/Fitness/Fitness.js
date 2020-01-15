import React from 'react';
import { Link } from 'react-router-dom';

import './fitness.css';

const s3Path = 'https://s3.amazonaws.com/nobsc-images-01/content/fitness/';

const Fitness = ({ oneColumnATheme, navGridATheme }) => (
  <div className={`fitness one-column-a ${oneColumnATheme}`}>
    <h1>Fitness</h1>
    <div className={`nav-grid-a ${navGridATheme}`}>
      <div className="nav-grid-a-item">
        <Link to="/fitness/principles">
          <span className="nav-grid-a-item-text">Principles</span>
          <img className="nav-grid-a-item-image" src={`${s3Path}principles.png`} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/fitness/exercises">
          <span className="nav-grid-a-item-text">Exercises</span>
          <img className="nav-grid-a-item-image" src={`${s3Path}exercises.png`} />
        </Link>
      </div>
    </div>
  </div>
);

export default Fitness;