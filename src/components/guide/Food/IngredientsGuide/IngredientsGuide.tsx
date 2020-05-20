import React from 'react';
import { Link } from 'react-router-dom';

import './siteNavIngredients.css';

const s3Path = 'https://s3.amazonaws.com/nobsc-images-01/content/misc/';

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

export function SiteNavIngredients({
  oneColumnATheme,
  navGridATheme
}: Props): JSX.Element {
  return (
    <div className={`site-nav-ingredients one-column-a ${oneColumnATheme}`}>
      <h1>Ingredients</h1>
      <div className={`nav-grid-a ${navGridATheme}`}>
        {navItem(
          "/food/ingredients/fish-and-shellfish",
          "Fish and Shellfish",
          "coming-soon-120-120"
        )}
        {navItem(
          "/food/ingredients/meat-and-poultry",
          "Meat and Poultry",
          "coming-soon-120-120"
        )}
        {navItem(
          "/food/ingredients/eggs-and-dairy",
          "Eggs and Dairy",
          "coming-soon-120-120"
        )}
        {navItem(
          "/food/ingredients/beans-and-vegetables",
          "Beans and Vegetables",
          "coming-soon-120-120"
        )}
        {navItem(
          "/food/ingredients/fruit",
          "Fruit",
          "coming-soon-120-120"
        )}
        {navItem(
          "/food/ingredients/seeds-and-grains",
          "Seeds and Grains",
          "coming-soon-120-120"
        )}
        {navItem(
          "/food/ingredients/fats-and-oils",
          "Fats and Oils",
          "coming-soon-120-120"
        )}
        {navItem(
          "/food/ingredients/acids-herbs-and-spices",
          "Acids, Herbs, and Spices",
          "coming-soon-120-120"
        )}
      </div>
    </div>
  );
}

interface Props {
  oneColumnATheme: string
  navGridATheme: string
}