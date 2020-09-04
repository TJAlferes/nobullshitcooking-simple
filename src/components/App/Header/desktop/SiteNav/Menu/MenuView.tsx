import React from 'react';
import { Link } from 'react-router-dom';

import { IMenuItem } from './Menu';
import './menu.css';

const url = 'https://s3.amazonaws.com/nobsc-images-01/header/dropdowns/';
// TO DO: shorten file names
const light: ISubmenuImages = {
  'cuisines': `${url}world-map-cuisines-slide.png`,
  'equipment': `${url}abundance-ingredients-slide.png`,  // finish
  'exercises': `${url}pushups-exercises-slide.png`,
  'ingredients': `${url}abundance-ingredients-slide.png`,
  'kitchen-equipment': `${url}kitchen-equipment-slide.png`,
  'methods': `${url}fire-methods-slide.png`,
  'nutrition': `${url}steve-reeves-nutrition-slide.png`,
  'principles': `${url}vitruvian-man-principles-slide.png`,
  'recipes': `${url}abundance-ingredients-slide.png`  // finish
};
const dark: ISubmenuImages = {
  'cuisines': `${url}world-map-cuisines-slide-dark.png`,
  'equipment': `${url}abundance-ingredients-slide-dark.png`,  // finish
  'exercises': `${url}pushups-exercises-slide-dark.png`,
  'ingredients': `${url}abundance-ingredients-slide-dark.png`,
  'kitchen-equipment': `${url}kitchen-equipment-slide-dark.png`,
  'methods': `${url}fire-methods-slide-dark.png`,
  'nutrition': `${url}steve-reeves-nutrition-slide-dark.png`,
  'principles': `${url}vitruvian-man-principles-slide-dark.png`,
  'recipes': `${url}abundance-ingredients-slide-dark.png`  // finish
};

export function MenuView({
  activeMenuRow,
  handleMouseEnterRow,
  handleMouseLeaveMenu,
  menuItems,
  theme
}: Props): JSX.Element {
  const getSubmenuImage = () => {
    if (!activeMenuRow) return;
    const img = menuItems[activeMenuRow].image;
    const src = theme === "drop-down-menu-light" ? light[img] : dark[img];
    return <img className="submenu__image" src={src} />;
  };

  return (
    <div className={`menu-container ${theme}`}>

      <div
        className={`menu ${theme}`}
        data-test="menu"
        onMouseLeave={handleMouseLeaveMenu}
      >
        <ul className="menu__items">
          {menuItems.map((menu, index) => (
            <li
              className={`menu__item ${
                ((activeMenuRow !== undefined) && (index === activeMenuRow)) &&
                'active'
              }`}
              data-test="menu-item"
              key={index}
              onMouseEnter={() => handleMouseEnterRow(index)}
            >
              <Link className={`menu__item-link ${theme}`} to={menu.link}>
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {activeMenuRow !== undefined && (
        <div className={`submenu ${theme}`}>

          <h3 className="submenu__heading">
            <Link
              className={`submenu__heading-link ${theme}`}
              to={menuItems[activeMenuRow].link}
            >
              {menuItems[activeMenuRow].name}
            </Link>
          </h3>

          <ul className="submenu__items">
            {menuItems[activeMenuRow].subMenu.map((subMenu, index) => 
              <li className="submenu__item" key={index}>
                <Link
                  className={`submenu__item-link ${theme}`}
                  to={menuItems[activeMenuRow].subMenuLinks[index]}
                >
                  {subMenu}
                </Link>
              </li>
            )}
          </ul>

          {getSubmenuImage()}

        </div>
      )}

    </div>
  );
}

interface ISubmenuImages {
  [index: string]: any;
}

type Props = {
  activeMenuRow: undefined | number;
  handleMouseEnterRow(row: number): void;
  handleMouseLeaveMenu(): void;
  menuItems: IMenuItem[];
  theme: string;
};