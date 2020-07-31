import React from 'react';
import { Link } from 'react-router-dom';

import { LoaderButton } from '../LoaderButton/LoaderButton';
import './login.css';

export function LoginView({
  email,
  feedback,
  handleEmailChange,
  handleLoginClick,
  handleLoginKeyUp,
  handlePasswordChange,
  loading,
  password,
  validateLoginInfo
}: Props): JSX.Element {
  return (
    <div className="login" onKeyUp={e => handleLoginKeyUp(e)}>
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

      <form className="login-form">
        <h1 className="login-heading">Sign In</h1>
        <p className="login-feedback">{feedback}</p>
        <label className="login-label">Email</label>
        <input
          autoComplete="email"
          autoFocus
          className="login-input"
          disabled={loading}
          id="email"
          maxLength={50}
          name="email"
          onChange={handleEmailChange}
          size={20}
          type="text"
          value={email}
        />
        <label className="login-label">Password</label>
        <input
          autoComplete="current-password"
          className="login-input"
          disabled={loading}
          id="password"
          maxLength={20}
          name="password"
          onChange={handlePasswordChange}
          size={20}
          type="password"
          value={password}
        />
        <LoaderButton
          className="login-button"
          disabled={!validateLoginInfo()}
          id="login-button"
          isLoading={loading}
          loadingText="Signing In..."
          name="submit"
          onClick={handleLoginClick}
          onKeyUp={handleLoginKeyUp}
          text="Sign In"
        />
      </form>
    </div>
  );
}

type Props = {
  email: string;
  feedback: string;
  handleEmailChange(e: React.SyntheticEvent<EventTarget>): void;
  handleLoginClick(e: React.MouseEvent): void;
  handleLoginKeyUp(e: React.KeyboardEvent): void;
  handlePasswordChange(e: React.SyntheticEvent<EventTarget>): void;
  loading: boolean;
  password: string;
  validateLoginInfo(): boolean;
};