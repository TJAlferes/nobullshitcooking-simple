export const GEO_LATITUDE = 'GEO_LATITUDE';
export const GEO_LONGITUDE = 'GEO_LONGITUDE';
export const GEO_ADDRESS = 'GEO_ADDRESS';
export const GEO_NEARBY_STORES_CLICKED = 'GEO_NEARBY_STORES_CLICKED';

export interface GeoState {
  latitude: string
  longitude: string
  address: string
  nearbyStoresClicked: boolean
}

export type GeoActions =
GeoAddress |
GeoLatitude |
GeoLongitude |
GeoNearbyStoresClicked;

interface GeoAddress {
  type: typeof GEO_ADDRESS
  address: string
}

interface GeoLatitude {
  type: typeof GEO_LATITUDE
  latitude: string
}

interface GeoLongitude {
  type: typeof GEO_LONGITUDE
  longitude: string
}

interface GeoNearbyStoresClicked {
  type: typeof GEO_NEARBY_STORES_CLICKED
  clicked: boolean
}