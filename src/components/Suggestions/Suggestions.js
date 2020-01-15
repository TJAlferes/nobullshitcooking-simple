import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {
  geoLatitude,
  geoLongitude,
  geoAddress,
  geoNearbyStoresClicked
} from '../../store/actions/index.js';

import SuggestionsView from './SuggestionsView';

const googleMapsAPIKeyTwo = 'AIzaSyA1caERqL2MD4rv2YmbJ139ToyxgT61v6w';

export const Suggestions = ({
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
    <SuggestionsView
      theme={theme}
      nearbyStoresClicked={nearbyStoresClicked}
      address={address}
      latitude={latitude}
      longitude={longitude}
      handleShowNearbyStoresClick={handleShowNearbyStoresClick}
    />
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