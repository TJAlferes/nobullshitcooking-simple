import * as actionTypes from '../actions/actionTypes';

const initialState = {
  latitude: "",
  longitude: "",
  address: "",
  nearbyStoresClicked: false
};

const geolocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GEO_LATITUDE:
      return {...state, ...{latitude: action.latitude}};
    case actionTypes.GEO_LONGITUDE:
      return {...state, ...{longitude: action.longitude}};
    case actionTypes.GEO_ADDRESS:
      return {...state, ...{address: action.address}};
    case actionTypes.GEO_NEARBY_STORES_CLICKED:
      return {...state, ...{nearbyStoresClicked: action.clicked}};
  }
  return state;
};

export default geolocationReducer;