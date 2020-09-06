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
} from '../../../../src/store/user/equipment/types';
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
} from '../../../../src/store/user/equipment/actions';

const creatingEquipmentInfo = {
  equipmentTypeId: 3,
  name: "Metal Spatula",
  description: "It works.",
  image: "nobsc-metal-spatula",
  fullImage: null,
  tinyImage: null
};
const editingEquipmentInfo = {
  id: 1,
  equipmentTypeId: 3,
  name: "Metal Spatula",
  description: "It works.",
  prevImage: "nobsc-metal-spatula",
  image: "nobsc-metal-spatula",
  fullImage: null,
  tinyImage: null
};

describe('userCreateNewPrivateEquipment action creator', () => {
  it('returns the correct action type', () => {
    expect(userCreateNewPrivateEquipment(creatingEquipmentInfo).type)
      .toEqual(USER_CREATE_NEW_PRIVATE_EQUIPMENT);
  });

  it('returns the correct equipmentInfo', () => {
    expect(userCreateNewPrivateEquipment(creatingEquipmentInfo).equipmentInfo)
      .toEqual(creatingEquipmentInfo);
  });
});

describe('userCreateNewPrivateEquipmentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userCreateNewPrivateEquipmentSucceeded('OK.').type)
      .toEqual(USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userCreateNewPrivateEquipmentSucceeded('OK.').message)
      .toEqual('OK.');
  });
});

describe('userCreateNewPrivateEquipmentFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userCreateNewPrivateEquipmentFailed('Try again.').type)
      .toEqual(USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED);
  });

  it('returns the correct message', () => {
    expect(userCreateNewPrivateEquipmentFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('userEditPrivateEquipment action creator', () => {
  it('returns the correct action type', () => {
    expect(userEditPrivateEquipment(editingEquipmentInfo).type)
      .toEqual(USER_EDIT_PRIVATE_EQUIPMENT);
  });

  it('returns the correct equipmentInfo', () => {
    expect(userEditPrivateEquipment(editingEquipmentInfo).equipmentInfo)
      .toEqual(editingEquipmentInfo);
  });
});

describe('userEditPrivateEquipmentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userEditPrivateEquipmentSucceeded('OK.').type)
      .toEqual(USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userEditPrivateEquipmentSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userEditPrivateEquipmentFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userEditPrivateEquipmentFailed('Try again.').type)
      .toEqual(USER_EDIT_PRIVATE_EQUIPMENT_FAILED);
  });

  it('returns the correct message', () => {
    expect(userEditPrivateEquipmentFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('userDeletePrivateEquipment action creator', () => {
  it('returns the correct action type', () => {
    expect(userDeletePrivateEquipment(7).type)
      .toEqual(USER_DELETE_PRIVATE_EQUIPMENT);
  });

  it('returns the correct id', () => {
    expect(userDeletePrivateEquipment(7).id).toEqual(7);
  });
});

describe('userDeletePrivateEquipmentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userDeletePrivateEquipmentSucceeded('OK.').type)
      .toEqual(USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userDeletePrivateEquipmentSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userDeletePrivateEquipmentFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userDeletePrivateEquipmentFailed('Try again.').type)
      .toEqual(USER_DELETE_PRIVATE_EQUIPMENT_FAILED);
  });

  it('returns the correct message', () => {
    expect(userDeletePrivateEquipmentFailed('Try again.').message)
      .toEqual('Try again.');
  });
});