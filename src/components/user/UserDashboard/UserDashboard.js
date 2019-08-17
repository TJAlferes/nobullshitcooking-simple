import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import LeftNav from '../../LeftNav/LeftNav';
//import './userDashboard.css';

const UserDashboard = props => {
  const [ tab, setTab ] = useState("recipes");
  const [ subTab, setSubTab ] = useState("private");

  const handleTabClick = e => {
    setTab(e.target.name);
  };

  const handleSubTabClick = e => {
    setSubTab(e.target.name);
  };

  return (
    <div className={`dashboard two-column-a ${props.twoColumnATheme}`}>

      <LeftNav />

      <section>

        <h1>{props.authname}</h1>

        {/* tabs */}

        <div className="dashboard-menu-tabs">
          {/*<button className="dashboard-menu-tab" name="notifications" onClick={handleTabClick}>Notifications</button>*/}
          <button className="dashboard-menu-tab" name="plans" onClick={e => handleTabClick(e)}>Plans</button>
          <button className="dashboard-menu-tab" name="recipes" onClick={e => handleTabClick(e)}>Recipes</button>
          <button className="dashboard-menu-tab" name="ingredients" onClick={e => handleTabClick(e)}>Ingredients</button>
          <button className="dashboard-menu-tab" name="equipment" onClick={e => handleTabClick(e)}>Equipment</button>
        </div>

        {/* subTabs */}

        {
          (tab == "recipes") && (
            <div className="dashboard-menu-subtabs">
              <button className="dashboard-menu-subtab" name="private" onClick={e => handleSubTabClick(e)}>Private</button>
              <button className="dashboard-menu-subtab" name="public" onClick={e => handleSubTabClick(e)}>Public</button>
              <button className="dashboard-menu-subtab" name="favorite" onClick={e => handleSubTabClick(e)}>Favorite</button>
              <button className="dashboard-menu-subtab" name="saved" onClick={e => handleSubTabClick(e)}>Saved</button>
            </div>
          )
        }

        {/* content */}

        {/*
          tab == "notifications" && (
            <div className="dashboard-content">
            </div>
          )
        */}

        {
          (tab == "plans") && (
            <div className="dashboard-content">
              <h2>My Plans</h2>
              <Link to="/user/planner/new">Create New Plan</Link>
              {
                props.myPlans.length
                ? props.myPlans.map(plan => (
                  <div key={plan.plan_id}>
                    <span>{plan.plan_name}</span>
                    <span>View/Edit</span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't created any plans yet.</div>
              }
            </div>
          )
        }

        {
          (tab == "recipes" && subTab == "private") && (
            <div className="dashboard-content">
              <h2>My Private Recipes</h2>
              <Link to="/user/recipes/submit">Create New Recipe</Link>
              {
                props.myPrivateRecipes.length
                ? props.myPrivateRecipes.map(recipe => (
                  <div key={recipe.recipe_id}>
                    <span>{recipe.recipe_image}</span>
                    <span>{recipe.title}</span>
                    <span><Link to={`user/recipes/${recipe.recipe_id}`}>View</Link></span>
                    <span><Link to={`user/recipes/edit/${recipe.recipe_id}`}>Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't created any private recipes yet.</div>
              }
            </div>
          )
        }

        {
          (tab == "recipes" && subTab == "public") && (
            <div className="dashboard-content">
              <h2>My Public Recipes</h2>
              <Link to="/user/recipes/submit">Create New Recipe</Link>
              {
                props.myPublicRecipes.length
                ? props.myPublicRecipes.map(recipe => (
                  <div key={recipe.recipe_id}>
                    <span>{recipe.recipe_image}</span>
                    <span>{recipe.title}</span>
                    <span><Link to={`user/recipes/${recipe.recipe_id}`}>View</Link></span>
                    <span><Link to={`user/recipes/edit/${recipe.recipe_id}`}>Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't created any public recipes yet.</div>
              }
            </div>
          )
        }

        {
          (tab == "recipes" && subTab == "favorite") && (
            <div className="dashboard-content">
              <h2>My Favorite Recipes</h2>
              {
                props.myFavoriteRecipes.length
                ? props.myFavoriteRecipes.map(recipe => (
                  <div key={recipe.recipe_id}>
                    <span>{recipe.recipe_image}</span>
                    <span>{recipe.title}</span>
                    <span><Link to={`user/recipes/${recipe.recipe_id}`}>View</Link></span>
                    <span><Link to={`user/recipes/edit/${recipe.recipe_id}`}>Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't favorited any recipes yet.</div>
              }
            </div>
          )
        }

        {
          (tab == "recipes" && subTab == "saved") && (
            <div className="dashboard-content">
              <h2>My Saved Recipes</h2>
              {
                props.mySavedRecipes.length
                ? props.mySavedRecipes.map(recipe => (
                  <div key={recipe.recipe_id}>
                    <span>{recipe.recipe_image}</span>
                    <span>{recipe.title}</span>
                    <span><Link to={`user/recipes/${recipe.recipe_id}`}>View</Link></span>
                    <span><Link to={`user/recipes/edit/${recipe.recipe_id}`}>Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't saved any recipes yet.</div>
              }
            </div>
          )
        }

        {
          tab == "ingredients" && (
            <div className="dashboard-content">
              <h2>My Private Ingredients</h2>
              <Link to="/user/ingredients/submit">Create New Ingredient</Link>
              {
                props.myPrivateIngredients.length
                ? props.myPrivateIngredients.map(ingredient => (
                  <div key={ingredient.ingredient_id}>
                    <span>{ingredient.ingredient_image}</span>
                    <span>{ingredient.ingredient_name}</span>
                    <span><Link to={`user/ingredients/${ingredient.ingredient_id}`}>View</Link></span>
                    <span><Link to={`user/ingredients/edit/${ingredient.ingredient_id}`}>Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't created any private ingredients yet.</div>
              }
            </div>
          )
        }

        {
          tab == "equipment" && (
            <div className="dashboard-content">
              <h2>My Private Equipment</h2>
              <Link to="/user/equipment/submit">Create New Equipment</Link>
              {
                props.myPrivateEquipment.length
                ? props.myPrivateEquipment.map(equipment => (
                  <div key={equipment.equipment_id}>
                    <span>{equipment.equipment_image}</span>
                    <span>{equipment.equipment_name}</span>
                    <span><Link to={`user/equipment/${equipment.equipment_id}`}>View</Link></span>
                    <span><Link to={`user/equipment/edit/${equipment.equipment_id}`}>Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't created any private equipment yet.</div>
              }
            </div>
          )
        }

      </section>

    </div>
  );
};

const mapStateToProps = state => ({
  authname: state.auth.authname,
  myPlans: state.data.myPlans,
  myPublicRecipes: state.data.myPublicRecipes,
  myPrivateEquipment: state.data.myPrivateEquipment,
  myPrivateIngredients: state.data.myPrivateIngredients,
  myPrivateRecipes: state.data.myPrivateRecipes,
  myFavoriteRecipes: state.data.myFavoriteRecipes,
  mySavedRecipes: state.data.mySavedRecipes
})

export default connect(mapStateToProps)(UserDashboard);