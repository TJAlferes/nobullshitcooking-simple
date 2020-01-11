import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {
  geoLatitude,
  geoLongitude,
  geoAddress,
  geoNearbyStoresClicked
} from '../../store/actions/index.js';

import './suggestions.css';

const googleMapsAPIKeyOne = 'AIzaSyCULKDLxoF9O413jjvF5Ot2xXXMdgz0Eag';
const googleMapsAPIKeyTwo = 'AIzaSyA1caERqL2MD4rv2YmbJ139ToyxgT61v6w';

const Suggestions = ({
  theme,
  latitude,
  longitude,
  address,
  nearbyStoresClicked,
  geoLatitude,
  geoLongitude,
  geoAddress,
  geoNearbyStoresClicked
}) => {
  useEffect(() => {
    const getAddress = async () => {
      if (latitude === "") return;
      if (longitude === "") return;
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapsAPIKeyTwo}`
      );
      if (res.data) geoAddress(res.data.results[3].formatted_address);
    };
    getAddress();
  }, [latitude, longitude]);

  const getLocation = async () => {
    const geolocation = navigator.geolocation;
    geolocation.getCurrentPosition(function(position) {
      geoLatitude(`${position.coords.latitude}`);
      geoLongitude(`${position.coords.longitude}`);
    });
  };

  const handleShowNearbyStoresClick = () => {
    geoNearbyStoresClicked(true);
    getLocation();
  };

  return (
    <div className={`suggestions ${theme}`}>
      <span className="suggestions__header">Stores near you</span>
      <div id="suggestions__nearby-stores">
        {
          (nearbyStoresClicked)
          ? (
            (address !== "") &&
            <iframe
              id="nearby-stores__iframe"
              frameBorder="0"
              style={{border: "0 none"}}
              src={`https://www.google.com/maps/embed/v1/search?q=grocery+stores+near+${address}&center=${latitude},${longitude}&zoom=11&key=${googleMapsAPIKeyOne}`}
            >
            </iframe>
          )
          : (
            <button id="nearby-stores__button" onClick={handleShowNearbyStoresClick}>
              Show Nearby Stores
            </button>
          )
        }
      </div>
      <hr className="suggestions__line"/>
      <span className="suggestions__header">Growers &amp; Ranchers</span>
      <hr className="suggestions__line"/>
      <span className="suggestions__header">Stores &amp; Butchers</span>
      <hr className="suggestions__line"/>
      <span className="suggestions__header">Popular Now</span>
      <hr className="suggestions__line"/>
      <span className="suggestions__header">Suggested for You</span>
    </div>
  );
};

const mapStateToProps = state => ({
  theme: state.theme.suggestionsTheme,
  latitude: state.geolocation.latitude,
  longitude: state.geolocation.longitude,
  address: state.geolocation.address,
  nearbyStoresClicked: state.geolocation.nearbyStoresClicked
});

const mapDispatchToProps = dispatch => ({
  geoLatitude: (latitude) => dispatch(geoLatitude(latitude)),
  geoLongitude: (longitude) => dispatch(geoLongitude(longitude)),
  geoAddress: (address) => dispatch(geoAddress(address)),
  geoNearbyStoresClicked: (clicked) => dispatch(geoNearbyStoresClicked(clicked))
});

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);