import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { authUserLogin } from '../../../store/actions/index';

import LoginView from './LoginView';

// TO DO:
// make Sign In button css not change color on hover while in Signing In...
// AKA isloading state

export const Login = ({ message, authUserLogin }) => {
  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      setFeedback(message);
      setLoading(false);
    }
    return () => isSubscribed = false;
  }, [message]);

  const handleEmailChange = e => setEmail(e.target.value);

  const handlePasswordChange = e => setPassword(e.target.value);
  
  const handleLogin = e => {
    if (loading) return;
    if (!validate()) return;
    if (e.key && (e.key !== "Enter")) return;
    setLoading(true);
    authUserLogin(email, password);
  }

  const validateLoginInfo = () => ((email.length > 4) && (password.length > 5));

  return (
    <LoginView
      feedback={feedback}
      loading={loading}
      email={email}
      password={password}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handleLogin={handleLogin}
      validateLoginInfo={validateLoginInfo}
    />
  );
}

const mapStateToProps = state => ({message: state.auth.message});

const mapDispatchToProps = dispatch => ({
  authUserLogin: (email, password) => dispatch(authUserLogin(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);