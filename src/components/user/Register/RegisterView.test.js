import RegisterView from './RegisterView';

describe('RegisterView', () => {
  let wrapper;
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

  it('should redirect to home route if authenticated', () => {
    wrapper.setProps({isAuthenticated: true});
    expect(wrapper.find()).toBeNull();
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