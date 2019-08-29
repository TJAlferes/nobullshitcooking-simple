import React, { useEffect, useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './register.css';
import LoaderButton from '../../LoaderButton/LoaderButton';
import { authUserRegister, authUserVerify } from '../../../store/actions/index';

const Register = props => {
  const [ message, setMessage ] = useState("");
  const [ loading, setLoading ] = useState(false);
  //const [ newUser, setNewUser ] = useState(true);
  //const [ confirmationCode, setConfirmationCode ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ passwordAgain, setPasswordAgain ] = useState("");

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) setMessage(props.message);
    return () => isSubscribed = false;
  });

  const handleUsernameChange = e => setUsername(e.target.value);

  const handleEmailChange = e => setEmail(e.target.value);

  const handlePasswordChange = e => setPassword(e.target.value);

  const handlePasswordAgainChange = e => setPasswordAgain(e.target.value);

  const handleRegisterSubmit = (e) => {
    if (!validateRegistrationInfo()) return;
    if (e.key && (e.key !== "Enter")) return;
    setLoading(true);
    try {
      props.authUserRegister(email, password, username, props.history);
    } catch(err) {
      setLoading(false);
      setMessage(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }

  /*handleVerifySubmit = () => {
    this.setState({isLoading: true});
    try {
      this.props.authUserVerify(this.state.email, this.state.pass, this.state.confirmationCode)
      this.setState({newUser: false, isLoading: false, error: null});
    } catch (err) {
      this.setState({isLoading: false, error: err.message});
    }
  }*/
  
  // finish, superstruct
  const validateRegistrationInfo = () => (
    (username.length > 1) &&
    (email.length > 1) &&
    (password.length > 1) &&
    (password == passwordAgain)
  );

  //const validateConfirmationCode = () => confirmationCode.length > 1;
  
  const registerForm = () => (
    <form className="register-form">
      <h1>Create Account</h1>
      <p className="error-message">{message}</p>
      <label>Username</label>
      <input
        type="text"
        name="username"
        id="username"
        size="20"
        maxLength="20"
        autoFocus
        onChange={handleUsernameChange}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        id="email"
        size="20"
        maxLength="60"
        onChange={handleEmailChange}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        id="password"
        size="20"
        maxLength="20"
        onChange={handlePasswordChange}
      />
      <label>Password Again</label>
      <input
        type="password"
        name="passwordAgain"
        id="passwordAgain"
        size="20"
        maxLength="20"
        onChange={handlePasswordAgainChange}
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

  /*verifyForm = () => (
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
    <div className="register" onKeyUp={(e) => handleLogin(e)}>
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
      {/*newUser === true ? this.registerForm() : this.verifyForm()*/}
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
        Copyright 2015-2019 NoBullshitCooking. All Rights Reserved.
      </p>

    </div>
  );
}

const mapStateToProps = state => ({
  message: state.auth.message,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  authUserRegister: (email, pass, username, history) => dispatch(authUserRegister(email, pass, username, history)),
  authUserVerify: (email, pass, confirmationCode) => dispatch(authUserVerify(email, pass, confirmationCode))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));