import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';

import { GridContainer } from './Styles'
import HeaderRed from './containers/HeaderRed/HeaderRed';
import MainWhite from './components/MainWhite/MainWhite';
import FooterGray from './components/FooterGray/FooterGray';
import RoutesList from './Routes';


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
    this.state = {isAuthenticated: false};
  }

  userDidAuthenticate = authenticated => {
    this.setState({isAuthenticated: authenticated});
  }

  render() {
    // Pass auth info:
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userDidAuthenticate: this.userDidAuthenticate
    };

    // Decide visual layout style:
    // 1. Determine if the user is located at an authentication page
    let location = this.props.location;
    let isAccessing = location.pathname 
                      && (location.pathname.match(/^\/user\/register/) 
                          || location.pathname.match(/^\/user\/login/));
    
    const routes = <RoutesList childProps={childProps} />;

    let layout = null;

    if (isAccessing) {
      // 2a. If they are, then render authentication pages layout
      layout = (
        <div>{routes}</div>
      );
    } else {
      // 2b. Otherwise, render the normal layout
      layout = (
        <GridContainer {...this.props}>
          <HeaderRed />
          <MainWhite>{routes}</MainWhite>
          <FooterGray />
        </GridContainer>
      );
    }

    return (
      <DragDropContextProvider backend={HTML5Backend}>
        {layout}
      </DragDropContextProvider>
    );
  }
}

export default withRouter(App);