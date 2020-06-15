import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.css';

const s3Path = 'https://s3.amazonaws.com/nobsc-images-01/content';

export default function Navigation({
  oneColumnATheme,
  navGridATheme,
  name,
  path,
  links
}: Props): JSX.Element {
  return (
    <div className={`cms-navigation one-column-a ${oneColumnATheme}`}>
      <h1>{name}</h1>
      <div className={`nav-grid-a ${navGridATheme}`}>
        {links.map((link: any) => (
          <div className="nav-grid-a-item" key={link.path}>
            <Link to={`${link.path}`}>
              <span className="nav-grid-a-item-text">{link.name}</span>
              {/*<img
                className="nav-grid-a-item-image"
                src={`${s3Path}/${link.category}/${link.image}`}
              />*/}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

//.png

interface Props {
  oneColumnATheme: string;
  navGridATheme: string;
  //dataNavItems: IDataNavItem[];
  name: string;
  path: string;
  links: any[];
}

interface IDataNavItem {
  category: string;
  path: string;
  title: string;
  image: string;
}

const dataNavItems = [
  {category: "food", path: "/food/recipes", title: "Recipes", image: "sitenavrecipes"},
  {category: "food", path: "/food/cuisines", title: "Cuisines", image: "cuisines"},
  {category: "food", path: "/food/ingredients", title: "Ingredients", image: "sitenavingredients"},
  {category: "food", path: "food/nutrition", title: "Nutrition", image: "nutrition"},
  {category: "food", path: "/food/equipment", title: "Equipment", image: "sitenavequipment"},
  {category: "food", path: "/food/methods", title: "Methods", image: "methods"}
];

// use .find or something to get to the level of cms nav you want