import { geolocationReducer } from './reducer';
import {
  GEO_ADDRESS,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  GEO_NEARBY_STORES_CLICKED
} from './types';

const initialState = {
  latitude: "",
  longitude: "",
  address: "",
  nearbyStoresClicked: false
};

describe('geolocation reducer', () => {
  it('returns initial state', () => {
    const actual = geolocationReducer(undefined, {
      type: GEO_ADDRESS,
      address: ""
    });
    const expected = initialState;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type GEO_ADDRESS', () => {
    const actual = geolocationReducer(initialState, {
      type: GEO_ADDRESS,
      address: "123 Fun Street"
    });
    const expected = {
      latitude: "",
      longitude: "",
      address: "123 Fun Street",
      nearbyStoresClicked: false
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type GEO_LATITUDE', () => {
    const actual = geolocationReducer(initialState, {
      type: GEO_LATITUDE,
      latitude: "43.21"
    });
    const expected = {
      latitude: "43.21",
      longitude: "",
      address: "",
      nearbyStoresClicked: false
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type GEO_LONGITUDE', () => {
    const actual = geolocationReducer(initialState, {
      type: GEO_LONGITUDE,
      longitude: "87.65"
    });
    const expected = {
      latitude: "",
      longitude: "87.65",
      address: "",
      nearbyStoresClicked: false
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type GEO_NEARBY_STORES_CLICKED', () => {
    const actual = geolocationReducer(initialState, {
      type: GEO_NEARBY_STORES_CLICKED,
      clicked: true
    });
    const expected = {
      latitude: "",
      longitude: "",
      address: "",
      nearbyStoresClicked: true
    };
    expect(actual).toEqual(expected);
  });
});