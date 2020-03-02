import { shallow } from 'enzyme';
import React from 'react';

import { Login } from './Login';

const authUserLogin = jest.fn();

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <Login message="Some message." authUserLogin={authUserLogin} />
  );
});

describe('Login', () => {
  it('should submit user login info', () => {
    wrapper.setState({email: "person@place.com"});
    wrapper.setState({password: "secret"});
    wrapper.find('#login-button').simulate('click');
    expect(authUserLogin).toBeCalledTimes(1);
  });

  it('should not submit when no email is given', () => {
    wrapper.setState({password: "secret"});
    wrapper.find('#login-button').simulate('click');
    expect(authUserLogin).toBeCalledTimes(0);
  });

  it('should not submit when no password is given', () => {
    wrapper.setState({email: "person@place.com"});
    wrapper.find('#login-button').simulate('click');
    expect(authUserLogin).toBeCalledTimes(0);
  });

  it('should not submit when email is less than 5 characters', () => {
    wrapper.setState({email: "p@p."});
    wrapper.setState({password: "secret"});
    wrapper.find('#create_account_button').simulate('click');
    expect(authUserLogin).toBeCalledTimes(0);
  });

  it('should not submit when password is less than 6 characters', () => {
    wrapper.setState({email: "person@place.com"});
    wrapper.setState({password: "secre"});
    wrapper.find('#create_account_button').simulate('click');
    expect(authUserLogin).toBeCalledTimes(0);
  });
});