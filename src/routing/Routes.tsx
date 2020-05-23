import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

import { LoaderSpinner } from '../components/LoaderSpinner/LoaderSpinner';
const Content = lazy(() => import('../components/cms/Content/Content'));
const Navigation = lazy(() => import('../components/cms/Navigation/Navigation'));
import Cuisines from '../components/guide/Food/Cuisines/Cuisines';
import Cuisine from '../components/guide/Food/Cuisine/Cuisine';
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
//import Supply from '../components/supply/Supply';
import { Home } from '../components/Home/Home';
import { NotFound } from '../components/NotFound/NotFound';
import { IContentType } from '../store/data/types';
import AppliedRoute from './AppliedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import { makeRoutesFromContentTypes } from './CMSNavigationRoutes';

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

const appRoute = (
  path: string,
  component: any,
  childProps: any = null
) =>
  <AppliedRoute
    path={path}
    component={component}
    childProps={childProps}
  />;

export function RoutesList({ contentTypes }: Props) {
  const routesFromContentTypes = makeRoutesFromContentTypes(contentTypes);

  return (
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
          {editing: false, ownership: "private"}
        )}
        {authRoute(
          "/user-recipes/public/submit",
          NewRecipe,
          {editing: false, ownership: "public"}
        )}
        {authRoute(
          "/user-recipes/private/edit/:id",
          NewRecipe,
          {editing: true, ownership: "private"}
        )}
        {authRoute(
          "/user-recipes/public/edit/:id",
          NewRecipe,
          {editing: true, ownership: "public"}
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
        {appRoute("/food/cuisines/:id", Cuisine)}
        {appRoute("/food/cuisines", Cuisines)}
        {routesFromContentTypes.map((route) => {
          appRoute(route.path, Navigation, route.childProps);
        })}
        {appRoute("/content/:slug/:id", Content)}
        {appRoute("/home", Home)}
        {appRoute("/", Home)}
        {appRoute("*", NotFound)}
      </Switch>
    </Suspense>
  );
}

type Props = {
  contentTypes: IContentType[];
};