import React from 'react';
import { Link } from 'react-router-dom';  // what is this for?

import { RecipeBreadcrumbs } from '../../routing/breadcrumbs/Breadcrumbs';
import { IWorkRecipe } from '../../store/data/types';
import { IRecipe } from './recipe';
import './recipe.css';

export function RecipeView({
  twoColumnBTheme,
  userIsAuthenticated,
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
}: Props): JSX.Element {
  const recipeBy = () => {
    if (recipe.author === "Unknown") return "Unknown";
    return (
      <Link
        className="recipe__author-name"
        to={`/profile/${recipe.author}`}
      >
        {recipe.author}
      </Link>
    );
  };

  return (
    <div className="recipe">

      <RecipeBreadcrumbs recipeId={recipe.recipe_id} title={recipe.title} />

      <div className={`recipe-view two-column-b ${twoColumnBTheme}`}>

        <div className="left-column">

          <div className="recipe-details">

            <h1 className="recipe-title">{recipe.title}</h1>

            <p className="recipe-feedback">{feedback}</p>

            <div className="recipe-favorite-save-outer">
              {(
                userIsAuthenticated &&
                !dataMyPrivateRecipes.find(rec => rec.recipe_id == recipe.recipe_id) &&
                !dataMyPublicRecipes.find(rec => rec.recipe_id == recipe.recipe_id)
              ) ? (
                <>
                  {
                    dataMyFavoriteRecipes
                    .find(rec => rec.recipe_id == recipe.recipe_id) ? (
                      <span className="recipe-favorited-saved">
                        Favorited
                      </span>
                    ) : (
                      !favoriteClicked ? (
                        <button
                          className="recipe-favorite-save"
                          name="favorite-button"
                          onClick={handleFavoriteClick}
                          disabled={loading}
                        >
                          Favorite
                        </button>
                      ) : (
                        <span
                          className="recipe-favorited-saved"
                          data-test="favorited-span"
                        >
                          Favorited
                        </span>
                      )
                    )
                  }
                  {
                    dataMySavedRecipes
                    .find(rec => rec.recipe_id == recipe.recipe_id) ? (
                      <span className="recipe-favorited-saved">
                        Saved
                      </span>
                    ) : (
                      !saveClicked ? (
                        <button
                          className="recipe-favorite-save"
                          name="save-button"
                          onClick={handleSaveClick}
                          disabled={loading}
                        >
                          Save
                        </button>
                      ) : (
                        <span
                          className="recipe-favorited-saved"
                          data-test="saved-span"
                        >
                          Saved
                        </span>
                      )
                    )
                  }
                </>
              ) : false}
            </div>

            <div className="recipe-image">
              {recipe.recipe_image !== "nobsc-recipe-default"
              ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${recipe.recipe_image}`} />
              : (
                <div
                  className="image-default-280-172"
                  data-test="recipe-default"
                >
                </div>
              )}
            </div>

            <div className="recipe-author-outer">
              <b>Author:</b>
              {' '}
              <span className="recipe-author">{recipeBy()}</span>
            </div>

            <div className="recipe-description-outer">
              <b>Author's note:</b>
              {' '}
              <em className="recipe-description">{recipe.description}</em>
            </div>

            <div className="recipe-cuisine-outer">
              <b>Cuisine:</b>
              {' '}
              <span className="recipe-cuisine">{recipe.cuisine_name}</span>
            </div>

            <div className="recipe-type-outer">
              <b>Recipe type:</b>
              {' '}
              <span className="recipe-type">{recipe.recipe_type_name}</span>
            </div>

            <h2 className="recipe-heading-two" data-test="methods-heading">
              Required Methods
            </h2>
            <div className="recipe-required-methods">
              {recipe.required_methods &&
              recipe.required_methods.map(met => (
                <div
                  className="recipe-required-method"
                  key={met.method_name}
                >
                  {met.method_name}
                </div>
              ))}
            </div>

            <h2 className="recipe-heading-two" data-test="equipment-heading">
              Required Equipment
            </h2>
            <div className="recipe-equipment-image">
              {recipe.equipment_image !== "nobsc-recipe-equipment-default"
              ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe-equipment/${recipe.equipment_image}`} />
              : (
                <div
                  className="image-default-280-172"
                  data-test="recipe-equipment-default"
                >
                </div>
              )}
            </div>
            <div className="recipe-required-equipments">
              {recipe.required_equipment &&
              recipe.required_equipment.map(equ => (
                <div
                  className="recipe-required-equipment"
                  key={equ.equipment_name}
                >
                  {equ.amount}{' '}{equ.equipment_name}
                </div>
              ))}
            </div>

            <h2 className="recipe-heading-two" data-test="ingredients-heading">
              Required Ingredients
            </h2>
            <div className="recipe-ingredients-image">
              {recipe.ingredients_image !== "nobsc-recipe-ingredients-default"
              ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe-ingredients/${recipe.ingredients_image}`} />
              : (
                <div
                  className="image-default-280-172"
                  data-test="recipe-ingredients-default"
                >
                </div>
              )}
            </div>
            <div className="recipe-required-ingredients">
              {recipe.required_ingredients &&
              recipe.required_ingredients.map(ing => (
                <div
                  className="recipe-required-ingredient"
                  key={ing.ingredient_name}
                >
                  {ing.amount}{' '}{ing.measurement_name}{' '}{ing.ingredient_name}
                </div>
              ))}
            </div>

            <h2 className="recipe-heading-two" data-test="subrecipes-heading">
              Required Subrecipes
            </h2>
            <div className="recipe-required-subrecipes">
              {
                recipe.required_subrecipes.length
                ? recipe.required_subrecipes.map(sub => (
                  <div
                    className="recipe-required-subrecipe"
                    key={sub.subrecipe_title}
                  >
                    {sub.amount}{' '}{sub.measurement_name}{' '}{sub.subrecipe_title}
                  </div>
                ))
                : "none"
              }
            </div>

            <h2 className="recipe-heading-two" data-test="directions-heading">
              Directions
            </h2>
            <div className="recipe-cooking-image">
              {recipe.cooking_image !== "nobsc-recipe-cooking-default"
              ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe-cooking/${recipe.cooking_image}`} />
              : (
                <div
                  className="image-default-280-172"
                  data-test="recipe-cooking-default"
                >
                </div>
              )}
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
}

type Props = {
  twoColumnBTheme: string;
  userIsAuthenticated: boolean;
  feedback: string;
  loading: boolean;
  recipe: IRecipe;
  dataMyPrivateRecipes: IWorkRecipe[];
  dataMyPublicRecipes: IWorkRecipe[];
  dataMyFavoriteRecipes: IWorkRecipe[];
  dataMySavedRecipes: IWorkRecipe[];
  favoriteClicked: boolean;
  handleFavoriteClick(): void;
  saveClicked: boolean;
  handleSaveClick(): void;
};