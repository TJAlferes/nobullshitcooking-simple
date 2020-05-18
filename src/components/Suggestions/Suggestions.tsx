import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import axios from 'axios';

import {
  geoLatitude,
  geoLongitude,
  geoAddress,
  geoNearbyStoresClicked
} from '../../store/geolocation/actions';
import { SuggestionsView } from './SuggestionsView';

const googleMapsAPIKeyTwo = 'AIzaSyA1caERqL2MD4rv2YmbJ139ToyxgT61v6w';

export function Suggestions({
  theme,
  latitude,
  longitude,
  address,
  nearbyStoresClicked,
  geoLatitude,
  geoLongitude,
  geoAddress,
  geoNearbyStoresClicked
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
      theme={theme}
      nearbyStoresClicked={nearbyStoresClicked}
      address={address}
      latitude={latitude}
      longitude={longitude}
      handleShowNearbyStoresClick={handleShowNearbyStoresClick}
    />
  );
};

interface RootState {
  theme: {
    suggestionsTheme: string;
  };
  geolocation: {
    latitude: string;
    longitude: string;
    address: string;
    nearbyStoresClicked: boolean;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const mapStateToProps = (state: RootState) => ({
  theme: state.theme.suggestionsTheme,
  latitude: state.geolocation.latitude,
  longitude: state.geolocation.longitude,
  address: state.geolocation.address,
  nearbyStoresClicked: state.geolocation.nearbyStoresClicked
});

const mapDispatchToProps = {
  geoLatitude: (latitude: string) => geoLatitude(latitude),
  geoLongitude: (longitude: string) => geoLongitude(longitude),
  geoAddress: (address: string) => geoAddress(address),
  geoNearbyStoresClicked: (clicked: boolean) => geoNearbyStoresClicked(clicked)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Suggestions);