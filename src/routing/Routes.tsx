import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

import { LoaderSpinner } from '../components/LoaderSpinner/LoaderSpinner';
const Register = lazy(() => import('../components/user/Register/Register'));
const Login = lazy(() => import('../components/user/Login/Login'));
const Profile = lazy(() => import('../components/user/Profile/Profile'));
const Dashboard = lazy(() => import('../components/user/Dashboard/Dashboard'));
const Friends = lazy(() => import('../components/user/Friends/Friends'));
const MessengerPage = lazy(() => import('../components/user/Messenger/MessengerPage'));
const PlanPage = lazy(() => import('../components/user/Plan/PlanPage'));
const NewPlanPage = lazy(() => import('../components/user/NewPlan/NewPlanPage'));
const NewRecipe = lazy(() => import('../components/user/NewRecipe/NewRecipe'));
const NewEquipment = lazy(() => import('../components/user/NewEquipment/NewEquipment'));
const NewIngredient = lazy(() => import('../components/user/NewIngredient/NewIngredient'));
//const SearchResultsAll = lazy(() => import('../components/search/SearchResults/SearchResultsAll'));
const SearchResultsRecipes = lazy(() => import('../components/search/SearchResultsRecipes/SearchResultsRecipes'));
const SearchResultsIngredients = lazy(() => import('../components/search/SearchResultsIngredients/SearchResultsIngredients'));
const SearchResultsEquipment = lazy(() => import('../components/search/SearchResultsEquipment/SearchResultsEquipment'));
const Recipe = lazy(() => import('../components/Recipe/Recipe'));
const Ingredient = lazy(() => import('../components/Ingredient/Ingredient'));
const Equipment = lazy(() => import('../components/Equipment/Equipment'));
// import Content, import Navigation
//
//
//
//
//
//
//
//
//
import { Food } from '../components/guide/Food/Food';

import SiteNavRecipes from '../components/pages/Food/SiteNavRecipes/SiteNavRecipes';

import Drinks from '../components/pages/Food/SiteNavRecipes/Drinks/Drinks';
import Appetizers from '../components/pages/Food/SiteNavRecipes/Appetizers/Appetizers';
import Mains from '../components/pages/Food/SiteNavRecipes/Mains/Mains';
import Sides from '../components/pages/Food/SiteNavRecipes/Sides/Sides';
import Desserts from '../components/pages/Food/SiteNavRecipes/Desserts/Desserts';
import Soups from '../components/pages/Food/SiteNavRecipes/Soups/Soups';
import Salads from '../components/pages/Food/SiteNavRecipes/Salads/Salads';
import Stews from '../components/pages/Food/SiteNavRecipes/Stews/Stews';
import Casseroles from '../components/pages/Food/SiteNavRecipes/Casseroles/Casseroles';
import Sauces from '../components/pages/Food/SiteNavRecipes/Sauces/Sauces';
import Dressings from '../components/pages/Food/SiteNavRecipes/Dressings/Dressings';
import Condiments from '../components/pages/Food/SiteNavRecipes/Condiments/Condiments';

import Cuisines from '../components/pages/Food/Cuisines/Cuisines';
import Cuisine from '../components/pages/Food/Cuisine/Cuisine';

import SiteNavIngredients from '../components/pages/Food/SiteNavIngredients/SiteNavIngredients';

import FishAndShellfish from '../components/pages/Food/SiteNavIngredients/FishAndShellfish/FishAndShellfish';
import MeatAndPoultry from '../components/pages/Food/SiteNavIngredients/MeatAndPoultry/MeatAndPoultry';
import EggsAndDairy from '../components/pages/Food/SiteNavIngredients/EggsAndDairy/EggsAndDairy';
import BeansAndVegetables from '../components/pages/Food/SiteNavIngredients/BeansAndVegetables/BeansAndVegetables';
import Fruit from '../components/pages/Food/SiteNavIngredients/Fruit/Fruit';
import SeedsAndGrains from '../components/pages/Food/SiteNavIngredients/SeedsAndGrains/SeedsAndGrains';  // Nuts also!
import FatsAndOils from '../components/pages/Food/SiteNavIngredients/FatsAndOils/FatsAndOils';
import AcidsHerbsAndSpices from '../components/pages/Food/SiteNavIngredients/AcidsHerbsAndSpices/AcidsHerbsAndSpices';

import Nutrition from '../components/pages/Food/Nutrition/Nutrition';

import Calories from '../components/pages/Food/Nutrition/Calories/Calories';
import Macronutrients from '../components/pages/Food/Nutrition/Macronutrients/Macronutrients';
import Micronutrients from '../components/pages/Food/Nutrition/Micronutrients/Micronutrients';
import Supplements from '../components/pages/Food/Nutrition/Supplements/Supplements';

import SiteNavEquipment from '../components/pages/Food/SiteNavEquipment/SiteNavEquipment';

import Cleaning from '../components/pages/Food/SiteNavEquipment/Cleaning/Cleaning';
import Preparing from '../components/pages/Food/SiteNavEquipment/Preparing/Preparing';
import Cooking from '../components/pages/Food/SiteNavEquipment/Cooking/Cooking';
import Dining from '../components/pages/Food/SiteNavEquipment/Dining/Dining';
import Storage from '../components/pages/Food/SiteNavEquipment/Storage/Storage';

import Methods from '../components/pages/Food/Methods/Methods';

import ChillAndFreeze from '../components/pages/Food/Methods/ChillAndFreeze/ChillAndFreeze';
import SteamPoachSimmerBoilAndBlanch from '../components/pages/Food/Methods/SteamPoachSimmerBoilAndBlanch/SteamPoachSimmerBoilAndBlanch';
import StewAndBraise from '../components/pages/Food/Methods/StewAndBraise/StewAndBraise';
import BakeRoastToastAndBroil from '../components/pages/Food/Methods/BakeRoastToastAndBroil/BakeRoastToastAndBroil';
import SauteFryAndGlaze from '../components/pages/Food/Methods/SauteFryAndGlaze/SauteFryAndGlaze';
import BBQGrillAndSmoke from '../components/pages/Food/Methods/BBQGrillAndSmoke/BBQGrillAndSmoke';

import { Fitness } from '../components/guide/Fitness/Fitness';

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
import Bike from '../components/pages/Fitness/Exercises/Bike/Bike';
import Run from '../components/pages/Fitness/Exercises/Run/Run';
import Squat from '../components/pages/Fitness/Exercises/Squat/Squat';
import Pushup from '../components/pages/Fitness/Exercises/Pushup/Pushup';
import Pullup from '../components/pages/Fitness/Exercises/Pullup/Pullup';

import Promo from '../components/pages/promo/Promo';

import WaterFiltration from '../components/pages/promo/WaterFiltration/WaterFiltration';
import Tea from '../components/pages/promo/Tea/Tea';
import Coffee from '../components/pages/promo/Coffee/Coffee';
import Outdoors from '../components/pages/promo/Outdoors/Outdoors';
import Garden from '../components/pages/promo/Garden/Garden';
import Tools from '../components/pages/promo/Tools/Tools';

import Site from '../components/pages/site/Site';

import Contests from '../components/pages/site/Contests/Contests';
import Charity from '../components/pages/site/Charity/Charity';
import Sitemap from '../components/pages/site/Sitemap/Sitemap';
import Disclaimer from '../components/pages/site/Disclaimer/Disclaimer';
import TermsOfUse from '../components/pages/site/TermsOfUse/TermsOfUse';
import PrivacyPolicy from '../components/pages/site/PrivacyPolicy/PrivacyPolicy';
import Help from '../components/pages/site/Help/Help';
import Welcome from '../components/pages/site/Welcome/Welcome';
//
//
//
//
//
//
//
//
//
//
import Supply from '../components/supply/Supply';
import { Home } from '../components/Home/Home';
import { NotFound } from '../components/NotFound/NotFound';
import AppliedRoute from './AppliedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';

// TO DO: just make Verify its own component..?

const authRoute = (
  path: string,
  component: any,
  childProps: any = null
) =>
  <AuthenticatedRoute
    path={path}
    component={component}
    childProps={childProps}
  />;

const unauthRoute = (
  path: string,
  component: any,
  childProps: any = null
) =>
  <UnauthenticatedRoute
    path={path}
    component={component}
    childProps={childProps}
  />;

const appRoute = (path: string, component: any) =>
  <AppliedRoute path={path} component={component} />;

const RoutesList = () => (
  <Suspense fallback={<LoaderSpinner />}>
    <Switch>
      {unauthRoute("/register", Register, {confirmingUser: false})}
      {unauthRoute("/verify", Register, {confirmingUser: true})}
      {unauthRoute("/login", Login)}
      {appRoute("/profile/:username", Profile)}
      {authRoute("/dashboard", Dashboard)}
      {authRoute("/friends", Friends)}
      {authRoute("/messenger", MessengerPage)}
      {authRoute("/user-plan/edit/:id", NewPlanPage, {editing: true})}
      {authRoute("/user-plan/submit", NewPlanPage)}
      {authRoute("/user-plan/:id", PlanPage)}
      {authRoute(
        "/user-recipes/private/submit",
        NewRecipe,
        {submittingOwnership: "private"}
      )}
      {authRoute(
        "/user-recipes/public/submit",
        NewRecipe,
        {submittingOwnership: "public"}
      )}
      {authRoute(
        "/user-recipes/private/edit/:id",
        NewRecipe,
        {editing: true, editingOwnership: "private"}
      )}
      {authRoute(
        "/user-recipes/public/edit/:id",
        NewRecipe,
        {editing: true, editingOwnership: "public"}
      )}
      {authRoute("/user-recipes/:id", Recipe)}
      {authRoute("/user-equipment/submit", NewEquipment)}
      {authRoute("/user-equipment/edit/:id", NewEquipment, {editing: true})}
      {authRoute("/user-equipment/:id", Equipment)}
      {authRoute("/user-ingredients/submit", NewIngredient)}
      {authRoute(
        "/user-ingredients/edit/:id",
        NewIngredient,
        {editing: true}
      )}
      {authRoute("/user-ingredients/:id", Ingredient)}
      {appRoute("/recipes/:id", Recipe)}
      {appRoute("/ingredients/:id", Ingredient)}
      {appRoute("/equipment/:id", Equipment)}
      {/*{appRoute("/all", SearchResultsAll)}*/}
      {appRoute("/recipes", SearchResultsRecipes)}
      {appRoute("/ingredients", SearchResultsIngredients)}
      {appRoute("/equipment", SearchResultsEquipment)}





      {appRoute("/food", Food)}
      {appRoute("/food/recipes", SiteNavRecipes)}
      {appRoute("/food/recipes/drinks", Drinks)}
      {appRoute("/food/recipes/appetizers", Appetizers)}
      {appRoute("/food/recipes/mains", Mains)}
      {appRoute("/food/recipes/sides", Sides)}
      {appRoute("/food/recipes/desserts", Desserts)}
      {appRoute("/food/recipes/soups", Soups)}
      {appRoute("/food/recipes/salads", Salads)}
      {appRoute("/food/recipes/stews", Stews)}
      {appRoute("/food/recipes/casseroles", Casseroles)}
      {appRoute("/food/recipes/sauces", Sauces)}
      {appRoute("/food/recipes/dressings", Dressings)}
      {appRoute("/food/recipes/condiments", Condiments)}

      {appRoute("/food/cuisines/:id", Cuisine)}
      {appRoute("/food/cuisines", Cuisines)}

      {appRoute("/food/ingredients", SiteNavIngredients)}
      {appRoute("/food/ingredients/fish-and-shellfish", FishAndShellfish)}
      {appRoute("/food/ingredients/meat-and-poultry", MeatAndPoultry)}
      {appRoute("/food/ingredients/eggs-and-dairy", EggsAndDairy)}
      {appRoute("/food/ingredients/beans-and-vegetables", BeansAndVegetables)}
      {appRoute("/food/ingredients/fruit", Fruit)}
      {appRoute("/food/ingredients/seeds-and-grains", SeedsAndGrains)}
      {appRoute("/food/ingredients/fats-and-oils", FatsAndOils)}
      {appRoute(
        "/food/ingredients/acids-herbs-and-spices",
        AcidsHerbsAndSpices
      )}
      {appRoute("/food/nutrition", Nutrition)}
      {appRoute("/food/nutrition/calories", Calories)}
      {appRoute("/food/nutrition/macronutrients", Macronutrients)}
      {appRoute("/food/nutrition/micronutrients", Micronutrients)}
      {appRoute("/food/nutrition/supplements", Supplements)}

      {appRoute("/food/equipment", SiteNavEquipment)}
      {appRoute("/food/equipment/cleaning", Cleaning)}
      {appRoute("/food/equipment/preparing", Preparing)}
      {appRoute("/food/equipment/cooking", Cooking)}
      {appRoute("/food/equipment/dining", Dining)}
      {appRoute("/food/equipment/storage", Storage)}

      {appRoute("/food/methods", Methods)}
      {appRoute("/food/methods/chill-and-freeze", ChillAndFreeze)}
      {appRoute(
        "/food/methods/steam-poach-simmer-boil-and-blanch",
        SteamPoachSimmerBoilAndBlanch
      )}
      {appRoute("/food/methods/stew-and-braise", StewAndBraise)}
      {appRoute(
        "/food/methods/bake-roast-toast-and-broil",
        BakeRoastToastAndBroil
      )}
      {appRoute("/food/methods/saute-fry-and-glaze", SauteFryAndGlaze)}
      {appRoute("/food/methods/bbq-grill-and-smoke", BBQGrillAndSmoke)}

      {appRoute("/fitness", Fitness)}
      {appRoute("/fitness/principles", Principles)}
      {appRoute("/fitness/principles/composition", Composition)}
      {appRoute("/fitness/principles/balance", Balance)}
      {appRoute("/fitness/principles/strength", Strength)}
      {appRoute("/fitness/principles/speed", Speed)}
      {appRoute("/fitness/principles/agility", Agility)}
      {appRoute("/fitness/principles/endurance", Endurance)}
      {appRoute("/fitness/principles/flexibility", Flexibility)}

      {appRoute("/fitness/exercises", Exercises)}
      {appRoute("/fitness/exercises/walk", Walk)}
      {appRoute("/fitness/exercises/bike", Bike)}
      {appRoute("/fitness/exercises/run", Run)}
      {appRoute("/fitness/exercises/squat", Squat)}
      {appRoute("/fitness/exercises/pushup", Pushup)}
      {appRoute("/fitness/exercises/pullup", Pullup)}

      {appRoute("/supply", Supply)}

      {appRoute("/promo", Promo)}
      {appRoute("/promo/water-filtration", WaterFiltration)}
      {appRoute("/promo/tea", Tea)}
      {appRoute("/promo/coffee", Coffee)}
      {appRoute("/promo/outdoors", Outdoors)}
      {appRoute("/promo/garden", Garden)}
      {appRoute("/promo/tools", Tools)}

      {appRoute("/site", Site)}
      {appRoute("/site/contests", Contests)}
      {appRoute("/site/charity", Charity)}
      {appRoute("/site/sitemap", Sitemap)}
      {appRoute("/site/disclaimer", Disclaimer)}
      {appRoute("/site/terms", TermsOfUse)}
      {appRoute("/site/privacy", PrivacyPolicy)}
      {appRoute("/site/help", Help)}
      {appRoute("/site/welcome", Welcome)}





      {appRoute("/home", Home)}
      {appRoute("/", Home)}
      {appRoute("*", NotFound)}
    </Switch>
  </Suspense>
);

export default RoutesList;