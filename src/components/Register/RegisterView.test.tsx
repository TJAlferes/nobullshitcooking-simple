import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { LoaderButton } from '../LoaderButton/LoaderButton';
import { RegisterView } from './RegisterView';

const handleConfirmationCodeChange = jest.fn();
const handleUsernameChange = jest.fn();
const handleEmailChange = jest.fn();
const handlePasswordChange = jest.fn();
const handlePasswordAgainChange = jest.fn();
const handleRegisterClick = jest.fn();
const handleRegisterKeyUp = jest.fn();
const handleVerifyClick = jest.fn();
const handleVerifyKeyUp = jest.fn();
const validateRegistrationInfo = jest.fn();
const validateConfirmationCode = jest.fn();

let wrapper: ShallowWrapper;

describe('RegisterView account creation / registration', () => {
  beforeEach(() => {
    wrapper = shallow(
      <RegisterView
        feedback="Some message."
        loading={false}
        confirmingUser={false}
        confirmationCode=""
        username=""
        email=""
        password=""
        passwordAgain=""
        handleConfirmationCodeChange={handleConfirmationCodeChange}
        handleUsernameChange={handleUsernameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handlePasswordAgainChange={handlePasswordAgainChange}
        handleRegisterClick={handleRegisterClick}
        handleRegisterKeyUp={handleRegisterKeyUp}
        handleVerifyClick={handleVerifyClick}
        handleVerifyKeyUp={handleVerifyKeyUp}
        validateRegistrationInfo={validateRegistrationInfo}
        validateConfirmationCode={validateConfirmationCode}
      />
    );
  });

  it('displays feedback', () => {
    expect(wrapper.find('p.register-feedback').text()).toEqual("Some message.");
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
  beforeEach(() => {
    wrapper = shallow(
      <RegisterView
        feedback="Some message."
        loading={false}
        confirmingUser={true}
        confirmationCode=""
        username=""
        email=""
        password=""
        passwordAgain=""
        handleConfirmationCodeChange={handleConfirmationCodeChange}
        handleUsernameChange={handleUsernameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handlePasswordAgainChange={handlePasswordAgainChange}
        handleRegisterClick={handleRegisterClick}
        handleRegisterKeyUp={handleRegisterKeyUp}
        handleVerifyClick={handleVerifyClick}
        handleVerifyKeyUp={handleVerifyKeyUp}
        validateRegistrationInfo={validateRegistrationInfo}
        validateConfirmationCode={validateConfirmationCode}
      />
    );
  });

  it('displays feedback', () => {
    expect(wrapper.find('p.register-feedback').text()).toEqual("Some message.");
  });

  it('displays a password again input element', () => {
    expect(wrapper.find('input[name="confirmationCode"]')).toHaveLength(1);
  });

  it('displays a LoaderButton component with text Verify', () => {
    expect(wrapper.find(LoaderButton).props().text).toEqual("Verify");
  });
});