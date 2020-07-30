import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Register } from './Register';

const authUserRegister = jest.fn();
const authUserVerify = jest.fn();

const initialProps = {
  authUserRegister,
  authUserVerify,
  confirmingUser: false,
  message: "Some message."
};

let wrapper: ReactWrapper;

beforeEach(() => {
  wrapper = mount(<MemoryRouter><Register {...initialProps} /></MemoryRouter>);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Register', () => {
  it('should record and display changes to username', () => {
    wrapper.find('input[name="username"]')
    .simulate('change', {target: {name: "username", value: "Person"}});

    expect(wrapper.find('input[name="username"]').props().value)
    .toEqual("Person");
  });

  it('should record and display changes to email', () => {
    wrapper.find('input[name="email"]')
    .simulate('change', {target: {name: "email", value: "person@place.com"}});

    expect(wrapper.find('input[name="email"]').props().value)
    .toEqual("person@place.com");
  });

  it('should record and display changes to password', () => {
    wrapper.find('input[name="password"]')
    .simulate('change', {target: {name: "password", value: "secret"}});

    expect(wrapper.find('input[name="password"]').props().value)
    .toEqual("secret");
  });

  it('should record and display changes to passwordAgain', () => {
    wrapper.find('input[name="passwordAgain"]')
    .simulate('change', {target: {name: "passwordAgain", value: "secret"}});

    expect(wrapper.find('input[name="passwordAgain"]').props().value)
    .toEqual("secret");
  });

  it('should submit user registration info', () => {
    wrapper.find('input[name="username"]')
    .simulate('change', {target: {name: "username", value: "Person"}});

    wrapper.find('input[name="email"]')
    .simulate('change', {target: {name: "email", value: "person@place.com"}});
    
    wrapper.find('input[name="password"]')
    .simulate('change', {target: {name: "password", value: "secret"}});

    wrapper.find('input[name="passwordAgain"]')
    .simulate('change', {target: {name: "passwordAgain", value: "secret"}});

    wrapper.find('#create_account_button').at(1).simulate('click');

    expect(authUserRegister).toBeCalledTimes(1);
  });

  it('should not submit when no username is given', () => {
    wrapper.find('input[name="email"]')
    .simulate('change', {target: {name: "email", value: "person@place.com"}});
    
    wrapper.find('input[name="password"]')
    .simulate('change', {target: {name: "password", value: "secret"}});

    wrapper.find('input[name="passwordAgain"]')
    .simulate('change', {target: {name: "passwordAgain", value: "secret"}});

    wrapper.find('#create_account_button').at(1).simulate('click');

    expect(authUserRegister).toBeCalledTimes(0);
  });

  it('should not submit when no email is given', () => {
    wrapper.find('input[name="username"]')
    .simulate('change', {target: {name: "username", value: "Person"}});
    
    wrapper.find('input[name="password"]')
    .simulate('change', {target: {name: "password", value: "secret"}});

    wrapper.find('input[name="passwordAgain"]')
    .simulate('change', {target: {name: "passwordAgain", value: "secret"}});

    wrapper.find('#create_account_button').at(1).simulate('click');

    expect(authUserRegister).toBeCalledTimes(0);
  });

  it('should not submit when no password is given', () => {
    wrapper.find('input[name="username"]')
    .simulate('change', {target: {name: "username", value: "Person"}});

    wrapper.find('input[name="email"]')
    .simulate('change', {target: {name: "email", value: "person@place.com"}});

    wrapper.find('#create_account_button').at(1).simulate('click');

    expect(authUserRegister).toBeCalledTimes(0);
  });

  it('should not submit when given passwords are different', () => {
    wrapper.find('input[name="username"]')
    .simulate('change', {target: {name: "username", value: "Person"}});

    wrapper.find('input[name="email"]')
    .simulate('change', {target: {name: "email", value: "person@place.com"}});
    
    wrapper.find('input[name="password"]')
    .simulate('change', {target: {name: "password", value: "secret"}});

    wrapper.find('input[name="passwordAgain"]')
    .simulate('change', {target: {name: "passwordAgain", value: "secre"}});

    wrapper.find('#create_account_button').at(1).simulate('click');

    expect(authUserRegister).toBeCalledTimes(0);
  });

  it('should not submit when username is less than 2 characters', () => {
    wrapper.find('input[name="username"]')
    .simulate('change', {target: {name: "username", value: "P"}});

    wrapper.find('input[name="email"]')
    .simulate('change', {target: {name: "email", value: "person@place.com"}});
    
    wrapper.find('input[name="password"]')
    .simulate('change', {target: {name: "password", value: "secret"}});

    wrapper.find('input[name="passwordAgain"]')
    .simulate('change', {target: {name: "passwordAgain", value: "secret"}});

    wrapper.find('#create_account_button').at(1).simulate('click');

    expect(authUserRegister).toBeCalledTimes(0);
  });

  it('should not submit when email is less than 5 characters', () => {
    wrapper.find('input[name="username"]')
    .simulate('change', {target: {name: "username", value: "Person"}});

    wrapper.find('input[name="email"]')
    .simulate('change', {target: {name: "email", value: "p@p."}});
    
    wrapper.find('input[name="password"]')
    .simulate('change', {target: {name: "password", value: "secret"}});

    wrapper.find('input[name="passwordAgain"]')
    .simulate('change', {target: {name: "passwordAgain", value: "secret"}});

    wrapper.find('#create_account_button').at(1).simulate('click');

    expect(authUserRegister).toBeCalledTimes(0);
  });

  it('should not submit when password is less than 6 characters', () => {
    wrapper.find('input[name="username"]')
    .simulate('change', {target: {name: "username", value: "Person"}});

    wrapper.find('input[name="email"]')
    .simulate('change', {target: {name: "email", value: "person@place.com"}});
    
    wrapper.find('input[name="password"]')
    .simulate('change', {target: {name: "password", value: "secre"}});

    wrapper.find('input[name="passwordAgain"]')
    .simulate('change', {target: {name: "passwordAgain", value: "secre"}});

    wrapper.find('#create_account_button').at(1).simulate('click');

    expect(authUserRegister).toBeCalledTimes(0);
  });
});