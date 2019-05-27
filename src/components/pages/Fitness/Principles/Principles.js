import React from 'react';
import { Link } from 'react-router-dom';

import './principles.css';

const Principles = () => (
  <div className="principles">
    <Link to="/fitness/principles/composition">Composition</Link>
    <Link to="/fitness/principles/balance">Balance</Link>
    <Link to="/fitness/principles/strength">Strength</Link>
    <Link to="/fitness/principles/speed">Speed</Link>
    <Link to="/fitness/principles/agility">Agility</Link>
    <Link to="/fitness/principles/endurance">Endurance</Link>
    <Link to="/fitness/principles/flexibility">Flexibility</Link>
  </div>
);

export default Principles;