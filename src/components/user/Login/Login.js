import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './login.css';
import LogoLargeWhite from '../../../assets/images/authentication/logo-large-white.png';
import LoaderButton from '../../LoaderButton/LoaderButton';
import {
  authLogin,
  authFacebookCheckState,
  authFacebookLogin,
  //authGoogleLogin
} from '../../../store/actions/index';

class Login extends Component {
  state = {
    isLoading: false,
    error: null,
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }
  
  handleLogin = async (e) => {
    console.log('handleLogin called');
    e.preventDefault();
    this.setState({isLoading: true});
    try {
      await this.props.authLogin({email: this.state.email, password: this.state.password});
      //return <Redirect to="/user/dashboard" />;  // different if programmatic?
    } catch(err) {
      this.setState({isLoading: false, error: err.message});
      console.log(err.message);
    }
  }
  
  handleFacebookLogin = async (e) => {
    e.preventDefault();
    this.setState({isLoading: true});
    try {
      await this.props.authFacebookLogin();
      this.setState({isLoading: false, error: null});
      console.log("sign in success");
      await this.props.authFacebookCheckState();  // explicit check
    } catch (err) {
      this.setState({isLoading: false, error: err.message});
      console.log(err.message);
    }
  }

  /*handleGoogleLogin = async (e) => {
    e.preventDefault();
    this.setState({isLoading: true});
    try {
      await Auth.signIn();
      this.setState({isLoading: false, error: null});
      console.log("sign in success");
      this.props.userDidAuthenticate(true);
    } catch (err) {
      this.setState({isLoading: false, error: err.message});
      console.log(err.message);
    }
  }*/

  validate = () => {
    return ((this.state.email.length > 0) && (this.state.password.length > 0));
  }

  render() {
    return (
      <div>
        <Link className="styled_nav_link" to="/"><img src={LogoLargeWhite} /></Link>
        <div className="login">
          {this.props.isAuthenticated && <Redirect to="/" />}
          <form onSubmit={this.handleSubmit}>

            <h1>Sign In</h1>

            {this.state.error !== null ? <p id="error_message">{this.state.error}</p> : null}

            <label>Email</label>
            <input
              type="text"
              name="email"
              id="email"
              size="20"
              maxLength="50"
              autoFocus
              value={this.state.email}
              onChange={this.handleChange}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              size="20"
              maxLength="20"
              value={this.state.password}
              onChange={this.handleChange}
            />

            <LoaderButton
              type="button"
              name="submit"
              id="sign_in_button"
              text="Sign In"
              loadingText="Signing In..."
              isLoading={this.state.isLoading}
              disabled={!this.validate()}
              onClick={this.handleLogin}
            />

            <div className="distinction-line">
              {/*
              <div
                class="fb-login-button"
                data-size="medium"
                data-button-type="continue_with"
                data-auto-logout-link="false"
                data-use-continue-as="false"
              >
              </div>
              */}
              <button
                type="submit"
                name="facebook_federation_button"
                id="facebook_federation_button"
                onClick={this.handleFacebookLogin}
              >
                Continue With <b>Facebook</b>
              </button>
            </div>

            <div className="distinction-line">
              <button 
                type="submit"
                name="google_federation_button"
                id="google_federation_button"
                onClick={this.handleGoogleLogin}
              >
                Continue With <b>Google</b>
              </button>
            </div>
            
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  authLogin: (email, password) => dispatch(authLogin(email, password)),
  authFacebookCheckState: () => dispatch(authFacebookCheckState),
  authFacebookLogin: () => dispatch(authFacebookLogin),
  authGoogleLogin: () => dispatch(authGoogleLogin)
});

export default connect(null, mapDispatchToProps)(Login);