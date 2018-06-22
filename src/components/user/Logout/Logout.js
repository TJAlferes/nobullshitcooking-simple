import React from 'react';
import { Auth } from 'aws-amplify';
import { Redirect } from 'react-router-dom';

const Logout = () => {
  Auth.signOut()
  .then(data => console.log(data))
  .catch(err => console.log(err));
  return <Redirect to="/" />;
}

export default Logout;