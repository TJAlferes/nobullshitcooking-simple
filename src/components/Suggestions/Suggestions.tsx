import axios from 'axios';
import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import {
  geoAddress,
  geoLatitude,
  geoLongitude,
  geoNearbyStoresClicked
} from '../../store/geolocation/actions';
import { SuggestionsView } from './SuggestionsView';

const googleMapsAPIKeyTwo = 'AIzaSyA1caERqL2MD4rv2YmbJ139ToyxgT61v6w';

export function Suggestions({
  address,
  geoAddress,
  geoLatitude,
  geoLongitude,
  geoNearbyStoresClicked,
  latitude,
  longitude,
  nearbyStoresClicked,
  theme
}: Props): JSX.Element {
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
      address={address}
      latitude={latitude}
      longitude={longitude}
      handleShowNearbyStoresClick={handleShowNearbyStoresClick}
      nearbyStoresClicked={nearbyStoresClicked}
      theme={theme}
    />
  );
};

interface RootState {
  geolocation: {
    address: string;
    latitude: string;
    longitude: string;
    nearbyStoresClicked: boolean;
  };
  theme: {
    suggestionsTheme: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const mapStateToProps = (state: RootState) => ({
  address: state.geolocation.address,
  latitude: state.geolocation.latitude,
  longitude: state.geolocation.longitude,
  nearbyStoresClicked: state.geolocation.nearbyStoresClicked,
  theme: state.theme.suggestionsTheme
});

const mapDispatchToProps = {
  geoAddress: (address: string) => geoAddress(address),
  geoLatitude: (latitude: string) => geoLatitude(latitude),
  geoLongitude: (longitude: string) => geoLongitude(longitude),
  geoNearbyStoresClicked: (clicked: boolean) => geoNearbyStoresClicked(clicked)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Suggestions);