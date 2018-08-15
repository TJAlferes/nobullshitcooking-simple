import React from 'react';
import { Switch, Route } from 'react-router-dom';

/*

---------- helpers ----------

*/
import AppliedRoute from './AppliedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';



/*

---------- routes ----------

*/
import SubmitRecipe from '../containers/SubmitRecipe/SubmitRecipe';

import Register from '../components/user/Register/Register';
import Login from '../components/user/Login/Login';
import Logout from '../components/user/Logout/Logout';

//import Dashboard from '../components/Dashboard/Dashboard';
//import UserDashboard from '../containers/user/UserDashboard/UserDashboard';
import Planner from '../containers/Planner/Planner';
import UserPlanner from '../containers/user/UserPlanner/UserPlanner';
import Messenger from '../containers/Messenger/Messenger';
import UserMessenger from '../containers/user/UserMessenger/UserMessenger';
//import Friends from '../components/Friends/Friends';
//import UserFriends from '../containers/user/UserFriends/UserFriends';

//import Sitemap from '../components/pages/site/Sitemap/Sitemap';
import Disclaimer from '../components/pages/site/Disclaimer/Disclaimer';
//import TermsOfUse from '../components/pages/site/TermsOfUse/TermsOfUse';
//import PrivacyPolicy from '../components/pages/site/PrivacyPolicy/PrivacyPolicy';
//import Help from '../components/pages/site/Help/Help';

// TO DO:
// add the rest of these main data-driven, rich content pages (like Cuisines and Methods)
// and add CRUD for recipes and whatnot
// then finish everything
// go go go

import Equipments from '../components/pages/Equipments/Equipments';
import Equipment from '../components/pages/Equipment/Equipment';
import Ingredients from '../components/pages/Ingredients/Ingredients';
import Ingredient from '../components/pages/Ingredient/Ingredient';
//import Recipes from '../components/pages/Recipes/Recipes';
//import Recipe from '../components/pages/Recipes/Recipe';
import Food from '../components/pages/Food/Food';
import Fitness from '../components/pages/Fitness/Fitness';

import Supplements from '../components/pages/Supplements/Supplements';

//import WaterFiltration from '../components/pages/WaterFiltration/WaterFiltration';
//import Tea from '../components/pages/Tea/Tea';
//import Coffee from '../components/pages/Coffee/Coffee';

//import Outdoors from '../components/pages/Outdoors/Outdoors';
//import Garden from '../components/pages/Garden/Garden';
//import Tools from '../components/pages/Tools/Tools';
//import Weapons from '../components/pages/Weapons/Weapons';
//import Finances from '../components/pages/Finances/Finances';
//import Security from '../components/pages/Security/Security';

//import Contests from '../components/pages/Contests/Contests';
//import FoodInSeason from '../components/pages/FoodInSeason/FoodInSeason';
//import RecipeSubmit from '../components/pages/RecipeSubmit/RecipeSubmit';
//import from '../components/pages//';

//import Charity from '../components/pages/Charity/Charity';

import Home from '../components/pages/Home/Home';

import NotFound from '../components/NotFound/NotFound';



const RoutesList = ({ childProps }) => (
  <Switch>

    {/* staff routes */}

    <AppliedRoute path="/staff/recipes/submit" exact component={SubmitRecipe} props={childProps} />
    {/*<AuthenticatedRoute path="/user/dashboard" exact component={SubmitRecipe} props={childProps} />*/}



    {/* auth routes */}

    <UnauthenticatedRoute path="/user/register" exact component={Register} props={childProps} />
    <UnauthenticatedRoute path="/user/login" exact component={Login} props={childProps} />
    <AuthenticatedRoute path="/user/logout" exact component={Logout} props={childProps} />



    {/* primary app feature routes */}

    {/*<AppliedRoute path="/dashboard" exact component={Dashboard} props={childProps} />*/}
    {/*<AuthenticatedRoute path="/user/dashboard" exact component={UserDashboard} props={childProps} />*/}

    <AppliedRoute path="/planner" exact component={Planner} props={childProps} />
    <AuthenticatedRoute path="/user/planner" exact component={UserPlanner} props={childProps} />

    <AppliedRoute path="/messenger" exact component={Messenger} props={childProps} />
    <AuthenticatedRoute path="/user/messenger" exact component={UserMessenger} props={childProps} />

    {/*<AppliedRoute path="/friends" exact component={Friends} props={childProps} />*/}
    {/*<AuthenticatedRoute path="/user/friends" exact component={UserFriends} props={childProps} />*/}



    {/* 
      mostly
      website info page,
      static content page,
      and
      store sales page
      routes
    */}
    
    {/*<AppliedRoute path="/sitemap" exact component={Sitemap} props={childProps} />*/}
    <AppliedRoute path="/disclaimer" exact component={Disclaimer} props={childProps} />
    {/*<AppliedRoute path="/terms" exact component={TermsOfUse} props={childProps} />*/}
    {/*<AppliedRoute path="/privacy" exact component={PrivacyPolicy} props={childProps} />*/}
    {/*<AppliedRoute path="/help" exact component={Help} props={childProps} />*/}
    
    <AppliedRoute path="/food/equipments" exact component={Equipments} props={childProps} />
    <AppliedRoute path="/food/equipment/:id" exact component={Equipment} props={childProps} />
    <AppliedRoute path="/food/ingredients" exact component={Ingredients} props={childProps} />
    <AppliedRoute path="/food/ingredient/:id" exact component={Ingredient} props={childProps} />
    {/*<AppliedRoute path="/food/recipes" exact component={Recipes} props={childProps} />*/}
    {/*<AppliedRoute path="/food/recipe/:id" exact component={Recipe} props={childProps} />*/}
    <AppliedRoute path="/food" exact component={Food} props={childProps} />
    <AppliedRoute path="/fitness" exact component={Fitness} props={childProps} />
    <AppliedRoute path="/supplements" exact component={Supplements} props={childProps} />
    
    {/*<AppliedRoute path="/water-filtration" exact component={WaterFiltration} props={childProps} />*/}
    {/*<AppliedRoute path="/tea" exact component={Tea} props={childProps} />*/}
    {/*<AppliedRoute path="/coffee" exact component={Coffee} props={childProps} />*/}

    {/*<AppliedRoute path="/outdoors" exact component={Outdoors} props={childProps} />*/}
    {/*<AppliedRoute path="/garden" exact component={Garden} props={childProps} />*/}
    {/*<AppliedRoute path="/tools" exact component={Tools} props={childProps} />*/}
    {/*<AppliedRoute path="/weapons" exact component={Weapons} props={childProps} />*/}
    {/*<AppliedRoute path="/finances" exact component={Finances} props={childProps} />*/}
    {/*<AppliedRoute path="/security" exact component={Security} props={childProps} />*/}

    {/*<AppliedRoute path="/contests" exact component={Contests} props={childProps} />*/}
    {/*<AppliedRoute path="/seasonal" exact component={FoodInSeason} props={childProps} />*/}
    {/*<AppliedRoute path="/food/recipes/submit" exact component={RecipeSubmit} props={childProps} />*/}
    {/*<AuthenticatedRoute path="/user/recipes/submit" exact component={UserRecipeSubmit} props={childProps} />*/}

    {/*<AppliedRoute path="/charity" exact component={Charity} props={childProps} />*/}



    {/* news AKA home AKA index AKA default route */}

    <AppliedRoute path="/home" exact component={Home} props={childProps} />
    <AppliedRoute path="/" exact component={Home} props={childProps} />

    {/* 404 not found error route */}

    <Route render={props => <NotFound {...props} />} />

  </Switch>
);

export default RoutesList;