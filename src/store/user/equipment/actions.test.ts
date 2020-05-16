import {
  USER_CREATE_NEW_PRIVATE_EQUIPMENT,
  USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED,
  USER_EDIT_PRIVATE_EQUIPMENT,
  USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_EDIT_PRIVATE_EQUIPMENT_FAILED,
  USER_DELETE_PRIVATE_EQUIPMENT,
  USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_DELETE_PRIVATE_EQUIPMENT_FAILED
} from './types';
import {
  userCreateNewPrivateEquipment,
  userCreateNewPrivateEquipmentSucceeded,
  userCreateNewPrivateEquipmentFailed,
  userEditPrivateEquipment,
  userEditPrivateEquipmentSucceeded,
  userEditPrivateEquipmentFailed,
  userDeletePrivateEquipment,
  userDeletePrivateEquipmentSucceeded,
  userDeletePrivateEquipmentFailed
} from './actions';

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

describe('the userCreateNewPrivateEquipment action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateEquipment(creatingEquipmentInfo).type;
    const expected = USER_CREATE_NEW_PRIVATE_EQUIPMENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct equipmentInfo', () => {
    const actual = userCreateNewPrivateEquipment(creatingEquipmentInfo).equipmentInfo;
    const expected = creatingEquipmentInfo;
    expect(actual).toEqual(expected);
  });
});
describe('the userCreateNewPrivateEquipmentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateEquipmentSucceeded('OK.').type;
    const expected = USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPrivateEquipmentSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userCreateNewPrivateEquipmentFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateEquipmentFailed('Try again.').type;
    const expected = USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPrivateEquipmentFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userEditPrivateEquipment action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateEquipment(editingEquipmentInfo).type;
    const expected = USER_EDIT_PRIVATE_EQUIPMENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct equipmentInfo', () => {
    const actual = userEditPrivateEquipment(editingEquipmentInfo).equipmentInfo;
    const expected = editingEquipmentInfo;
    expect(actual).toEqual(expected);
  });
});
describe('the userEditPrivateEquipmentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateEquipmentSucceeded('OK.').type;
    const expected = USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPrivateEquipmentSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userEditPrivateEquipmentFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateEquipmentFailed('Try again.').type;
    const expected = USER_EDIT_PRIVATE_EQUIPMENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPrivateEquipmentFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userDeletePrivateEquipment action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePrivateEquipment(7).type;
    const expected = USER_DELETE_PRIVATE_EQUIPMENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct equipmentId', () => {
    const actual = userDeletePrivateEquipment(7).equipmentId;
    const expected = 7;
    expect(actual).toEqual(expected);
  });
});
describe('the userDeletePrivateEquipmentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePrivateEquipmentSucceeded('OK.').type;
    const expected = USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeletePrivateEquipmentSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userDeletePrivateEquipmentFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePrivateEquipmentFailed('Try again.').type;
    const expected = USER_DELETE_PRIVATE_EQUIPMENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeletePrivateEquipmentFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});