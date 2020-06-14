import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

import { LoaderSpinner } from '../components/LoaderSpinner/LoaderSpinner';
import { IContentType } from '../store/data/types';
import AppliedRoute from './AppliedRoute';
import AuthenticatedStaffRoute from './AuthenticatedStaffRoute';
import AuthenticatedUserRoute from './AuthenticatedUserRoute';
import UnauthenticatedStaffRoute from './UnauthenticatedStaffRoute';
import UnauthenticatedUserRoute from './UnauthenticatedUserRoute';
import { makeRoutesFromContentTypes } from './CMSNavigationRoutes';

// staff routes

const StaffLogin = lazy(() => import('../components/staff/Login/Login'));
const StaffDashboard = lazy(() => import('../components/staff/Dashboard/Dashboard'));
const StaffNewRecipe = lazy(() => import('../components/staff/NewRecipe/NewRecipe'));
const StaffNewEquipment = lazy(() => import('../components/staff/NewEquipment/NewEquipment'));
const StaffNewIngredient = lazy(() => import('../components/staff/NewIngredient/NewIngredient'));
const Categories = lazy(() => import('../components/staff/Categories/Categories'));
const NewContent = lazy(() => import('../components/staff/NewContent/NewContent'));

// user routes

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
const NewPost = lazy(() => import('../components/user/NewPost/NewPost'));

// general routes

const Content = lazy(() => import('../components/Content/Content'));
const Navigation = lazy(() => import('../components/Navigation/Navigation'));
import Cuisines from '../components/Cuisines/Cuisines';
import Cuisine from '../components/Cuisine/Cuisine';
//const All = lazy(() => import('../components/search/All/All'));
const Recipes = lazy(() => import('../components/search/Recipes/Recipes'));
const Ingredients = lazy(() => import('../components/search/Ingredients/Ingredients'));
const Equipments = lazy(() => import('../components/search/Equipments/Equipments'));
const Recipe = lazy(() => import('../components/Recipe/Recipe'));
const Ingredient = lazy(() => import('../components/Ingredient/Ingredient'));
const Equipment = lazy(() => import('../components/Equipment/Equipment'));
//import Supply from '../components/supply/Supply';
import { Home } from '../components/Home/Home';
import { NotFound } from '../components/NotFound/NotFound';

const authStaffRoute = (
  path: string,
  component: any,
  childProps: any = null
) =>
  <AuthenticatedStaffRoute
    path={path}
    component={component}
    childProps={childProps}
  />;

const authUserRoute = (
  path: string,
  component: any,
  childProps: any = null
) =>
  <AuthenticatedUserRoute
    path={path}
    component={component}
    childProps={childProps}
  />;

const unauthStaffRoute = (
  path: string,
  component: any,
  childProps: any = null
) =>
  <UnauthenticatedStaffRoute
    path={path}
    component={component}
    childProps={childProps}
  />;

const unauthUserRoute = (
  path: string,
  component: any,
  childProps: any = null
) =>
  <UnauthenticatedUserRoute
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
  let routesFromContentTypes;
  if (contentTypes.length) routesFromContentTypes = makeRoutesFromContentTypes(contentTypes);
  else routesFromContentTypes = null;
  //useEffect?

  return !routesFromContentTypes
  ? <LoaderSpinner />
  : (
    <Suspense fallback={<LoaderSpinner />}>
      <Switch>
        {/* staff routes */}

        {unauthStaffRoute("/staff-login", StaffLogin)}
        {authStaffRoute("/staff-dashboard", StaffDashboard)}
        {authStaffRoute("/official-recipes/submit", StaffNewRecipe)}
        {authStaffRoute(
          "/official-recipes/edit/:id",
          StaffNewRecipe,
          {editing: true}
        )}
        {authStaffRoute("/official-equipment/submit", StaffNewEquipment)}
        {authStaffRoute(
          "/official-equipment/edit/:id",
          StaffNewEquipment,
          {editing: true}
        )}
        {authStaffRoute("/official-ingredients/submit", StaffNewIngredient)}
        {authStaffRoute(
          "/official-ingredients/edit/:id",
          StaffNewIngredient,
          {editing: true}
        )}
        {authStaffRoute("/staff-content/submit", NewContent, {editing: false})}
        {authStaffRoute("/staff-content/edit/:id", NewContent, {editing: true})}
        {authStaffRoute("/staff-content-categories", Categories)}

        {/* user routes */}

        {unauthUserRoute("/register", Register, {confirmingUser: false})}
        {unauthUserRoute("/verify", Register, {confirmingUser: true})}
        {unauthUserRoute("/login", Login)}
        {appRoute("/profile/:username", Profile)}
        {authUserRoute("/dashboard", Dashboard)}
        {authUserRoute("/friends", Friends)}
        {authUserRoute("/messenger", MessengerPage)}
        {authUserRoute("/user-plan/edit/:id", NewPlanPage, {editing: true})}
        {authUserRoute("/user-plan/submit", NewPlanPage)}
        {authUserRoute("/user-plan/:id", PlanPage)}
        {authUserRoute(
          "/user-recipes/private/submit",
          NewRecipe,
          {editing: false, ownership: "private"}
        )}
        {authUserRoute(
          "/user-recipes/public/submit",
          NewRecipe,
          {editing: false, ownership: "public"}
        )}
        {authUserRoute(
          "/user-recipes/private/edit/:id",
          NewRecipe,
          {editing: true, ownership: "private"}
        )}
        {authUserRoute(
          "/user-recipes/public/edit/:id",
          NewRecipe,
          {editing: true, ownership: "public"}
        )}
        {authUserRoute("/user-recipes/:id", Recipe)}
        {authUserRoute("/user-equipment/submit", NewEquipment)}
        {authUserRoute("/user-equipment/edit/:id", NewEquipment, {editing: true})}
        {authUserRoute("/user-equipment/:id", Equipment)}
        {authUserRoute("/user-ingredients/submit", NewIngredient)}
        {authUserRoute(
          "/user-ingredients/edit/:id",
          NewIngredient,
          {editing: true}
        )}
        {authUserRoute("/user-ingredients/:id", Ingredient)}

        {/* general routes */}

        {appRoute("/recipes/:id", Recipe)}
        {appRoute("/ingredients/:id", Ingredient)}
        {appRoute("/equipment/:id", Equipment)}
        {/*{appRoute("/all", All)}*/}
        {appRoute("/recipes", Recipes)}
        {appRoute("/ingredients", Ingredients)}
        {appRoute("/equipment", Equipments)}

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