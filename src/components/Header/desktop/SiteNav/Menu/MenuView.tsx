import React from 'react';
import { Link } from 'react-router-dom';

import { IMenuItem } from './Menu';
import './menu.css';

const s3Path = 'https://s3.amazonaws.com/nobsc-images-01/header/dropdowns/';

const NutritionSlideImage = `${s3Path}steve-reeves-nutrition-slide.png`;
const NutritionSlideImageDark = `${s3Path}steve-reeves-nutrition-slide-dark.png`;
const MethodsSlideImage = `${s3Path}fire-methods-slide.png`;
const MethodsSlideImageDark = `${s3Path}fire-methods-slide-dark.png`;
const IngredientsSlideImage = `${s3Path}abundance-ingredients-slide.png`;
const IngredientsSlideImageDark = `${s3Path}abundance-ingredients-slide-dark.png`;
const CuisinesSlideImage = `${s3Path}world-map-cuisines-slide.png`;
const CuisinesSlideImageDark = `${s3Path}world-map-cuisines-slide-dark.png`;
const PrinciplesSlideImage = `${s3Path}vitruvian-man-principles-slide.png`;
const PrinciplesSlideImageDark = `${s3Path}vitruvian-man-principles-slide-dark.png`;
const ExercisesSlideImage = `${s3Path}pushups-exercises-slide.png`;
const ExercisesSlideImageDark = `${s3Path}pushups-exercises-slide-dark.png`;
const KitchenEquipmentSlideImage = `${s3Path}kitchen-equipment-slide.png`;
const KitchenEquipmentSlideImageDark = `${s3Path}kitchen-equipment-slide-dark.png`;

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
                (
                  (activeMenuRow !== undefined) &&
                  (index === activeMenuRow)
                ) &&
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
              ? <img className="sub-menu-image" src={IngredientsSlideImage} />
              : <img className="sub-menu-image" src={IngredientsSlideImageDark} />
            )}

            {menuItems[activeMenuRow].image === 'cuisines' && (
              theme === "drop-down-menu-light"
              ? <img className="sub-menu-image" src={CuisinesSlideImage} />
              : <img className="sub-menu-image" src={CuisinesSlideImageDark} />
            )}

            {menuItems[activeMenuRow].image === 'ingredients' && (
              theme === "drop-down-menu-light"
              ? <img className="sub-menu-image" src={IngredientsSlideImage} />
              : <img className="sub-menu-image" src={IngredientsSlideImageDark} />
            )}

            {menuItems[activeMenuRow].image === 'nutrition' && (
              theme === "drop-down-menu-light"
              ? <img className="sub-menu-image" src={NutritionSlideImage} />
              : <img className="sub-menu-image" src={NutritionSlideImageDark} />
            )}

            {menuItems[activeMenuRow].image === 'equipment' && (
              theme === "drop-down-menu-light"
              ? <img className="sub-menu-image" src={IngredientsSlideImage} />
              : <img className="sub-menu-image" src={IngredientsSlideImageDark} />
            )}

            {menuItems[activeMenuRow].image === 'methods' && (
              theme === "drop-down-menu-light"
              ? <img className="sub-menu-image" src={MethodsSlideImage} />
              : <img className="sub-menu-image" src={MethodsSlideImageDark} />
            )}

            {menuItems[activeMenuRow].image === 'principles' && (
              theme === "drop-down-menu-light"
              ? <img className="sub-menu-image" src={PrinciplesSlideImage} />
              : <img className="sub-menu-image" src={PrinciplesSlideImageDark} />
            )}

            {menuItems[activeMenuRow].image === 'exercises' && (
              theme === "drop-down-menu-light"
              ? <img className="sub-menu-image" src={ExercisesSlideImage} />
              : <img className="sub-menu-image" src={ExercisesSlideImageDark} />
            )}
            
            {menuItems[activeMenuRow].image === 'kitchen-equipment' && (
              theme === "drop-down-menu-light"
              ? <img className="sub-menu-image" src={KitchenEquipmentSlideImage} />
              : <img className="sub-menu-image" src={KitchenEquipmentSlideImageDark} />
            )}
          </div>

        </div>
      )}

    </div>
  );
}

type Props = {
  activeMenuRow: undefined|number;
  handleMouseEnterRow(row: number): void;
  handleMouseLeaveMenu(): void;
  menuItems: IMenuItem[];
  theme: string;
};