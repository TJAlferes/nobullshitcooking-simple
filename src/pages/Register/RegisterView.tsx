import React from 'react';
import { Link } from 'react-router-dom';

import { LoaderButton } from '../../components/LoaderButton/LoaderButton';
import './register.css';

const url = "https://s3.amazonaws.com/nobsc-images-01/auth/";

export function RegisterView({
  confirmationCode,
  confirmingUser,
  email,
  feedback,
  loading,
  handleConfirmationCodeChange,
  handleEmailChange,
  handlePasswordChange,
  handlePasswordAgainChange,
  handleRegisterClick,
  handleRegisterKeyUp,
  handleUsernameChange,
  handleVerifyClick,
  handleVerifyKeyUp,
  password,
  passwordAgain,
  username,
  validateConfirmationCode,
  validateRegistrationInfo
}: Props): JSX.Element {
  const registerForm = () => (
    <form className="register__form">
      <h1 className="register__heading">Create Account</h1>

      <p className="register__feedback">{feedback}</p>

      <label className="register__label">Username</label>

      <input
        autoComplete="username"
        autoFocus
        className="register__input"
        disabled={loading}
        id="username"
        maxLength={20}
        name="username"
        onChange={handleUsernameChange}
        size={20}
        type="text"
        value={username}
      />

      <label className="register-label">Email</label>
      
      <input
        autoComplete="email"
        className="register__input"
        disabled={loading}
        id="email"
        maxLength={60}
        name="email"
        onChange={handleEmailChange}
        size={20}
        type="email"
        value={email}
      />

      <label className="register-label">Password</label>

      <input
        autoComplete="current-password"
        className="register__input"
        disabled={loading}
        id="password"
        maxLength={20}
        name="password"
        onChange={handlePasswordChange}
        size={20}
        type="password"
        value={password}
      />

      <label className="register-label">Password Again</label>

      <input
        autoComplete="current-password"
        className="register__input"
        disabled={loading}
        id="passwordAgain"
        maxLength={20}
        name="passwordAgain"
        onChange={handlePasswordAgainChange}
        size={20}
        type="password"
        value={passwordAgain}
      />

      <LoaderButton
        className="create-account-button"
        disabled={!validateRegistrationInfo()}
        id="create_account_button"
        isLoading={loading}
        loadingText="Creating Account..."
        name="submit"
        onClick={handleRegisterClick}
        onKeyUp={handleRegisterKeyUp}
        text="Create Account"
      />
    </form>
  );

  const verifyForm = () => (
    <form className="register-confirm-form">
      <h1 className="register__heading">Verify</h1>

      <p className="register__feedback">{feedback}</p>

      <label className="register__label">Code</label>
      <input
        autoComplete="confirmation-code"
        autoFocus
        className="register__input"
        disabled={loading}
        id="confirmationCode"
        maxLength={20}
        name="confirmationCode"
        onChange={handleConfirmationCodeChange}
        size={20}
        type="text"
        value={confirmationCode}
      />

      <p>Please check your email for the confirmation code.</p>

      <LoaderButton
        className="verify-confirmation-code-button"
        disabled={!validateConfirmationCode()}
        id="verify_confirmation_code_button"
        isLoading={loading}
        loadingText="Verifying..."
        name="submit"
        onClick={handleVerifyClick}
        onKeyUp={handleRegisterKeyUp}
        text="Verify"
      />
    </form>
  );

  return (
    <div className="register" onKeyUp={e => handleRegisterKeyUp(e)}>
      <Link className="register__home-links" to="/">
        <img className="home-link--desktop" src={`${url}logo-large-white.png`} />
        <img className="home-link--mobile" src={`${url}logo-small-white.png`} />
      </Link>

      {confirmingUser === true ? verifyForm() : registerForm()}

      <div className="register__links">
        <Link className="register__link" to="/page/site/terms">
          Terms of Use
        </Link>
        <Link className="register__link" to="/page/site/privacy">
          Privacy Policy
        </Link>
        <Link className="register__link" to="/page/site/help">
          Help
        </Link>
      </div>

      <p className="register__copyright">
        Copyright 2015-2020 NoBullshitCooking. All Rights Reserved.
      </p>

    </div>
  );
}

type Props = {
  confirmationCode: string;
  confirmingUser: boolean;
  email: string;
  feedback: string;
  loading: boolean;
  handleConfirmationCodeChange(e: React.SyntheticEvent<EventTarget>): void;
  handleEmailChange(e: React.SyntheticEvent<EventTarget>): void;
  handlePasswordChange(e: React.SyntheticEvent<EventTarget>): void;
  handlePasswordAgainChange(e: React.SyntheticEvent<EventTarget>): void;
  handleRegisterClick(): void;
  handleRegisterKeyUp(e: React.KeyboardEvent): void;
  handleUsernameChange(e: React.SyntheticEvent<EventTarget>): void;
  handleVerifyClick(): void;
  handleVerifyKeyUp(e: React.KeyboardEvent): void;
  password: string;
  passwordAgain: string;
  username: string;
  validateConfirmationCode(): boolean;
  validateRegistrationInfo(): boolean;
};