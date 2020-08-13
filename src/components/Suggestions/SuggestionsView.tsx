import React from 'react';

import './suggestions.css';

const googleMapsAPIKeyOne = 'AIzaSyCULKDLxoF9O413jjvF5Ot2xXXMdgz0Eag';

export function SuggestionsView({
  address,
  latitude,
  longitude,
  handleShowNearbyStoresClick,
  nearbyStoresClicked,
  theme
}: Props): JSX.Element {
  return (
    <div className={`suggestions ${theme}`}>
      <span className="suggestions__header">Stores near you</span>

      <div className="suggestions__nearby-stores">
        {
          (nearbyStoresClicked)
          ? (
            (address !== "") &&
            <iframe
              className="nearby-stores__iframe"
              frameBorder="0"
              style={{border: "0 none"}}
              src={`https://www.google.com/maps/embed/v1/search?q=grocery+stores+near+${address}&center=${latitude},${longitude}&zoom=11&key=${googleMapsAPIKeyOne}`}
            >
            </iframe>
          )
          : (
            <button
              className="nearby-stores__button"
              onClick={handleShowNearbyStoresClick}
            >
              Show Nearby Stores
            </button>
          )
        }
      </div>

      <hr className="suggestions__hr"/>

      <span className="suggestions__header">Growers &amp; Ranchers</span>

      <hr className="suggestions__hr"/>

      <span className="suggestions__header">Stores &amp; Butchers</span>

      <hr className="suggestions__hr"/>

      <span className="suggestions__header">Popular Now</span>

      <hr className="suggestions__hr"/>

      <span className="suggestions__header">Suggested for You</span>
    </div>
  );
}

type Props = {
  address: string;
  latitude: string;
  longitude: string;
  handleShowNearbyStoresClick(): void;
  nearbyStoresClicked: boolean;
  theme: string;
};