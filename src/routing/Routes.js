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

import Nutrition from '../components/pages/Food/Nutrition/Nutrition';
import Calories from '../components/pages/Food/Nutrition/Calories/Calories';
import Macronutrients from '../components/pages/Food/Nutrition/Macronutrients/Macronutrients';
import Micronutrients from '../components/pages/Food/Nutrition/Micronutrients/Micronutrients';
import Supplements from '../components/pages/Food/Nutrition/Supplements/Supplements';

import Methods from '../components/pages/Food/Methods/Methods';
import PoachAndSimmer from '../components/pages/Food/Methods/PoachAndSimmer/PoachAndSimmer';
import Steam from '../components/pages/Food/Methods/Steam/Steam';
import Saute from '../components/pages/Food/Methods/Saute/Saute';
import Roast from '../components/pages/Food/Methods/Roast/Roast';
import Grill from '../components/pages/Food/Methods/Grill/Grill';
import StewAndBraise from '../components/pages/Food/Methods/StewAndBraise/StewAndBraise';

import Cuisines from '../components/pages/Food/Cuisines/Cuisines';
import Russian from '../components/pages/Food/Cuisines/Russian/Russian';
import German from '../components/pages/Food/Cuisines/German/German';
import Turkish from '../components/pages/Food/Cuisines/Turkish/Turkish';
import French from '../components/pages/Food/Cuisines/French/French';
import Italian from '../components/pages/Food/Cuisines/Italian/Italian';
import Mexican from '../components/pages/Food/Cuisines/Mexican/Mexican';
import Greek from '../components/pages/Food/Cuisines/Greek/Greek';
import Irish from '../components/pages/Food/Cuisines/Irish/Irish';
import Chinese from '../components/pages/Food/Cuisines/Chinese/Chinese';
import Indian from '../components/pages/Food/Cuisines/Indian/Indian';
import Japanese from '../components/pages/Food/Cuisines/Japanese/Japanese';
import Iranian from '../components/pages/Food/Cuisines/Iranian/Iranian';


import Fitness from '../components/pages/Fitness/Fitness';  // fitness is NOT the same as health

import Principles from '../components/pages/Fitness/Principles/Principles';
import Composition from '../components/pages/Fitness/Principles/Composition/Composition';
import Balance from '../components/pages/Fitness/Principles/Balance/Balance';
import Strength from '../components/pages/Fitness/Principles/Strength/Strength';
import Speed from '../components/pages/Fitness/Principles/Speed/Speed';
import Agility from '../components/pages/Fitness/Principles/Agility/Agility';
import Endurance from '../components/pages/Fitness/Principles/Endurance/Endurance';
import Flexibility from '../components/pages/Fitness/Principles/Flexibility/Flexibility';

import Exercises from '../components/pages/Fitness/Exercises/Exercises';
import Walk from '../components/pages/Fitness/Exercises/Walk/Walk';
import Squat from '../components/pages/Fitness/Exercises/Squat/Squat';
import Pushup from '../components/pages/Fitness/Exercises/Pushup/Pushup';
import Pullup from '../components/pages/Fitness/Exercises/Pullup/Pullup';


import StoreFront from '../components/shop/StoreFront/StoreFront';


import KitchenEquipment from '../components/pages/promo/KitchenEquipment';
// was from '../components/shop/ProductsList/ProductsList';
// TO DO: Pass filter/sort/search data as prop to '../components/shop/ProductsList/ProductsList'; (!!! beware initializing component state from props)
import WaterFiltration from '../components/pages/promo/WaterFiltration/WaterFiltration';
import Tea from '../components/pages/promo/Tea/Tea';
import Coffee from '../components/pages/promo/Coffee/Coffee';
import Outdoors from '../components/pages/promo/Outdoors/Outdoors';
import Garden from '../components/pages/promo/Garden/Garden';
import Tools from '../components/pages/promo/Tools/Tools';
import Weapons from '../components/pages/promo/Weapons/Weapons';
import FoodInSeason from '../components/pages/promo/FoodInSeason/FoodInSeason';

import Finances from '../components/pages/info/Finances/Finances';  // fed from blog
import Security from '../components/pages/info/Security/Security';  // fed from blog

import Contests from '../components/pages/site/Contests/Contests';
import Charity from '../components/pages/site/Charity/Charity';
import Sitemap from '../components/pages/site/Sitemap/Sitemap';
import Disclaimer from '../components/pages/site/Disclaimer/Disclaimer';
import TermsOfUse from '../components/pages/site/TermsOfUse/TermsOfUse';
import PrivacyPolicy from '../components/pages/site/PrivacyPolicy/PrivacyPolicy';
import Help from '../components/pages/site/Help/Help';

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
    <AuthenticatedRoute path="/staff" exact component={StaffDashboard} />
    <AuthenticatedRoute path="/user/dashboard" exact component={UserDashboard} />
    <AuthenticatedRoute path="/user" exact component={UserDashboard} />

    <AppliedRoute path="/planner" exact component={PlannerPage} />  {/* for demo/public purposes */}
    <AuthenticatedRoute path="/user/planner" exact component={UserPlannerPage} />

    <AppliedRoute path="/food/recipes/submit" exact component={SubmitRecipe} />  {/* for demo purposes */}
    <AuthenticatedRoute path="/staff/recipes/submit" exact component={StaffSubmitRecipe} />
    <AuthenticatedRoute path="/user/recipes/submit" exact component={UserSubmitRecipe} />
    <AppliedRoute path="/food/recipes/edit" exact component={EditRecipe} />  {/* for demo purposes */}
    <AuthenticatedRoute path="/staff/recipes/edit" exact component={StaffEditRecipe} />
    <AuthenticatedRoute path="/user/recipes/edit" exact component={UserEditRecipe} />

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

    <AppliedRoute path="/food/nutrition" exact component={Nutrition} />
    <AppliedRoute path="/food/nutrition/calories" exact component={Calories} />
    <AppliedRoute path="/food/nutrition/macronutrients" exact component={Macronutrients} />
    <AppliedRoute path="/food/nutrition/micronutrients" exact component={Micronutrients} />
    <AppliedRoute path="/food/nutrition/supplements" exact component={Supplements} />

    <AppliedRoute path="/food/methods" exact component={Methods} />
    <AppliedRoute path="/food/methods/poach-and-simmer" exact component={PoachAndSimmer} />
    <AppliedRoute path="/food/methods/steam" exact component={Steam} />
    <AppliedRoute path="/food/methods/saute" exact component={Saute} />
    <AppliedRoute path="/food/methods/roast" exact component={Roast} />
    <AppliedRoute path="/food/methods/grill" exact component={Grill} />
    <AppliedRoute path="/food/methods/stew-and-braise" exact component={StewAndBraise} />

    <AppliedRoute path="/food/cuisines" exact component={Cuisines} />
    <AppliedRoute path="/food/cuisines/russian" exact component={Russian} />
    <AppliedRoute path="/food/cuisines/german" exact component={German} />
    <AppliedRoute path="/food/cuisines/turkish" exact component={Turkish} />
    <AppliedRoute path="/food/cuisines/french" exact component={French} />
    <AppliedRoute path="/food/cuisines/italian" exact component={Italian} />
    <AppliedRoute path="/food/cuisines/mexican" exact component={Mexican} />
    <AppliedRoute path="/food/cuisines/greek" exact component={Greek} />
    <AppliedRoute path="/food/cuisines/irish" exact component={Irish} />
    <AppliedRoute path="/food/cuisines/chinese" exact component={Chinese} />
    <AppliedRoute path="/food/cuisines/indian" exact component={Indian} />
    <AppliedRoute path="/food/cuisines/japanese" exact component={Japanese} />
    <AppliedRoute path="/food/cuisines/iranian" exact component={Iranian} />



    <AppliedRoute path="/fitness" exact component={Fitness} />

    <AppliedRoute path="/fitness/principles" exact component={Principles} />
    <AppliedRoute path="/fitness/principles/composition" exact component={Composition} />
    <AppliedRoute path="/fitness/principles/balance" exact component={Balance} />
    <AppliedRoute path="/fitness/principles/strength" exact component={Strength} />
    <AppliedRoute path="/fitness/principles/speed" exact component={Speed} />
    <AppliedRoute path="/fitness/principles/agility" exact component={Agility} />
    <AppliedRoute path="/fitness/principles/endurance" exact component={Endurance} />
    <AppliedRoute path="/fitness/principles/flexibility" exact component={Flexibility} />

    <AppliedRoute path="/fitness/exercises" exact component={Exercises} />

    <AppliedRoute path="/supply" exact component={StoreFront} />
    <AppliedRoute path="/supply/kitchen-equipment" exact component={KitchenEquipment} />
    
    <AppliedRoute path="/supply/water-filtration" exact component={WaterFiltration} />
    <AppliedRoute path="/supply/tea" exact component={Tea} />
    <AppliedRoute path="/supply/coffee" exact component={Coffee} />

    <AppliedRoute path="/supply/outdoors" exact component={Outdoors} />
    <AppliedRoute path="/supply/garden" exact component={Garden} />
    <AppliedRoute path="/supply/tools" exact component={Tools} />
    <AppliedRoute path="/supply/weapons" exact component={Weapons} />
    <AppliedRoute path="/supply/finances" exact component={Finances} />
    <AppliedRoute path="/supply/security" exact component={Security} />

    <AppliedRoute path="/contests" exact component={Contests} />
    <AppliedRoute path="/seasonal" exact component={FoodInSeason} />
    <AppliedRoute path="/charity" exact component={Charity} />

    <AppliedRoute path="/sitemap" exact component={Sitemap} />
    <AppliedRoute path="/disclaimer" exact component={Disclaimer} />
    <AppliedRoute path="/terms" exact component={TermsOfUse} />
    <AppliedRoute path="/privacy" exact component={PrivacyPolicy} />
    <AppliedRoute path="/help" exact component={Help} />



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