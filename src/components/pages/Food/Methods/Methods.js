import React from 'react';
import { Link } from 'react-router-dom';

import './methods.css';

const Methods = () => (
  <div className="methods">
    <h1>Methods</h1>
    <Link to="/food/methods/poach-and-simmer">Poach and Simmer</Link>
    <Link to="/food/methods/steam">Steam</Link>
    <Link to="/food/methods/saute">Saute</Link>
    <Link to="/food/methods/roast">Roast</Link>
    <Link to="/food/methods/grill">Grill</Link>
    <Link to="/food/methods/stew-and-braise">Stew and Braise</Link>
  </div>
);

export default Methods;