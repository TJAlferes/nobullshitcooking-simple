import React from 'react';

import { CuisineBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';

import './cuisine.css';

const googleMapsAPIKeyOne = 'AIzaSyCULKDLxoF9O413jjvF5Ot2xXXMdgz0Eag';

const CuisineView = ({
  oneColumnATheme,
  cuisine,
  tab,
  handleTabChange,
  nearbyStoresClicked,
  address,
  latitude,
  longitude,
  handleShowNearbyStoresClick
}) => !cuisine ? false : (
  <div className="cuisine-view">

    <div><CuisineBreadcrumbs cuisine={cuisine.cuisine} /></div>

    <div className={`cuisine one-column-a ${oneColumnATheme}`}>

      <div className="cuisine-name">
        <h1>{cuisine.cuisine.cuisine_name}{' '}Cuisine</h1>
      </div>

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

      {tab === "intro" && (
        <div className="cuisine-details">
          <div className="cuisine-details-intro-wiki">
            <b>Wikipedia link: </b>
            <a
              href={`https://en.wikipedia.org/wiki/${cuisine.cuisine.cuisine_wiki}`}
              target="_blank"
            >
              {`https://en.wikipedia.org/wiki/${cuisine.cuisine.cuisine_wiki}`}
            </a>
          </div>
        </div>
      )}

      {tab === "sources" && (
        <div className="cuisine-details">
          <div className="cuisine-details-sources">
            <h2>{cuisine.cuisine.cuisine_name}{' '}Sources</h2>
            <div>{cuisine.cuisine.cuisine_name}{' '}Stores near you</div>
            <div className="cuisine__nearby-stores">
              {
                (nearbyStoresClicked)
                ? (
                  (address !== "") &&
                  <iframe
                    className="cuisine__nearby-stores__iframe"
                    frameBorder="0"
                    style={{border: "0 none"}}
                    src={`https://www.google.com/maps/embed/v1/search?q=${cuisine.cuisine.cuisine_name}+grocery+stores+near+${address}&center=${latitude},${longitude}&zoom=11&key=${googleMapsAPIKeyOne}`}
                  >
                  </iframe>
                )
                : (
                  <button
                    className="cuisine__nearby-stores__button"
                    onClick={handleShowNearbyStoresClick}
                  >
                    Show Nearby{' '}{cuisine.cuisine.cuisine_name}{' '}Stores
                  </button>
                )
              }
            </div>
          </div>
        </div>
      )}

      {tab === "equipment" && (
        <div className="cuisine-details">
          <div className="cuisine-details-equipment">
            {cuisine.cuisine.cuisine_name}{' '}Equipment
          </div>
        </div>
      )}

      {tab === "ingredients" && (
        <div className="cuisine-details">
          <div className="cuisine-details-ingredients">
            {cuisine.cuisine.cuisine_name}{' '}Ingredients
          </div>
        </div>
      )}

      {tab === "recipes" && (
        <div className="cuisine-details">
          <div className="cuisine-details-recipes">
            {cuisine.cuisine.cuisine_name}{' '}Recipes
          </div>
        </div>
      )}
    </div>

  </div>
);

export default CuisineView;