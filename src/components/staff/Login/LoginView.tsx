import React from 'react';
import { Link } from 'react-router-dom';

import LoaderButton from '../../LoaderButton/LoaderButton';

import './login.css';

const LoginView = ({
  feedback,
  loading,
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
  handleLogin,
  validateLoginInfo
}) => (
  <div className="login" onKeyUp={(e) => handleLogin(e)}>
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
        className="login-input"
        type="text"
        name="email"
        id="email"
        size="20"
        maxLength="50"
        autoFocus
        autoComplete="email"
        value={email}
        onChange={handleEmailChange}
        disabled={loading}
      />
      <label className="login-label">Password</label>
      <input
        className="login-input"
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
      <LoaderButton
        className="login-button"
        type="button"
        name="submit"
        id="login-button"
        text="Sign In"
        loadingText="Signing In..."
        isLoading={loading}
        disabled={!validateLoginInfo()}
        onClick={handleLogin}
      />
    </form>
  </div>
);

export default LoginView;