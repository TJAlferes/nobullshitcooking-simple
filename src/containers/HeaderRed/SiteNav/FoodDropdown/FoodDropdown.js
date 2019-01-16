import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NutritionSlideImage from '../../../../assets/images/header/dropdowns/steve-reeves-nutrition-slide.png';
import CuisinesSlideImage from '../../../../assets/images/header/dropdowns/world-map-cuisines-slide.png';

class FoodDropdown extends Component {
  render() {
    return (
      <div className="food-dropdown">
        <div className="fancy_food_toggle" id="food_drop" role="menu">

          <div className="slider" data-submenu-id="nutrition_slide">
            <span className="maintain">Nutrition</span>
            <div className="slide" id="nutrition_slide">
              <h3>Nutrition</h3>
              <span>Calories</span>
              <span>Macronutrients</span>
              <span>Micronutrients</span>
              <span>Supplements</span>
              <div id="nutrition_slide_image_container">
                <img id="nutrition_slide_image" src={NutritionSlideImage} />
              </div>
            </div>
          </div>

          <div className="slider" data-submenu-id="methods_slide">
            <span className="maintain">Cooking Methods</span>
            <div className="slide" id="methods_slide">
              <h3>Cooking Methods</h3>
              <span>Poach and Simmer</span>
              <span>Steam</span>
              <span>Saute</span>
              <span>Roast</span>
              <span>Grill</span>
              <span>Stew and Braise</span>
            </div>
          </div>

          <div className="slider" data-submenu-id="ingredients_slide">
            <Link to="/ingredients"><span className="maintain">Ingredients</span></Link>
            <div className="slide" id="ingredients_slide">
              <Link to="/ingredients"><h3>Ingredients</h3></Link>
              <span>Fish and Shellfish</span>
              <span>Meat and Poultry</span>
              <span>Eggs and Dairy</span>
              <span>Beans and Vegetables</span>
              <span>Fruit</span>
              <span>Seeds and Grains</span>
              <span>Fats and Oils</span>
              <span>Acids, Herbs, and Spices</span>
            </div>
          </div>

          <div className="slider" data-submenu-id="cuisines_slide">
            <span className="maintain">National and Regional Cuisines</span>
            <div className="slide" id="cuisines_slide">
              <h3>National and Regional Cuisines</h3>
              <span>Russian</span>
              <span>German</span>
              <span>Turkish</span>
              <span>French</span>
              <span>Italian</span>
              <span>Spanish</span>
              <span>Greek</span>
              <span>Irish</span>
              <span>Chinese</span>
              <span>Indian</span>
              <span>Japanese</span>
              <span>Iranian</span>
              <div id="cuisines_slide_image_container">
                <img id="cuisines_slide_image" src={CuisinesSlideImage} />
              </div>
            </div>
          </div>

        </div>

        <div className="fancy_food_toggle" id="food_drop_shadow">
        </div>
      </div>
    );
  }
}

export default FoodDropdown