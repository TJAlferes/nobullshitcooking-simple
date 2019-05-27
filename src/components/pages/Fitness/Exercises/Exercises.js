import React from 'react';
import { Link } from 'react-router-dom';

import './exercises.css';

const Exercises = () => (
  <div className="exercises">
    <Link to="/fitness/exercises/walk">Walk</Link>
    <Link to="/fitness/exercises/squat">Squat</Link>
    <Link to="/fitness/exercises/pushup">Pushup</Link>
    <Link to="/fitness/exercises/pullup">Pullup</Link>
  </div>
);

export default Exercises;