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
} from '../../../../src/store/staff/equipment/actions';
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
} from '../../../../src/store/staff/equipment/types';

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

describe('staffCreateNewEquipment action creator', () => {
  it('returns the correct action type', () => {
    expect(staffCreateNewEquipment(creatingEquipmentInfo).type)
      .toEqual(STAFF_CREATE_NEW_EQUIPMENT);
  });

  it('returns the correct equipmentInfo', () => {
    expect(staffCreateNewEquipment(creatingEquipmentInfo).equipmentInfo)
      .toEqual(creatingEquipmentInfo);
  });
});

describe('staffCreateNewEquipmentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(staffCreateNewEquipmentSucceeded('OK.').type)
      .toEqual(STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(staffCreateNewEquipmentSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('staffCreateNewEquipmentFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(staffCreateNewEquipmentFailed('Try again.').type)
      .toEqual(STAFF_CREATE_NEW_EQUIPMENT_FAILED);
  });

  it('returns the correct message', () => {
    expect(staffCreateNewEquipmentFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('staffEditEquipment action creator', () => {
  it('returns the correct action type', () => {
    expect(staffEditEquipment(editingEquipmentInfo).type)
      .toEqual(STAFF_EDIT_EQUIPMENT);
  });

  it('returns the correct equipmentInfo', () => {
    expect(staffEditEquipment(editingEquipmentInfo).equipmentInfo)
      .toEqual(editingEquipmentInfo);
  });
});

describe('staffEditEquipmentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(staffEditEquipmentSucceeded('OK.').type)
      .toEqual(STAFF_EDIT_EQUIPMENT_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(staffEditEquipmentSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('staffEditEquipmentFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(staffEditEquipmentFailed('Try again.').type)
      .toEqual(STAFF_EDIT_EQUIPMENT_FAILED);
  });

  it('returns the correct message', () => {
    expect(staffEditEquipmentFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('staffDeleteEquipment action creator', () => {
  it('returns the correct action type', () => {
    expect(staffDeleteEquipment(7).type).toEqual(STAFF_DELETE_EQUIPMENT);
  });

  it('returns the correct equipmentId', () => {
    expect(staffDeleteEquipment(7).id).toEqual(7);
  });
});

describe('staffDeleteEquipmentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(staffDeleteEquipmentSucceeded('OK.').type)
      .toEqual(STAFF_DELETE_EQUIPMENT_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(staffDeleteEquipmentSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('staffDeleteEquipmentFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(staffDeleteEquipmentFailed('Try again.').type)
      .toEqual(STAFF_DELETE_EQUIPMENT_FAILED);
  });

  it('returns the correct message', () => {
    expect(staffDeleteEquipmentFailed('Try again.').message)
      .toEqual('Try again.');
  });
});