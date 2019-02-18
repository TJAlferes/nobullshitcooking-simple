import React, { Component } from 'react';
import axios from 'axios';

import EquipmentRow from './EquipmentRow/EquipmentRow';
import IngredientRow from './IngredientRow/IngredientRow';
import StepRow from './StepRow/StepRow';
import './submitRecipe.css';

// Location of our backend API
// set up if (dev) here
//const endpoint = 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com/recipes';
const endpoint = 'http://localhost:3003/recipes';

class SubmitRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      recipeTypes: []
    };
  }

  // use SSR here...
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
  }

  handleImageChange = (imageId) => {
    let reader = new FileReader();
    reader.onload = function(e) {
      let image = new Image();
      image.src = e.target.result;
      image.onload = function() {
        let width = this.width;
        let height = this.height;
        if ((width != 480) || (height != 320)) {
          alert("Image dimensions must be 480 pixels wide and 320 pixels high.");
          document.getElementById(imageId).src = "";     // how to do in React?
        } else {
          document.getElementById(imageId).src = e.target.result;     // how to do in React?
        }
      }
    }

    reader.readAsDataURL(this.files[0]);
  }

  render() {
    return (
      <div>
        <div id="page">
          <div id="form">
            <h1>Submit New Recipe</h1>
            {/* type, cuisine, title, & description */}
            <div>
              <label className="red_style">Type of Recipe</label>
              <select name="recipe_type_id" id="recipe_type_id" required>
                <option></option>
                {this.state.recipeTypes.map((recipeType, index) => (
                  <option key={index} value={recipeType.recipe_type_id}>{recipeType.recipe_type_name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="red_style">Cuisine</label>
              <select name="cuisine_id" id="cuisine_id" required>
                <option></option>
                {/* <?php
                $sql = 'SELECT cuisine_id, cuisine FROM nobsc_cuisines';
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                while (($row = $stmt->fetch()) !== false) {
                  echo '<option value="' . $row['cuisine_id'] . '">' . $row['cuisine'] . '</option>';
                }
                ?> */}
              </select>
            </div>
            <div>
              <label className="red_style">Title</label>
              <input type="text" name="recipe_title" id="recipe_title" />
            </div>
            <div>
              <label className="red_style">Description / Author Note</label>
              <input type="text" name="recipe_description" id="recipe_description" />
            </div>
            {/* equipment */}
            <div className="recipe_additions" id="equipment_div">
              <label className="red_style">Equipment</label>
              <div id="equipment_rows_container">
                <EquipmentRow />
                <EquipmentRow />
                <EquipmentRow />
              </div>
              <button id="add_equipment_button">Add Equipment</button>
            </div>
            {/* ingredients */}
            <div className="recipe_additions" id="ingredients_div">
              <label className="red_style">Ingredients</label>
              <div id="ingredient_rows_container">
                <IngredientRow />
                <IngredientRow />
                <IngredientRow />
              </div>
              <button id="add_ingredient_button">Add Ingredient</button>
            </div>
            {/* subrecipes */}
            <div className="recipe_additions" id="subrecipes_div">
              <label className="red_style">Subrecipes</label>
              <div id="subrecipe_rows_container">
              </div>
              <button id="add_subrecipe_button">Add Subrecipe</button>
            </div>
            {/* steps */}
            <div className="recipe_additions" id="steps_div">
              <label className="red_style">Directions</label>
              {/* no step_rows_container div? */}
              <StepRow />
              <StepRow />
              <StepRow />
              <button id="add_step_button">Add Step</button>
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
                  onChange={() => this.handleImageChange("submitted_image")}
                  type="file" name="submitted_image" className="submitted_image" id="submitted_image" required
                />
              </div>
              <div className="image_div">
                <label className="red_style">Image of All Equipment</label>
                <div id="preview_e">
                  <img src="" className="preview_frame" id="preview_equipment_image" />
                </div>
                {/* <?php if (isset($feedback)) { echo $feedback; } ?> */}
                <input
                  onChange={() => this.handleImageChange("submitted_equipment_image")}
                  type="file" name="submitted_equipment_image" className="submitted_image" id="submitted_equipment_image" required
                />
              </div>
              <div className="image_div">
                <label className="red_style">Image of All Ingredients</label>
                <div id="preview_i">
                  <img src="" className="preview_frame" id="preview_ingredients_image" />
                </div>
                {/* <?php if (isset($feedback)) { echo $feedback; } ?> */}
                <input
                  onChange={() => this.handleImageChange("submitted_ingredients_image")}
                  type="file" name="submitted_ingredients_image" className="submitted_image" id="submitted_ingredients_image" required
                />
              </div>
              <div className="image_div">
                <label className="red_style">Image of Cooking Action</label>
                <div id="preview_c">
                  <img src="" className="preview_frame" id="preview_cooking_image" />
                </div>
                {/* <?php if (isset($feedback)) { echo $feedback; } ?> */}
                <input
                  onChange={() => this.handleImageChange("submitted_cooking_image")}
                  type="file" name="submitted_cooking_image" className="submitted_image" id="submitted_cooking_image" required
                />
              </div>
            </div>
            {/* status/feedback */}
            <div id="status">
            </div>
            {/* submit */}
            <div>
              <button id="submit_button">Submit Recipe</button>
              {/* <input type="submit" name="submit" id="submit_button" value="Submit Recipe"> --> <!-- maybe change this */}
            </div>
          </div> {/* end of #form div */}
        </div> {/* end of #page div */}
      </div>
    );
  }
}

export default SubmitRecipe;