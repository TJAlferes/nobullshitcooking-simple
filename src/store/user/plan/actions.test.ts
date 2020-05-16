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

const creatingPlanInfo = {planName: "Plan B", planData: ""};
const editingPlanInfo = {planId: 2, planName: "Plan B", planData: ""};

describe('the userCreateNewPlan action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPlan(creatingPlanInfo).type;
    const expected = USER_CREATE_NEW_PLAN;
    expect(actual).toEqual(expected);
  });
  it('returns the correct planInfo', () => {
    const actual = userCreateNewPlan(creatingPlanInfo).planInfo;
    const expected = creatingPlanInfo;
    expect(actual).toEqual(expected);
  });
});
describe('the userCreateNewPlanSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPlanSucceeded('OK.').type;
    const expected = USER_CREATE_NEW_PLAN_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPlanSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userCreateNewPlanFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPlanFailed('Try again.').type;
    const expected = USER_CREATE_NEW_PLAN_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPlanFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userEditPlan action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPlan(editingPlanInfo).type;
    const expected = USER_EDIT_PLAN;
    expect(actual).toEqual(expected);
  });
  it('returns the correct planInfo', () => {
    const actual = userEditPlan(editingPlanInfo).planInfo;
    const expected = editingPlanInfo;
    expect(actual).toEqual(expected);
  });
});
describe('the userEditPlanSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPlanSucceeded('OK.').type;
    const expected = USER_EDIT_PLAN_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPlanSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userEditPlanFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPlanFailed('Try again.').type;
    const expected = USER_EDIT_PLAN_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPlanFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userDeletePlan action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePlan(7).type;
    const expected = USER_DELETE_PLAN;
    expect(actual).toEqual(expected);
  });
  it('returns the correct planId', () => {
    const actual = userDeletePlan(7).planId;
    const expected = 7;
    expect(actual).toEqual(expected);
  });
});
describe('the userDeletePlanSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePlanSucceeded('OK.').type;
    const expected = USER_DELETE_PLAN_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeletePlanSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userDeletePlanFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePlanFailed('Try again.').type;
    const expected = USER_DELETE_PLAN_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeletePlanFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});