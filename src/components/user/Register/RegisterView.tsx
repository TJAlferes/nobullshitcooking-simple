import React from 'react';
import { Link } from 'react-router-dom';

import { LoaderButton } from '../../LoaderButton/LoaderButton';
import './register.css';

// TO DO: fix onKeyUp situation

export function RegisterView({
  feedback,
  loading,
  confirmingUser,
  confirmationCode,
  username,
  email,
  password,
  passwordAgain,
  handleConfirmationCodeChange,
  handleUsernameChange,
  handleEmailChange,
  handlePasswordChange,
  handlePasswordAgainChange,
  handleRegisterClick,
  handleRegisterKeyUp,
  handleVerifyClick,
  handleVerifyKeyUp,
  validateRegistrationInfo,
  validateConfirmationCode
}): JSX.Element {
  const registerForm = () => (
    <form className="register-form">
      <h1 className="register-heading">Create Account</h1>
      <p className="register-feedback">{feedback}</p>
      <label className="register-label">Username</label>
      <input
        className="register-input"
        type="text"
        name="username"
        id="username"
        size={20}
        maxLength={20}
        autoFocus
        autoComplete="username"
        value={username}
        onChange={handleUsernameChange}
        disabled={loading}
      />
      <label className="register-label">Email</label>
      <input
        className="register-input"
        type="email"
        name="email"
        id="email"
        size={20}
        maxLength={60}
        autoComplete="email"
        value={email}
        onChange={handleEmailChange}
        disabled={loading}
      />
      <label className="register-label">Password</label>
      <input
        className="register-input"
        type="password"
        name="password"
        id="password"
        size={20}
        maxLength={20}
        autoComplete="current-password"
        value={password}
        onChange={handlePasswordChange}
        disabled={loading}
      />
      <label className="register-label">Password Again</label>
      <input
        className="register-input"
        type="password"
        name="passwordAgain"
        id="passwordAgain"
        size={20}
        maxLength={20}
        autoComplete="current-password"
        value={passwordAgain}
        onChange={handlePasswordAgainChange}
        disabled={loading}
      />
      <LoaderButton
        className="create-account-button"
        type="button"
        name="submit"
        id="create_account_button"
        text="Create Account"
        loadingText="Creating Account..."
        isLoading={loading}
        disabled={!validateRegistrationInfo()}
        onClick={handleRegisterClick}
        onKeyUp={handleRegisterKeyUp}
      />
    </form>
  );

  const verifyForm = () => (
    <form className="register-confirm-form">
      <h1 className="register-heading">Verify</h1>
      <p className="register-feedback">{feedback}</p>
      <label className="register-label">Code</label>
      <input
        className="register-input"
        type="text"
        name="confirmationCode"
        id="confirmationCode"
        size={20}
        maxLength={20}
        autoFocus
        autoComplete="confirmation-code"
        value={confirmationCode}
        onChange={handleConfirmationCodeChange}
        disabled={loading}
      />
      <p>Please check your email for the confirmation code.</p>
      <LoaderButton
        className="verify-confirmation-code-button"
        type="button"
        name="submit"
        id="verify_confirmation_code_button"
        text="Verify"
        loadingText="Verifying..."
        isLoading={loading}
        disabled={!validateConfirmationCode()}
        onClick={handleVerifyClick}
        onKeyUp={handleRegisterKeyUp}
      />
    </form>
  );

  return (
    <div className="register" onKeyUp={(e) => handleRegisterKeyUp(e)}>
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

      {confirmingUser === true ? verifyForm() : registerForm()}

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
}