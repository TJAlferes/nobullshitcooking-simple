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
      <span className="suggestions-header">Stores near you</span>
      <div className="suggestions-nearby-stores">
        {
          (nearbyStoresClicked)
          ? (
            (address !== "") &&
            <iframe
              className="suggestions-nearby-stores-iframe"
              frameBorder="0"
              style={{border: "0 none"}}
              src={`https://www.google.com/maps/embed/v1/search?q=grocery+stores+near+${address}&center=${latitude},${longitude}&zoom=11&key=${googleMapsAPIKeyOne}`}
            >
            </iframe>
          )
          : (
            <button className="suggestions__nearby-stores__button" onClick={handleShowNearbyStoresClick}>
              Show Nearby Stores
            </button>
          )
        }
      </div>
      <hr className="suggestions-line"/>
      <span className="suggestions-header">Growers &amp; Ranchers</span>
      <hr className="suggestions-line"/>
      <span className="suggestions-header">Stores &amp; Butchers</span>
      <hr className="suggestions-line"/>
      <span className="suggestions-header">Popular Now</span>
      <hr className="suggestions-line"/>
      <span className="suggestions-header">Suggested for You</span>
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