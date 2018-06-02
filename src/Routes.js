import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from './components/user/Register/Register';
import Login from './components/user/Login/Login';
//import Equipment from './components/pages/Equipment/Equipment';
import Ingredients from './components/pages/Ingredients/Ingredients';
//import Recipes from './components/pages/Recipes/Recipes';
import Food from './components/pages/Food/Food';
import Fitness from './components/pages/Fitness/Fitness';
import Supplements from './components/pages/Supplements/Supplements';
import Planner from './containers/Planner/Planner'
import Home from './components/pages/Home/Home';
import NotFound from './components/NotFound/NotFound';

const RoutesList = () => (
  <Switch>
    <Route path="/user/register" component={Register} />
    <Route path="/user/login" component={Login} />
    {/*<Route path="/content/food/equipment" component={Equipment} />*/}
    <Route path="/content/food/ingredients" component={Ingredients} />
    {/*<Route path="/content/food/recipes" component={Recipes} />*/}
    <Route path="/content/food" component={Food} />
    <Route path="/content/fitness" component={Fitness} />
    <Route path="/content/supplements" component={Supplements} />
    <Route path="/planner" component={Planner} />
    <Route path="/home" component={Home} />
    <Route path="/" exact component={Home} />
    <Route render={props => <NotFound {...props} />} />
  </Switch>
);

export default RoutesList;