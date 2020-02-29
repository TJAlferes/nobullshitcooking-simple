import { render, shallow } from 'enzyme';
import React from 'react';

import { TestingRouter } from '../../../../test/testUtils';  // TO DO: change, this is a false positive

import RegisterView from './RegisterView';

const handleUsernameChange = jest.fn();
const handleEmailChange = jest.fn();
const handlePasswordChange = jest.fn();
const handlePasswordAgainChange = jest.fn();
const handleRegisterSubmit = jest.fn();
const validateRegistrationInfo = jest.fn();

let wrapper;

// TO DO: change, this is a false positive

describe('RegisterView Redirect', () => {
  it('should redirect to home route if authenticated', () => {
    const container = render(
      <TestingRouter
        Path="/user/register"
        ComponentWithRedirection={() => (
          <RegisterView
            isAuthenticated={true}
            //feedback={feedback}
            //loading={loading}
            //username={username}
            //email={email}
            //password={password}
            //passwordAgain={passwordAgain}
            handleUsernameChange={handleUsernameChange}
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
            handlePasswordAgainChange={handlePasswordAgainChange}
            handleRegisterSubmit={handleRegisterSubmit}
            validateRegistrationInfo={validateRegistrationInfo}
          />
        )}
        RedirectUrl={'/'}
      />
    );
    console.log(container);
    expect(container[0].children[0].data).toEqual('/');
  });
});

describe('RegisterView', () => {
  beforeEach(() => {
    wrapper = shallow(
      <RegisterView
        //isAuthenticated={isAuthenticated}
        //feedback={feedback}
        //loading={loading}
        //username={username}
        //email={email}
        //password={password}
        //passwordAgain={passwordAgain}
        handleUsernameChange={handleUsernameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handlePasswordAgainChange={handlePasswordAgainChange}
        handleRegisterSubmit={handleRegisterSubmit}
        validateRegistrationInfo={validateRegistrationInfo}
      />
    );
  });

  it('displays a username input element', () => {
    /*console.log(wrapper);
    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');*/
  });

  it('displays an email input element', () => {

  });

  it('displays a password input element', () => {

  });

  it('displays a password again input element', () => {

  });

  it('displays a create account button element', () => {

  });
});