import React from 'react';
import { Link } from 'react-router-dom';

import './exercises.css';
import WalkThumb from '../../../../assets/images/content/exercises/walk-120-120.png'

const Exercises = props => (
  <div className={`exercises one-column-a ${props.oneColumnATheme}`}>
    <h1>Exercises</h1>
    <div className={`nav-grid-a ${props.navGridATheme}`}>
      <div className="nav-grid-a-item">
        <Link to="/fitness/exercises/walk">
          <span className="nav-grid-a-item-text">Walk</span>
          <img className="nav-grid-a-item-image" src={WalkThumb} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/fitness/exercises/bike">
          <span className="nav-grid-a-item-text">Bike</span>
          <img className="nav-grid-a-item-image" src={WalkThumb} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/fitness/exercises/run">
          <span className="nav-grid-a-item-text">Run</span>
          <img className="nav-grid-a-item-image" src={WalkThumb} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/fitness/exercises/squat">
          <span className="nav-grid-a-item-text">Squat</span>
          <img className="nav-grid-a-item-image" src={WalkThumb} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/fitness/exercises/pushup">
          <span className="nav-grid-a-item-text">Pushup</span>
          <img className="nav-grid-a-item-image" src={WalkThumb} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/fitness/exercises/pullup">
          <span className="nav-grid-a-item-text">Pullup</span>
          <img className="nav-grid-a-item-image" src={WalkThumb} />
        </Link>
      </div>
    </div>
  </div>
);

export default Exercises;