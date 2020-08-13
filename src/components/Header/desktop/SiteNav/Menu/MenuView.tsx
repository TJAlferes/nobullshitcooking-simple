import React from 'react';
import { Link } from 'react-router-dom';

import { IMenuItem } from './Menu';
import './menu.css';

const url = 'https://s3.amazonaws.com/nobsc-images-01/header/dropdowns/';

const NutritionImage = `${url}steve-reeves-nutrition-slide.png`;
const NutritionImageDark = `${url}steve-reeves-nutrition-slide-dark.png`;
const MethodsImage = `${url}fire-methods-slide.png`;
const MethodsImageDark = `${url}fire-methods-slide-dark.png`;
const IngredientsImage = `${url}abundance-ingredients-slide.png`;
const IngredientsImageDark = `${url}abundance-ingredients-slide-dark.png`;
const CuisinesImage = `${url}world-map-cuisines-slide.png`;
const CuisinesImageDark = `${url}world-map-cuisines-slide-dark.png`;
const PrinciplesImage = `${url}vitruvian-man-principles-slide.png`;
const PrinciplesImageDark = `${url}vitruvian-man-principles-slide-dark.png`;
const ExercisesImage = `${url}pushups-exercises-slide.png`;
const ExercisesImageDark = `${url}pushups-exercises-slide-dark.png`;
const KitchenEquipmentImage = `${url}kitchen-equipment-slide.png`;
const KitchenEquipmentImageDark = `${url}kitchen-equipment-slide-dark.png`;

export function MenuView({
  activeMenuRow,
  handleMouseEnterRow,
  handleMouseLeaveMenu,
  menuItems,
  theme
}: Props): JSX.Element {
  return (
    <div className={`menu-container ${theme}`}>

      <div
        className={`menu ${theme}`}
        data-test="menu"
        onMouseLeave={handleMouseLeaveMenu}
      >
        <ul className="menu-items">
          {menuItems.map((menu: IMenuItem, index) => (
            <li
              className={`menu-item ${
                ((activeMenuRow !== undefined) && (index === activeMenuRow)) &&
                'active'
              }`}
              data-test="menu-item"
              key={index}
              onMouseEnter={() => handleMouseEnterRow(index)}
            >
              <Link className={`menu-item-link ${theme}`} to={menu.link}>
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {activeMenuRow !== undefined && (
        <div className={`sub-menu ${theme}`}>

          <h3 className="sub-menu-heading">
            <Link
              className={`sub-menu-heading-link ${theme}`}
              to={menuItems[activeMenuRow].link}
            >
              {menuItems[activeMenuRow].name}
            </Link>
          </h3>

          <ul className="sub-menu-items">
            {menuItems[activeMenuRow].subMenu.map((subMenu, index) => 
              <li className="sub-menu-item" key={index}>
                <Link
                  className={`sub-menu-item-link ${theme}`}
                  to={menuItems[activeMenuRow].subMenuLinks[index]}
                >
                  {subMenu}
                </Link>
              </li>
            )}
          </ul>

          <div className="sub-menu-images">
            {menuItems[activeMenuRow].image === 'recipes' && (
              theme === "drop-down-menu-light"
              ? <img className="sub-menu-image" src={IngredientsImage} />
              : <img className="sub-menu-image" src={IngredientsImageDark} />
            )}

            {menuItems[activeMenuRow].image === 'cuisines' && (
              theme === "drop-down-menu-light"
              ? <img className="sub-menu-image" src={CuisinesImage} />
              : <img className="sub-menu-image" src={CuisinesImageDark} />
            )}

            {menuItems[activeMenuRow].image === 'ingredients' && (
              theme === "drop-down-menu-light"
              ? <img className="sub-menu-image" src={IngredientsImage} />
              : <img className="sub-menu-image" src={IngredientsImageDark} />
            )}

            {menuItems[activeMenuRow].image === 'nutrition' && (
              theme === "drop-down-menu-light"
              ? <img className="sub-menu-image" src={NutritionImage} />
              : <img className="sub-menu-image" src={NutritionImageDark} />
            )}

            {menuItems[activeMenuRow].image === 'equipment' && (
              theme === "drop-down-menu-light"
              ? <img className="sub-menu-image" src={IngredientsImage} />
              : <img className="sub-menu-image" src={IngredientsImageDark} />
            )}

            {menuItems[activeMenuRow].image === 'methods' && (
              theme === "drop-down-menu-light"
              ? <img className="sub-menu-image" src={MethodsImage} />
              : <img className="sub-menu-image" src={MethodsImageDark} />
            )}

            {menuItems[activeMenuRow].image === 'principles' && (
              theme === "drop-down-menu-light"
              ? <img className="sub-menu-image" src={PrinciplesImage} />
              : <img className="sub-menu-image" src={PrinciplesImageDark} />
            )}

            {menuItems[activeMenuRow].image === 'exercises' && (
              theme === "drop-down-menu-light"
              ? <img className="sub-menu-image" src={ExercisesImage} />
              : <img className="sub-menu-image" src={ExercisesImageDark} />
            )}
            
            {menuItems[activeMenuRow].image === 'kitchen-equipment' && (
              theme === "drop-down-menu-light"
              ? <img className="sub-menu-image" src={KitchenEquipmentImage} />
              : <img className="sub-menu-image" src={KitchenEquipmentImageDark} />
            )}
          </div>

        </div>
      )}

    </div>
  );
}

type Props = {
  activeMenuRow: undefined | number;
  handleMouseEnterRow(row: number): void;
  handleMouseLeaveMenu(): void;
  menuItems: IMenuItem[];
  theme: string;
};