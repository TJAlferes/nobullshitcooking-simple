import React from 'react';
import { Link } from 'react-router-dom';

import './siteNavRecipes.css';

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

export function SiteNavRecipes({
  oneColumnATheme,
  navGridATheme
}: Props): JSX.Element {
  return (
    <div className={`site-nav-recipes one-column-a ${oneColumnATheme}`}>
      <h1>Recipes</h1>
      <div className={`nav-grid-a ${navGridATheme}`}>
        {navItem("/food/recipes/drinks", "Drinks", "coming-soon-120-120")}
        {navItem("/food/recipes/appetizers", "Appetizers", "coming-soon-120-120")}
        {navItem("/food/recipes/mains", "Mains", "coming-soon-120-120")}
        {navItem("/food/recipes/sides", "Sides", "coming-soon-120-120")}
        {navItem("/food/recipes/desserts", "Desserts", "coming-soon-120-120")}
        {navItem("/food/recipes/soups", "Soups", "coming-soon-120-120")}
        {navItem("/food/recipes/salads", "Salads", "coming-soon-120-120")}
        {navItem("/food/recipes/stews", "Stews", "coming-soon-120-120")}
        {navItem("/food/recipes/casseroles", "Casseroles", "coming-soon-120-120")}
        {navItem("/food/recipes/sauces", "Sauces", "coming-soon-120-120")}
        {navItem("/food/recipes/dressings", "Dressings", "coming-soon-120-120")}
        {navItem("/food/recipes/condiments", "Condiments", "coming-soon-120-120")}
      </div>
    </div>
  );
}

interface Props {
  oneColumnATheme: string
  navGridATheme: string
}