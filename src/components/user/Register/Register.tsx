import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
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

      //if (message === 'User account created.')
    }
    return () => {
      isSubscribed = false;
    };
  }, [message]);

  const handleConfirmationCodeChange = (
    e: React.SyntheticEvent<EventTarget>
  ) => setConfirmationCode((e.target as HTMLInputElement).value);

  const handleUsernameChange = (
    e: React.SyntheticEvent<EventTarget>
  ) => setUsername((e.target as HTMLInputElement).value);

  const handleEmailChange = (
    e: React.SyntheticEvent<EventTarget>
  ) => setEmail((e.target as HTMLInputElement).value);

  const handlePasswordChange = (
    e: React.SyntheticEvent<EventTarget>
  ) => setPassword((e.target as HTMLInputElement).value);

  const handlePasswordAgainChange = (
    e: React.SyntheticEvent<EventTarget>
  ) => setPasswordAgain((e.target as HTMLInputElement).value);

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
      handleRegisterClick={handleRegisterClick}
      handleRegisterKeyUp={handleRegisterKeyUp}
      handleVerifyClick={handleVerifyClick}
      handleVerifyKeyUp={handleVerifyKeyUp}
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
  confirmingUser: boolean
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