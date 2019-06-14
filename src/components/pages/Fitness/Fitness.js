import React from 'react';
import { Link } from 'react-router-dom';

import './fitness.css';
import VitruvianMan from '../../../assets/images/content/vitruvian-man-120-120.png';
import ExercisesThumb from '../../../assets/images/content/pushup-thumb-120-120.png';

const Fitness = props => (
  <div className={`fitness one-column-a ${props.oneColumnATheme}`}>
    <h1>Fitness</h1>
    <div className={`nav-grid-a ${props.navGridATheme}`}>
      <div className="nav-grid-a-item">
        <Link to="/fitness/principles">
          <span className="nav-grid-a-item-text">Principles</span>
          <img className="nav-grid-a-item-image" src={VitruvianMan} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/fitness/exercises">
          <span className="nav-grid-a-item-text">Exercises</span>
          <img className="nav-grid-a-item-image" src={ExercisesThumb} />
        </Link>
      </div>
    </div>
  </div>
);

export default Fitness;