import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

import { LoaderSpinner } from '../components/LoaderSpinner/LoaderSpinner';
import { IContentType } from '../store/data/types';
import {
  appRoute,
  authStaffRoute,
  authUserRoute,
  unauthStaffRoute,
  unauthUserRoute,
  makeRoutesFromContentTypes
} from './helpers';

const Content = lazy(() => import('../components/Content/Content'));
import Cuisine from '../components/Cuisine/Cuisine';
import Cuisines from '../components/Cuisines/Cuisines';
const Equipment = lazy(() => import('../components/Equipment/Equipment'));
const Equipments = lazy(() => import('../components/Equipments/Equipments'));
import { Home } from '../components/Home/Home';
const Ingredient = lazy(() => import('../components/Ingredient/Ingredient'));
const Ingredients = lazy(() => import('../components/Ingredients/Ingredients'));
const Login = lazy(() => import('../components/Login/Login'));
const Navigation = lazy(() => import('../components/Navigation/Navigation'));
const NewContent = lazy(() => import('../components/NewContent/NewContent'));
const NewEquipment = lazy(() => import('../components/NewEquipment/NewEquipment'));
const NewIngredient = lazy(() => import('../components/NewIngredient/NewIngredient'));
const NewRecipe = lazy(() => import('../components/NewRecipe/NewRecipe'));
import { NotFound } from '../components/NotFound/NotFound';
const Profile = lazy(() => import('../components/Profile/Profile'));
const Recipe = lazy(() => import('../components/Recipe/Recipe'));
const Recipes = lazy(() => import('../components/Recipes/Recipes'));
const Register = lazy(() => import('../components/Register/Register'));
const ContentTypes = lazy(() => import('../components/staff/ContentTypes/ContentTypes'));
const StaffDashboard = lazy(() => import('../components/staff/Dashboard/Dashboard'));
//import Supply from '../components/supply/Supply';
const Dashboard = lazy(() => import('../components/user/Dashboard/Dashboard'));
const Friends = lazy(() => import('../components/user/Friends/Friends'));
const MessengerPage = lazy(() => import('../components/user/Messenger/MessengerPage'));
const NewPlanPage = lazy(() => import('../components/user/NewPlan/NewPlanPage'));
const PlanPage = lazy(() => import('../components/user/Plan/PlanPage'));

export function RoutesList({ contentTypes }: Props) {
  //useEffect?
  const routesFromContentTypes = contentTypes.length
  ? makeRoutesFromContentTypes(contentTypes)
  : null;

  return (
    <Suspense fallback={<LoaderSpinner />}>
      <Switch>

        {/*
        
          staff routes
          
        */}

        {unauthStaffRoute("/staff-login", Login)}
        {authStaffRoute("/staff-dashboard", StaffDashboard)}
        {authStaffRoute("/staff-content-types", ContentTypes, {contentTypes})}
        {authStaffRoute("/staff-content/submit", NewContent, {editing: false})}
        {authStaffRoute("/staff-content/edit/:id", NewContent, {editing: true})}
        {authStaffRoute("/staff-equipment/submit", NewEquipment)}
        {authStaffRoute("/staff-equipment/edit/:id", NewEquipment, {editing: true})}
        {authStaffRoute("/staff-ingredients/submit", NewIngredient)}
        {authStaffRoute("/staff-ingredients/edit/:id", NewIngredient, {editing: true})}
        {authStaffRoute("/staff-recipes/submit", NewRecipe, {editing: false, ownership: "private"})}
        {authStaffRoute("/staff-recipes/edit/:id", NewRecipe, {editing: true, ownership: "private"})}

        {/*
        
          user routes
          
        */}

        {unauthUserRoute("/register", Register, {confirmingUser: false})}
        {unauthUserRoute("/verify", Register, {confirmingUser: true})}
        {unauthUserRoute("/login", Login)}
        {authUserRoute("/dashboard", Dashboard)}
        {authUserRoute("/friends", Friends)}
        {authUserRoute("/messenger", MessengerPage)}
        {authUserRoute("/user-equipment/submit", NewEquipment)}
        {authUserRoute("/user-equipment/edit/:id", NewEquipment, {editing: true})}
        {authUserRoute("/user-equipment/:id", Equipment)}
        {authUserRoute("/user-ingredient/submit", NewIngredient)}
        {authUserRoute("/user-ingredient/edit/:id", NewIngredient, {editing: true})}
        {authUserRoute("/user-ingredient/:id", Ingredient)}
        {authUserRoute("/user-plan/submit", NewPlanPage)}
        {authUserRoute("/user-plan/edit/:id", NewPlanPage, {editing: true})}
        {authUserRoute("/user-plan/:id", PlanPage)}
        {authUserRoute("/user-post/submit", NewContent)}
        {authUserRoute("/user-post/edit/:id", NewContent, {editing: true})}
        {authUserRoute("/user-recipe/private/submit", NewRecipe, {editing: false, ownership: "private"})}
        {authUserRoute("/user-recipe/public/submit", NewRecipe, {editing: false, ownership: "public"})}
        {authUserRoute("/user-recipe/private/edit/:id", NewRecipe, {editing: true, ownership: "private"})}
        {authUserRoute("/user-recipe/public/edit/:id", NewRecipe, {editing: true, ownership: "public"})}
        {authUserRoute("/user-recipe/:id", Recipe)}

        {/*

          general routes
          
        */}

        {appRoute("/profile/:username", Profile)}
        {appRoute("/equipment/:id", Equipment)}
        {appRoute("/equipment", Equipments)}
        {appRoute("/ingredient/:id", Ingredient)}
        {appRoute("/ingredients", Ingredients)}
        {appRoute("/recipe/:id", Recipe)}
        {appRoute("/recipes", Recipes)}
        {appRoute("/page/guide/food/cuisine/:id", Cuisine)}
        {appRoute("/page/guide/food/cuisines", Cuisines)}
        {routesFromContentTypes && routesFromContentTypes.map(route => 
          appRoute(route.path, Navigation, route.childProps)
        )}
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