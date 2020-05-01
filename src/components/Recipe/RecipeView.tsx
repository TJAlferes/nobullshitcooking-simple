import React from 'react';
import { Link } from 'react-router-dom';  // what is this for?

import { RecipeBreadcrumbs } from '../../routing/breadcrumbs/Breadcrumbs';
import { IWorkRecipe } from '../../store/data/types';
import {
  IRecipe,
  RequiredMethod,
  RequiredEquipment,
  RequiredIngredient,
  RequiredSubrecipe
} from './Recipe';
import './recipe.css';

const RecipeView = ({
  match,
  twoColumnBTheme,
  isAuthenticated,
  feedback,
  loading,
  recipe,
  dataMyPrivateRecipes,
  dataMyPublicRecipes,
  dataMyFavoriteRecipes,
  dataMySavedRecipes,
  favoriteClicked,
  handleFavoriteClick,
  saveClicked,
  handleSaveClick
}) => {
  const recipeBy = () => {
    if (recipe.author === "Unknown") return "Unknown";
    return (
      <Link
        className="recipe-details__author-name"
        to={`/user/profile/${recipe.author}`}
      >
        {recipe.author}
      </Link>
    );
  };

  return (
    <div className="recipe">

      <div><RecipeBreadcrumbs recipe={recipe} /></div>

      <div className={`recipe-view two-column-b ${twoColumnBTheme}`}>

        <div className="left-column">

          <div className="recipe-details">

            <div className="recipe-details-title">
              <h1>{recipe.title}</h1>
            </div>

            <p className="recipe-feedback">{feedback}</p>

            <div className="recipe-favorite-save-outer">
              {(
                isAuthenticated &&
                !dataMyPrivateRecipes.find((rec: IWorkRecipe) => rec.recipe_id == recipe.recipe_id) &&
                !dataMyPublicRecipes.find((rec: IWorkRecipe) => rec.recipe_id == recipe.recipe_id)
              ) ? (
                dataMyFavoriteRecipes
                .find((rec: IWorkRecipe) => rec.recipe_id == recipe.recipe_id) ? (
                  <span className="recipe-favorited-saved">
                    Favorited
                  </span>
                ) : (
                  !favoriteClicked ? (
                    <button
                      className="recipe-favorite-save"
                      onClick={handleFavoriteClick}
                      disabled={loading}
                    >
                      Favorite
                    </button>
                  ) : (
                    <span className="recipe-favorited-saved">
                      Favorited
                    </span>
                  )
                )
              ) : false}

              {(
                isAuthenticated &&
                !dataMyPrivateRecipes.find((rec: IWorkRecipe) => rec.recipe_id == recipe.recipe_id) &&
                !dataMyPublicRecipes.find((rec: IWorkRecipe) => rec.recipe_id == recipe.recipe_id)
              ) ? (
                dataMySavedRecipes
                .find((rec: IWorkRecipe) => rec.recipe_id == recipe.recipe_id) ? (
                  <span className="recipe-favorited-saved">
                    Saved
                  </span>
                ) : (
                  !saveClicked ? (
                    <button
                      className="recipe-favorite-save"
                      onClick={handleSaveClick}
                      disabled={loading}
                    >
                      Save
                    </button>
                  ) : (
                    <span className="recipe-favorited-saved">
                      Saved
                    </span>
                  )
                )
              ) : false}
            </div>

            <div className="recipe-details-image">
              {recipe.recipe_image !== "nobsc-recipe-default"
              ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${recipe.recipe_image}`} />
              : <div className="image-default-280-172"></div>}
            </div>
            <div className="recipe-details-author">
              <b>Author:</b>{' '}{recipeBy()}
            </div>
            <div className="recipe-details-description">
              <b>Author's note:</b>{' '}<i>{`"${recipe.description}"`}</i>
            </div>
            <div className="recipe-details-cuisine">
              <b>Cuisine:</b>{' '}{recipe.cuisine_name}
            </div>
            <div className="recipe-details-recipe-type">
              <b>Recipe type:</b>{' '}{recipe.recipe_type_name}
            </div>

            <h2 className="recipe-heading-two">Required Methods</h2>
            <div className="recipe-required-methods">
              {recipe.required_methods &&
              recipe.required_methods.map((met: RequiredMethod) => (
                <div
                  className="recipe-required-method"
                  key={met.method_name}
                >
                  {met.method_name}
                </div>
              ))}
            </div>

            <h2 className="recipe-heading-two">Required Equipment</h2>
            <div className="recipe-equipment-image">
              {recipe.equipment_image !== "nobsc-recipe-equipment-default"
              ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe-equipment/${recipe.equipment_image}`} />
              : <div className="image-default-280-172"></div>}
            </div>
            <div className="recipe-required-equipments">
              {recipe.required_equipment &&
              recipe.required_equipment.map((equ: RequiredEquipment) => (
                <div
                  className="recipe-required-equipment"
                  key={equ.equipment_name}
                >
                  {equ.amount}{' '}{equ.equipment_name}
                </div>
              ))}
            </div>

            <h2 className="recipe-heading-two">Required Ingredients</h2>
            <div className="recipe-ingredients-image">
              {recipe.ingredients_image !== "nobsc-recipe-ingredients-default"
              ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe-ingredients/${recipe.ingredients_image}`} />
              : <div className="image-default-280-172"></div>}
            </div>
            <div className="recipe-required-ingredients">
              {recipe.required_ingredients &&
              recipe.required_ingredients.map((ing: RequiredIngredient) => (
                <div
                  className="recipe-required-ingredient"
                  key={ing.ingredient_name}
                >
                  {ing.amount}{' '}{ing.measurement_name}{' '}{ing.ingredient_name}
                </div>
              ))}
            </div>

            <div className="recipe-required-subrecipes">
              {recipe.required_subrecipes.length > 0 && <h2>Required Subrecipes</h2>}
              {recipe.required_subrecipes.length > 0 &&
              recipe.required_subrecipes.map((sub: RequiredSubrecipe) => (
                <div
                  className="recipe-required-subrecipe"
                  key={sub.subrecipe_title}
                >
                  {sub.amount}{' '}{sub.measurement_name}{' '}{sub.subrecipe_title}
                </div>
              ))}
            </div>

            <h2 className="recipe-heading-two">Directions</h2>
            <div className="recipe-cooking-image">
              {recipe.cooking_image !== "nobsc-recipe-cooking-default"
              ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe-cooking/${recipe.cooking_image}`} />
              : <div className="image-default-280-172"></div>}
            </div>
            <div className="recipe-directions">
              {recipe.directions}
            </div>
            
          </div>

        </div>

        <div className="right-column">
        </div>

      </div>

    </div>
  );
};

export default RecipeView;