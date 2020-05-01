import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MemoryHistory} from 'history';
import { connect, ConnectedProps } from 'react-redux';

import { authUserRegister, authUserVerify } from '../../../store/auth/actions';
import { RegisterView } from './RegisterView';

export function Register({
  message,
  authUserRegister,
  authUserVerify,
  confirmingUser
}: Props): JSX.Element {
  const history = useHistory();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ confirmationCode, setConfirmationCode ] = useState("");
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
    return () => {
      isSubscribed = false;
    };
  }, [message]);

  const handleConfirmationCodeChange = (
    e: React.SyntheticEvent<EventTarget>
  ) => {
    let target = e.target as HTMLInputElement;
    setConfirmationCode(target.value);
  };

  const handleUsernameChange = e => setUsername(e.target.value);

  const handleEmailChange = e => setEmail(e.target.value);

  const handlePasswordChange = e => setPassword(e.target.value);

  const handlePasswordAgainChange = e => setPasswordAgain(e.target.value);

  const handleRegister = e => {
    if (loading) return;
    if (!validateRegistrationInfo()) return;
    if (e.key && (e.key !== "Enter")) return;
    setLoading(true);
    authUserRegister(email, password, username, history);
  }

  const handleVerify = e => {
    if (loading) return;
    if (!validateConfirmationCode()) return;
    if (e.key && (e.key !== "Enter")) return;
    setLoading(true);
    authUserVerify(email, password, confirmationCode, history);
  }
  
  const validateRegistrationInfo = () => (
    (username.length > 1) &&
    (email.length > 4) &&
    (password.length > 5) &&
    (password == passwordAgain)
  );

  const validateConfirmationCode = () => confirmationCode.length > 1;
  
  return (
    <RegisterView
      feedback={feedback}
      loading={loading}
      confirmingUser={confirmingUser}
      confirmationCode={confirmationCode}
      username={username}
      email={email}
      password={password}
      passwordAgain={passwordAgain}
      handleConfirmationCodeChange={handleConfirmationCodeChange}
      handleUsernameChange={handleUsernameChange}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handlePasswordAgainChange={handlePasswordAgainChange}
      handleRegister={handleRegister}
      handleVerify={handleVerify}
      validateRegistrationInfo={validateRegistrationInfo}
      validateConfirmationCode={validateConfirmationCode}
    />
  );
}

interface RootState {
  auth: {
    message: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {

};

const mapStateToProps = (state: RootState) => ({message: state.auth.message});

const mapDispatchToProps = {
  authUserRegister: (
    email: string,
    pass: string,
    username: string,
    history: MemoryHistory
  ) => authUserRegister(email, pass, username, history),
  authUserVerify: (
    email: string,
    pass: string,
    confirmationCode: string,
    history: MemoryHistory
  ) => authUserVerify(email, pass, confirmationCode, history)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Register);