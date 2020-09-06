import {
  userCreateNewPlan,
  userCreateNewPlanSucceeded,
  userCreateNewPlanFailed,
  userEditPlan,
  userEditPlanSucceeded,
  userEditPlanFailed,
  userDeletePlan,
  userDeletePlanSucceeded,
  userDeletePlanFailed
} from './actions';
import {
  USER_CREATE_NEW_PLAN,
  USER_CREATE_NEW_PLAN_SUCCEEDED,
  USER_CREATE_NEW_PLAN_FAILED,
  USER_EDIT_PLAN,
  USER_EDIT_PLAN_SUCCEEDED,
  USER_EDIT_PLAN_FAILED,
  USER_DELETE_PLAN,
  USER_DELETE_PLAN_SUCCEEDED,
  USER_DELETE_PLAN_FAILED
} from './types';

const creatingPlanInfo = {name: "Plan B", data: ""};
const editingPlanInfo = {id: 2, name: "Plan B", data: ""};

describe('userCreateNewPlan action creator', () => {
  it('returns the correct action type', () => {
    expect(userCreateNewPlan(creatingPlanInfo).type)
      .toEqual(USER_CREATE_NEW_PLAN);
  });

  it('returns the correct planInfo', () => {
    expect(userCreateNewPlan(creatingPlanInfo).planInfo)
      .toEqual(creatingPlanInfo);
  });
});

describe('userCreateNewPlanSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userCreateNewPlanSucceeded('OK.').type)
      .toEqual(USER_CREATE_NEW_PLAN_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userCreateNewPlanSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userCreateNewPlanFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userCreateNewPlanFailed('Try again.').type)
      .toEqual(USER_CREATE_NEW_PLAN_FAILED);
  });

  it('returns the correct message', () => {
    expect(userCreateNewPlanFailed('Try again.').message).toEqual('Try again.');
  });
});

describe('userEditPlan action creator', () => {
  it('returns the correct action type', () => {
    expect(userEditPlan(editingPlanInfo).type).toEqual(USER_EDIT_PLAN);
  });

  it('returns the correct planInfo', () => {
    expect(userEditPlan(editingPlanInfo).planInfo).toEqual(editingPlanInfo);
  });
});

describe('userEditPlanSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userEditPlanSucceeded('OK.').type).toEqual(USER_EDIT_PLAN_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userEditPlanSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userEditPlanFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userEditPlanFailed('Try again.').type)
      .toEqual(USER_EDIT_PLAN_FAILED);
  });

  it('returns the correct message', () => {
    expect(userEditPlanFailed('Try again.').message).toEqual('Try again.');
  });
});

describe('userDeletePlan action creator', () => {
  it('returns the correct action type', () => {
    expect(userDeletePlan(7).type).toEqual(USER_DELETE_PLAN);
  });

  it('returns the correct id', () => {
    expect(userDeletePlan(7).id).toEqual(7);
  });
});

describe('userDeletePlanSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userDeletePlanSucceeded('OK.').type)
      .toEqual(USER_DELETE_PLAN_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userDeletePlanSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userDeletePlanFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userDeletePlanFailed('Try again.').type)
      .toEqual(USER_DELETE_PLAN_FAILED);
  });

  it('returns the correct message', () => {
    expect(userDeletePlanFailed('Try again.').message).toEqual('Try again.');
  });
});