import React from 'react';
import { Link } from 'react-router-dom';

import './siteNavRecipes.css';
const ComingSoon = "https://s3.amazonaws.com/nobsc-images-01/content/misc/coming-soon-120-120.png";

const SiteNavRecipes = ({ oneColumnATheme, navGridATheme }) => (
  <div className={`site-nav-recipes one-column-a ${oneColumnATheme}`}>
    <h1>Recipes</h1>
    <div className={`nav-grid-a ${navGridATheme}`}>
      <div className="nav-grid-a-item">
        <Link to="/food/recipes/drinks">
          <span className="nav-grid-a-item-text">Drinks</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/recipes/appetizers">
          <span className="nav-grid-a-item-text">Appetizers</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/recipes/mains">
          <span className="nav-grid-a-item-text">Mains</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/recipes/sides">
          <span className="nav-grid-a-item-text">Sides</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/recipes/desserts">
          <span className="nav-grid-a-item-text">Desserts</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/recipes/soups">
          <span className="nav-grid-a-item-text">Soups</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/recipes/salads">
          <span className="nav-grid-a-item-text">Salads</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/recipes/stews">
          <span className="nav-grid-a-item-text">Stews</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/recipes/casseroles">
          <span className="nav-grid-a-item-text">Casseroles</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/recipes/sauces">
          <span className="nav-grid-a-item-text">Sauces</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/recipes/dressings">
          <span className="nav-grid-a-item-text">Dressings</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/recipes/condiments">
          <span className="nav-grid-a-item-text">Condiments</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
    </div>
  </div>
);

export default SiteNavRecipes;