import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { LoaderButton } from '../LoaderButton/LoaderButton';
import { LoginView } from './LoginView';

const handleEmailChange = jest.fn();
const handlePasswordChange = jest.fn();
const validateLoginInfo = jest.fn();
const handleLoginClick = jest.fn();
const handleLoginKeyUp = jest.fn();

let wrapper: ShallowWrapper;

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
        handleLoginClick={handleLoginClick}
        handleLoginKeyUp={handleLoginKeyUp}
        validateLoginInfo={validateLoginInfo}
      />
    );
  });

  it('displays feedback', () => {
    expect(wrapper.find('p.login-feedback').text()).toEqual("Some message.");
  });

  it('displays an email input element', () => {
    expect(wrapper.find('input[name="email"]')).toHaveLength(1);
  });

  it('displays a password input element', () => {
    expect(wrapper.find('input[name="password"]')).toHaveLength(1);
  });

  it('displays a LoaderButton component with text Sign In', () => {
    expect(wrapper.find(LoaderButton).props().text).toEqual("Sign In");
  });
});