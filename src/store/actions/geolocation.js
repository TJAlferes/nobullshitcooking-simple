import * as actionTypes from './actionTypes';

export const GEO_LATITUDE = 'GEO_LATITUDE';
export const GEO_LONGITUDE = 'GEO_LONGITUDE';
export const GEO_ADDRESS = 'GEO_ADDRESS';
export const GEO_NEARBY_STORES_CLICKED = 'GEO_NEARBY_STORES_CLICKED';

export const geoLatitude = (latitude) => ({
  type: actionTypes.GEO_LATITUDE,
  latitude,

});

export const geoLongitude = (longitude) => ({
  type: actionTypes.GEO_LONGITUDE,
  longitude,

});

export const geoAddress = (address) => ({
  type: actionTypes.GEO_ADDRESS,
  address
});

export const geoNearbyStoresClicked = (clicked) => ({
  type: actionTypes.GEO_NEARBY_STORES_CLICKED,
  clicked
});