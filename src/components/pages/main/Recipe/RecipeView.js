import React from 'react';
import { Link } from 'react-router-dom';

import { RecipeBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';

import './recipe.css';

const RecipeView = ({
  match,
  twoColumnBTheme,
  isAuthenticated,
  feedback,
  loading,

  recipe,

  recipeBy,

  dataMyPrivateRecipes,
  dataMyPublicRecipes,
  dataMyFavoriteRecipes,
  dataMySavedRecipes,

  favoriteClicked,
  handleFavoriteClick,
  saveClicked,
  handleSaveClick
}) => (
  <div className="recipe">
    {recipe && <div><RecipeBreadcrumbs recipe={recipe} /></div>}
    <div className={`view-recipe two-column-b ${twoColumnBTheme}`}>

      <div className="left-column">
        {recipe && recipe.recipe && (
          <div className="recipe-details">
            <div className="recipe-details__title">
              <h1>{recipe.recipe[0].title}</h1>
            </div>

            <p className="recipe-details__error-message">{message}</p>

            <div className="recipe-details__favorite-save-outer">
              {
                (
                  isAuthenticated &&
                  !dataMyPrivateRecipes.find(
                    rec => rec.recipe_id == match.params.id
                  ) &&
                  !dataMyPublicRecipes.find(
                    rec => rec.recipe_id == match.params.id
                  )
                )
                ? (
                  dataMyFavoriteRecipes.find(
                    rec => rec.recipe_id == match.params.id
                  )
                  ? (
                    <span className="recipe-details__favorited-saved">
                      Favorited
                    </span>
                  )
                  : (
                    !favoriteClicked ? (
                      <button
                        className="recipe-details__favorite-save"
                        onClick={handleFavoriteClick}
                        disabled={loading}
                      >
                        Favorite
                      </button>
                    )
                    : (
                      <span className="recipe-details__favorited-saved">
                        Favorited
                      </span>
                    )
                  )
                )
                : false
              }

              {
                (
                  isAuthenticated &&
                  !dataMyPrivateRecipes.find(
                    rec => rec.recipe_id == match.params.id
                  ) &&
                  !dataMyPublicRecipes.find(
                    rec => rec.recipe_id == match.params.id
                  )
                )
                ? (
                  dataMySavedRecipes.find(
                    rec => rec.recipe_id == match.params.id
                  )
                  ? (
                    <span className="recipe-details__favorited-saved">
                      Saved
                    </span>
                  )
                  : (
                    !saveClicked ? (
                      <button
                        className="recipe-details__favorite-save"
                        onClick={handleSaveClick}
                        disabled={loading}
                      >
                        Save
                      </button>
                    )
                    : (
                      <span className="recipe-details__favorited-saved">
                        Saved
                      </span>
                    )
                  )
                )
                : false
              }
            </div>



            <div className="recipe-details__image">
              {
                recipe.recipe[0].recipeImage !== "nobsc-recipe-default"
                ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${recipe.recipe[0].recipeImage}`} />
                : <div className="image-default-280-172"></div>
              }
            </div>
            <div className="recipe-details__author">
              <b>Author:</b>{' '}{recipeBy()}
            </div>
            <div className="recipe-details__description">
              <b>Author's note:</b>{' '}<i>{`"${recipe.recipe[0].description}"`}</i>
            </div>
            <div className="recipe-details__cuisine">
              <b>Cuisine:</b>{' '}{recipe.recipe[0].cuisineName}
            </div>
            <div className="recipe-details__recipe-type">
              <b>Recipe type:</b>{' '}{recipe.recipe[0].recipeTypeName}
            </div>



            <h2 className="recipe-details__heading-two">Required Methods</h2>
            <div className="recipe-details__required-methods">
              {recipe.requiredMethods && recipe.requiredMethods.map(method => (
                <div
                  className="recipe-details__required-method"
                  key={method.methodName}
                >
                  {method.methodName}
                </div>
              ))}
            </div>



            <h2 className="recipe-details__heading-two">Required Equipment</h2>
            <div className="recipe-details__equipment-image">
              {
                recipe.recipe[0].recipeEquipmentImage !== "nobsc-recipe-equipment-default"
                ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe-equipment/${recipe.recipe[0].recipeEquipmentImage}`} />
                : <div className="image-default-280-172"></div>
              }
            </div>
            <div className="recipe-details__required-equipments">
              {recipe.requiredEquipment && recipe.requiredEquipment.map(equ => (
                <div
                  className="recipe-details__required-equipment"
                  key={equ.equipmentName}
                >
                  {equ.amount}{' '}{equ.equipmentName}
                </div>
              ))}
            </div>



            <h2 className="recipe-details__heading-two">Required Ingredients</h2>
            <div className="recipe-details__ingredients-image">
              {
                recipe.recipe[0].recipeIngredientsImage !== "nobsc-recipe-ingredients-default"
                ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe-ingredients/${recipe.recipe[0].recipeIngredientsImage}`} />
                : <div className="image-default-280-172"></div>
              }
            </div>
            <div className="recipe-details__required-ingredients">
              {recipe.requiredIngredients && recipe.requiredIngredients.map(ing => (
                <div
                  className="recipe-details__required-ingredient"
                  key={ing.ingredientName}
                >
                  {ing.amount}{' '}{ing.measurementName}{' '}{ing.ingredientName}
                </div>
              ))}
            </div>



            <div className="recipe-details__required-subrecipes">
              {recipe.requiredSubrecipes.length > 0 && <h2>Required Subrecipes</h2>}
              {recipe.requiredSubrecipes.length > 0 && recipe.requiredSubrecipes.map(rec => (
                <div
                  className="recipe-details__required-subrecipe"
                  key={rec.subrecipeTitle}
                >
                  {rec.amount}{' '}{rec.measurementName}{' '}{rec.subrecipeTitle}
                </div>
              ))}
            </div>



            <h2 className="recipe-details__heading-two">Directions</h2>
            <div className="recipe-details__cooking-image">
              {
                recipe.recipe[0].recipeCookingImage !== "nobsc-recipe-cooking-default"
                ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe-cooking/${recipe.recipe[0].recipeCookingImage}`} />
                : <div className="image-default-280-172"></div>
              }
            </div>
            <div className="recipe-details__directions">
              {recipe.recipe[0].directions}
            </div>
            
          </div>
        )}
      </div>

      <div className="right-column">
      </div>

    </div>
  </div>
);

export default RecipeView;