import React from 'react';
import { Link } from 'react-router-dom';

import './siteNavIngredients.css';
const ComingSoon = "https://s3.amazonaws.com/nobsc-images-01/content/misc/coming-soon-120-120.png";

const SiteNavIngredients = ({ oneColumnATheme, navGridATheme }) => (
  <div className={`site-nav-ingredients one-column-a ${oneColumnATheme}`}>
    <h1>Ingredients</h1>
    <div className={`nav-grid-a ${navGridATheme}`}>
      <div className="nav-grid-a-item">
        <Link to="/food/ingredients/fish-and-shellfish">
          <span className="nav-grid-a-item-text">Fish and Shellfish</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/ingredients/meat-and-poultry">
          <span className="nav-grid-a-item-text">Meat and Poultry</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/ingredients/eggs-and-dairy">
          <span className="nav-grid-a-item-text">Eggs and Dairy</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/ingredients/beans-and-vegetables">
          <span className="nav-grid-a-item-text">Beans and Vegetables</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/ingredients/fruit">
          <span className="nav-grid-a-item-text">Fruit</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/ingredients/seeds-and-grains">
          <span className="nav-grid-a-item-text">Seeds and Grains</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/ingredients/fats-and-oils">
          <span className="nav-grid-a-item-text">Fats and Oils</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/ingredients/acids-herbs-and-spices">
          <span className="nav-grid-a-item-text">Acids, Herbs, and Spices</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
    </div>
  </div>
);

export default SiteNavIngredients;