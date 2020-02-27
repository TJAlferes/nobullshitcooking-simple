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

    <div><CuisineBreadcrumbs cuisine={cuisine.cuisine} /></div>

    <div className={`cuisine one-column-a ${oneColumnATheme}`}>

      <div className="cuisine-tabs">
        <button
          className={(tab === "intro")
            ? "cuisine-tab active"
            : "cuisine-tab inactive"
          }
          name="intro"
          onClick={() => handleTabChange("intro")}
        >
          Intro
        </button>
        <button
          className={(tab === "sources")
            ? "cuisine-tab active"
            : "cuisine-tab inactive"
          }
          name="sources"
          onClick={() => handleTabChange("sources")}
        >
          Sources
        </button>
        <button
          className={(tab === "equipment")
            ? "cuisine-tab active"
            : "cuisine-tab inactive"
          }
          name="equipment"
          onClick={() => handleTabChange("equipment")}
        >
          Equipment
        </button>
        <button
          className={(tab === "ingredients")
            ? "cuisine-tab active"
            : "cuisine-tab inactive"
          }
          name="ingredients"
          onClick={() => handleTabChange("ingredients")}
        >
          Ingredients
        </button>
        <button
          className={(tab === "recipes")
            ? "cuisine-tab active"
            : "cuisine-tab inactive"
          }
          name="recipes"
          onClick={() => handleTabChange("recipes")}
        >
          Recipes
        </button>
      </div>

      <div className="equipment-details__name">
        <h1>{cuisine.cuisine.cuisine_name}{' '}Cuisine</h1>
      </div>

      <div className="equipment-details__image">
        {/*<img src={`https://s3.amazonaws.com/nobsc-images-01/cuisines/${cuisine.cuisine_name}.jpg`} />*/}
      </div>

      <div className="equipment-details__type">
        <b>Wikipedia link: </b><a href={`https://en.wikipedia.org/wiki/${cuisine.cuisine.cuisine_wiki}`} target="_blank">{`https://en.wikipedia.org/wiki/${cuisine.cuisine.cuisine_wiki}`}</a>
      </div>
      
      {/*<div className="equipment-details__description">
        {cuisine}
      </div>*/}

    </div>

  </div>
);

export default CuisineView;