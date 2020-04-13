import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import axios from 'axios';

import LoaderSpinner from '../../../LoaderSpinner/LoaderSpinner';
import CuisineView from './CuisineView';
import {
  NOBSCBackendAPIEndpointOne
} from '../../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;
const googleMapsAPIKeyTwo = 'AIzaSyA1caERqL2MD4rv2YmbJ139ToyxgT61v6w';

export function Cuisine({
  match,
  oneColumnATheme,
  dataCuisines
}): JSX.Element {
  const history = useHistory();

  const [ cuisine, setCuisine ] = useState(null);
  const [ nearbyStoresClicked, setNearbyStoresClicked ] = useState(false);
  const [ address, setAddress ] = useState("");
  const [ latitude, setLatitude ] = useState("");
  const [ longitude, setLongitude ] = useState("");
  const [ tab, setTab ] = useState("intro");

  useEffect(() => {
    const { id } = match.params;

    if (!id) {
      history.push('/food/cuisines');
      return;
    }

    const isCuisine = dataCuisines.find(cui=> cui.cuisine_id == id);

    if (!isCuisine) {
      history.push('/food/cuisines');
      return;
    }

    const getCuisineDetail = async (id) => {
      const res = await axios.get(`${endpoint}/cuisine/detail/${id}`);
      if (res.data) setCuisine(res.data);
    };

    if (id && isCuisine) getCuisineDetail(Number(id));
  }, []);

  useEffect(() => {
    const getAddress = async () => {
      if (latitude === "") return;
      if (longitude === "") return;
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapsAPIKeyTwo}`
      );
      if (res.data) setAddress(res.data.results[3].formatted_address);
    };
    getAddress();
  }, [latitude, longitude]);

  const getLocation = async () => {
    const geolocation = navigator.geolocation;
    geolocation.getCurrentPosition(function(position) {
      setLatitude(`${position.coords.latitude}`);
      setLongitude(`${position.coords.longitude}`);
    });
  };

  const handleTabChange = (value: string) => setTab(value);

  const handleShowNearbyStoresClick = () => {
    setNearbyStoresClicked(true);
    getLocation();
  };

  return !cuisine
  ? <LoaderSpinner />
  : (
    <CuisineView
      oneColumnATheme={oneColumnATheme}
      cuisine={cuisine}
      tab={tab}
      nearbyStoresClicked={nearbyStoresClicked}
      address={address}
      latitude={latitude}
      longitude={longitude}
      handleTabChange={handleTabChange}
      handleShowNearbyStoresClick={handleShowNearbyStoresClick}
    />
  );
}

export interface ICuisineDetail {
  cuisine_id: number
  cuisine_name: string
  cuisine_nation: string
  cuisine_wiki: string
  cuisine_intro: string
}

const mapStateToProps = state => ({dataCuisines: state.data.cuisines});

export default withRouter(connect(mapStateToProps)(Cuisine));