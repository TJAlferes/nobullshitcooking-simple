import React from 'react';

import { CuisineBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';

import './cuisine.css';

const CuisineView = ({
  oneColumnATheme,
  cuisine,
  tab,
  handleTabChange
}) => !cuisine ? false : (
  <div className="cuisine-view">

    <div><CuisineBreadcrumbs cuisine={cuisine} /></div>

    <div className={`cuisine one-column-a ${oneColumnATheme}`}>

      <div className="cuisine-tabs">
        <button
          className={(tab === "intro")
            ? "cuisine-tab active"
            : "cuisine-tab inactive"
          }
          name="intro"
          onClick={e => handleTabChange(e)}
        >
          Intro
        </button>
        <button
          className={(tab === "sources")
            ? "cuisine-tab active"
            : "cuisine-tab inactive"
          }
          name="sources"
          onClick={e => handleTabChange(e)}
        >
          Sources
        </button>
        <button
          className={(tab === "equipment")
            ? "cuisine-tab active"
            : "cuisine-tab inactive"
          }
          name="equipment"
          onClick={e => handleTabChange(e)}
        >
          Equipment
        </button>
        <button
          className={(tab === "ingredients")
            ? "cuisine-tab active"
            : "cuisine-tab inactive"
          }
          name="ingredients"
          onClick={e => handleTabChange(e)}
        >
          Ingredients
        </button>
        <button
          className={(tab === "recipes")
            ? "cuisine-tab active"
            : "cuisine-tab inactive"
          }
          name="recipes"
          onClick={e => handleTabChange(e)}
        >
          Recipes
        </button>
        <button
          className={(tab === "plans")
            ? "cuisine-tab active"
            : "cuisine-tab inactive"
          }
          name="plans"
          onClick={e => handleTabChange(e)}
        >
          Plans
        </button>
      </div>

      <div className="equipment-details__name">
        <h1>{equipment.equipment_name}</h1>
      </div>

      <div className="equipment-details__image">
        {/*<img src={`https://s3.amazonaws.com/nobsc-images-01/cuisines/${cuisine.cuisine_name}.jpg`} />*/}
      </div>

      <div className="equipment-details__type">
        <b>Equipment Type:</b> {equipment.equipment_type_name}
      </div>
      
      {/*<div className="equipment-details__description">
        {cuisine}
      </div>*/}

    </div>

  </div>
);

export default CuisineView;