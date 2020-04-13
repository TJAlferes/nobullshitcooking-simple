import React from 'react';
import { Link } from 'react-router-dom';

import './food.css';

const s3Path = 'https://s3.amazonaws.com/nobsc-images-01/content/food/';

function navItem(path: string, title: string, image: string) {
  return (
    <div className="nav-grid-a-item">
      <Link to={`${path}`}>
        <span className="nav-grid-a-item-text">{title}</span>
        <img
          className="nav-grid-a-item-image"
          src={`${s3Path}${image}.png`}
        />
      </Link>
    </div>
  );
}

export function Food({ oneColumnATheme, navGridATheme }: Props): JSX.Element {
  return (
    <div className={`food one-column-a ${oneColumnATheme}`}>
      <h1>Food</h1>
      <div className={`nav-grid-a ${navGridATheme}`}>
        {navItem("/food/recipes", "Recipes", "sitenavrecipes")}
        {navItem("/food/cuisines", "Cuisines", "cuisines")}
        {navItem("/food/ingredients", "Ingredients", "sitenavingredients")}
        {navItem("/food/nutrition", "Nutrition", "nutrition")}
        {navItem("/food/equipment", "Equipment", "sitenavequipment")}
        {navItem("/food/methods", "Methods", "methods")}
      </div>
    </div>
  );
}

interface Props {
  oneColumnATheme: string
  navGridATheme: string
}