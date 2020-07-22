import {
  GEO_ADDRESS,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  GEO_NEARBY_STORES_CLICKED,
  IGeoState,
  GeoActions
} from './types';

const initialState: IGeoState = {
  latitude: "",
  longitude: "",
  address: "",
  nearbyStoresClicked: false
};

export const geolocationReducer = (
  state = initialState,
  action: GeoActions
): IGeoState => {
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
    default: return state;
  }
};