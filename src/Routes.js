import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AppliedRoute from './AppliedRoute';

import Register from './components/user/Register/Register';
import Login from './components/user/Login/Login';
import Logout from './components/user/Logout/Logout';
//import Equipment from './components/pages/Equipment/Equipment';
import Ingredients from './components/pages/Ingredients/Ingredients';
//import Recipes from './components/pages/Recipes/Recipes';
import Food from './components/pages/Food/Food';
import Fitness from './components/pages/Fitness/Fitness';
import Supplements from './components/pages/Supplements/Supplements';
import Planner from './containers/Planner/Planner'
import Messenger from './containers/Messenger/Messenger'
import Home from './components/pages/Home/Home';
import NotFound from './components/NotFound/NotFound';

const RoutesList = ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/user/register" exact component={Register} props={childProps} />
    <AppliedRoute path="/user/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/user/logout" exact component={Logout} props={childProps} />
    {/*<AppliedRoute path="/content/food/equipment" exact component={Equipment} props={childProps} />*/}
    <AppliedRoute path="/content/food/ingredients" exact component={Ingredients} props={childProps} />
    {/*<AppliedRoute path="/content/food/recipes" exact component={Recipes} props={childProps} />*/}
    <AppliedRoute path="/content/food" exact component={Food} props={childProps} />
    <AppliedRoute path="/content/fitness" exact component={Fitness} props={childProps} />
    <AppliedRoute path="/content/supplements" exact component={Supplements} props={childProps} />
    <AppliedRoute path="/planner" exact component={Planner} props={childProps} />
    <AppliedRoute path="/messenger" exact component={Messenger} props={childProps} />
    <AppliedRoute path="/home" exact component={Home} props={childProps} />
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <Route render={props => <NotFound {...props} />} />
  </Switch>
);

export default RoutesList;