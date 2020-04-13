import React from 'react';
import { Link } from 'react-router-dom';

import './nutrition.css';

const s3Path = "https://s3.amazonaws.com/nobsc-images-01/content/food/nutrition/";

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

export function Nutrition({
  oneColumnATheme,
  navGridATheme
}: Props): JSX.Element {
  return (
    <div className={`nutrition one-column-a ${oneColumnATheme}`}>
      <h1>Nutrition</h1>
      <div className={`nav-grid-a ${navGridATheme}`}>
        {navItem("/food/nutrition/calories", "Calories", "calories-120-120")}
        {navItem("/food/nutrition/macronutrients", "Macronutrients", "macronutrients-120-120")}
        {navItem("/food/nutrition/micronutrients", "Micronutrients", "micronutrients-120-120")}
        {navItem("/food/nutrition/supplements", "Supplements", "supplements-120-120")}
      </div>
    </div>
  );
}

interface Props {
  oneColumnATheme: string
  navGridATheme: string
}