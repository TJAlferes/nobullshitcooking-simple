import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import CuisineView from './CuisineView';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;
const googleMapsAPIKeyTwo = 'AIzaSyA1caERqL2MD4rv2YmbJ139ToyxgT61v6w';

export const Cuisine = ({
  match,
  oneColumnATheme,
  message,
  dataCuisines
}) => {
  const history = useHistory();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ cuisine, setCuisine ] = useState(null);
  const [ nearbyStoresClicked, setNearbyStoresClicked ] = useState(false);
  const [ address, setAddress ] = useState("");
  const [ latitude, setLatitude ] = useState("");
  const [ longitude, setLongitude ] = useState("");
  const [ tab, setTab ] = useState("intro");

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (message !== "") window.scrollTo(0,0);
      setFeedback(message);
      setLoading(false);
    }
    return () => isSubscribed = false;
  }, [message]);

  useEffect(() => {
    const { id } = match.params;
    if (!id) history.push('/home');

    const isCuisine = dataCuisines.find(cui=> cui.cuisine_id == id);
    if (!isCuisine) history.push('/cuisines');

    // TO DO: move to redux saga
    const getCuisine = async (id) => {
      const res = await axios.get(`${endpoint}/cuisine/detail/${id}`);
      if (res.data) setCuisine(res.data);
    };

    getCuisine(Number(id));
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

  const handleShowNearbyStoresClick = () => {
    setNearbyStoresClicked(true);
    getLocation();
  };

  const handleTabChange = value => setTab(value);

  return (
    <CuisineView
      oneColumnATheme={oneColumnATheme}
      cuisine={cuisine}
      tab={tab}
      handleTabChange={handleTabChange}
      nearbyStoresClicked={nearbyStoresClicked}
      address={address}
      latitude={latitude}
      longitude={longitude}
      handleShowNearbyStoresClick={handleShowNearbyStoresClick}
    />
  );
}

const mapStateToProps = state => ({dataCuisines: state.data.cuisines});

export default withRouter(connect(mapStateToProps)(Cuisine));