import { shallow } from 'enzyme';
import React from 'react';

import { LoaderButton } from '../../../src/components/LoaderButton/LoaderButton';
import { RegisterView } from '../../../src/pages/Register/RegisterView';

const handleConfirmationCodeChange = jest.fn();
const handleEmailChange = jest.fn();
const handlePasswordChange = jest.fn();
const handlePasswordAgainChange = jest.fn();
const handleRegisterClick = jest.fn();
const handleRegisterKeyUp = jest.fn();
const handleUsernameChange = jest.fn();
const handleVerifyClick = jest.fn();
const handleVerifyKeyUp = jest.fn();
const validateConfirmationCode = jest.fn();
const validateRegistrationInfo = jest.fn();

const initialProps = {
  handleConfirmationCodeChange,
  handleEmailChange,
  handlePasswordChange,
  handlePasswordAgainChange,
  handleRegisterClick,
  handleRegisterKeyUp,
  handleUsernameChange,
  handleVerifyClick,
  handleVerifyKeyUp,
  validateConfirmationCode,
  validateRegistrationInfo
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('RegisterView account creation / registration', () => {
  const wrapper = shallow(
    <RegisterView
      confirmationCode=""
      confirmingUser={false}
      email=""
      feedback="Some message."
      loading={false}
      password=""
      passwordAgain=""
      username=""
      {...initialProps}
    />
  );

  it('displays feedback', () => {
    expect(wrapper.find('p.register__feedback').text())
      .toEqual("Some message.");
  });

  it('displays a username input element', () => {
    expect(wrapper.find('input[name="username"]')).toHaveLength(1);
  });

  it('displays an email input element', () => {
    expect(wrapper.find('input[name="email"]')).toHaveLength(1);
  });

  it('displays a password input element', () => {
    expect(wrapper.find('input[name="password"]')).toHaveLength(1);
  });

  it('displays a password again input element', () => {
    expect(wrapper.find('input[name="passwordAgain"]')).toHaveLength(1);
  });

  it('displays a LoaderButton component with text Create Account', () => {
    expect(wrapper.find(LoaderButton).props().text).toEqual("Create Account");
  });
});

describe('RegisterView account confirmation / verification', () => {
  const wrapper = shallow(
    <RegisterView
      confirmationCode=""
      confirmingUser={true}
      email=""
      feedback="Some message."
      loading={false}
      password=""
      passwordAgain=""
      username=""
      {...initialProps}
    />
  );

  it('displays feedback', () => {
    expect(wrapper.find('p.register__feedback').text())
      .toEqual("Some message.");
  });

  it('displays a password again input element', () => {
    expect(wrapper.find('input[name="confirmationCode"]')).toHaveLength(1);
  });

  it('displays a LoaderButton component with text Verify', () => {
    expect(wrapper.find(LoaderButton).props().text).toEqual("Verify");
  });
});