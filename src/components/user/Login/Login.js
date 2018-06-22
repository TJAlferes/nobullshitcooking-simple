import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Redirect } from 'react-router-dom';

import { StyledNavLink, Styles } from './Styles';
import LogoLargeWhite from '../../../assets/images/authentication/logo-large-white.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await this.validate();
      await Auth.signIn(this.state.username, this.state.password);
      this.props.userDidAuthenticate(true);
      console.log("sign in success");
    } catch (err) {
      console.log(err.message);
    }
    /*
    // `user` : Return object from Auth.signIn()
    // `code` : Confirmation code
    Auth.confirmSignIn(user, code)
    .then(data => console.log(data))
    .catch(err => console.log(err));
    */
  }

  // use this
  validate = () => {
    return ((this.state.username.length > 0) && (this.state.password.length > 0));
  }

  render() {
    return (
      <div>
        <StyledNavLink to="/"><img src={LogoLargeWhite} /></StyledNavLink>
        <Styles>
          {this.props.isAuthenticated && <Redirect to="/" />}
          <form onSubmit={this.handleSubmit}>

            <h1>Sign In</h1>

            <label>Username</label>
            <input
              type="text" name="username" id="username" size="20" maxLength="20" autoFocus
              value={this.state.username} onChange={this.handleChange}
            />

            <label>Password</label>
            <input
              type="password" name="password" id="password" size="20" maxLength="20"
              value={this.state.password} onChange={this.handleChange}
            />

            <button type="submit" name="submit" id="sign_in_button">
              Sign In
            </button>

            <div className="distinction-line">
              <button type="submit" name="facebook_federation_button" id="facebook_federation_button">
                Continue With <b>Facebook</b>
              </button>
            </div>

            <div className="distinction-line">
              <button type="submit" name="google_federation_button" id="google_federation_button">
                Continue With <b>Google</b>
              </button>
            </div>
            
          </form>
        </Styles>
      </div>
    );
  }
}

export default Login;