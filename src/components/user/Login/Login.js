import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { authUserLogin } from '../../../store/actions/index';

import LoginView from './LoginView';

// TO DO:
// make Sign In button css not change color on hover while in Signing In...
// AKA isloading state

const Login = ({ isAuthenticated, message, authUserLogin }) => {
  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) setFeedback(message);
    return () => isSubscribed = false;
  });

  const handleEmailChange = e => setEmail(e.target.value);

  const handlePasswordChange = e => setPassword(e.target.value);
  
  const handleLogin = (e) => {
    if (!validate()) return;
    if (e.key && (e.key !== "Enter")) return;
    setLoading(true);
    try {
      authUserLogin(email, password);
    } catch(err) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  const validate = () => ((email.length > 1) && (password.length > 1));

  return (
    <LoginView
      isAuthenticated={isAuthenticated}
      feedback={feedback}
      loading={loading}
      email={email}
      handleEmailChange={handleEmailChange}
      password={password}
      handlePasswordChange={handlePasswordChange}
      validate={validate}
      handleLogin={handleLogin}
    />
  );
}

const mapStateToProps = state => ({
  message: state.auth.message,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  authUserLogin: (email, password) => dispatch(authUserLogin(email, password))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));