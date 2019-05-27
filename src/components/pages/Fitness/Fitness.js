import React from 'react';
import { Link } from 'react-router-dom';

import './fitness.css';
import VitruvianMan from '../../../assets/images/content/vitruvian-man.png';

const Fitness = () => (
  <div className="fitness">
    <img src={VitruvianMan} />
    <Link to="/fitness/principles">Principles</Link>
    <Link to="/fitness/exercises">Exercises</Link>
  </div>
);

export default Fitness;