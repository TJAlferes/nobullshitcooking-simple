import {
  GEO_LATITUDE,
  GEO_LONGITUDE,
  GEO_ADDRESS,
  GEO_NEARBY_STORES_CLICKED,
  GeoActions
} from './types';

export const geoLatitude = (latitude: string): GeoActions => ({
  type: GEO_LATITUDE,
  latitude
});

export const geoLongitude = (longitude: string): GeoActions => ({
  type: GEO_LONGITUDE,
  longitude
});

export const geoAddress = (address: string): GeoActions => ({
  type: GEO_ADDRESS,
  address
});

export const geoNearbyStoresClicked = (clicked: boolean): GeoActions => ({
  type: GEO_NEARBY_STORES_CLICKED,
  clicked
});