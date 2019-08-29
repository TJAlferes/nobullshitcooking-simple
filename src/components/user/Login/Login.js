import React, { useEffect, useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './login.css';
import LoaderButton from '../../LoaderButton/LoaderButton';
import { authUserLogin } from '../../../store/actions/index';

// TO DO: make inputs uneditable/unselectable while isLoading, make Sign In button css not change color on hover while in Signing In... AKA isloading state

const Login = props => {
  const [ message, setMessage ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) setMessage(props.message);
    return () => isSubscribed = false;
  });

  const handleEmailChange = e => setEmail(e.target.value);

  const handlePasswordChange = e => setPassword(e.target.value);
  
  const handleLogin = (e) => {
    if (!validate()) return;
    if (e.key && (e.key !== "Enter")) return;
    setLoading(true);
    try {
      props.authUserLogin(email, password);
    } catch(err) {
      setLoading(false);
      setMessage(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }

  // finish, superstruct
  const validate = () => ((email.length > 1) && (password.length > 1));

  return (
    <div className="login" onKeyUp={(e) => handleLogin(e)}>
      {props.isAuthenticated && <Redirect to="/" />}
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
}

const mapStateToProps = state => ({
  message: state.auth.message,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  authUserLogin: (email, password) => dispatch(authUserLogin(email, password))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));