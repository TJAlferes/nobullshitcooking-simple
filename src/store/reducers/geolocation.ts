import {
  GEO_ADDRESS,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  GEO_NEARBY_STORES_CLICKED
} from '../actions/actionTypes';

import { GeoState, GeoActions } from '../types/geolocation';

const initialState: GeoState = {
  latitude: "",
  longitude: "",
  address: "",
  nearbyStoresClicked: false
};

const geolocationReducer = (
  state = initialState,
  action: GeoActions
): GeoState => {
  switch (action.type) {
    case GEO_LATITUDE:
      return {
        ...state,
        ...{latitude: action.latitude}
      };
    case GEO_LONGITUDE:
      return {
        ...state,
        ...{longitude: action.longitude}
      };
    case GEO_ADDRESS:
      return {
        ...state,
        ...{address: action.address}
      };
    case GEO_NEARBY_STORES_CLICKED:
      return {
        ...state,
        ...{nearbyStoresClicked: action.clicked}
      };
  }
  return state;
};

export default geolocationReducer;