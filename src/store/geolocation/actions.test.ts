import {
  geoLatitude,
  geoLongitude,
  geoAddress,
  geoNearbyStoresClicked
} from './actions';
import {
  GEO_LATITUDE,
  GEO_LONGITUDE,
  GEO_ADDRESS,
  GEO_NEARBY_STORES_CLICKED
} from './types';

const latitude = "48.51";
const longitude = "115.43";

describe('geoLatitude action creator', () => {
  it('returns the correct action type', () => {
    const actual = geoLatitude(latitude).type;
    const expected = GEO_LATITUDE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct latitude', () => {
    const actual = geoLatitude(latitude).latitude;
    const expected = latitude;
    expect(actual).toEqual(expected);
  });
});

describe('geoLongitude action creator', () => {
  it('returns the correct action type', () => {
    const actual = geoLongitude(longitude).type;
    const expected = GEO_LONGITUDE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct longitude', () => {
    const actual = geoLongitude(longitude).longitude;
    const expected = longitude;
    expect(actual).toEqual(expected);
  });
});

describe('geoAddress action creator', () => {
  it('returns the correct action type', () => {
    const actual = geoAddress('123 Pleasant Street, Pleasantville, NP').type;
    const expected = GEO_ADDRESS;
    expect(actual).toEqual(expected);
  });
  it('returns the correct address', () => {
    const actual = geoAddress('123 Pleasant Street, Pleasantville, NP').address;
    const expected = '123 Pleasant Street, Pleasantville, NP';
    expect(actual).toEqual(expected);
  });
});

describe('geoNearbyStoresClicked action creator', () => {
  it('returns the correct action type', () => {
    const actual = geoNearbyStoresClicked(true).type;
    const expected = GEO_NEARBY_STORES_CLICKED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct clicked', () => {
    const actual = geoNearbyStoresClicked(true).clicked;
    const expected = true;
    expect(actual).toEqual(expected);
  });
});