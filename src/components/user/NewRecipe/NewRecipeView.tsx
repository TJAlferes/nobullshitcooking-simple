import React from 'react';
import { Link } from 'react-router-dom';
import { Crop } from 'react-image-crop';

import {
  IMeasurement,
  IEquipment,
  IIngredient,
  IIngredientType,
  IWorkRecipe,
  IRecipeType,
  ICuisine,
  IMethod
} from '../../../store/data/types';
import ExpandCollapse from '../../ExpandCollapse/ExpandCollapse';
import { LoaderButton } from '../../LoaderButton/LoaderButton';
import { EquipmentRow } from './views/EquipmentRow/EquipmentRow';
import { IngredientRow } from './views/IngredientRow/IngredientRow';
import { SubrecipeRow } from './views/SubrecipeRow/SubrecipeRow';
import { ImageUploads } from './views/ImageUploads';
import {
  IMethods,
  IEquipmentRow,
  IIngredientRow,
  ISubrecipeRow
} from './NewRecipe';
import './newRecipe.css';

export function NewRecipeView({
  id,
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
}: Props): JSX.Element {
  return (
    <div className="new-recipe-view">

      <div>
        <span>
          <Link to="/home">Home</Link>
          <i> > </i>
        </span>
        <span>
          <Link to="/dashboard">Dashboard</Link>
          <i> > </i>
        </span>
        <span>
          {
            editing
            ? ownership === "private" ? 'Edit Private Recipe' : 'Edit Public Recipe'
            : ownership === "private" ? 'Submit New Private Recipe' : 'Submit New Public Recipe'
          }
        </span>
      </div>

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
          <h2
            className="new-recipe-heading-two"
            data-test="ownership-heading"
          >
            Ownership
          </h2>
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
                name="private"
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
                name="public"
                checked={ownership === "public"}
                value="public"
                disabled={true}
              />
              <label className="ownership-span-label">Public</label>
            </span>
          </div>
        </div>

        <div className="new-recipe-section-recipe-type">
          <h2
            className="new-recipe-heading-two"
            data-test="recipe-type-heading"
          >
            Type of Recipe
          </h2>
          <select
            name="recipeType"
            id="recipe_type_id"
            required
            onChange={handleRecipeTypeChange}
            value={recipeTypeId}
          >
            <option value=""></option>
            {dataRecipeTypes.map((recipeType: IRecipeType) => (
              <option
                key={recipeType.recipe_type_id}
                value={recipeType.recipe_type_id}
                data-test={recipeType.recipe_type_name}
              >
                {recipeType.recipe_type_name}
              </option>
            ))}
          </select>
        </div>

        <div className="new-recipe-section-cuisine">
          <h2
            className="new-recipe-heading-two"
            data-test="cuisine-heading"
          >
            Cuisine
          </h2>
          <select
            name="cuisine"
            id="cuisine_id"
            required
            onChange={handleCuisineChange}
            value={cuisineId}
          >
            <option value=""></option>
            {dataCuisines.map((cuisine: ICuisine) => (
              <option
                key={cuisine.cuisine_id}
                value={cuisine.cuisine_id}
                data-test={cuisine.cuisine_name}
              >
                {cuisine.cuisine_name}
              </option>
            ))}
          </select>
        </div>

        <div className="new-recipe-section-title">
          <h2
            className="new-recipe-heading-two"
            data-test="title-heading"
          >
            Title
          </h2>
          <input
            className="new-recipe-title"
            name="title"
            type="text"
            id="recipe_title"
            onChange={handleTitleChange}
            value={title}
          />
        </div>

        <div className="new-recipe-section-description">
          <h2
            className="new-recipe-heading-two"
            data-test="description-heading"
          >
            Description / Author Note
          </h2>
          <input
            className="new-recipe-description"
            name="description"
            type="text"
            id="recipe_description"
            onChange={handleDescriptionChange}
            value={description}
          />
        </div>

        <div className="new-recipe-section-required-methods">
          <h2
            className="new-recipe-heading-two"
            data-test="methods-heading"
          >
            Methods
          </h2>
          <div className="method-spans">
            {dataMethods.map((method: IMethod) => (
              <span className="method-span" key={method.method_id}>
                <input
                  className="method-span-input"
                  type="checkbox"
                  id={`${method.method_id}`}
                  checked={methods[method.method_id] === true ? true : false}
                  onChange={e => handleMethodsChange(e)}
                  data-test={`${method.method_id}-${method.method_name}`}
                />
                <label
                  className="method-span-label"
                  data-test={method.method_name}
                >
                  {method.method_name}
                </label>
              </span>
            ))}
          </div>
        </div>

        <div className="new-recipe-section-required-equipment">
          <h2
            className="new-recipe-heading-two"
            data-test="equipment-heading"
          >
            Equipment
          </h2>
          <div id="equipment_rows_container">
            {equipmentRows.map((equipmentRow: IEquipmentRow) => (
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
          <button
            className="add-row"
            onClick={addEquipmentRow}
            data-test="add-equipment"
          >
            Add Equipment
          </button>
        </div>

        <div className="new-recipe-section-required-ingredients">
          <h2
            className="new-recipe-heading-two"
            data-test="ingredients-heading"
          >
            Ingredients
          </h2>
          <div id="ingredient_rows_container">
            {ingredientRows.map((ingredientRow: IIngredientRow) => (
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
          <button
            className="add-row"
            onClick={addIngredientRow}
            data-test="add-ingredient"
          >
            Add Ingredient
          </button>
        </div>

        <div className="new-recipe-section-required-subrecipes">
          <h2
            className="new-recipe-heading-two"
            data-test="subrecipes-heading"
          >
            Subrecipes
          </h2>
          <div id="subrecipe_rows_container">
            {subrecipeRows.map((subrecipeRow: ISubrecipeRow) => (
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
                editing={editing}
                selfId={id}
                handleSubrecipeRowChange={handleSubrecipeRowChange}
                removeSubrecipeRow={removeSubrecipeRow}
              />
            ))}
          </div>
          <button
            className="add-row"
            onClick={addSubrecipeRow}
            data-test="add-subrecipe"
          >
            Add Subrecipe
          </button>
        </div>

        <div className="new-recipe-section-directions">
          <h2
            className="new-recipe-heading-two"
            data-test="directions-heading"
          >
            Directions
          </h2>
          <textarea
            className="new-recipe-directions"
            id="recipe_directions"
            name="directions"
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
            to="/dashboard"
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
            onKeyUp={() => {}}
          />
        </div>

      </div>

    </div>
  );
}

type Props = {
  id?: number;
  oneColumnATheme: string;
  authname: string;
  feedback: string;
  loading: boolean;
  editing: boolean;
  ownership: string;
  recipeTypeId: number;
  cuisineId: number;
  title: string;
  description: string;
  directions: string;
  methods: IMethods;
  equipmentRows: IEquipmentRow[];
  ingredientRows: IIngredientRow[];
  subrecipeRows: ISubrecipeRow[];
  prevRecipeImage: string;
  prevEquipmentImage: string;
  prevIngredientsImage: string;
  prevCookingImage: string;
  dataRecipeTypes: IRecipeType[];
  dataCuisines: ICuisine[];
  dataMethods: IMethod[];
  dataEquipment: IEquipment[];
  dataMyPrivateEquipment: IEquipment[];
  dataMeasurements: IMeasurement[];
  dataIngredientTypes: IIngredientType[];
  dataIngredients: IIngredient[];
  dataMyPrivateIngredients: IIngredient[];
  dataRecipes: IWorkRecipe[];
  dataMyPrivateRecipes: IWorkRecipe[];
  dataMyPublicRecipes: IWorkRecipe[];
  dataMyFavoriteRecipes: IWorkRecipe[];
  dataMySavedRecipes: IWorkRecipe[];
  recipeImage: string | ArrayBuffer | null;
  recipeEquipmentImage: string | ArrayBuffer | null;
  recipeIngredientsImage: string | ArrayBuffer | null;
  recipeCookingImage: string | ArrayBuffer | null;
  cropOne: Crop;
  cropFullSizePreview: string;
  cropThumbSizePreview: string;
  cropTinySizePreview: string;
  cropTwo: Crop;
  equipmentCropFullSizePreview: string;
  cropThree: Crop;
  ingredientsCropFullSizePreview: string;
  cropFour: Crop;
  cookingCropFullSizePreview: string;
  handleRecipeTypeChange(e: React.SyntheticEvent<EventTarget>): void;
  handleCuisineChange(e: React.SyntheticEvent<EventTarget>): void;
  handleTitleChange(e: React.SyntheticEvent<EventTarget>): void;
  handleDescriptionChange(e: React.SyntheticEvent<EventTarget>): void;
  handleDirectionsChange(e: React.SyntheticEvent<EventTarget>): void;
  handleMethodsChange(e: React.SyntheticEvent<EventTarget>): void;
  handleEquipmentRowChange(
    e: React.SyntheticEvent<EventTarget>,
    rowKey: string
  ): void;
  handleIngredientRowChange(
    e: React.SyntheticEvent<EventTarget>,
    rowKey: string
  ): void;
  handleSubrecipeRowChange(
    e: React.SyntheticEvent<EventTarget>,
    rowKey: string
  ): void;
  addEquipmentRow(): void;
  removeEquipmentRow(rowKey: string): void;
  addIngredientRow(): void;
  removeIngredientRow(rowKey: string): void;
  addSubrecipeRow(): void;
  removeSubrecipeRow(rowKey: string): void;
  onSelectFile(e: React.ChangeEvent<HTMLInputElement>): void;
  onSelectEquipmentFile(e: React.ChangeEvent<HTMLInputElement>): void;
  onSelectIngredientsFile(e: React.ChangeEvent<HTMLInputElement>): void;
  onSelectCookingFile(e: React.ChangeEvent<HTMLInputElement>): void;
  onImageLoaded(image: HTMLImageElement): void;
  onEquipmentImageLoaded(image: HTMLImageElement): void;
  onIngredientsImageLoaded(image: HTMLImageElement): void;
  onCookingImageLoaded(image: HTMLImageElement): void;
  onCropOneChange(crop: Crop): void;
  onCropTwoChange(crop: Crop): void;
  onCropThreeChange(crop: Crop): void;
  onCropFourChange(crop: Crop): void;
  onCropComplete(crop: Crop): void;
  onEquipmentCropComplete(crop: Crop): void;
  onIngredientsCropComplete(crop: Crop): void;
  onCookingCropComplete(crop: Crop): void;
  cancelRecipeImage(): void;
  cancelRecipeEquipmentImage(): void;
  cancelRecipeIngredientsImage(): void;
  cancelRecipeCookingImage(): void;
  handleSubmit(): void;
};