import {
  GET_EQUIPMENT_REQUEST,
  GET_EQUIPMENT_SUCCEEDED,
  GET_EQUIPMENT_FAILED
} from '../../actions/actionTypes';

import {
  getEquipmentRequest,
  getEquipmentSucceeded,
  getEquipmentFailed
} from '../../actions/equipment';

// SWITCH TO GHERKIN ?

describe('the getEquipmentRequest action creator', () => {
  it('returns the correct type', () => {
    const actual = getEquipmentRequest().type;
    const expected = GET_EQUIPMENT_REQUEST;
    expect(actual).toEqual(expected);
  });

  it('returns the correct payload', () => {
    const actual = getEquipmentRequest('apple').payload;
    const expected = 'apple';
    expect(actual).toEqual(expected);
  });
});

describe('the getEquipmentSucceeded action creator', () => {
  it('returns the correct type', () => {
    const actual = getEquipmentSucceeded().type;
    const expected = GET_EQUIPMENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the getEquipmentFailed action creator', () => {
  it('returns the correct type', () => {
    const actual = getEquipmentFailed().type;
    const expected = GET_EQUIPMENT_FAILED;
    expect(actual).toEqual(expected);
  });
});