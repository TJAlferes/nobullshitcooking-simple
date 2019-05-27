import React from 'react';
import { Link } from 'react-router-dom';

import './cuisines.css';

const Cuisines = () => (
  <div className="cuisines">
    <h1>Cuisines</h1>
    <Link to="/food/cuisines/russian">Russian</Link>
    <Link to="/food/cuisines/german">German</Link>
    <Link to="/food/cuisines/turkish">Turkish</Link>
    <Link to="/food/cuisines/french">French</Link>
    <Link to="/food/cuisines/italian">Italian</Link>
    <Link to="/food/cuisines/mexican">Mexican</Link>
    <Link to="/food/cuisines/greek">Greek</Link>
    <Link to="/food/cuisines/irish">Irish</Link>
    <Link to="/food/cuisines/chinese">Chinese</Link>
    <Link to="/food/cuisines/indian">Indian</Link>
    <Link to="/food/cuisines/japanese">Japanese</Link>
    <Link to="/food/cuisines/iranian">Iranian</Link>
  </div>
);

export default Cuisines;