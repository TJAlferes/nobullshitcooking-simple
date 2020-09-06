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
const address = "123 Pleasant Street, Pleasantville, NP";

describe('geoLatitude action creator', () => {
  it('returns the correct action type', () => {
    expect(geoLatitude(latitude).type).toEqual(GEO_LATITUDE);
  });

  it('returns the correct latitude', () => {
    expect(geoLatitude(latitude).latitude).toEqual(latitude);
  });
});

describe('geoLongitude action creator', () => {
  it('returns the correct action type', () => {
    expect(geoLongitude(longitude).type).toEqual(GEO_LONGITUDE);
  });

  it('returns the correct longitude', () => {
    expect(geoLongitude(longitude).longitude).toEqual(longitude);
  });
});

describe('geoAddress action creator', () => {
  it('returns the correct action type', () => {
    expect(geoAddress(address).type).toEqual(GEO_ADDRESS);
  });

  it('returns the correct address', () => {
    expect(geoAddress(address).address).toEqual(address);
  });
});

describe('geoNearbyStoresClicked action creator', () => {
  it('returns the correct action type', () => {
    expect(geoNearbyStoresClicked(true).type)
      .toEqual(GEO_NEARBY_STORES_CLICKED);
  });

  it('returns the correct clicked', () => {
    expect(geoNearbyStoresClicked(true).clicked).toEqual(true);
  });
});