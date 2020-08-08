import React from 'react';

import { CuisineBreadcrumbs } from '../../routing/breadcrumbs/Breadcrumbs';
import { ICuisineDetail } from './Cuisine';
import './cuisine.css';

// cuisine banner: <img src={`${s3Path}banner/${cuisine.id or wiki}`} />
// cuisine flag: <img src={`${s3Path}flag/${cuisine.id or wiki}`} />

const googleMapsAPIKeyOne = 'AIzaSyCULKDLxoF9O413jjvF5Ot2xXXMdgz0Eag';
//const s3Path = 'https://s3.amazonaws.com/nobsc-images-01/content/food/cuisines/';

export function CuisineView({
  address,
  cuisine,
  handleShowNearbyStoresClick,
  handleTabChange,
  latitude,
  longitude,
  nearbyStoresClicked,
  oneColumnATheme,
  tab
}: Props): JSX.Element {
  return (
    <div className="cuisine-view">

      <CuisineBreadcrumbs cuisineId={cuisine.id} cuisineName={cuisine.name} />

      <div className={`cuisine one-column-a ${oneColumnATheme}`}>

        <div className="cuisine-name"><h1>{cuisine.name}{' '}Cuisine</h1></div>

        <div className="cuisine-tabs">
          <button
            className={
              `cuisine-tab ${tab === "intro" ? "active" : "inactive"}`
            }
            name="intro"
            onClick={() => handleTabChange("intro")}
          >
            Intro
          </button>
          <button
            className={
              `cuisine-tab ${tab === "sources" ? "active" : "inactive"}`
            }
            name="sources"
            onClick={() => handleTabChange("sources")}
          >
            Sources
          </button>
          <button
            className={
              `cuisine-tab ${tab === "equipment" ? "active" : "inactive"}`
            }
            name="equipment"
            onClick={() => handleTabChange("equipment")}
          >
            Equipment
          </button>
          <button
            className={
              `cuisine-tab ${tab === "ingredients" ? "active" : "inactive"}`
            }
            name="ingredients"
            onClick={() => handleTabChange("ingredients")}
          >
            Ingredients
          </button>
          <button
            className={
              `cuisine-tab ${tab === "recipes" ? "active" : "inactive"}`
            }
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
              href={`https://en.wikipedia.org/wiki/${cuisine.wiki}`}
              target="_blank"
            >
              {`https://en.wikipedia.org/wiki/${cuisine.wiki}`}
            </a>
          </div>
        )}

        {tab === "sources" && (
          <div className="cuisine-details-sources">
            <h2>{cuisine.name}{' '}Sources</h2>
            <div>{cuisine.name}{' '}Stores near you</div>
            <div className="cuisine-nearby-stores">
              {
                nearbyStoresClicked
                ? (
                  address !== "" &&
                  <iframe
                    className="cuisine-nearby-stores-iframe"
                    frameBorder="0"
                    src={`
                      https://www.google.com/maps/embed/v1/search
                      ?q=${cuisine.name}+grocery+stores+near+${address}
                      &center=${latitude},${longitude}
                      &zoom=11
                      &key=${googleMapsAPIKeyOne}
                    `}
                    style={{border: "0 none"}}
                  >
                  </iframe>
                )
                : (
                  <button
                    className="cuisine-nearby-stores-button"
                    onClick={handleShowNearbyStoresClick}
                  >
                    Show Nearby{' '}{cuisine.name}{' '}Stores
                  </button>
                )
              }
            </div>
          </div>
        )}

        {tab === "equipment" && (
          <div className="cuisine-details-equipment">
            {cuisine.name}{' '}Equipment
          </div>
        )}

        {tab === "ingredients" && (
          <div className="cuisine-details-ingredients">
            {cuisine.name}{' '}Ingredients
          </div>
        )}

        {tab === "recipes" && (
          <div className="cuisine-details-recipes">
            {cuisine.name}{' '}Recipes
          </div>
        )}
      </div>

    </div>
  );
}

type Props = {
  address: string;
  cuisine: ICuisineDetail;
  handleShowNearbyStoresClick(): void;
  handleTabChange(tab: string): void;
  latitude: string;
  longitude: string;
  nearbyStoresClicked: boolean;
  oneColumnATheme: string;
  tab: string;
};