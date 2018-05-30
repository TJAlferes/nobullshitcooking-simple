import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';

import { GridContainer } from './Styles'

import HeaderRed from './containers/HeaderRed/HeaderRed';

import MainWhite from './components/MainWhite/MainWhite';
import FooterGray from './components/FooterGray/FooterGray';

import Register from './components/user/Register/Register';
import Login from './components/user/Login/Login';
import Equipment from './components/pages/Equipment/Equipment';
import Ingredients from './components/pages/Ingredients/Ingredients';
import Recipes from './components/pages/Recipes/Recipes';
import Food from './components/pages/Food/Food';
import Supplements from './components/pages/Supplements/Supplements';
import Planner from './containers/Planner/Planner'
import Home from './components/pages/Home/Home';
import NotFound from './components/NotFound/NotFound';

class App extends Component {
  render() {
    // 1. Determine if the user is located at an authentication page
    let location = this.props.location;
    let isAccessing = location.pathname 
                      && (location.pathname.match(/^\/user\/register/) 
                          || location.pathname.match(/^\/user\/login/));
    
    let routes = (
      <Switch>
        <Route path="/user/register" component={Register} />
        <Route path="/user/login" component={Login} />
        <Route path="/content/food/equipment" component={Equipment} />
        <Route path="/content/food/ingredients" component={Ingredients} />
        <Route path="/content/food/recipes" component={Recipes} />
        <Route path="/content/food" component={Food} />
        <Route path="/content/supplements" component={Supplements} />
        <Route path="/planner" component={Planner} />
        <Route path="/home" component={Home} />
        <Route path="/" exact component={Home} />
        <Route render={props => <NotFound {...props} />} />
      </Switch>
    );

    let layout = null;

    if (isAccessing) {
      // 2a. If they are, then render authentication pages layout
      layout = (
        <div {...this.props}>{routes}</div>
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