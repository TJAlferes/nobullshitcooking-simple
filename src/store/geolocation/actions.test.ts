import {
  GEO_LATITUDE,
  GEO_LONGITUDE,
  GEO_ADDRESS,
  GEO_NEARBY_STORES_CLICKED
} from './types';

import {
  geoLatitude,
  geoLongitude,
  geoAddress,
  geoNearbyStoresClicked
} from './actions';

describe('the geoLatitude action creator', () => {
  it('returns the correct action type', () => {
    const actual = geoLatitude(48.51).type;
    const expected = GEO_LATITUDE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct latitude', () => {
    const actual = geoLatitude(48.51).latitude;
    const expected = 48.51;
    expect(actual).toEqual(expected);
  });
});

describe('the geoLongitude action creator', () => {
  it('returns the correct action type', () => {
    const actual = geoLongitude(115.43).type;
    const expected = GEO_LONGITUDE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct longitude', () => {
    const actual = geoLongitude(115.43).longitude;
    const expected = 115.43;
    expect(actual).toEqual(expected);
  });
});

describe('the geoAddress action creator', () => {
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

describe('the geoNearbyStoresClicked action creator', () => {
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