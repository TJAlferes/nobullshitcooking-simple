import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { authUserRegister, authUserVerify } from '../../../store/actions/index';

import RegisterView from './RegisterView';

export const Register = ({
  history,
  isAuthenticated,
  message,
  authUserRegister,
  authUserVerify
}) => {
  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  //const [ newUser, setNewUser ] = useState(true);
  //const [ confirmationCode, setConfirmationCode ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ passwordAgain, setPasswordAgain ] = useState("");

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      setFeedback(message);
      setLoading(false);
    }
    return () => isSubscribed = false;
  }, [message]);

  const handleUsernameChange = e => setUsername(e.target.value);

  const handleEmailChange = e => setEmail(e.target.value);

  const handlePasswordChange = e => setPassword(e.target.value);

  const handlePasswordAgainChange = e => setPasswordAgain(e.target.value);

  const handleRegisterSubmit = (e) => {
    if (!validateRegistrationInfo()) return;
    if (e.key && (e.key !== "Enter")) return;
    setLoading(true);
    authUserRegister(email, password, username, history);
  }

  /*handleVerifySubmit = () => {
    if (!validateConfirmationCode()) return;
    if (e.key && (e.key !== "Enter")) return;
    setLoading(true);
    authUserVerify(email, password, confirmationCode);
    setNewUser(false);  // move?
  }*/
  
  const validateRegistrationInfo = () => (
    (username.length > 1) &&
    (email.length > 1) &&
    (password.length > 1) &&
    (password == passwordAgain)
  );

  //const validateConfirmationCode = () => confirmationCode.length > 1;
  
  return (
    <RegisterView
      isAuthenticated={isAuthenticated}
      feedback={feedback}
      loading={loading}
      username={username}
      handleUsernameChange={handleUsernameChange}
      email={email}
      handleEmailChange={handleEmailChange}
      password={password}
      handlePasswordChange={handlePasswordChange}
      passwordAgain={passwordAgain}
      handlePasswordAgainChange={handlePasswordAgainChange}
      validateRegistrationInfo={validateRegistrationInfo}
      handleRegisterSubmit={handleRegisterSubmit}
    />
  );
}

const mapStateToProps = state => ({
  message: state.auth.message,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  authUserRegister: (email, pass, username, history) =>
    dispatch(authUserRegister(email, pass, username, history)),
  authUserVerify: (email, pass, confirmationCode) =>
    dispatch(authUserVerify(email, pass, confirmationCode))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Register)
);