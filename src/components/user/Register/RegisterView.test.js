import { mount, render, shallow } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import { TestingRouter } from '../../../../test/testUtils';

import RegisterView from './RegisterView';

const handleUsernameChange = jest.fn();
const handleEmailChange = jest.fn();
const handlePasswordChange = jest.fn();
const handlePasswordAgainChange = jest.fn();
const handleRegisterSubmit = jest.fn();
const validateRegistrationInfo = jest.fn();

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <MemoryRouter initialEntries={["user/login"]}>
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
    </MemoryRouter>
  );
});

describe('RegisterView', () => {
  it('should redirect to home route if authenticated', () => {
    // Good... God...
    const container = render(
      <TestingRouter
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
    )

    // I mean... Good... God...
    expect(container[0].children[0].data).toEqual('/');

    /*let testLocation;
    let wrapper = mount(
      <MemoryRouter initialEntries={["/user/login"]}>
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
        <Route
          path="*"
          render={({ location }) => {
            console.log(location);
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>
    );
    wrapper.setProps({isAuthenticated: true});
    console.log(testLocation);
    console.log(wrapper.props);
    expect(testLocation.pathname).toBe("/");*/
  });
  it('displays a username input element', () => {

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