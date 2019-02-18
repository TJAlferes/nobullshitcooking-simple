import React from 'react';
import { Redirect } from 'react-router-dom';
//import { Auth } from 'aws-amplify';

/*const Logout = async (props) => {
  //await Auth.signOut();
  //props.userDidAuthenticate(false);
  return <Redirect to="/" />;
  //this.props.history.push('/');
}*/

const Logout = () => <Redirect to="/" />;

export default Logout;