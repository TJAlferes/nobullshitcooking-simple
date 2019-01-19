import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//import HTML5Backend from 'react-dnd-html5-backend';
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';
import { DragDropContextProvider } from 'react-dnd';
//import { Auth } from 'aws-amplify';

import MobileHeaderRed from './containers/MobileHeaderRed/MobileHeaderRed';
import HeaderRed from './containers/HeaderRed/HeaderRed';
import MainWhite from './components/MainWhite/MainWhite';
import FooterGray from './components/FooterGray/FooterGray';
import RoutesList from './routing/Routes';
import './app.css';

const dragAndDropBackend = MultiBackend(HTML5toTouch);

// OAuth 2.0 Google
/*

*/

// OAuth 2.0 Facebook
/*
// 1.
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{latest-api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>

// 2.
FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
});


// 3.
{
  status: 'connected',
  authResponse: {
      accessToken: '...',
      expiresIn:'...',
      signedRequest:'...',
      userID:'...'
  }
}
*/


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      userEmail: ''
    };
  }

  // auth functionality
  /*
  userDidAuthenticate = authenticated => {
    this.setState({isAuthenticated: authenticated});
  }

  handleLogout = async () => {
    await Auth.signOut();
    this.userDidAuthenticate(false);
    this.setState({userEmail: ''});
    this.props.history.push('/user/login');
  }

  getUser = async () => {
    try {
      let user = await Auth.currentAuthenticatedUser();
      console.log(user.attributes.email);
      this.setState({userEmail: user.attributes.email});
    } catch (err) {
      this.handleLogout();
      console.log(err.message);
    }
  }
  */

  // modals functionality

  // ...

  render() {
    // Pass down auth info as props (into HeaderRed and into RoutesList):
    /*
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userEmail: this.state.userEmail,
      userDidAuthenticate: this.userDidAuthenticate,
      handleLogout: this.handleLogout,
      getUser: this.getUser
    };
    */
    // Decide visual layout style:
    // 1. Determine if the user is located at an authentication page
    let location = this.props.location;
    let isAccessing = location.pathname &&
    (
      location.pathname.match(/^\/user\/register/) ||
      location.pathname.match(/^\/user\/login/)
    );
    
    //const routes = <RoutesList childProps={childProps} />;
    const routes = <RoutesList />;

    let layout = null;

    if (isAccessing) {
      // 2a. If they are, then render authentication pages layout
      layout = <div>{routes}</div>;
    } else {
      // 2b. Otherwise, render the normal layout
      // <HeaderRed childProps={childProps} />
      layout = (
        <div id="app" {...this.props}>
          <div>
            <div className="mobile_display"><MobileHeaderRed /></div>
            <div className="desktop_display"><HeaderRed /></div>
          </div>
          <MainWhite location={location}>{routes}</MainWhite>
          <FooterGray />
        </div>
      );
    }

    return (
      <DragDropContextProvider backend={dragAndDropBackend}>
        {layout}
      </DragDropContextProvider>
    );
  }
}

export default withRouter(App);