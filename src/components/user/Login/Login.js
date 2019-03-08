//require('regenerator-runtime/runtime');
import React, { Component } from 'react';
//import { Auth } from 'aws-amplify';
import { Link, Redirect } from 'react-router-dom';

//import { StyledNavLink, Styles } from './Styles';
import './login.css';
import LogoLargeWhite from '../../../assets/images/authentication/logo-large-white.png';
import LoaderButton from '../../LoaderButton/LoaderButton';

// Location of our backend API

const endpoint = process.env.NODE_ENV === 'production'
? 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com/auth'
: 'http://localhost:3003/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: null,
      email: '',
      password: ''
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }
  
  handleSubmit = async e => {
    e.preventDefault();
    await this.setState({isLoading: true});
    console.log(this.state.email);
    /*
    try {
      console.log(this.state.email, this.state.password);
      await Auth.signIn(this.state.email, this.state.password);
      this.setState({isLoading: false, error: null});
      console.log("sign in success");
      this.props.userDidAuthenticate(true);
    } catch (err) {
      this.setState({isLoading: false, error: err.message});
      console.log(err.message);
    }
    // `user` : Return object from Auth.signIn()
    // `code` : Confirmation code
    //Auth.confirmSignIn(user, code)
    //.then(data => console.log(data))
    //.catch(err => console.log(err));
    */
  }
  

  /*
  handleFacebookLogin = async () => {
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
  }

  handleGoogleLogin = async () => {
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
  }
  */
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
              type="text" name="email" id="email" size="20" maxLength="50" autoFocus
              value={this.state.email} onChange={this.handleChange}
            />

            <label>Password</label>
            <input
              type="password" name="password" id="password" size="20" maxLength="20"
              value={this.state.password} onChange={this.handleChange}
            />

            <LoaderButton
              type="submit" name="submit" id="sign_in_button"
              text="Sign In" loadingText="Signing In..."
              isLoading={this.state.isLoading} disabled={!this.validate()}
            />

            <div className="distinction-line">
              <button
                type="submit" name="facebook_federation_button" id="facebook_federation_button"
                onClick={this.handleFacebookLogin}
              >
                Continue With <b>Facebook</b>
              </button>
            </div>

            <div className="distinction-line">
              <button 
                type="submit" name="google_federation_button" id="google_federation_button"
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

export default Login;