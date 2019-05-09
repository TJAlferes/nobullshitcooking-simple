import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './login.css';
import LogoLargeWhite from '../../../assets/images/authentication/logo-large-white.png';
import LoaderButton from '../../LoaderButton/LoaderButton';
import {
  authStaffLogin
} from '../../../store/actions/index';

// TO DO: make inputs uneditable/unselectable while isLoading, make Sign In button css not change color on hover while in Signing In... AKA isloading state

class StaffLogin extends Component {
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
    e.preventDefault();
    this.setState({isLoading: true});
    try {
      await this.props.authStaffLogin(this.state.email, this.state.password);
      this.props.history.push('/staff/dashboard');
    } catch(err) {
      this.setState({isLoading: false, error: err.message});
      console.log(err.message);
    }
  }
  
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

          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  authStaffLogin: (email, password) => dispatch(authStaffLogin(email, password))
});

export default connect(null, mapDispatchToProps)(StaffLogin);