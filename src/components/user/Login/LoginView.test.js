import { shallow } from 'enzyme';
import React from 'react';

import LoaderButton from '../../LoaderButton/LoaderButton';

import LoginView from './LoginView';

const handleEmailChange = jest.fn();
const handlePasswordChange = jest.fn();
const validateLoginInfo = jest.fn();
const handleLogin = jest.fn();

let wrapper;

describe('LoginView', () => {
  beforeEach(() => {
    wrapper = shallow(
      <LoginView
        feedback="Some message."
        loading={false}
        email=""
        password=""
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleLogin={handleLogin}
        validateLoginInfo={validateLoginInfo}
      />
    );
  });

  it('displays feedback', () => {
    expect(wrapper.find('p.error-message').text()).toEqual("Some message.");
  });

  it('displays an email input element', () => {
    expect(wrapper.find('input.login-input[name="email"]')).toHaveLength(1);
  });

  it('displays a password input element', () => {
    expect(wrapper.find('input.login-input[name="password"]')).toHaveLength(1);
  });

  it('displays a LoaderButton component with text Sign In', () => {
    expect(wrapper.find(LoaderButton).props().text).toEqual("Sign In");
  });
});