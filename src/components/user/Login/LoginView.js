import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import './login.css';
import LoaderButton from '../../LoaderButton/LoaderButton';

// TO DO: make inputs uneditable/unselectable while isLoading,
// make Sign In button css not change color on hover while in Signing In...
// AKA isloading state

const LoginView = ({
  isAuthenticated,
  message,
  loading,
  email,
  handleEmailChange,
  password,
  handlePasswordChange,
  validate,
  handleLogin
}) => (
  <div className="login" onKeyUp={(e) => handleLogin(e)}>
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
    <form className="login-form">
      <h1>Sign In</h1>
      <p className="error-message">{message}</p>
      <label>Email</label>
      <input
        type="text"
        name="email"
        id="email"
        size="20"
        maxLength="50"
        autoFocus
        value={email}
        onChange={handleEmailChange}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        id="password"
        size="20"
        maxLength="20"
        value={password}
        onChange={handlePasswordChange}
      />
      <LoaderButton
        type="button"
        name="submit"
        id="sign_in_button"
        text="Sign In"
        loadingText="Signing In..."
        isLoading={loading}
        disabled={!validate()}
        onClick={handleLogin}
      />
    </form>
  </div>
);

export default LoginView;