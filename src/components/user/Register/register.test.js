import { shallow } from 'enzyme';
import React from 'react';

import { Register } from './Register';

const authUserRegister = jest.fn();
const authUserVerify = jest.fn();

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <Register
      //history={}
      //isAuthenticated={}
      //message={}
      authUserRegister={authUserRegister}
      authUserVerify={authUserVerify}
    />
  );
});

describe('Register', () => {
  it('should submit user registration info', () => {
    wrapper.setState({username: "Person"});
    wrapper.setState({email: "person@place.com"});
    wrapper.setState({password: "secret"});
    wrapper.setState({passwordAgain: "secret"});
    wrapper.find('#create_account_button').simulate('click');
    expect(authUserRegister).toBeCalledTimes(1);
  });

  it('should not submit when no username is given', () => {
    wrapper.setState({email: "person@place.com"});
    wrapper.setState({password: "secret"});
    wrapper.setState({passwordAgain: "secret"});
    wrapper.find('#create_account_button').simulate('click');
    expect(authUserRegister).toBeCalledTimes(0);
  });

  it('should not submit when no email is given', () => {
    wrapper.setState({username: "Person"});
    wrapper.setState({password: "secret"});
    wrapper.setState({passwordAgain: "secret"});
    wrapper.find('#create_account_button').simulate('click');
    expect(authUserRegister).toBeCalledTimes(0);
  });

  it('should not submit when no password is given', () => {
    wrapper.setState({username: "Person"});
    wrapper.setState({email: "person@place.com"});
    wrapper.find('#create_account_button').simulate('click');
    expect(authUserRegister).toBeCalledTimes(0);
  });

  it('should not submit when given passwords are different', () => {
    wrapper.setState({username: "Person"});
    wrapper.setState({email: "person@place.com"});
    wrapper.setState({password: "secret"});
    wrapper.setState({passwordAgain: "secre"});
    wrapper.find('#create_account_button').simulate('click');
    expect(authUserRegister).toBeCalledTimes(0);
  });

  it('should not submit when username is less than 2 characters', () => {
    wrapper.setState({username: "P"});
    wrapper.setState({email: "person@place.com"});
    wrapper.setState({password: "secret"});
    wrapper.setState({passwordAgain: "secret"});
    wrapper.find('#create_account_button').simulate('click');
    expect(authUserRegister).toBeCalledTimes(0);
  });

  it('should not submit when email is less than 5 characters', () => {
    wrapper.setState({username: "Person"});
    wrapper.setState({email: "p@p."});
    wrapper.setState({password: "secret"});
    wrapper.setState({passwordAgain: "secret"});
    wrapper.find('#create_account_button').simulate('click');
    expect(authUserRegister).toBeCalledTimes(0);
  });

  it('should not submit when password is less than 6 characters', () => {
    wrapper.setState({username: "Person"});
    wrapper.setState({email: "person@place.com"});
    wrapper.setState({password: "secre"});
    wrapper.setState({passwordAgain: "secre"});
    wrapper.find('#create_account_button').simulate('click');
    expect(authUserRegister).toBeCalledTimes(0);
  });
});

/*describe('Register', () => {
  it('can get `isAuthenticated` state', () => {
    //const wrapper = setup({isAuthenticated});
    const wrapper = shallow(<Register />).dive();
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
});*/