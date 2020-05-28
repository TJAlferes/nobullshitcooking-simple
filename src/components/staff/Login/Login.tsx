import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { authStaffLogin } from '../../../store/auth/actions';
import { LoginView } from './LoginView';

// TO DO: make Sign In button css not change color on hover while in Signing In...

export function Login({ message, authStaffLogin }: Props): JSX.Element {
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
    return () => {
      isSubscribed = false;
    };
  }, [message]);

  const handleEmailChange = (
    e: React.SyntheticEvent<EventTarget>
  ) => setEmail((e.target as HTMLInputElement).value);

  const handlePasswordChange = (
    e: React.SyntheticEvent<EventTarget>
  ) => setPassword((e.target as HTMLInputElement).value);
  
  const handleLoginClick = () => {
    if (loading) return;
    if (!validateLoginInfo()) return;
    setLoading(true);
    authStaffLogin(email, password);
  }
  
  const handleLoginKeyUp = (e: React.KeyboardEvent) => {
    if (loading) return;
    if (!validateLoginInfo()) return;
    if (e.key && (e.key !== "Enter")) return;
    setLoading(true);
    authStaffLogin(email, password);
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
      handleLoginClick={handleLoginClick}
      handleLoginKeyUp={handleLoginKeyUp}
      validateLoginInfo={validateLoginInfo}
    />
  );
}

interface IRootState {
  auth: {
    message: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const mapStateToProps = (state: IRootState) => ({message: state.auth.message});

const mapDispatchToProps = {
  authStaffLogin: (email: string, password: string) =>
    authStaffLogin(email, password)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Login);