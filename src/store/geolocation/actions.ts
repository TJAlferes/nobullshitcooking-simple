import {
  GEO_LATITUDE,
  GEO_LONGITUDE,
  GEO_ADDRESS,
  GEO_NEARBY_STORES_CLICKED
} from './types';

export const geoLatitude = (latitude: string) => ({
  type: GEO_LATITUDE,
  latitude
});

export const geoLongitude = (longitude: string) => ({
  type: GEO_LONGITUDE,
  longitude
});

export const geoAddress = (address: string) => ({
  type: GEO_ADDRESS,
  address
});

export const geoNearbyStoresClicked = (clicked: boolean) => ({
  type: GEO_NEARBY_STORES_CLICKED,
  clicked
});