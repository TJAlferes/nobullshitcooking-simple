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
    try {
      const { username, password, email } = this.state;
      await this.validate();
      await Auth.signUp({username, password, attributes: {email}});
      //await Auth.confirmSignUp(username, code);
      //this.props.userDidAuthenticate(true);
      console.log("registration success");
    } catch (err) {
      console.log(err.message);
    }
  }

  handleConfirmationSubmit =  async e => {
    e.preventDefault();


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

      <button type="submit" name="submit" id="create_account_button">
        Create Account
      </button>

    </form>
  );

  confirmationForm = () => (
    <form onSubmit={this.handleConfirmationSubmit}>
        <ControlLabel>Confirmation Code</ControlLabel>
        <FormControl
          autoFocus
          type="tel"
          value={this.state.confirmationCode}
          onChange={this.handleChange}
        />
        <HelpBlock>Please check your email for the code.</HelpBlock>
      <LoaderButton
        block
        bsSize="large"
        disabled={!this.validateConfirmationForm()}
        type="submit"
        isLoading={this.state.isLoading}
        text="Verify"
        loadingText="Verifying…"
      />
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