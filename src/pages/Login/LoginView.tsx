import React from 'react';
import { Link } from 'react-router-dom';

import { LoaderButton } from '../../components/LoaderButton/LoaderButton';
import './login.css';

const url = "https://s3.amazonaws.com/nobsc-images-01/auth/";

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
      <Link className="login__home-links" to="/">
        <img className="home-link--desktop" src={`${url}logo-large-white.png`} />
        <img className="home-link--mobile" src={`${url}logo-small-white.png`} />
      </Link>

      <form className="login__form">
        <h1 className="login__heading">Sign In</h1>

        <p className="login__feedback">{feedback}</p>

        <label className="login__label">Email</label>

        <input
          autoComplete="email"
          autoFocus
          className="login__input"
          disabled={loading}
          id="email"
          maxLength={50}
          name="email"
          onChange={handleEmailChange}
          size={20}
          type="text"
          value={email}
        />

        <label className="login__label">Password</label>

        <input
          autoComplete="current-password"
          className="login__input"
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
          className="login__button"
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