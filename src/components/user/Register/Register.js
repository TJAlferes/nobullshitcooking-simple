import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './register.css';
import LoaderButton from '../../LoaderButton/LoaderButton';
import { authUserRegister, authUserVerify } from '../../../store/actions/index';

// TO DO: error messages
// TO DO: confirmation code

class Register extends Component {
  state = {
    isLoading: false,
    error: null,
    newUser: false,
    confirmationCode: '',
    username: '',
    email: '',
    pass: '',
    passagain: ''
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleRegisterSubmit = async (e) => {
    e.preventDefault();
    this.setState({isLoading: true});
    try {
      await this.props.authUserRegister(this.state.email, this.state.pass, this.state.username);
      this.setState({newUser: true, isLoading: false, error: null});
      console.log('registered');
    } catch(err) {
      this.setState({isLoading: false, error: err.message});
      console.log(err.message);
    }
  }

  handleVerifySubmit =  async e => {
    e.preventDefault();
    this.setState({isLoading: true});
    try {
      await this.props.authUserVerify(this.state.email, this.state.pass, this.state.confirmationCode)
      this.setState({newUser: false, isLoading: false, error: null});
      console.log('verified');
      this.props.history.push('/user/login');
    } catch (err) {
      this.setState({isLoading: false, error: err.message});
      console.log(err.message);
    }
  }
  
  validateRegistrationInfo = () => {
    return (
      (this.state.email.length > 0) &&
      (this.state.password.length > 0) &&
      (this.state.password === this.state.password2)
    );
  }

  validateConfirmationCode = () => {
    return this.state.confirmationCode.length > 0;
  }
  
  registerForm = () => (
    <form className="register-form">

      <h1>Create Account</h1>

      {
        this.state.error !== null
        ? <p className="error-message">{this.state.error}</p>
        : null
      }

      <label>Username</label>
      <input
        type="text"
        name="username"
        id="username"
        size="20"
        maxLength="20"
        autoFocus
        onChange={this.handleChange}
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        id="email"
        size="20"
        maxLength="60"
        onChange={this.handleChange}
      />

      <label>Password</label>
      <input
        type="password"
        name="pass"
        id="pass"
        size="20"
        maxLength="20"
        onChange={this.handleChange}
      />

      <label>Password Again</label>
      <input
        type="password"
        name="passagain"
        id="passagain"
        size="20"
        maxLength="20"
        onChange={this.handleChange}
      />

      <LoaderButton
        type="button"
        name="submit"
        className="create-account-button"
        id="create_account_button"
        text="Create Account"
        loadingText="Creating Account..."
        isLoading={this.state.isLoading}
        disabled={!this.validateRegistrationInfo()}
        onClick={this.handleRegisterSubmit}
      />

    </form>
  );

  verifyForm = () => (
    <form className="register-confirm-form">

      <h1>Verify</h1>

      {
        this.state.error !== null
        ? <p className="error-message">{this.state.error}</p>
        : null
      }

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
  );

  render() {
    return (
      <div className="register">

        <Link className="auth-img-link" to="/">
          <img className="auth-img-desktop" src="https://s3.amazonaws.com/nobsc-images-01/auth/logo-large-white.png" />
          <img className="auth-img-mobile" src="https://s3.amazonaws.com/nobsc-images-01/auth/logo-small-white.png" />
        </Link>

        {this.state.newUser === false ? this.registerForm() : this.verifyForm()}

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
}

const mapDispatchToProps = dispatch => ({
  authUserRegister: (email, pass, username) => dispatch(authUserRegister(email, pass, username)),
  authUserVerify: (email, pass, confirmationCode) => dispatch(authUserVerify(email, pass, confirmationCode))
});

export default withRouter(connect(null, mapDispatchToProps)(Register));