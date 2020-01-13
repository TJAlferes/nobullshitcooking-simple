import React from 'react';
import { shallow } from 'enzyme';

//import { storeFactory } from '../test/testUtils';
import Register, { Register as UnconnectedRegister } from './Register';

/**
 * @function setup
 * @params {object} state - State for this setup.
 * @returns {ShallowWrapper}
*/
const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<Register store={store} />).dive();  // CHANGE to Unconnected
  return wrapper;
};

describe('Register redux access', () => {

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

  test('`authUserRegister` action creator is a function on the props', () => {
    const wrapper = setup({message});
    const authUserRegisterProp = wrapper.instance().props.authUserRegister;
    expect(authUserRegisterProp).toBeInstanceOf(Function);
  });
  
});