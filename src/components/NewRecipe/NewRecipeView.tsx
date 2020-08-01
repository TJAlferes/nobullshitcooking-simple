import React from 'react';
import { Crop } from 'react-image-crop';
import { Link } from 'react-router-dom';

import {
  ICuisine,
  IEquipment,
  IIngredient,
  IIngredientType,
  IMeasurement,
  IMethod,
  IRecipeType,
  IWorkRecipe
} from '../../store/data/types';
import { ExpandCollapse } from '../ExpandCollapse/ExpandCollapse';
import { LoaderButton } from '../LoaderButton/LoaderButton';
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
  addEquipmentRow,
  addIngredientRow,
  addSubrecipeRow,
  authname,
  cancelCookingImage,
  cancelEquipmentImage,
  cancelIngredientsImage,
  cancelRecipeImage,
  cookingCrop,
  cookingFullCrop,
  cookingImage,
  cookingPrevImage,
  cuisineId,
  dataCuisines,
  dataEquipment,
  dataIngredients,
  dataIngredientTypes,
  dataMeasurements,
  dataMethods,
  dataMyFavoriteRecipes,
  dataMyPrivateEquipment,
  dataMyPrivateIngredients,
  dataMyPrivateRecipes,
  dataMyPublicRecipes,
  dataMySavedRecipes,
  dataRecipes,
  dataRecipeTypes,
  description,
  directions,
  editing,
  equipmentCrop,
  equipmentFullCrop,
  equipmentImage,
  equipmentPrevImage,
  equipmentRows,
  feedback,
  handleCuisineChange,
  handleDescriptionChange,
  handleDirectionsChange,
  handleEquipmentRowChange,
  handleIngredientRowChange,
  handleMethodsChange,
  handleRecipeTypeChange,
  handleSubmit,
  handleSubrecipeRowChange,
  handleTitleChange,
  id,
  ingredientsCrop,
  ingredientsFullCrop,
  ingredientsImage,
  ingredientsPrevImage,
  ingredientRows,
  loading,
  methods,
  onCookingCropChange,
  onCookingCropComplete,
  onCookingImageLoaded,
  oneColumnATheme,
  onEquipmentCropChange,
  onEquipmentCropComplete,
  onEquipmentImageLoaded,
  onIngredientsCropChange,
  onIngredientsCropComplete,
  onIngredientsImageLoaded,
  onRecipeCropChange,
  onRecipeCropComplete,
  onRecipeImageLoaded,
  onSelectRecipeFile,
  onSelectEquipmentFile,
  onSelectIngredientsFile,
  onSelectCookingFile,
  ownership,
  recipeCrop,
  recipeFullCrop,
  recipeImage,
  recipePrevImage,
  recipeThumbCrop,
  recipeTinyCrop,
  recipeTypeId,
  removeEquipmentRow,
  removeIngredientRow,
  removeSubrecipeRow,
  staffIsAuthenticated,
  subrecipeRows,
  title
}: Props): JSX.Element {
  // move up into parent container NewRecipe component?
  const page = staffIsAuthenticated
    ? editing
      ? 'Edit Recipe' : 'Create New Recipe'
    : editing
      ? ownership === "private"
        ? 'Edit Private Recipe' : 'Edit Public Recipe'
      : ownership === "private"
        ? 'Submit New Private Recipe' : 'Submit New Public Recipe'
  const path = staffIsAuthenticated ? '/staff-dashboard' : '/dashboard';

  return (
    <div className="new-recipe-view">

      <div>
        <span><Link to="/home">Home</Link><i>{`&gt;`}</i></span>
        <span><Link to={path}>Dashboard</Link><i>{`&gt;`}</i></span>
        <span>{page}</span>
      </div>

      <div className={`new-recipe one-column-a ${oneColumnATheme}`}>

        <h1 className="new-recipe-heading">{page}</h1>

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
                checked={ownership === "private"}
                className="ownership-span-input"
                disabled={true}
                name="private"
                type="radio"
                value="private"
              />
              <label className="ownership-span-label">Private</label>
            </span>
            <span className="ownership-span">
              <input
                checked={ownership === "public"}
                className="ownership-span-input"
                disabled={true}
                name="public"
                type="radio"
                value="public"
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
            id="recipe_type_id"
            name="recipeType"
            onChange={handleRecipeTypeChange}
            required
            value={recipeTypeId}
          >
            <option value=""></option>
            {dataRecipeTypes.map(r => (
              <option
                key={r.recipe_type_id}
                data-test={r.recipe_type_name}
                value={r.recipe_type_id}
              >
                {r.recipe_type_name}
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
            id="cuisine_id"
            name="cuisine"
            onChange={handleCuisineChange}
            required
            value={cuisineId}
          >
            <option value=""></option>
            {dataCuisines.map(c => (
              <option
                key={c.cuisine_id}
                value={c.cuisine_id}
                data-test={c.cuisine_name}
              >
                {c.cuisine_name}
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
            id="recipe_title"
            name="title"
            onChange={handleTitleChange}
            type="text"
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
            id="recipe_description"
            name="description"
            onChange={handleDescriptionChange}
            type="text"
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
            {dataMethods.map(m => (
              <span className="method-span" key={m.method_id}>
                <input
                  checked={methods[m.method_id] === true ? true : false}
                  className="method-span-input"
                  data-test={`${m.method_id}-${m.method_name}`}
                  id={`${m.method_id}`}
                  onChange={e => handleMethodsChange(e)}
                  type="checkbox"
                />
                <label
                  className="method-span-label"
                  data-test={m.method_name}
                >
                  {m.method_name}
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
            {equipmentRows.map(e => (
              <EquipmentRow
                amount={e.amount}
                dataEquipment={dataEquipment}
                dataMyPrivateEquipment={
                  ownership === "private" ? dataMyPrivateEquipment : []
                }
                equipment={e.equipment}
                handleEquipmentRowChange={handleEquipmentRowChange}
                key={e.key}
                removeEquipmentRow={removeEquipmentRow}
                rowKey={e.key}
                type={e.type}
              />
            ))}
          </div>
          <button
            className="add-row"
            data-test="add-equipment"
            onClick={addEquipmentRow}
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
            {ingredientRows.map(i => (
              <IngredientRow
                amount={i.amount}
                dataIngredients={dataIngredients}
                dataIngredientTypes={dataIngredientTypes}
                dataMeasurements={dataMeasurements}
                dataMyPrivateIngredients={
                  ownership === "private" ? dataMyPrivateIngredients : []
                }
                handleIngredientRowChange={handleIngredientRowChange}
                ingredient={i.ingredient}
                key={i.key}
                removeIngredientRow={removeIngredientRow}
                rowKey={i.key}
                type={i.type}
                unit={i.unit}
              />
            ))}
          </div>
          <button
            className="add-row"
            data-test="add-ingredient"
            onClick={addIngredientRow}
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
            {subrecipeRows.map(s => (
              <SubrecipeRow
                amount={s.amount}
                cuisine={s.cuisine}
                dataCuisines={dataCuisines}
                dataMeasurements={dataMeasurements}
                dataMyFavoriteRecipes={dataMyFavoriteRecipes}
                dataMyPrivateRecipes={
                  ownership === "private" ? dataMyPrivateRecipes : []
                }
                dataMyPublicRecipes={dataMyPublicRecipes}
                dataMySavedRecipes={dataMySavedRecipes}
                dataRecipes={dataRecipes}
                dataRecipeTypes={dataRecipeTypes}
                editing={editing}
                handleSubrecipeRowChange={handleSubrecipeRowChange}
                key={s.key}
                removeSubrecipeRow={removeSubrecipeRow}
                rowKey={s.key}
                selfId={id}
                subrecipe={s.subrecipe}
                type={s.type}
                unit={s.unit}
              />
            ))}
          </div>
          <button
            className="add-row"
            data-test="add-subrecipe"
            onClick={addSubrecipeRow}
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
          equipmentImage={equipmentImage}
          ingredientsImage={ingredientsImage}
          cookingImage={cookingImage}
          editing={editing}
          recipePrevImage={recipePrevImage}
          equipmentPrevImage={equipmentPrevImage}
          ingredientsPrevImage={ingredientsPrevImage}
          cookingPrevImage={cookingPrevImage}
          onSelectRecipeFile={onSelectRecipeFile}
          onSelectEquipmentFile={onSelectEquipmentFile}
          onSelectIngredientsFile={onSelectIngredientsFile}
          onSelectCookingFile={onSelectCookingFile}
          recipeCrop={recipeCrop}
          equipmentCrop={equipmentCrop}
          ingredientsCrop={ingredientsCrop}
          cookingCrop={cookingCrop}
          onRecipeImageLoaded={onRecipeImageLoaded}
          onEquipmentImageLoaded={onEquipmentImageLoaded}
          onIngredientsImageLoaded={onIngredientsImageLoaded}
          onCookingImageLoaded={onCookingImageLoaded}
          onRecipeCropChange={onRecipeCropChange}
          onEquipmentCropChange={onEquipmentCropChange}
          onIngredientsCropChange={onIngredientsCropChange}
          onCookingCropChange={onCookingCropChange}
          onRecipeCropComplete={onRecipeCropComplete}
          onEquipmentCropComplete={onEquipmentCropComplete}
          onIngredientsCropComplete={onIngredientsCropComplete}
          onCookingCropComplete={onCookingCropComplete}
          cropFullCrop={cropFullCrop}
          cropThumbCrop={cropThumbCrop}
          cropTinyCrop={cropTinyCrop}
          equipmentCropFullCrop={equipmentCropFullCrop}
          ingredientsCropFullCrop={ingredientsCropFullCrop}
          cookingCropFullCrop={cookingCropFullCrop}
          loading={loading}
          cancelRecipeImage={cancelRecipeImage}
          cancelRecipeEquipmentImage={cancelRecipeEquipmentImage}
          cancelRecipeIngredientsImage={cancelRecipeIngredientsImage}
          cancelRecipeCookingImage={cancelRecipeCookingImage}
        />

        <div className="new-recipe-finish-area">
          <Link
            className="new-recipe-cancel-button"
            data-test="cancel-link"
            to={path}
          >
            Cancel
          </Link>
          <LoaderButton
            className="new-recipe-submit-button"
            id="user_submit_recipe_button"
            name="submit"
            text="Submit Recipe"
            loadingText="Submitting Recipe..."
            isLoading={loading}
            onClick={handleSubmit}
          />
        </div>

      </div>

    </div>
  );
}

type Props = {
  addEquipmentRow(): void;
  addIngredientRow(): void;
  addSubrecipeRow(): void;
  authname: string;
  cancelCookingImage(): void;
  cancelEquipmentImage(): void;
  cancelIngredientsImage(): void;
  cancelRecipeImage(): void;
  cookingCrop: Crop;
  cookingFullCrop: string;
  cookingImage: string | ArrayBuffer | null;
  cookingPrevImage: string;
  cuisineId: number;
  dataCuisines: ICuisine[];
  dataEquipment: IEquipment[];
  dataIngredients: IIngredient[];
  dataIngredientTypes: IIngredientType[];
  dataMeasurements: IMeasurement[];
  dataMethods: IMethod[];
  dataMyFavoriteRecipes: IWorkRecipe[];
  dataMyPrivateEquipment: IEquipment[];
  dataMyPrivateIngredients: IIngredient[];
  dataMyPrivateRecipes: IWorkRecipe[];
  dataMyPublicRecipes: IWorkRecipe[];
  dataMySavedRecipes: IWorkRecipe[];
  dataRecipes: IWorkRecipe[];
  dataRecipeTypes: IRecipeType[];
  description: string;
  directions: string;
  editing: boolean;
  equipmentCrop: Crop;
  equipmentFullCrop: string;
  equipmentImage: string | ArrayBuffer | null;
  equipmentPrevImage: string;
  equipmentRows: IEquipmentRow[];
  feedback: string;
  handleCuisineChange(e: React.SyntheticEvent<EventTarget>): void;
  handleDescriptionChange(e: React.SyntheticEvent<EventTarget>): void;
  handleDirectionsChange(e: React.SyntheticEvent<EventTarget>): void;
  handleEquipmentRowChange(
    e: React.SyntheticEvent<EventTarget>,
    rowKey: string
  ): void;
  handleIngredientRowChange(
    e: React.SyntheticEvent<EventTarget>,
    rowKey: string
  ): void;
  handleMethodsChange(e: React.SyntheticEvent<EventTarget>): void;
  handleRecipeTypeChange(e: React.SyntheticEvent<EventTarget>): void;
  handleSubmit(): void;
  handleSubrecipeRowChange(
    e: React.SyntheticEvent<EventTarget>,
    rowKey: string
  ): void;
  handleTitleChange(e: React.SyntheticEvent<EventTarget>): void;
  id: number;
  ingredientsCrop: Crop;
  ingredientsFullCrop: string;
  ingredientsImage: string | ArrayBuffer | null;
  ingredientsPrevImage: string;
  ingredientRows: IIngredientRow[];
  loading: boolean;
  methods: IMethods;
  onCookingCropChange(crop: Crop): void;
  onCookingCropComplete(crop: Crop): void;
  onCookingImageLoaded(image: HTMLImageElement): void;
  oneColumnATheme: string;
  onEquipmentCropChange(crop: Crop): void;
  onEquipmentCropComplete(crop: Crop): void;
  onEquipmentImageLoaded(image: HTMLImageElement): void;
  onIngredientsCropChange(crop: Crop): void;
  onIngredientsCropComplete(crop: Crop): void;
  onIngredientsImageLoaded(image: HTMLImageElement): void;
  onRecipeCropChange(crop: Crop): void;
  onRecipeCropComplete(crop: Crop): void;
  onRecipeImageLoaded(image: HTMLImageElement): void;
  onSelectRecipeFile(e: React.ChangeEvent<HTMLInputElement>): void;
  onSelectEquipmentFile(e: React.ChangeEvent<HTMLInputElement>): void;
  onSelectIngredientsFile(e: React.ChangeEvent<HTMLInputElement>): void;
  onSelectCookingFile(e: React.ChangeEvent<HTMLInputElement>): void;
  ownership: string;
  recipeCrop: Crop;
  recipeFullCrop: string;
  recipeImage: string | ArrayBuffer | null;
  recipePrevImage: string;
  recipeThumbCrop: string;
  recipeTinyCrop: string;
  recipeTypeId: number;
  removeEquipmentRow(rowKey: string): void;
  removeIngredientRow(rowKey: string): void;
  removeSubrecipeRow(rowKey: string): void;
  staffIsAuthenticated?: boolean;
  subrecipeRows: ISubrecipeRow[];
  title: string;
};