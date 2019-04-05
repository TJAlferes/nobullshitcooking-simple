import React, { useCallback, useState } from 'react';
//import axios from 'axios';
import uuid from 'uuid/v4';

import EquipmentRow from './EquipmentRow/EquipmentRow';
import IngredientRow from './IngredientRow/IngredientRow';
import StepRow from './StepRow/StepRow';
import './submitRecipe.css';

// For dev only. Real data is in our MySQL DB, gotten with an HTTP request to our Node.js API.
import devData from './dev-submit-recipe-data';
// Location of our backend API
// set up if (dev) here
// get this AWS EB back up online
//const endpoint = 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com/recipes';
//const endpoint = 'http://localhost:3003/recipes';

const SubmitRecipe = () => {
  const [ isLoading, setIsLoading ] = useState(false);

  const [ recipeType, setRecipeType ] = useState(null);
  const [ cuisine, setCuisine ] = useState(null);
  const [ title, setTitle ] = useState(null);
  const [ description, setDescription ] = useState(null);

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
  const [ stepRows, setStepRows ] = useState([
    {key: uuid(), step: ""},
    {key: uuid(), step: ""},
    {key: uuid(), step: ""},
  ]);

  const handleRecipeTypeChange = e => {
    setRecipeType(e.target.value);
    console.log(recipeType);
  };

  const handleCuisineChange = e => {
    setCuisine(e.target.value);
    console.log(cuisine);
  };

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

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

  const handleStepRowChange = (e, rowKey) => {
    const newStepRows = Array.from(stepRows);
    const elToUpdate = newStepRows.findIndex(el => el.key === rowKey);
    newStepRows[elToUpdate].step = e.target.value;
    setStepRows(newStepRows);
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

  const addStepRow = () => {
    const newStepRows = stepRows.concat({key: uuid(),});
    setStepRows(newStepRows);
  };

  const removeStepRow = rowKey => {
    const newStepRows = stepRows.filter(row => row.key !== rowKey);
    setStepRows(newStepRows);
  };

  /*// use SSR here...
  componentDidMount() {
    this.getAllRecipeTypes();  // used in filter
    //this.getRecipes();  // initial/default ingredients load
  }

  getAllRecipeTypes = async () => {
    // TO DO: on backend API, make types like ingredients
    try {
      const url = `${endpoint}/types/all`;
      const response = await axios.get(url);
      const recipeTypes = response.data;
      this.setState({recipeTypes: recipeTypes});
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  submitRecipe = async () => {
    const url = `${endpoint}`;
    const response = await axios.post(url, {types: checkedIngredientTypes, start: startingAtt});
    console.log(response.data);
  }*/

  const handleImageChange = imageId => {
    let reader = new FileReader();
    reader.onload = function(e) {
      let image = new Image();
      image.src = e.target.result;
      image.onload = function() {
        let width = this.width;
        let height = this.height;
        if ((width != 480) || (height != 320)) {
          alert("Image dimensions must be 480 pixels wide and 320 pixels high.");
          document.getElementById(imageId).src = "";  // how to do in React? ref?
        } else {
          document.getElementById(imageId).src = e.target.result;  // how to do in React? ref?
        }
      }
    }
    reader.readAsDataURL(this.files[0]);
  }

  return (
    <div className="submit_recipe">
      <div id="page">
        <div id="form">

          <h1>Submit New Recipe</h1>

          {/* type */}
          <div>
            <label className="red_style">Type of Recipe</label>
            <select
              name="recipe_type_id"
              id="recipe_type_id"
              required
              onChange={handleRecipeTypeChange}
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

          {/* subrecipes
          <div className="recipe_additions" id="subrecipes_div">
            <label className="red_style">Subrecipes</label>
            <div id="subrecipe_rows_container">
            </div>
            <button id="add_subrecipe_button">Add Subrecipe</button>
          </div>*/}

          {/* steps */}
          <div className="recipe_additions" id="steps_div">
            <label className="red_style">Directions</label>
            {/* no step_rows_container div? */}
            {stepRows.map(stepRow => (
              <StepRow
                key={stepRow.key}
                rowKey={stepRow.key}
                value={stepRow.value}
                handleStepRowChange={handleStepRowChange}
                removeStepRow={removeStepRow}
              />
            ))}
            <button id="add_step_button" onClick={addStepRow}>Add Step</button>
          </div>

          {/* images */}
          <div>

            <div className="image_div">
              <label className="red_style">Image of Finished Recipe</label>
              <div id="preview">
                <img src="" className="preview_frame" id="preview_image" />
              </div>
              {/* <?php if (isset($feedback)) { echo $feedback; } ?> */}
              <input
                onChange={() => handleImageChange("submitted_image")}
                type="file"
                name="submitted_image"
                className="submitted_image"
                id="submitted_image"
                required
              />
            </div>

            <div className="image_div">
              <label className="red_style">Image of All Equipment</label>
              <div id="preview_e">
                <img src="" className="preview_frame" id="preview_equipment_image" />
              </div>
              {/* <?php if (isset($feedback)) { echo $feedback; } ?> */}
              <input
                onChange={() => handleImageChange("submitted_equipment_image")}
                type="file"
                name="submitted_equipment_image"
                className="submitted_image"
                id="submitted_equipment_image"
                required
              />
            </div>

            <div className="image_div">
              <label className="red_style">Image of All Ingredients</label>
              <div id="preview_i">
                <img src="" className="preview_frame" id="preview_ingredients_image" />
              </div>
              {/* <?php if (isset($feedback)) { echo $feedback; } ?> */}
              <input
                onChange={() => handleImageChange("submitted_ingredients_image")}
                type="file"
                name="submitted_ingredients_image"
                className="submitted_image"
                id="submitted_ingredients_image"
                required
              />
            </div>

            <div className="image_div">
              <label className="red_style">Image of Cooking Action</label>
              <div id="preview_c">
                <img src="" className="preview_frame" id="preview_cooking_image" />
              </div>
              {/* <?php if (isset($feedback)) { echo $feedback; } ?> */}
              <input
                onChange={() => handleImageChange("submitted_cooking_image")}
                type="file"
                name="submitted_cooking_image"
                className="submitted_image"
                id="submitted_cooking_image"
                required
              />
            </div>

          </div>

          {/* status/feedback */}
          <div id="status"></div>

          {/* submit */}
          <div>
            <button id="submit_button">Submit Recipe</button>
            {/* <input type="submit" name="submit" id="submit_button" value="Submit Recipe"> --> <!-- maybe change this */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SubmitRecipe;