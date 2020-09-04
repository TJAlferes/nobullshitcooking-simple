import React from 'react';
import { lazy, LazyBoundary } from 'react-imported-component';
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

//const Cart = lazy(() => import('../pages/Cart/Cart'));
//const Checkout = lazy(() => import('../pages/Checkout/Checkout'));
const Content = lazy(() => import('../pages/Content/Content'));
import Cuisine from '../pages/Cuisine/Cuisine';  // lazy?
import Cuisines from '../pages/Cuisines/Cuisines';  // lazy?
const Equipment = lazy(() => import('../pages/Equipment/Equipment'));
const Equipments = lazy(() => import('../pages/Equipments/Equipments'));
const Friends = lazy(() => import('../pages/Friends/Friends'));
import { Home } from '../pages/Home/Home';
const Ingredient = lazy(() => import('../pages/Ingredient/Ingredient'));
const Ingredients = lazy(() => import('../pages/Ingredients/Ingredients'));
const Login = lazy(() => import('../pages/Login/Login'));
const Messenger = lazy(() => import('../pages/Messenger/MessengerPage'));
const Navigation = lazy(() => import('../pages/Navigation/Navigation'));
const NewContent = lazy(() => import('../pages/NewContent/NewContent'));
const NewEquipment = lazy(() => import('../pages/NewEquipment/NewEquipment'));
const NewIngredient = lazy(() => import('../pages/NewIngredient/NewIngredient'));
const NewPlan = lazy(() => import('../pages/NewPlan/NewPlanPage'));
const NewRecipe = lazy(() => import('../pages/NewRecipe/NewRecipe'));
import { NotFound } from '../pages/NotFound/NotFound';
const Plan = lazy(() => import('../pages/Plan/PlanPage'));
const Product = lazy(() => import('../pages/Product/Product'));
const Products = lazy(() => import('../pages/Products/Products'));
const Profile = lazy(() => import('../pages/Profile/Profile'));
const Recipe = lazy(() => import('../pages/Recipe/Recipe'));
const Recipes = lazy(() => import('../pages/Recipes/Recipes'));
const Register = lazy(() => import('../pages/Register/Register'));
const StaffDashboard = lazy(() => import('../pages/StaffDashboard/Dashboard'));
//import Supply from '../pages/supply/Supply';  // just make a CMS page?
const UserDashboard = lazy(() => import('../pages/UserDashboard/Dashboard'));

export function RoutesList({ contentTypes }: Props) {
  //useEffect?
  const routesFromContentTypes = contentTypes.length
  ? makeRoutesFromContentTypes(contentTypes)
  : null;

  return (
    <LazyBoundary fallback={<LoaderSpinner />}>
      <Switch>

        {/*
        
          staff routes
          
        */}

        {unauthStaffRoute("/staff-login", Login)}
        {authStaffRoute("/staff-dashboard", StaffDashboard)}
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
        {authUserRoute("/dashboard", UserDashboard)}
        {authUserRoute("/friends", Friends)}
        {authUserRoute("/messenger", Messenger)}
        {authUserRoute("/user-equipment/submit", NewEquipment)}
        {authUserRoute("/user-equipment/edit/:id", NewEquipment, {editing: true})}
        {authUserRoute("/user-equipment/:id", Equipment)}
        {authUserRoute("/user-ingredient/submit", NewIngredient)}
        {authUserRoute("/user-ingredient/edit/:id", NewIngredient, {editing: true})}
        {authUserRoute("/user-ingredient/:id", Ingredient)}
        {authUserRoute("/user-plan/submit", NewPlan)}
        {authUserRoute("/user-plan/edit/:id", NewPlan, {editing: true})}
        {authUserRoute("/user-plan/:id", Plan)}
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

        {/*appRoute("/cart", Cart)*/}
        {/*appRoute("/checkout", Checkout)*/}
        {appRoute("/profile/:username", Profile)}
        {appRoute("/equipment/:id", Equipment)}
        {appRoute("/equipment", Equipments)}
        {appRoute("/ingredient/:id", Ingredient)}
        {appRoute("/ingredients", Ingredients)}
        {appRoute("/product/:id", Product)}
        {appRoute("/products", Products)}
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
    </LazyBoundary>
  );
}

type Props = {
  contentTypes: IContentType[];
};