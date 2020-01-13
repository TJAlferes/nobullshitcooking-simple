import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import './registerView.css';
import LoaderButton from '../../LoaderButton/LoaderButton';

const RegisterView = ({
  isAuthenticated,
  feedback,
  loading,
  username,
  handleUsernameChange,
  email,
  handleEmailChange,
  password,
  handlePasswordChange,
  passwordAgain,
  handlePasswordAgainChange,
  validateRegistrationInfo,
  handleRegisterSubmit
}) => {
  const registerForm = () => (
    <form className="register-form">
      <h1>Create Account</h1>
      <p className="error-message">{feedback}</p>
      <label>Username</label>
      <input
        type="text"
        name="username"
        id="username"
        size="20"
        maxLength="20"
        autoFocus
        autoComplete="username"
        value={username}
        onChange={handleUsernameChange}
        disabled={loading}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        id="email"
        size="20"
        maxLength="60"
        autoComplete="email"
        value={email}
        onChange={handleEmailChange}
        disabled={loading}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        id="password"
        size="20"
        maxLength="20"
        autoComplete="current-password"
        value={password}
        onChange={handlePasswordChange}
        disabled={loading}
      />
      <label>Password Again</label>
      <input
        type="password"
        name="passwordAgain"
        id="passwordAgain"
        size="20"
        maxLength="20"
        autoComplete="current-password"
        value={passwordAgain}
        onChange={handlePasswordAgainChange}
        disabled={loading}
      />
      <LoaderButton
        type="button"
        name="submit"
        className="create-account-button"
        id="create_account_button"
        text="Create Account"
        loadingText="Creating Account..."
        isLoading={loading}
        disabled={!validateRegistrationInfo()}
        onClick={handleRegisterSubmit}
      />
    </form>
  );

  /*const verifyForm = () => (
    <form className="register-confirm-form">
      <h1>Verify</h1>
      <p className="error-message">{message}</p>
      <label>Code</label>
      <input 
        type="input"
        autoFocus
        value={this.state.confirmationCode}
        onChange={this.handleChange}
      />
      <p>Please check your email for the confirmation code.</p>
      <LoaderButton
        type="submit"
        name="submit"
        className="verify-confirmation-code-button"
        id="verify_confirmation_code_button"
        text="Verify"
        loadingText="Verifying..."
        isLoading={this.state.isLoading}
        disabled={!this.validateConfirmationCode()}
        onClick={this.handleVerifySubmit}
      />
    </form>
  );*/

  return (
    <div className="register" onKeyUp={(e) => handleRegisterSubmit(e)}>
      {isAuthenticated && <Redirect to="/" />}

      <Link className="auth-img-link" to="/">
        <img
          className="auth-img-desktop"
          src="https://s3.amazonaws.com/nobsc-images-01/auth/logo-large-white.png"
        />
        <img
          className="auth-img-mobile"
          src="https://s3.amazonaws.com/nobsc-images-01/auth/logo-small-white.png"
        />
      </Link>

      {/*newUser === true ? registerForm() : verifyForm()*/}
      {registerForm()}

      <ul className="register-links">
        <li className="register-link">
          <Link to="/site/terms-of-use">Terms of Use</Link>
        </li>
        <li className="register-link">
          <Link to="/site/privacy-policy">Privacy Policy</Link>
        </li>
        <li className="register-link">
          <Link to="/site/help">Help</Link>
        </li>
      </ul>

      <p className="register-copyright">
        Copyright 2015-2020 NoBullshitCooking. All Rights Reserved.
      </p>

    </div>
  );
};

export default RegisterView;