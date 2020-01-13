import React from 'react';
import { shallow } from 'enzyme';

//import { storeFactory } from '../test/testUtils';
import Login, { Login as UnconnectedLogin } from './Login';

/**
 * @function setup
 * @params {object} state - State for this setup.
 * @returns {ShallowWrapper}
*/
const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<Login store={store} />).dive();  // CHANGE to Unconnected
  return wrapper;
};

describe('Login redux access', () => {

  it('can get `isAuthenticated` state', () => {
    const wrapper = setup({isAuthenticated});
    const isAuthenticatedProp = wrapper.instance().props.isAuthenticated;
    expect(isAuthenticatedProp).toBe(true);
  });
  it('can get `message` state', () => {
    const wrapper = setup({message});
    const messageProp = wrapper.instance().props.message;
    expect(messageProp).toBe(true);
  });

  test('`authUserLogin` action creator is a function on the props', () => {
    const wrapper = setup({message});
    const authUserLoginProp = wrapper.instance().props.authUserLogin;
    expect(authUserLoginProp).toBeInstanceOf(Function);
  });
  
});