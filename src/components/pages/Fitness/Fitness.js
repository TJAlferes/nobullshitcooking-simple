import React from 'react';
import { Link } from 'react-router-dom';

import './fitness.css';

const s3Path = 'https://nobsc-images-01.s3.amazonaws.com/content/fitness/';

const Fitness = props => (
  <div className={`fitness one-column-a ${props.oneColumnATheme}`}>
    <h1>Fitness</h1>
    <div className={`nav-grid-a ${props.navGridATheme}`}>
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