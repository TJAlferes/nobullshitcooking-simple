import React from 'react';
import { Link } from 'react-router-dom';

import './nutrition.css';
import CaloriesThumb from '../../../../assets/images/content/calories-120-120.png';
//import MacronutrientsThumb from '../../../../assets/images/content/macronutrients-120-120.png';
import MicronutrientsThumb from '../../../../assets/images/content/micronutrients-120-120.png';
import SupplementsThumb from '../../../../assets/images/content/supplements-120-120.png';

const Nutrition = props => (
  <div className={`nutrition one-column-a ${props.oneColumnATheme}`}>
    <h1>Nutrition</h1>
    <div className={`nav-grid-a ${props.navGridATheme}`}>
      <div className="nav-grid-a-item">
        <Link to="/food/nutrition/calories">
          <span className="nav-grid-a-item-text">Calories</span>
          <img className="nav-grid-a-item-image" src={CaloriesThumb} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/nutrition/macronutrients">
          <span className="nav-grid-a-item-text">Macronutrients</span>
          <img className="nav-grid-a-item-image" src={MicronutrientsThumb} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/nutrition/micronutrients">
          <span className="nav-grid-a-item-text">Micronutrients</span>
          <img className="nav-grid-a-item-image" src={MicronutrientsThumb} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/nutrition/supplements">
          <span className="nav-grid-a-item-text">Supplements</span>
          <img className="nav-grid-a-item-image" src={SupplementsThumb} />
        </Link>
      </div>
    </div>
  </div>
);

export default Nutrition;