import {
  GEO_LATITUDE,
  GEO_LONGITUDE,
  GEO_ADDRESS,
  GEO_NEARBY_STORES_CLICKED
} from './actionTypes';

export const geoLatitude = latitude => ({
  type: GEO_LATITUDE,
  latitude
});

export const geoLongitude = longitude => ({
  type: GEO_LONGITUDE,
  longitude
});

export const geoAddress = address => ({
  type: GEO_ADDRESS,
  address
});

export const geoNearbyStoresClicked = clicked => ({
  type: GEO_NEARBY_STORES_CLICKED,
  clicked
});