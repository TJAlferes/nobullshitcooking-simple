import React from 'react';
import { Link } from 'react-router-dom';

import ExpandCollapse from '../../ExpandCollapse/ExpandCollapse';
import LoaderButton from '../../LoaderButton/LoaderButton';

import EquipmentRow from './views/EquipmentRow/EquipmentRow';
import IngredientRow from './views/IngredientRow/IngredientRow';
import SubrecipeRow from './views/SubrecipeRow/SubrecipeRow';
import ImageUploads from './views/ImageUploads';

import './newRecipe.css';

const NewRecipeView = ({
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
  <div className={`new-recipe one-column-a ${oneColumnATheme}`}>

    <h1 className="new-recipe-heading">
      {
        editing
        ? ownership === "private" ? 'Edit Private Recipe' : 'Edit Public Recipe'
        : ownership === "private" ? 'Submit New Private Recipe' : 'Submit New Public Recipe'
      }
    </h1>

    <p className="new-recipe-feedback">{feedback}</p>

    <div className="new-recipe-section-ownership">
      <h2 className="new-recipe-heading-two">Ownership</h2>
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

    <div className="new-recipe-section-recipe-type">
      <h2 className="new-recipe-heading-two">Type of Recipe</h2>
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

    <div className="new-recipe-section-cuisine">
      <h2 className="new-recipe-heading-two">Cuisine</h2>
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

    <div className="new-recipe-section-title">
      <h2 className="new-recipe-heading-two">Title</h2>
      <input
        className="new-recipe-title"
        type="text"
        id="recipe_title"
        onChange={handleTitleChange}
        value={title}
      />
    </div>

    <div className="new-recipe-section-description">
      <h2 className="new-recipe-heading-two">Description / Author Note</h2>
      <input
        className="new-recipe-description"
        type="text"
        id="recipe_description"
        onChange={handleDescriptionChange}
        value={description}
      />
    </div>

    <div className="new-recipe-section-required-methods">
      <h2 className="new-recipe-heading-two">Methods</h2>
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

    <div className="new-recipe-section-required-equipment">
      <h2 className="new-recipe-heading-two">Equipment</h2>
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

    <div className="new-recipe-section-required-ingredients">
      <h2 className="new-recipe-heading-two">Ingredients</h2>
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

    <div className="new-recipe-section-required-subrecipes">
      <h2 className="new-recipe-heading-two">Subrecipes</h2>
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

    <div className="new-recipe-section-directions">
      <h2 className="new-recipe-heading-two">Directions</h2>
      <textarea
        className="new-recipe-directions"
        id="recipe_directions"
        onChange={handleDirectionsChange}
        value={directions}
      />
    </div>

    <ImageUploads
      recipeImage={recipeImage}
      recipeEquipmentImage={recipeEquipmentImage}
      recipeIngredientsImage={recipeIngredientsImage}
      recipeCookingImage={recipeCookingImage}
      editing={editing}
      prevRecipeImage={prevRecipeImage}
      prevEquipmentImage={prevEquipmentImage}
      prevIngredientsImage={prevIngredientsImage}
      prevCookingImage={prevCookingImage}
      onSelectFile={onSelectFile}
      onSelectEquipmentFile={onSelectEquipmentFile}
      onSelectIngredientsFile={onSelectIngredientsFile}
      onSelectCookingFile={onSelectCookingFile}
      cropOne={cropOne}
      cropTwo={cropTwo}
      cropThree={cropThree}
      cropFour={cropFour}
      onImageLoaded={onImageLoaded}
      onEquipmentImageLoaded={onEquipmentImageLoaded}
      onIngredientsImageLoaded={onIngredientsImageLoaded}
      onCookingImageLoaded={onCookingImageLoaded}
      onCropOneChange={onCropOneChange}
      onCropTwoChange={onCropTwoChange}
      onCropThreeChange={onCropThreeChange}
      onCropFourChange={onCropFourChange}
      onCropComplete={onCropComplete}
      onEquipmentCropComplete={onEquipmentCropComplete}
      onIngredientsCropComplete={onIngredientsCropComplete}
      onCookingCropComplete={onCookingCropComplete}
      cropFullSizePreview={cropFullSizePreview}
      cropThumbSizePreview={cropThumbSizePreview}
      cropTinySizePreview={cropTinySizePreview}
      equipmentCropFullSizePreview={equipmentCropFullSizePreview}
      ingredientsCropFullSizePreview={ingredientsCropFullSizePreview}
      cookingCropFullSizePreview={cookingCropFullSizePreview}
      loading={loading}
      cancelRecipeImage={cancelRecipeImage}
      cancelRecipeEquipmentImage={cancelRecipeEquipmentImage}
      cancelRecipeIngredientsImage={cancelRecipeIngredientsImage}
      cancelRecipeCookingImage={cancelRecipeCookingImage}
    />

    <div className="new-recipe-finish-area">
      <Link
        className="new-recipe-cancel-button"
        to="/user/dashboard"
      >
        Cancel
      </Link>
      <LoaderButton
        className="new-recipe-submit-button"
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

export default NewRecipeView;