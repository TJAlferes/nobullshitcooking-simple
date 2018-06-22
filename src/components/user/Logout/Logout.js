import React from 'react';
import { Auth } from 'aws-amplify';
import { Redirect } from 'react-router-dom';

const Logout = async (props) => {
  await Auth.signOut();
  props.userDidAuthenticate(false);
  return <Redirect to="/" />;
  //this.props.history.push('/');
}

export default Logout;