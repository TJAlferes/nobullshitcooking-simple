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
import Register from '../components/user/Register/Register';
import StaffLogin from '../components/staff/StaffLogin/StaffLogin';  // eventually break out into separate React app
import Login from '../components/user/Login/Login';

import Dashboard from '../components/Dashboard/Dashboard';  // for demo purposes
import StaffDashboard from '../components/staff/StaffDashboard/StaffDashboard';
import UserDashboard from '../components/user/UserDashboard/UserDashboard';

import PlannerPage from '../components/PlannerPage/PlannerPage';  // for demo purposes
import UserPlannerPage from '../components/user/UserPlannerPage/UserPlannerPage';

import SubmitRecipe from '../components/SubmitRecipe/SubmitRecipe';  // for demo purposes
import StaffSubmitRecipe from '../components/staff/StaffSubmitRecipe/StaffSubmitRecipe';
import UserSubmitRecipe from '../components/user/UserSubmitRecipe/UserSubmitRecipe';

import EditRecipe from '../components/EditRecipe/EditRecipe';  // for demo purposes
import StaffEditRecipe from '../components/staff/StaffEditRecipe/StaffEditRecipe';
import UserEditRecipe from '../components/user/UserEditRecipe/UserEditRecipe';

import Messenger from '../components/Messenger/Messenger';  // for demo purposes
import UserMessenger from '../components/user/UserMessenger/UserMessenger';

import Friends from '../components/Friends/Friends';  // for demo purposes
import UserFriends from '../components/user/UserFriends/UserFriends';

import Equipments from '../components/pages/Equipments/Equipments';
import Equipment from '../components/pages/Equipment/Equipment';
import Ingredients from '../components/pages/Ingredients/Ingredients';
import Ingredient from '../components/pages/Ingredient/Ingredient';
import Recipes from '../components/pages/Recipes/Recipes';
import Recipe from '../components/pages/Recipe/Recipe';

import Food from '../components/pages/Food/Food';
import Fitness from '../components/pages/Fitness/Fitness';
import StoreFront from '../components/shop/StoreFront/StoreFront';
//import KitchenEquipment from TO DO: Pass filter/sort/search data as prop to '../components/shop/ProductsList/ProductsList';

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
//import Charity from '../components/pages/Charity/Charity';

//import Sitemap from '../components/pages/site/Sitemap/Sitemap';
import Disclaimer from '../components/pages/site/Disclaimer/Disclaimer';
//import TermsOfUse from '../components/pages/site/TermsOfUse/TermsOfUse';
//import PrivacyPolicy from '../components/pages/site/PrivacyPolicy/PrivacyPolicy';
//import Help from '../components/pages/site/Help/Help';

import Home from '../components/pages/Home/Home';

import NotFound from '../components/NotFound/NotFound';



const RoutesList = () => (
  <Switch>



    {/*
      authN routes
    */}

    <UnauthenticatedRoute path="/user/register" exact component={Register} />
    <UnauthenticatedRoute path="/staff/login" exact component={StaffLogin} />
    <UnauthenticatedRoute path="/user/login" exact component={Login} />



    {/* 
      primary app feature routes
    */}

    <AppliedRoute path="/dashboard" exact component={Dashboard} />  {/* for demo purposes */}
    <AuthenticatedRoute path="/staff/dashboard" exact component={StaffDashboard} />
    <AuthenticatedRoute path="/user/dashboard" exact component={UserDashboard} />

    <AppliedRoute path="/planner" exact component={PlannerPage} />  {/* for demo/public purposes */}
    <AuthenticatedRoute path="/user/planner" exact component={UserPlannerPage} />

    <AppliedRoute path="/food/recipes/submit" exact component={SubmitRecipe} />  {/* for demo purposes */}
    <AuthenticatedRoute path="/staff/recipes/submit" exact component={StaffSubmitRecipe} />
    <AuthenticatedRoute path="/user/recipes/submit" exact component={UserSubmitRecipe} />

    <AppliedRoute path="/messenger" exact component={Messenger} />  {/* for demo purposes */}
    <AuthenticatedRoute path="/user/messenger" exact component={UserMessenger} />

    <AppliedRoute path="/friends" exact component={Friends} />  {/* for demo purposes */}
    <AuthenticatedRoute path="/user/friends" exact component={UserFriends} />



    {/* 
      mostly
      website info page,
      static content page,
      and
      store sales page
      routes
    */}
    
    <AppliedRoute path="/food/equipments" exact component={Equipments} />
    <AppliedRoute path="/food/equipment/:id" exact component={Equipment} />
    <AppliedRoute path="/food/ingredients" exact component={Ingredients} />
    <AppliedRoute path="/food/ingredient/:id" exact component={Ingredient} />
    <AppliedRoute path="/food/recipes" exact component={Recipes} />
    <AppliedRoute path="/food/recipe/:id" exact component={Recipe} />
    <AppliedRoute path="/food" exact component={Food} />
    {/*<AppliedRoute path="/food/nutrition" exact component={Nutrition} />*/}
    <AppliedRoute path="/food/nutrition/supplements" exact component={Supplements} />
    {/*<AppliedRoute path="/food/methods" exact component={Methods} />*/}
    {/*<AppliedRoute path="/food/cuisines" exact component={Cuisines} />*/}

    <AppliedRoute path="/fitness" exact component={Fitness} />
    {/*<AppliedRoute path="/fitness/principles" exact component={Principles} />*/}
    {/*<AppliedRoute path="/fitness/exercises" exact component={Exercises} />*/}

    <AppliedRoute path="/supply" exact component={StoreFront} />
    {/*<AppliedRoute path="/supply/kitchen-equipment" exact component={KitchenEquipment} />*/}
    
    {/*<AppliedRoute path="/water-filtration" exact component={WaterFiltration} />*/}
    {/*<AppliedRoute path="/tea" exact component={Tea} />*/}
    {/*<AppliedRoute path="/coffee" exact component={Coffee} />*/}
    {/*<AppliedRoute path="/outdoors" exact component={Outdoors} />*/}
    {/*<AppliedRoute path="/garden" exact component={Garden} />*/}
    {/*<AppliedRoute path="/tools" exact component={Tools} />*/}
    {/*<AppliedRoute path="/weapons" exact component={Weapons} />*/}
    {/*<AppliedRoute path="/finances" exact component={Finances} />*/}
    {/*<AppliedRoute path="/security" exact component={Security} />*/}
    {/*<AppliedRoute path="/contests" exact component={Contests} />*/}
    {/*<AppliedRoute path="/seasonal" exact component={FoodInSeason} />*/}
    {/*<AppliedRoute path="/charity" exact component={Charity} />*/}

    {/*<AppliedRoute path="/sitemap" exact component={Sitemap} />*/}
    <AppliedRoute path="/disclaimer" exact component={Disclaimer} />
    {/*<AppliedRoute path="/terms" exact component={TermsOfUse} />*/}
    {/*<AppliedRoute path="/privacy" exact component={PrivacyPolicy} />*/}
    {/*<AppliedRoute path="/help" exact component={Help} />*/}



    {/*
      news AKA home AKA index AKA default route
    */}

    <AppliedRoute path="/home" exact component={Home} />
    <AppliedRoute path="/" exact component={Home} />



    {/*
      404 not found error route
    */}

    <Route render={props => <NotFound {...props} />} />

  </Switch>
);

export default RoutesList;