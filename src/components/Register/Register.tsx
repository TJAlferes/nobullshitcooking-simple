import { History } from 'history';
import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authUserRegister, authUserVerify } from '../../store/auth/actions';
import { RegisterView } from './RegisterView';

export function Register({
  authUserRegister,
  authUserVerify,
  confirmingUser,
  message
}: Props): JSX.Element {
  const history = useHistory();

  const [ confirmationCode, setConfirmationCode ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ password, setPassword ] = useState("");
  const [ passwordAgain, setPasswordAgain ] = useState("");
  const [ username, setUsername ] = useState("");

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

  const handleConfirmationCodeChange = (e: React.SyntheticEvent<EventTarget>) =>
    setConfirmationCode((e.target as HTMLInputElement).value);

  const handleEmailChange = (e: React.SyntheticEvent<EventTarget>) =>
    setEmail((e.target as HTMLInputElement).value);

  const handlePasswordChange = (e: React.SyntheticEvent<EventTarget>) =>
    setPassword((e.target as HTMLInputElement).value);

  const handlePasswordAgainChange = (e: React.SyntheticEvent<EventTarget>) =>
    setPasswordAgain((e.target as HTMLInputElement).value);

  const handleRegisterClick = () => {
    if (loading) return;

    if (!validateRegistrationInfo()) return;

    setLoading(true);
    authUserRegister(email, password, username, history);
  };

  const handleRegisterKeyUp = (e: React.KeyboardEvent) => {
    if (loading) return;

    if (!validateRegistrationInfo()) return;

    if (e.key && (e.key !== "Enter")) return;

    setLoading(true);
    authUserRegister(email, password, username, history);
  };

  const handleUsernameChange = (e: React.SyntheticEvent<EventTarget>) =>
    setUsername((e.target as HTMLInputElement).value);

  const handleVerifyClick = () => {
    if (loading) return;

    if (!validateConfirmationCode()) return;

    setLoading(true);
    authUserVerify(email, password, confirmationCode, history);
  };

  const handleVerifyKeyUp = (e: React.KeyboardEvent) => {
    if (loading) return;

    if (!validateConfirmationCode()) return;

    if (e.key && (e.key !== "Enter")) return;
    
    setLoading(true);
    authUserVerify(email, password, confirmationCode, history);
  };

  const validateConfirmationCode = () => confirmationCode.length > 1;
  
  const validateRegistrationInfo = () => (
    (username.length > 1) &&
    (email.length > 4) &&
    (password.length > 5) &&
    (password == passwordAgain)
  );
  
  return (
    <RegisterView
      confirmationCode={confirmationCode}
      confirmingUser={confirmingUser}
      email={email}
      feedback={feedback}
      handleConfirmationCodeChange={handleConfirmationCodeChange}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handlePasswordAgainChange={handlePasswordAgainChange}
      handleRegisterClick={handleRegisterClick}
      handleRegisterKeyUp={handleRegisterKeyUp}
      handleUsernameChange={handleUsernameChange}
      handleVerifyClick={handleVerifyClick}
      handleVerifyKeyUp={handleVerifyKeyUp}
      loading={loading}
      password={password}
      passwordAgain={passwordAgain}
      username={username}
      validateConfirmationCode={validateConfirmationCode}
      validateRegistrationInfo={validateRegistrationInfo}
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
  confirmingUser: boolean;
};

const mapStateToProps = (state: RootState) => ({message: state.auth.message});

const mapDispatchToProps = {
  authUserRegister: (
    email: string,
    pass: string,
    username: string,
    history: History
  ) => authUserRegister(email, pass, username, history),
  authUserVerify: (
    email: string,
    pass: string,
    confirmationCode: string,
    history: History
  ) => authUserVerify(email, pass, confirmationCode, history)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Register);