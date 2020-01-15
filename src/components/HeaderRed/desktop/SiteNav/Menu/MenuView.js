import React from 'react';
import { Link } from 'react-router-dom';

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

import './menu.css';

const MenuView = ({
  theme,
  menuData,
  submenuDirection,
  activeMenuIndex,
  handleMouseEnterRow,
  handleMouseLeaveMenu,
  handleSwitchMenuIndex
}) => (
  <div className={`menu-container ${submenuDirection} ${theme}`}>

    <div className={`menu ${theme}`} onMouseLeave={handleMouseLeaveMenu}>
      <ul>
        {menuData.map((menu, index) => {
          let className = 'menu-item';
          if (activeMenuIndex !== undefined && index === activeMenuIndex) {
            className += ' active';
          }
          return (
            <li
              className={className}
              key={index}
              onMouseEnter={() => { handleMouseEnterRow(index, handleSwitchMenuIndex) }}
            >
              <Link className={theme} to={menu.link}>{menu.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>

    <div className={`sub-menu ${theme}`}>
      {
        activeMenuIndex !== undefined &&
        <h3>
          <Link className={theme} to={menuData[activeMenuIndex].link}>
            {menuData[activeMenuIndex].name}
          </Link>
        </h3>
      }
      <ul>
        {
          activeMenuIndex !== undefined &&
          menuData[activeMenuIndex].subMenu.map((subMenu, index) => 
            <li className="sub-menu-item" key={index}>
              <Link className={theme} to={menuData[activeMenuIndex].subMenuLinks[index]}>
                {subMenu}
              </Link>
            </li>
          )
        }
      </ul>
      {
        (
          activeMenuIndex !== undefined &&
          menuData[activeMenuIndex].image === 'recipes'
        ) &&
        (
          theme === "drop-down-menu-light"
          ? <img src={IngredientsSlideImage} />
          : <img src={IngredientsSlideImageDark} />
        )
      }
      {
        (
          activeMenuIndex !== undefined &&
          menuData[activeMenuIndex].image === 'cuisines'
        ) &&
        (
          theme === "drop-down-menu-light"
          ? <img src={CuisinesSlideImage} />
          : <img src={CuisinesSlideImageDark} />
        )
      }
      {
        (
          activeMenuIndex !== undefined &&
          menuData[activeMenuIndex].image === 'ingredients'
        ) &&
        (
          theme === "drop-down-menu-light"
          ? <img src={IngredientsSlideImage} />
          : <img src={IngredientsSlideImageDark} />
        )
      }
      {
        (
          activeMenuIndex !== undefined &&
          menuData[activeMenuIndex].image === 'nutrition'
        ) &&
        (
          theme === "drop-down-menu-light"
          ? <img src={NutritionSlideImage} />
          : <img src={NutritionSlideImageDark} />
        )
      }
      {
        (
          activeMenuIndex !== undefined &&
          menuData[activeMenuIndex].image === 'equipment'
        ) &&
        (
          theme === "drop-down-menu-light"
          ? <img src={IngredientsSlideImage} />
          : <img src={IngredientsSlideImageDark} />
        )
      }
      {
        (
          activeMenuIndex !== undefined &&
          menuData[activeMenuIndex].image === 'methods'
        ) &&
        (
          theme === "drop-down-menu-light"
          ? <img src={MethodsSlideImage} />
          : <img src={MethodsSlideImageDark} />
        )
      }

      {
        (
          activeMenuIndex !== undefined &&
          menuData[activeMenuIndex].image === 'principles'
        ) && 
        (
          theme === "drop-down-menu-light"
          ? <img src={PrinciplesSlideImage} />
          : <img src={PrinciplesSlideImageDark} />
        )
      }
      {
        (
          activeMenuIndex !== undefined &&
          menuData[activeMenuIndex].image === 'exercises'
        ) &&
        (
          theme === "drop-down-menu-light"
          ? <img src={ExercisesSlideImage} />
          : <img src={ExercisesSlideImageDark} />
        )
      }
      {
        (
          activeMenuIndex !== undefined &&
          menuData[activeMenuIndex].image === 'kitchen-equipment'
        ) &&
        (
          theme === "drop-down-menu-light"
          ? <img src={KitchenEquipmentSlideImage} />
          : <img src={KitchenEquipmentSlideImageDark} />
        )
      }
    </div>

  </div>
);

export default MenuView;