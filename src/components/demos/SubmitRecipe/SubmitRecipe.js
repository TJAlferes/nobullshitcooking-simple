import React, { useState } from 'react';
import uuid from 'uuid/v4';

import EquipmentRow from './EquipmentRow/EquipmentRow';
import IngredientRow from './IngredientRow/IngredientRow';
import SubrecipeRow from './SubrecipeRow/SubrecipeRow';
import LoaderButton from '../../LoaderButton/LoaderButton';
import RecipeImagesUploader from '../../uploaders/RecipeImagesUploader/RecipeImagesUploader';
import './submitRecipe.css';

import devData from './dev-submit-recipe-data';

const SubmitRecipe = props => {
  const [ isLoading, setIsLoading ] = useState(false);

  const [ recipeType, setRecipeType ] = useState("");
  const [ cuisine, setCuisine ] = useState("");
  const [ ownership, setOwnsership ] = useState("");
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ directions, setDirections ] = useState("");
  const [ equipmentRows, setEquipmentRows ] = useState([
    {key: uuid(), amount: "", type: "", equipment: ""},
    {key: uuid(), amount: "", type: "", equipment: ""},
    {key: uuid(), amount: "", type: "", equipment: ""},
  ]);
  const [ ingredientRows, setIngredientRows ] = useState([
    {key: uuid(), amount: 1, unit: "", type: "", ingredient: ""},
    {key: uuid(), amount: 1, unit: "", type: "", ingredient: ""},
    {key: uuid(), amount: 1, unit: "", type: "", ingredient: ""},
  ]);
  const [ subrecipeRows, setSubrecipeRows ] = useState([
    {key: uuid(), amount: 1, unit: "", type: "", subrecipe: ""},
    {key: uuid(), amount: 1, unit: "", type: "", subrecipe: ""},
    {key: uuid(), amount: 1, unit: "", type: "", subrecipe: ""},
  ]);

  const handleRecipeTypeChange = e => setRecipeType(e.target.value);

  const handleCuisineChange = e => setCuisine(e.target.value);

  const handleOwnershipChange = e => setOwnsership(e.target.value);

  const handleTitleChange = e => setTitle(e.target.value);

  const handleDescriptionChange = e => setDescription(e.target.value);

  const handleDirectionsChange = e => setDirections(e.target.value);

  const handleEquipmentRowChange = (e, rowKey) => {
    const newEquipmentRows = Array.from(equipmentRows);
    const elToUpdate = newEquipmentRows.findIndex(el => el.key === rowKey);
    if (e.target.name === 'amount') {
      newEquipmentRows[elToUpdate].amount = e.target.value;
    } else if (e.target.name === 'type') {
      newEquipmentRows[elToUpdate].type = e.target.value;
    } else if (e.target.name === 'equipment') {
      newEquipmentRows[elToUpdate].equipment = e.target.value;
    }
    setEquipmentRows(newEquipmentRows);
  }

  const handleIngredientRowChange = (e, rowKey) => {
    const newIngredientRows = Array.from(ingredientRows);
    const elToUpdate = newIngredientRows.findIndex(el => el.key === rowKey);
    if (e.target.name === 'amount') {
      newIngredientRows[elToUpdate].amount = e.target.value;
    } else if (e.target.name === 'unit') {
      newIngredientRows[elToUpdate].unit = e.target.value;
    } else if (e.target.name === 'type') {
      newIngredientRows[elToUpdate].type = e.target.value;
    } else if (e.target.name === 'ingredient') {
      newIngredientRows[elToUpdate].ingredient = e.target.value;
    }
    setIngredientRows(newIngredientRows);
  }

  const handleSubrecipeRowChange = (e, rowKey) => {
    const newSubrecipeRows = Array.from(subrecipeRows);
    const elToUpdate = newSubrecipeRows.findIndex(el => el.key === rowKey);
    if (e.target.name === 'amount') {
      newSubrecipeRows[elToUpdate].amount = e.target.value;
    } else if (e.target.name === 'unit') {
      newSubrecipeRows[elToUpdate].unit = e.target.value;
    } else if (e.target.name === 'type') {
      newSubrecipeRows[elToUpdate].type = e.target.value;
    } else if (e.target.name === 'subrecipe') {
      newSubrecipeRows[elToUpdate].subrecipe = e.target.value;
    }
    setSubrecipeRows(newSubrecipeRows);
  }

  const addEquipmentRow = () => {
    const newEquipmentRows = equipmentRows.concat({key: uuid(),});
    setEquipmentRows(newEquipmentRows);
  };

  const removeEquipmentRow = rowKey => {
    const newEquipmentRows = equipmentRows.filter(row => row.key !== rowKey);
    setEquipmentRows(newEquipmentRows);
  };

  const addIngredientRow = () => {
    const newIngredientRows = ingredientRows.concat({key: uuid(),});
    setIngredientRows(newIngredientRows);
  };

  const removeIngredientRow = rowKey => {
    const newIngredientRows = ingredientRows.filter(row => row.key !== rowKey);
    setIngredientRows(newIngredientRows);
  };

  const addSubrecipeRow = () => {
    const newSubrecipeRows = subrecipeRows.concat({key: uuid(),});
    setSubrecipeRows(newSubrecipeRows);
  };

  const removeSubrecipeRow = rowKey => {
    const newSubrecipeRows = subrecipeRows.filter(row => row.key !== rowKey);
    setSubrecipeRows(newSubrecipeRows);
  };

  return (
    <div className={`submit-recipe one-column-a ${props.oneColumnATheme}`}>

      <span className="demo-only-notice">
        This page is for demonstration purposes only.
        To actually submit a recipe, please create an account.
      </span>
      <h1>Submit New Recipe</h1>

      {/* public or private */}
      <div>
        <label className="red_style">Ownership</label>
        <select
          name="ownership"
          id="ownership"
          required
          onChange={handleOwnershipChange}
          value={ownership}
        >
          <option value=""></option>
          <option value="private">Private</option>
          <option value="public">Public</option>
        </select>
      </div>

      {/* type */}
      <div>
        <label className="red_style">Type of Recipe</label>
        <select
          name="recipe_type_id"
          id="recipe_type_id"
          required
          onChange={handleRecipeTypeChange}
          value={recipeType}
        >
          <option value=""></option>
          {devData.recipeTypes.map(recipeType => (
            <option
              key={recipeType.recipe_type_id}
              value={recipeType.recipe_type_id}
            >
              {recipeType.recipe_type_name}
            </option>
          ))}
        </select>
      </div>

      {/* cuisine */}
      <div>
        <label className="red_style">Cuisine</label>
        <select
          name="cuisine_id"
          id="cuisine_id"
          required
          onChange={handleCuisineChange}
          value={cuisine}
        >
          <option value=""></option>
          {devData.cuisines.map(cuisine => (
            <option
              key={cuisine.cuisine_id}
              value={cuisine.cuisine_id}
            >
              {cuisine.cuisine_name}
            </option>
          ))}
        </select>
      </div>

      {/* title */}
      <div>
        <label className="red_style">Title</label>
        <input
          type="text"
          name="recipe_title"
          id="recipe_title"
          onChange={handleTitleChange}
          value={title}
        />
      </div>

      {/* description */}
      <div>
        <label className="red_style">Description / Author Note</label>
        <input
          type="text"
          name="recipe_description"
          id="recipe_description"
          onChange={handleDescriptionChange}
          value={description}
        />
      </div>

      {/* equipment */}
      <div className="recipe_additions" id="equipment_div">
        <label className="red_style">Equipment</label>
        <div id="equipment_rows_container">
          {equipmentRows.map(equipmentRow => (
            <EquipmentRow
              key={equipmentRow.key}
              rowKey={equipmentRow.key}
              amount={equipmentRow.amount}
              type={equipmentRow.type}
              equipment={equipmentRow.equipment}
              handleEquipmentRowChange={handleEquipmentRowChange}
              removeEquipmentRow={removeEquipmentRow} />
          ))}
        </div>
        <button id="add_equipment_button" onClick={addEquipmentRow}>
          Add Equipment
        </button>
      </div>

      {/* ingredients */}
      <div className="recipe_additions" id="ingredients_div">
        <label className="red_style">Ingredients</label>
        <div id="ingredient_rows_container">
          {ingredientRows.map(ingredientRow => (
            <IngredientRow
              key={ingredientRow.key}
              rowKey={ingredientRow.key}
              amount={ingredientRow.amount}
              unit={ingredientRow.unit}
              type={ingredientRow.type}
              ingredient={ingredientRow.ingredient}
              handleIngredientRowChange={handleIngredientRowChange}
              removeIngredientRow={removeIngredientRow}
            />
          ))}
        </div>
        <button id="add_ingredient_button" onClick={addIngredientRow}>
          Add Ingredient
        </button>
      </div>

      {/* subrecipes */}
      <div className="recipe_additions" id="subrecipes_div">
        <label className="red_style">Subrecipes</label>
        <div id="subrecipe_rows_container">
          {subrecipeRows.map(subrecipeRow => (
            <SubrecipeRow
              key={subrecipeRow.key}
              rowKey={subrecipeRow.key}
              amount={subrecipeRow.amount}
              unit={subrecipeRow.unit}
              type={subrecipeRow.type}
              subrecipe={subrecipeRow.subrecipe}
              handleSubrecipeRowChange={handleSubrecipeRowChange}
              removeSubrecipeRow={removeSubrecipeRow}
            />
          ))}
        </div>
        <button id="add_subrecipe_button" onClick={addSubrecipeRow}>
          Add Subrecipe
        </button>
      </div>

      {/* directions */}
      <div>
        <label className="red_style">Directions</label>
        <textarea
          className="recipe-directions"
          id="recipe_directions"
          name="recipe_directions"
          onChange={handleDirectionsChange}
          value={directions}
        />
      </div>

      {/* images (YOU NEED TO MAKE SURE THE imageName AND title ARE PROPERLY SYNCED, THEREFORE, UPLOAD ALL AT ONCE) */}
      <div className="images-area">
        <div className="image-area">
          <label className="red_style">Image of Finished Recipe</label>
          <RecipeImagesUploader imageDir="recipe" imageName={title} />
          {/* also do thumb (150px w) and tiny (32px w) */}
        </div>
        <div className="image-area">
          <label className="red_style">Image of All Equipment</label>
          <RecipeImagesUploader imageDir="equipment" imageName={title} />
          {/* also do thumb (150px w) */}
        </div>
        <div className="image-area">
          <label className="red_style">Image of All Ingredients</label>
          <RecipeImagesUploader imageDir="ingredients" imageName={title} />
          {/* also do thumb (150px w) */}
        </div>
        <div className="image-area">
          <label className="red_style">Image of Cooking In Action</label>
          <RecipeImagesUploader imageDir="cooking" imageName={title} />
          {/* also do thumb (150px w) */}
        </div>
      </div>

      {/* status/feedback */}
      <div id="status"></div>

      {/* submit */}
      <div>
        <LoaderButton
          id="demo_submit_recipe_button"
          type="button"
          name="submit"
          text="Submit Recipe"
          loadingText="Submitting Recipe..."
          isLoading={isLoading}
          disabled={true}
        />
      </div>

    </div>
  );
};

export default SubmitRecipe;