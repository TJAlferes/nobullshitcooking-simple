import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactCrop from "react-image-crop";
import "react-image-crop/lib/ReactCrop.scss";

import ExpandCollapse from '../../ExpandCollapse/ExpandCollapse';
import LoaderButton from '../../LoaderButton/LoaderButton';

import EquipmentRow from './EquipmentRow/EquipmentRow';
import IngredientRow from './IngredientRow/IngredientRow';
import SubrecipeRow from './SubrecipeRow/SubrecipeRow';

import './submitRecipe.css';

const UserSubmitRecipeView = ({
  match,
  oneColumnATheme,
  authname,
  feedback,
  loading,

  editing,
  ownership,
  recipeTypeId,
  cuisineId,
  title,
  description,
  directions,
  methods,
  equipmentRows,
  ingredientRows,
  subrecipeRows,

  prevRecipeImage,
  prevEquipmentImage,
  prevIngredientsImage,
  prevCookingImage,

  dataRecipeTypes,
  dataCuisines,
  dataMethods,
  dataEquipment,
  dataMyPrivateEquipment,
  dataMeasurements,
  dataIngredientTypes,
  dataIngredients,
  dataMyPrivateIngredients,
  dataRecipes,
  dataMyPrivateRecipes,
  dataMyPublicRecipes,
  dataMyFavoriteRecipes,
  dataMySavedRecipes,

  recipeImage,
  recipeEquipmentImage,
  recipeIngredientsImage,
  recipeCookingImage,
  cropOne,
  cropFullSizePreview,
  cropThumbSizePreview,
  cropTinySizePreview,
  cropTwo,
  equipmentCropFullSizePreview,
  cropThree,
  ingredientsCropFullSizePreview,
  cropFour,
  cookingCropFullSizePreview,

  handleRecipeTypeChange,
  handleCuisineChange,
  handleTitleChange,
  handleDescriptionChange,
  handleDirectionsChange,
  handleMethodsChange,

  handleEquipmentRowChange,
  handleIngredientRowChange,
  handleSubrecipeRowChange,
  addEquipmentRow,
  removeEquipmentRow,
  addIngredientRow,
  removeIngredientRow,
  addSubrecipeRow,
  removeSubrecipeRow,

  onSelectFile,
  onSelectEquipmentFile,
  onSelectIngredientsFile,
  onSelectCookingFile,
  onImageLoaded,
  onEquipmentImageLoaded,
  onIngredientsImageLoaded,
  onCookingImageLoaded,
  onCropOneChange,
  onCropTwoChange,
  onCropThreeChange,
  onCropFourChange,
  onCropComplete,
  onEquipmentCropComplete,
  onIngredientsCropComplete,
  onCookingCropComplete,
  cancelRecipeImage,
  cancelRecipeEquipmentImage,
  cancelRecipeIngredientsImage,
  cancelRecipeCookingImage,

  handleSubmit
}) => (
  <div className={`submit-recipe one-column-a ${oneColumnATheme}`}>

    <h1>
      {
        editing
        ? ownership === "private" ? 'Edit Private Recipe' : 'Edit Public Recipe'
        : ownership === "private" ? 'Submit New Private Recipe' : 'Submit New Public Recipe'
      }
    </h1>

    <p className="submit-recipe__error-message">{feedback}</p>



    {/* ownership */}
    <div className="submit-recipe__section-ownership">
      <h2 className="submit-recipe__heading-two">Ownership</h2>
      <ExpandCollapse>
        <div>
          <p>Once submitted, a recipe's ownership can't be changed.</p>
          <br />
          <p>Public:</p>
          <p>- Anyone can view</p>
          <p>- May only use official NOBSC equipment, ingredients, and recipes, and public recipes submitted by other users</p>
          <p>- Can't be deleted, but can be disowned (author will be changed from "{authname}" to "Unknown")</p>
          <br />
          <p>Tip: If you're setting your recipe to public, please be sure to include all four images below.</p>
          <br />
          <p>Private:</p>
          <p>- Only you can view</p>
          <p>- May also use private equipment, ingredients, and recipes submitted by you</p>
          <p>- Can be deleted</p>
          <br />
          <p>Tip: If you're still improving your recipe, make it private for now, then make a public version later.</p>
          <br />
        </div>
      </ExpandCollapse>
      <div className="ownership-spans">
        <span className="ownership-span">
          <input
            className="ownership-span-input"
            type="radio"
            checked={ownership === "private"}
            value="private"
            disabled={true}
          />
          <label className="ownership-span-label">Private</label>
        </span>
        <span className="ownership-span">
          <input
            className="ownership-span-input"
            type="radio"
            checked={ownership === "public"}
            value="public"
            disabled={true}
          />
          <label className="ownership-span-label">Public</label>
        </span>
      </div>
    </div>



    {/* recipe type */}
    <div className="submit-recipe__section-recipe-type">
      <h2 className="submit-recipe__heading-two">Type of Recipe</h2>
      <select
        id="recipe_type_id"
        required
        onChange={handleRecipeTypeChange}
        value={recipeTypeId}
      >
        <option value=""></option>
        {dataRecipeTypes.map(recipeType => (
          <option key={recipeType.recipe_type_id} value={recipeType.recipe_type_id}>
            {recipeType.recipe_type_name}
          </option>
        ))}
      </select>
    </div>



    {/* cuisine */}
    <div className="submit-recipe__section-cuisine">
      <h2 className="submit-recipe__heading-two">Cuisine</h2>
      <select
        id="cuisine_id"
        required
        onChange={handleCuisineChange}
        value={cuisineId}
      >
        <option value=""></option>
        {dataCuisines.map(cuisine => (
          <option key={cuisine.cuisine_id} value={cuisine.cuisine_id}>
            {cuisine.cuisine_name}
          </option>
        ))}
      </select>
    </div>



    {/* title */}
    <div className="submit-recipe__section-title">
      <h2 className="submit-recipe__heading-two">Title</h2>
      <input
        className="submit-recipe__title"
        type="text"
        id="recipe_title"
        onChange={handleTitleChange}
        value={title}
      />
    </div>



    {/* description */}
    <div className="submit-recipe__section-description">
      <h2 className="submit-recipe__heading-two">Description / Author Note</h2>
      <input
        className="submit-recipe__description"
        type="text"
        id="recipe_description"
        onChange={handleDescriptionChange}
        value={description}
      />
    </div>



    {/* required methods */}
    <div className="submit-recipe__section-required-methods">
      <h2 className="submit-recipe__heading-two">Methods</h2>
      <div className="method-spans">
        {dataMethods.map(method => (
          <span className="method-span" key={method.method_id}>
            <input
              className="method-span-input"
              type="checkbox"
              id={method.method_id}
              checked={methods[method.method_id] === true ? true : false}
              onChange={e => handleMethodsChange(e)}
            />
            <label className="method-span-label">{method.method_name}</label>
          </span>
        ))}
      </div>
    </div>



    {/* required equipment */}
    <div className="submit-recipe__section-required-equipment">
      <h2 className="submit-recipe__heading-two">Equipment</h2>
      <div id="equipment_rows_container">
        {equipmentRows.map(equipmentRow => (
          <EquipmentRow
            key={equipmentRow.key}
            rowKey={equipmentRow.key}
            amount={equipmentRow.amount}
            type={equipmentRow.type}
            equipment={equipmentRow.equipment}
            dataEquipment={dataEquipment}
            dataMyPrivateEquipment={
              ownership === "private"
              ? dataMyPrivateEquipment
              : []
            }
            handleEquipmentRowChange={handleEquipmentRowChange}
            removeEquipmentRow={removeEquipmentRow} />
        ))}
      </div>
      <button className="add-row" onClick={addEquipmentRow}>
        Add Equipment
      </button>
    </div>



    {/* required ingredients */}
    <div className="submit-recipe__section-required-ingredients">
      <h2 className="submit-recipe__heading-two">Ingredients</h2>
      <div id="ingredient_rows_container">
        {ingredientRows.map(ingredientRow => (
          <IngredientRow
            key={ingredientRow.key}
            rowKey={ingredientRow.key}
            amount={ingredientRow.amount}
            unit={ingredientRow.unit}
            type={ingredientRow.type}
            ingredient={ingredientRow.ingredient}
            dataMeasurements={dataMeasurements}
            dataIngredientTypes={dataIngredientTypes}
            dataIngredients={dataIngredients}
            dataMyPrivateIngredients={
              ownership === "private"
              ? dataMyPrivateIngredients
              : []
            }
            handleIngredientRowChange={handleIngredientRowChange}
            removeIngredientRow={removeIngredientRow}
          />
        ))}
      </div>
      <button className="add-row" onClick={addIngredientRow}>
        Add Ingredient
      </button>
    </div>



    {/* required subrecipes */}
    <div className="submit-recipe__section-required-subrecipes">
      <h2 className="submit-recipe__heading-two">Subrecipes</h2>
      <div id="subrecipe_rows_container">
        {subrecipeRows.map(subrecipeRow => (
          <SubrecipeRow
            key={subrecipeRow.key}
            rowKey={subrecipeRow.key}
            amount={subrecipeRow.amount}
            unit={subrecipeRow.unit}
            type={subrecipeRow.type}
            cuisine={subrecipeRow.cuisine}
            subrecipe={subrecipeRow.subrecipe}
            dataMeasurements={dataMeasurements}
            dataRecipeTypes={dataRecipeTypes}
            dataCuisines={dataCuisines}
            dataRecipes={dataRecipes}
            dataMyPrivateRecipes={
              ownership === "private"
              ? dataMyPrivateRecipes
              : []
            }
            dataMyPublicRecipes={dataMyPublicRecipes}
            dataMyFavoriteRecipes={dataMyFavoriteRecipes}
            dataMySavedRecipes={dataMySavedRecipes}
            editing={editing === true ? "true" : "false"}
            selfId={match.params.id && match.params.id}
            handleSubrecipeRowChange={handleSubrecipeRowChange}
            removeSubrecipeRow={removeSubrecipeRow}
          />
        ))}
      </div>
      <button className="add-row" onClick={addSubrecipeRow}>
        Add Subrecipe
      </button>
    </div>



    {/* directions */}
    <div className="submit-recipe__section-directions">
      <h2 className="submit-recipe__heading-two">Directions</h2>
      <textarea
        className="submit-recipe__directions"
        id="recipe_directions"
        onChange={handleDirectionsChange}
        value={directions}
      />
    </div>



    {/* images */}

    <div className="submit-recipe__section-recipe-image">
      <h2 className="submit-recipe__heading-two">Image of Finished Recipe</h2>
      {!recipeImage && (
        <div>
          {
            !editing
            ? <img src="https://s3.amazonaws.com/nobsc-user-recipe/nobsc-recipe-default" />
            : prevRecipeImage && <img src={`https://s3.amazonaws.com/nobsc-user-recipe${prevRecipeImage}`} />
          }
          <h4 className="change-default">Change</h4>
          <input
            className="submit-recipe-image-input"
            type="file"
            accept="image/*"
            onChange={onSelectFile}
          />
        </div>
      )}
      {recipeImage && (
        <div>
          <ReactCrop
            className="submit-recipe-image-crop-tool"
            style={{minHeight: "300px"}}
            imageStyle={{minHeight: "300px"}}
            src={recipeImage}
            crop={cropOne}
            onImageLoaded={onImageLoaded}
            onChange={onCropOneChange}
            onComplete={onCropComplete}
          />
          <span className="submit-recipe-image-crop-tool-tip">
            Move the crop to your desired position. These three images will be saved for you:
          </span>
          <div className="submit-recipe-image-crop-previews">
            <div className="submit-recipe-image-crop-full-preview">
              <span>Full Size: </span><img src={cropFullSizePreview} />
            </div>
            <div className="submit-recipe-image-crop-thumb-preview">
              <span>Thumb Size: </span><img src={cropThumbSizePreview} />
            </div>
            <div className="submit-recipe-image-crop-tiny-preview">
              <span>Tiny Size: </span><img src={cropTinySizePreview} />
            </div>
          </div>
          <button
            className="submit-recipe-image-cancel-button"
            disabled={loading}
            onClick={cancelRecipeImage}
          >
            Cancel
          </button>
        </div>
      )}
    </div>

    <div className="submit-recipe__section-equipment-image">
      <h2 className="submit-recipe__heading-two">Image of All Equipment</h2>
      {!recipeEquipmentImage && (
        <div>
          {
            !editing
            ? <img src="https://s3.amazonaws.com/nobsc-user-recipe/nobsc-recipe-default" />
            : prevEquipmentImage && <img src={`https://s3.amazonaws.com/nobsc-user-recipe-equipment/${prevEquipmentImage}`} />
          }
          <h4 className="change-default">Change</h4>
          <input
            className="submit-recipe-equipment-image-input"
            type="file"
            accept="image/*"
            onChange={onSelectEquipmentFile}
          />
        </div>
      )}
      {recipeEquipmentImage && (
        <div>
          <ReactCrop
            className="submit-recipe-image-crop-tool"
            style={{minHeight: "300px"}}
            imageStyle={{minHeight: "300px"}}
            src={recipeEquipmentImage}
            crop={cropTwo}
            onImageLoaded={onEquipmentImageLoaded}
            onChange={onCropTwoChange}
            onComplete={onEquipmentCropComplete}
          />
          <span className="submit-recipe-image-crop-tool-tip">
            Move the crop to your desired position. This image will be saved for you:
          </span>
          <div className="submit-recipe-image-crop-previews">
            <div className="submit-recipe--image-crop-full-preview">
              <span>Full Size: </span><img src={equipmentCropFullSizePreview} />
            </div>
          </div>
          <button
            className="submit-recipe-image-cancel-button"
            disabled={loading}
            onClick={cancelRecipeEquipmentImage}
          >
            Cancel
          </button>
        </div>
      )}
    </div>

    <div className="submit-recipe__section-ingredients-image">
      <h2 className="submit-recipe__heading-two">Image of All Ingredients</h2>
      {!recipeIngredientsImage && (
        <div>
          {
            !editing
            ? <img src="https://s3.amazonaws.com/nobsc-user-recipe/nobsc-recipe-default" />
            : prevIngredientsImage && <img src={`https://.s3.amazonaws.com/nobsc-user-recipe-ingredients/${prevIngredientsImage}`} />
          }
          <h4 className="change-default">Change</h4>
          <input
            className="submit-recipe-ingredients-image-input"
            type="file"
            accept="image/*"
            onChange={onSelectIngredientsFile}
          />
        </div>
      )}
      {recipeIngredientsImage && (
        <div>
          <ReactCrop
            className="submit-recipe-image-crop-tool"
            style={{minHeight: "300px"}}
            imageStyle={{minHeight: "300px"}}
            src={recipeIngredientsImage}
            crop={cropThree}
            onImageLoaded={onIngredientsImageLoaded}
            onChange={onCropThreeChange}
            onComplete={onIngredientsCropComplete}
          />
          <span className="submit-recipe-image-crop-tool-tip">
            Move the crop to your desired position. This image will be saved for you:
          </span>
          <div className="submit-recipe-image-crop-previews">
            <div className="submit-recipe-image-crop-full-preview">
              <span>Full Size: </span><img src={ingredientsCropFullSizePreview} />
            </div>
          </div>
          <button
            className="submit-recipe-image-cancel-button"
            disabled={loading}
            onClick={cancelRecipeIngredientsImage}
          >
            Cancel
          </button>
        </div>
      )}
    </div>

    <div className="submit-recipe__section-cooking-image">
      <h2 className="submit-recipe__heading-two">Image of Cooking In Action</h2>
      {!recipeCookingImage && (
        <div>
          {
            !editing
            ? <img src="https://s3.amazonaws.com/nobsc-user-recipe/nobsc-recipe-default" />
            : prevCookingImage && <img src={`https://.s3.amazonaws.com/nobsc-user-recipe-cooking/${prevCookingImage}`} />
          }
          <h4 className="change-default">Change</h4>
          <input
            className="submit-recipe-cooking-image-input"
            type="file" accept="image/*"
            onChange={onSelectCookingFile}
          />
        </div>
      )}
      {recipeCookingImage && (
        <div>
          <ReactCrop
            className="submit-recipe-image-crop-tool"
            style={{minHeight: "300px"}}
            imageStyle={{minHeight: "300px"}}
            src={recipeCookingImage}
            crop={cropFour}
            onImageLoaded={onCookingImageLoaded}
            onChange={onCropFourChange}
            onComplete={onCookingCropComplete}
          />
          <span className="submit-recipe-image-crop-tool-tip">
            Move the crop to your desired position. This image will be saved for you:
          </span>
          <div className="submit-recipe-image-crop-previews">
            <div className="submit-recipe-image-crop-full-preview">
              <span>Full Size: </span><img src={cookingCropFullSizePreview} />
            </div>
          </div>
          <button
            className="submit-recipe-image-cancel-button"
            disabled={loading}
            onClick={cancelRecipeCookingImage}
          >
            Cancel
          </button>
        </div>
      )}
    </div>



    {/* submit */}
    <div className="submit-recipe__finish-area">
      <Link
        className="submit-recipe__cancel-button"
        to="/user/dashboard"
      >
        Cancel
      </Link>
      <LoaderButton
        className="submit-recipe__submit-button"
        id="user_submit_recipe_button"
        type="button"
        name="submit"
        text="Submit Recipe"
        loadingText="Submitting Recipe..."
        isLoading={loading}
        onClick={handleSubmit}
      />
    </div>

  </div>
);

export default UserSubmitRecipeView;