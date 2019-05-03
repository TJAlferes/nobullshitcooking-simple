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
import SubmitRecipe from '../components/SubmitRecipe/SubmitRecipe';
//import EditRecipe from '../components/EditRecipe/EditRecipe';

import Register from '../components/user/Register/Register';
import Login from '../components/user/Login/Login';
import Logout from '../components/user/Logout/Logout';

//import Dashboard from '../components/Dashboard/Dashboard';
import UserDashboard from '../components/user/UserDashboard/UserDashboard';
import PlannerPage from '../components/pages/PlannerPage/PlannerPage';
import UserPlannerPage from '../components/user/UserPlannerPage/UserPlannerPage';
import Messenger from '../components/Messenger/Messenger';
//import UserMessenger from '../components/user/UserMessenger/UserMessenger';
//import Friends from '../components/Friends/Friends';
//import UserFriends from '../components/user/UserFriends/UserFriends';

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
import Recipes from '../components/pages/Recipes/Recipes';
import Recipe from '../components/pages/Recipes/Recipe';
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



const RoutesList = () => (
  <Switch>



    {/* staff routes */}

    <AppliedRoute path="/staff/recipes/submit" exact component={SubmitRecipe} />
    {/*<AuthenticatedRoute path="/user/dashboard" exact component={SubmitRecipe} props={childProps} />*/}



    {/* auth routes */}

    <UnauthenticatedRoute path="/user/register" exact component={Register} />
    <UnauthenticatedRoute path="/user/login" exact component={Login} />
    <AuthenticatedRoute path="/user/logout" exact component={Logout} />



    {/* primary app feature routes */}

    {/*<AppliedRoute path="/dashboard" exact component={Dashboard} />*/}
    <AuthenticatedRoute path="/user/dashboard" exact component={UserDashboard} />

    <AppliedRoute path="/planner" exact component={PlannerPage} />
    <AuthenticatedRoute path="/user/planner" exact component={UserPlannerPage} />

    <AppliedRoute path="/messenger" exact component={Messenger} />
    {/*<AuthenticatedRoute path="/user/messenger" exact component={UserMessenger} />*/}

    {/*<AppliedRoute path="/friends" exact component={Friends} />*/}
    {/*<AuthenticatedRoute path="/user/friends" exact component={UserFriends} />*/}



    {/* 
      mostly
      website info page,
      static content page,
      and
      store sales page
      routes
    */}
    
    {/*<AppliedRoute path="/sitemap" exact component={Sitemap} />*/}
    <AppliedRoute path="/disclaimer" exact component={Disclaimer} />
    {/*<AppliedRoute path="/terms" exact component={TermsOfUse} />*/}
    {/*<AppliedRoute path="/privacy" exact component={PrivacyPolicy} />*/}
    {/*<AppliedRoute path="/help" exact component={Help} />*/}
    
    <AppliedRoute path="/food/equipments" exact component={Equipments} />
    <AppliedRoute path="/food/equipment/:id" exact component={Equipment} />
    <AppliedRoute path="/food/ingredients" exact component={Ingredients} />
    <AppliedRoute path="/food/ingredient/:id" exact component={Ingredient} />
    {/*<AppliedRoute path="/food/recipes" exact component={Recipes} props={childProps} />*/}
    {/*<AppliedRoute path="/food/recipe/:id" exact component={Recipe} props={childProps} />*/}
    <AppliedRoute path="/food" exact component={Food} />
    <AppliedRoute path="/fitness" exact component={Fitness} />
    <AppliedRoute path="/food/nutrition/supplements" exact component={Supplements} />
    
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

    <AppliedRoute path="/home" exact component={Home} />
    <AppliedRoute path="/" exact component={Home} />

    {/* 404 not found error route */}

    <Route render={props => <NotFound {...props} />} />

  </Switch>
);

export default RoutesList;