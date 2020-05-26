import {
  staffCreateNewEquipment,
  staffCreateNewEquipmentSucceeded,
  staffCreateNewEquipmentFailed,
  staffEditEquipment,
  staffEditEquipmentSucceeded,
  staffEditEquipmentFailed,
  staffDeleteEquipment,
  staffDeleteEquipmentSucceeded,
  staffDeleteEquipmentFailed
} from './actions';
import {
  STAFF_CREATE_NEW_EQUIPMENT,
  STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED,
  STAFF_CREATE_NEW_EQUIPMENT_FAILED,
  STAFF_EDIT_EQUIPMENT,
  STAFF_EDIT_EQUIPMENT_SUCCEEDED,
  STAFF_EDIT_EQUIPMENT_FAILED,
  STAFF_DELETE_EQUIPMENT,
  STAFF_DELETE_EQUIPMENT_SUCCEEDED,
  STAFF_DELETE_EQUIPMENT_FAILED
} from './types';

const creatingEquipmentInfo = {
  equipmentTypeId: 3,
  equipmentName: "Metal Spatula",
  equipmentDescription: "It works.",
  equipmentImage: "nobsc-metal-spatula",
  fullEquipmentImage: null,
  tinyEquipmentImage: null
};
const editingEquipmentInfo = {
  equipmentId: 1,
  equipmentTypeId: 3,
  equipmentName: "Metal Spatula",
  equipmentDescription: "It works.",
  prevEquipmentImage: "nobsc-metal-spatula",
  equipmentImage: "nobsc-metal-spatula",
  fullEquipmentImage: null,
  tinyEquipmentImage: null
};

describe('the staffCreateNewEquipment action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffCreateNewEquipment(creatingEquipmentInfo).type;
    const expected = STAFF_CREATE_NEW_EQUIPMENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct equipmentInfo', () => {
    const actual = staffCreateNewEquipment(creatingEquipmentInfo).equipmentInfo;
    const expected = creatingEquipmentInfo;
    expect(actual).toEqual(expected);
  });
});

describe('the staffCreateNewEquipmentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffCreateNewEquipmentSucceeded('OK.').type;
    const expected = STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffCreateNewEquipmentSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});

describe('the staffCreateNewEquipmentFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffCreateNewEquipmentFailed('Try again.').type;
    const expected = STAFF_CREATE_NEW_EQUIPMENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffCreateNewEquipmentFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});

describe('the staffEditEquipment action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffEditEquipment(editingEquipmentInfo).type;
    const expected = STAFF_EDIT_EQUIPMENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct equipmentInfo', () => {
    const actual = staffEditEquipment(editingEquipmentInfo).equipmentInfo;
    const expected = editingEquipmentInfo;
    expect(actual).toEqual(expected);
  });
});

describe('the staffEditEquipmentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffEditEquipmentSucceeded('OK.').type;
    const expected = STAFF_EDIT_EQUIPMENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffEditEquipmentSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});

describe('the staffEditEquipmentFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffEditEquipmentFailed('Try again.').type;
    const expected = STAFF_EDIT_EQUIPMENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffEditEquipmentFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});

describe('the staffDeleteEquipment action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffDeleteEquipment(7).type;
    const expected = STAFF_DELETE_EQUIPMENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct equipmentId', () => {
    const actual = staffDeleteEquipment(7).equipmentId;
    const expected = 7;
    expect(actual).toEqual(expected);
  });
});

describe('the staffDeleteEquipmentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffDeleteEquipmentSucceeded('OK.').type;
    const expected = STAFF_DELETE_EQUIPMENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffDeleteEquipmentSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});

describe('the staffDeleteEquipmentFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffDeleteEquipmentFailed('Try again.').type;
    const expected = STAFF_DELETE_EQUIPMENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffDeleteEquipmentFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});