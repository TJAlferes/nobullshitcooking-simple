import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//import { Auth } from 'aws-amplify';

//import { StyledNavLink, Styles } from './Styles';
import './register.css';
import LogoLargeWhite from '../../../assets/images/authentication/logo-large-white.png';
import LoaderButton from '../../LoaderButton/LoaderButton';
import {
  authUserRegister
} from '../../../store/actions/index';

/*
  Register component

  Purpose
    Register a new account with provided email and password

  Methods
    handleChange(e)                   --
    async handleRegistrationSubmit(e) --
    async handleConfirmationSubmit(e) --
    validateRegistration()            --
    validateConfirmation()            --
    registrationForm()                --
    confirmationForm()                --

  Props


  State
    isLoading        -- Boolean --
    error            --
    newUser          --
    confirmationCode -- String --
    email            -- String --
    password         -- String --
    password2        -- String --
*/
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: null,
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

  handleRegistration = async (e) => {
    e.preventDefault();
    this.setState({isLoading: true});
    try {
      await this.props.authUserRegister(this.state.email, this.state.password, this.state.username);
      console.log('yay');
      this.props.history.push('/user/login');
    } catch(err) {
      this.setState({isLoading: false, error: err.message});
      console.log(err.message);
    }
  }
  /*
  handleRegistrationSubmit = async e => {
    e.preventDefault();
    this.setState({isLoading: true});
    try {
      const newUser = await Auth.signUp({username: this.state.email, password: this.state.password});
      this.setState({newUser: newUser});
      this.setState({isLoading: false, error: null});
      console.log('registration success');
    } catch (err) {
      this.setState({isLoading: false, error: err.message});
      console.log(err.message);
    }
  }

  handleConfirmationSubmit =  async e => {
    e.preventDefault();
    this.setState({isLoading: true});
    try {
      const { confirmationCode, email, password } = this.state;
      await Auth.confirmSignUp(email, confirmationCode);
      await Auth.signIn({email, password});
      this.setState({isLoading: false, error: null});
      console.log('verified');
      this.props.userDidAuthenticate(true);
      this.props.history.push('/');
    } catch (err) {
      this.setState({isLoading: false, error: err.message});
      console.log(err.message);
    }
  }
  */
  validateRegistration = () => {
    return (
      (this.state.email.length > 0) &&
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
      {this.state.error !== null ? <p id="error_message">{this.state.error}</p> : null}

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
        autoFocus
        onChange={this.handleChange}
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        id="password"
        size="20"
        maxLength="20"
        onChange={this.handleChange}
      />

      <label>Password Again</label>
      <input
        type="password"
        name="password2"
        id="password2"
        size="20"
        maxLength="20"
        onChange={this.handleChange}
      />

      <LoaderButton
        type="button"
        name="submit"
        id="create_account_button"
        text="Create Account"
        loadingText="Creating Account..."
        isLoading={this.state.isLoading}
        disabled={!this.validateRegistration()}
        onClick={this.handleRegistration}
      />
    </form>
  );

  confirmationForm = () => (
    <form onSubmit={this.handleConfirmationSubmit}>
      <h1>Verify</h1>
      {this.state.error !== null ? <p id="error_message">{this.state.error}</p> : null}

      <label>Code</label>
      <input 
        type="input"
        autoFocus
        value={this.state.confirmationCode}
        onChange={this.handleChange}
      />

      <p>Please check your email for the verification code.</p>

      <LoaderButton
        type="submit"
        name="submit"
        id="verify_confirmation_code_button"
        text="Verify"
        loadingText="Verifying..."
        isLoading={this.state.isLoading}
        disabled={!this.validateConfirmation()}
      />
    </form>
  );

  render() {
    return (
      <div>
        <Link className="styled_nav_link" to="/"><img src={LogoLargeWhite} /></Link>
        <div className="register">
          {this.state.newUser === null ? this.registrationForm() : this.confirmationForm()}
          <ul>
            <li><Link to="/">Terms of Use</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">Help</Link></li>
          </ul>
          <p>Copyright 2015-2019 NoBullshitCooking. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  authUserRegister: (email, password, username) => dispatch(authUserRegister(email, password, username))
});

export default withRouter(connect(null, mapDispatchToProps)(Register));