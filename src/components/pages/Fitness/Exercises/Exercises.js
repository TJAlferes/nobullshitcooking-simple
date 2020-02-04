import React from 'react';
import { Link } from 'react-router-dom';

import './exercises.css';

const s3Path = 'https://s3.amazonaws.com/nobsc-images-01/content/fitness/exercises/';

const navItem = (path, title, image) => (
  <div className="nav-grid-a-item">
    <Link to={`${path}`}>
      <span className="nav-grid-a-item-text">{title}</span>
      <img
        className="nav-grid-a-item-image"
        src={`${s3Path}${image}.png`}
      />
    </Link>
  </div>
);

const Exercises = ({ oneColumnATheme, navGridATheme }) => (
  <div className={`exercises one-column-a ${oneColumnATheme}`}>
    <h1>Exercises</h1>
    <div className={`nav-grid-a ${navGridATheme}`}>
      {navItem("/fitness/exercises/walk", "Walk", "walk/walk-120-120")}
      {navItem("/fitness/exercises/bike", "Bike", "walk/walk-120-120")}
      {navItem("/fitness/exercises/run", "Run", "walk/walk-120-120")}
      {navItem("/fitness/exercises/squat", "Squat", "walk/walk-120-120")}
      {navItem("/fitness/exercises/pushup", "Pushup", "walk/walk-120-120")}
      {navItem("/fitness/exercises/pullup", "Pullup", "walk/walk-120-120")}
    </div>
  </div>
);

export default Exercises;