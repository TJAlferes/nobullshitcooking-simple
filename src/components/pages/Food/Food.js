import React from 'react';
import { Link } from 'react-router-dom';

import './food.css';

const s3Path = 'https://s3.amazonaws.com/nobsc-images-01/content/food/';

const Food = ({ oneColumnATheme, navGridATheme }) => (
  <div className={`food one-column-a ${oneColumnATheme}`}>
    <h1>Food</h1>
    <div className={`nav-grid-a ${navGridATheme}`}>
      <div className="nav-grid-a-item">
        <Link to="/food/recipes">
          <span className="nav-grid-a-item-text">Recipes</span>
          <img className="nav-grid-a-item-image" src={`${s3Path}sitenavrecipes.png`} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/cuisines">
          <span className="nav-grid-a-item-text">Cuisines</span>
          <img className="nav-grid-a-item-image" src={`${s3Path}cuisines.png`} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/ingredients">
          <span className="nav-grid-a-item-text">Ingredients</span>
          <img className="nav-grid-a-item-image" src={`${s3Path}sitenavingredients.png`} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/nutrition">
          <span className="nav-grid-a-item-text">Nutrition</span>
          <img className="nav-grid-a-item-image" src={`${s3Path}nutrition.png`} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/equipment">
          <span className="nav-grid-a-item-text">Equipment</span>
          <img className="nav-grid-a-item-image" src={`${s3Path}sitenavequipment.png`} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/methods">
          <span className="nav-grid-a-item-text">Methods</span>
          <img className="nav-grid-a-item-image" src={`${s3Path}methods.png`} />
        </Link>
      </div>
    </div>
  </div>
);

export default Food;