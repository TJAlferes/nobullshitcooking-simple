import React from 'react';
import { Link } from 'react-router-dom';

import './siteNavIngredients.css';

const SiteNavIngredients = () => (
  <div className="ingredients">
    <h1>Ingredients</h1>
    <Link to="/food/ingredients/fish-and-shellfish">Fish and Shellfish</Link>
    <Link to="/food/ingredients/meat-and-poultry">Meat and Poultry</Link>
    <Link to="/food/ingredients/eggs-and-dairy">Eggs and Dairy</Link>
    <Link to="/food/ingredients/beans-and-vegetables">Beans and Vegetables</Link>
    <Link to="/food/ingredients/fruit">Fruit</Link>
    <Link to="/food/ingredients/seeds-and-grains">Seeds and Grains</Link>
    <Link to="/food/ingredients/fats-and-oils">Fats and Oils</Link>
    <Link to="/food/ingredients/acids-herbs-and-spices">Acids, Herbs, and Spices</Link>
  </div>
);

export default SiteNavIngredients;