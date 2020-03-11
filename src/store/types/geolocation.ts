import {
  GEO_ADDRESS,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  GEO_NEARBY_STORES_CLICKED
} from '../actions/actionTypes';

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