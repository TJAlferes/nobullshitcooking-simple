import React from 'react';
import { Link } from 'react-router-dom';

import './nutrition.css';

const s3Path = "https://s3.amazonaws.com/nobsc-images-01/content/food/nutrition/";

const Nutrition = ({ oneColumnATheme, navGridATheme }) => (
  <div className={`nutrition one-column-a ${oneColumnATheme}`}>
    <h1>Nutrition</h1>
    <div className={`nav-grid-a ${navGridATheme}`}>
      <div className="nav-grid-a-item">
        <Link to="/food/nutrition/calories">
          <span className="nav-grid-a-item-text">Calories</span>
          <img className="nav-grid-a-item-image" src={`${s3Path}calories-120-120.png`} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/nutrition/macronutrients">
          <span className="nav-grid-a-item-text">Macronutrients</span>
          <img className="nav-grid-a-item-image" src={`${s3Path}macronutrients-120-120.png`} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/nutrition/micronutrients">
          <span className="nav-grid-a-item-text">Micronutrients</span>
          <img className="nav-grid-a-item-image" src={`${s3Path}micronutrients-120-120.png`} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/nutrition/supplements">
          <span className="nav-grid-a-item-text">Supplements</span>
          <img className="nav-grid-a-item-image" src={`${s3Path}supplements-120-120.png`} />
        </Link>
      </div>
    </div>
  </div>
);

export default Nutrition;