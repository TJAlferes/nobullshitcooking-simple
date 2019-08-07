import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './login.css';
import LoaderButton from '../../LoaderButton/LoaderButton';
import {
  authUserLogin,
  //authFacebookCheckState,
  //authFacebookLogin,
  //authGoogleLogin
} from '../../../store/actions/index';

// TO DO: make inputs uneditable/unselectable while isLoading, make Sign In button css not change color on hover while in Signing In... AKA isloading state

class Login extends Component {
  state = {
    flash: '',
    isLoading: false,
    error: null,
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }
  
  handleLogin = () => {
    this.setState({isLoading: true});
    try {
      this.props.authUserLogin(this.state.email, this.state.password);
    } catch(err) {
      this.setState({isLoading: false, error: err.message});
      console.log(err.message);
    } finally {
      this.setState({isLoading: false});
    }
  }
  
  /*handleFacebookLogin = async (e) => {
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
  }*/

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
    return ((this.state.email.length > 1) && (this.state.password.length > 1));
  }

  flash = (timeout = 5000, message) => {
    if (this.state.flash !== '') {
      setTimeout(() => {
        this.setState({flash: ''});
      }, timeout);
      return <p id="error_message">{message}</p>;
    }
    return false;
  };

  render() {
    return (
      <div>
        <Link className="auth-img-link" to="/">
          <img className="auth-img-desktop" src="https://s3.amazonaws.com/nobsc-images-01/auth/logo-large-white.png" />
          <img className="auth-img-mobile" src="https://s3.amazonaws.com/nobsc-images-01/auth/logo-small-white.png" />
        </Link>
        <div className="login">
          {this.props.isAuthenticated && <Redirect to="/" />}
          <form>

            <h1>Sign In</h1>

            {/*this.state.error !== null ? <p id="error_message">{this.state.error}</p> : null*/}
            {/*this.props.message !== '' ? <p id="error_message">{this.props.message}</p> : null*/}
            {this.flash(this.props.message)}

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

            {/*<div className="distinction-line">
              <div
                class="fb-login-button"
                data-size="medium"
                data-button-type="continue_with"
                data-auto-logout-link="false"
                data-use-continue-as="false"
              >
              </div>
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
            </div>*/}
            
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.auth.message,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  authUserLogin: (email, password) => dispatch(authUserLogin(email, password)),
  //authFacebookCheckState: () => dispatch(authFacebookCheckState),
  //authFacebookLogin: () => dispatch(authFacebookLogin),
  //authGoogleLogin: () => dispatch(authGoogleLogin)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));