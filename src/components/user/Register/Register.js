import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';

import { StyledNavLink, Styles } from './Styles';
import LogoLargeWhite from '../../../assets/images/authentication/logo-large-white.png';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      newUser: null,
      confirmationCode: '',
      username: '',
      email: '',
      password: '',
      password2: ''
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleRegistrationSubmit = async e => {
    e.preventDefault();
    this.setState({isLoading: true});
    try {
      const { username, email, password } = this.state;
      const newUser = await Auth.signUp({username, password, attributes: {email}});
      this.setState({newUser});
      console.log('registration success');
    } catch (err) {
      console.log(err.message);
    }
    this.setState({isLoading: false});
  }

  handleConfirmationSubmit =  async e => {
    e.preventDefault();
    this.setState({isLoading: true});
    try {
      const { confirmationCode, email, password } = this.state;
      await Auth.confirmSignUp(email, confirmationCode);
      await Auth.signIn({email, password});
      this.props.userDidAuthenticate(true);
      this.props.history.push('/');
    } catch (err) {
      console.log(err.message);
    }
    this.setState({isLoading: false});
  }

  validateRegistration = () => {
    return (
      (this.state.username.length > 0) &&
      (this.state.password.length > 0) &&
      (this.state.password === this.state.password2)
    );
  }

  validateConfirmation = () => {
    return this.state.confirmationCode.length > 0;
  }

  registrationForm = () => (
    <form onSubmit={this.handleRegistrationSubmit}>

      <h1>Create Account</h1>

      <label>Username</label>
      <input
        type="text" name="username" id="username"
        size="20" maxLength="20" autoFocus onChange={this.handleChange}
      />

      <label>Email</label>
      <input
        type="email" name="email" id="email"
        size="20" maxLength="50" onChange={this.handleChange}
      />

      <label>Password</label>
      <input
        type="password" name="password" id="password"
        size="20" maxLength="20" onChange={this.handleChange}
      />

      <label>Password Again</label>
      <input
        type="password" name="password2" id="password2"
        size="20" maxLength="20" onChange={this.handleChange}
      />

      <button
        type="submit"
        name="submit"
        id="create_account_button"
        text="Create Account"
        loadingText="Creating Account..."
        isLoading={this.state.isLoading}
        disabled={!this.validateRegistration()}
      >
        {!isLoading ? text : loadingText}
      </button>

    </form>
  );

  confirmationForm = () => (
    <form onSubmit={this.handleConfirmationSubmit}>

      <label>Confirmation Code</label>
      <input 
        type="tel"
        autoFocus
        value={this.state.confirmationCode}
        onChange={this.handleChange}
      />

      <p>Please check your email for the code.</p>

      <button
        type="submit"
        name="submit"
        id="verify_confirmation_code_button"
        text="Verify"
        loadingText="Verifying..."
        isLoading={this.state.isLoading}
        disabled={!this.validateConfirmation()}
      >
        {!isLoading ? text : loadingText}
      </button>

    </form>
  );

  render() {
    return (
      <div>
        <StyledNavLink to="/"><img src={LogoLargeWhite} /></StyledNavLink>
        <Styles>

          {
            this.state.newUser === null
            ? this.registrationForm()
            : this.confirmationForm()
          }

          <ul>
            <li><NavLink to="/">Terms of Use</NavLink></li>
            <li><NavLink to="/">Privacy Policy</NavLink></li>
            <li><NavLink to="/">Help</NavLink></li>
          </ul>
          <p>Copyright 2015-2018 NoBullshitCooking. All Rights Reserved.</p>

        </Styles>
      </div>
    );
  }
}

export default Register;