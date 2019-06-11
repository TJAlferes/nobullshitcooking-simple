import React from 'react';
import { Link } from 'react-router-dom';

import './food.css';
import Meal from '../../../assets/images/content/meal.png'
import AmericaFlag from '../../../assets/images/content/america-flag.png';
import Ribs from '../../../assets/images/content/ribs.png';
import PlusSign from '../../../assets/images/content/plus-sign.png';
import CuttingBoard from '../../../assets/images/content/cutting-board.png'
import Grill from '../../../assets/images/content/grill.png';

const Food = props => (
  <div className={`food one-column-a ${props.oneColumnATheme}`}>
    <h1>Food</h1>
    <div className={`nav-grid-a ${props.navGridATheme}`}>
      <div className="nav-grid-a-item">
        <Link to="/food/nav-recipes">
          <span className="nav-grid-a-item-text">Recipes</span>
          <img className="nav-grid-a-item-image" src={Meal} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/cuisines">
          <span className="nav-grid-a-item-text">Cuisines</span>
          <img className="nav-grid-a-item-image" src={AmericaFlag} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/nav-ingredients">
          <span className="nav-grid-a-item-text">Ingredients</span>
          <img className="nav-grid-a-item-image" src={Ribs} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/nutrition">
          <span className="nav-grid-a-item-text">Nutrition</span>
          <img className="nav-grid-a-item-image" src={PlusSign} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/nav-equipment">
          <span className="nav-grid-a-item-text">Equipment</span>
          <img className="nav-grid-a-item-image" src={CuttingBoard} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/methods">
          <span className="nav-grid-a-item-text">Methods</span>
          <img className="nav-grid-a-item-image" src={Grill} />
        </Link>
      </div>
    </div>
  </div>
);

export default Food;