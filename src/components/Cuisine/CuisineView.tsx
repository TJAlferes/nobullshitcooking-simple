import React from 'react';

import { CuisineBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';
import { ICuisineDetail } from './Cuisine';
import './cuisine.css';

// cuisine banner: <img src={`${s3Path}banner/${cuisine.cuisine.cuisine_id or wiki}`} />

// cuisine flag: <img src={`${s3Path}flag/${cuisine.cuisine.cuisine_id or wiki}`} />

//const s3Path = 'https://s3.amazonaws.com/nobsc-images-01/content/food/cuisines/';
const googleMapsAPIKeyOne = 'AIzaSyCULKDLxoF9O413jjvF5Ot2xXXMdgz0Eag';

export function CuisineView({
  oneColumnATheme,
  breadCrumbsTheme,
  cuisine,
  tab,
  nearbyStoresClicked,
  address,
  latitude,
  longitude,
  handleTabChange,
  handleShowNearbyStoresClick
}: Props): JSX.Element {
  return (
    <div className="cuisine-view">

      <div>
        {CuisineBreadcrumbs({
          breadCrumbsTheme,
          cuisineId: cuisine.cuisine_id,
          cuisineName: cuisine.cuisine_name
        })}
      </div>

      <div className={`cuisine one-column-a ${oneColumnATheme}`}>

        <div className="cuisine-name">
          <h1>{cuisine.cuisine_name}{' '}Cuisine</h1>
        </div>

        <div className="cuisine-tabs">
          <button
            className={`cuisine-tab ${tab === "intro" ? "active" : "inactive"}`}
            name="intro"
            onClick={() => handleTabChange("intro")}
          >
            Intro
          </button>
          <button
            className={`cuisine-tab ${tab === "sources" ? "active" : "inactive"}`}
            name="sources"
            onClick={() => handleTabChange("sources")}
          >
            Sources
          </button>
          <button
            className={`cuisine-tab ${tab === "equipment" ? "active" : "inactive"}`}
            name="equipment"
            onClick={() => handleTabChange("equipment")}
          >
            Equipment
          </button>
          <button
            className={`cuisine-tab ${tab === "ingredients" ? "active" : "inactive"}`}
            name="ingredients"
            onClick={() => handleTabChange("ingredients")}
          >
            Ingredients
          </button>
          <button
            className={`cuisine-tab ${tab === "recipes" ? "active" : "inactive"}`}
            name="recipes"
            onClick={() => handleTabChange("recipes")}
          >
            Recipes
          </button>
        </div>

        {tab === "intro" && (
          <div className="cuisine-details-intro-wiki">
            <b>Wikipedia link: </b>
            <a
              href={`https://en.wikipedia.org/wiki/${cuisine.cuisine_wiki}`}
              target="_blank"
            >
              {`https://en.wikipedia.org/wiki/${cuisine.cuisine_wiki}`}
            </a>
          </div>
        )}

        {tab === "sources" && (
          <div className="cuisine-details-sources">
            <h2>{cuisine.cuisine_name}{' '}Sources</h2>
            <div>{cuisine.cuisine_name}{' '}Stores near you</div>
            <div className="cuisine-nearby-stores">
              {
                (nearbyStoresClicked)
                ? (
                  (address !== "") &&
                  <iframe
                    className="cuisine-nearby-stores-iframe"
                    frameBorder="0"
                    style={{border: "0 none"}}
                    src={`https://www.google.com/maps/embed/v1/search?q=${cuisine.cuisine_name}+grocery+stores+near+${address}&center=${latitude},${longitude}&zoom=11&key=${googleMapsAPIKeyOne}`}
                  >
                  </iframe>
                )
                : (
                  <button
                    className="cuisine-nearby-stores-button"
                    onClick={handleShowNearbyStoresClick}
                  >
                    Show Nearby{' '}{cuisine.cuisine_name}{' '}Stores
                  </button>
                )
              }
            </div>
          </div>
        )}

        {tab === "equipment" && (
          <div className="cuisine-details-equipment">
            {cuisine.cuisine_name}{' '}Equipment
          </div>
        )}

        {tab === "ingredients" && (
          <div className="cuisine-details-ingredients">
            {cuisine.cuisine_name}{' '}Ingredients
          </div>
        )}

        {tab === "recipes" && (
          <div className="cuisine-details-recipes">
            {cuisine.cuisine_name}{' '}Recipes
          </div>
        )}
      </div>

    </div>
  );
}

interface Props {
  oneColumnATheme: string
  breadCrumbsTheme: string
  cuisine: ICuisineDetail
  tab: string
  nearbyStoresClicked: boolean
  address: string
  latitude: string
  longitude: string
  handleTabChange(tab: string): void
  handleShowNearbyStoresClick(): void
}