import React from 'react';
import { Link } from 'react-router-dom';

import './methods.css';

const s3Path = "https://s3.amazonaws.com/nobsc-images-01/content/misc/";

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

export function Methods({
  oneColumnATheme,
  navGridATheme
}: Props): JSX.Element {
  return (
    <div className={`methods one-column-a ${oneColumnATheme}`}>
      <h1>Methods</h1>
      <div className={`nav-grid-a ${navGridATheme}`}>
        {navItem(
          "/food/methods/chill-and-freeze",
          "Chill and Freeze",
          "coming-soon-120-120"
        )}
        {navItem(
          "/food/methods/steam-poach-simmer-boil-and-blanch",
          "Steam, Poach, Simmer, Boil, and Blanch",
          "coming-soon-120-120"
        )}
        {navItem(
          "/food/methods/stew-and-braise",
          "Stew and Braise",
          "coming-soon-120-120"
        )}
        {navItem(
          "/food/methods/saute-fry-and-glaze",
          "Saute, Fry, and Glaze",
          "coming-soon-120-120"
        )}
        {navItem(
          "/food/methods/bake-roast-toast-and-broil",
          "Bake, Roast, Toast, and Broil",
          "coming-soon-120-120"
        )}
        {navItem(
          "/food/methods/bbq-grill-and-smoke",
          "BBQ, Grill, and Smoke",
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