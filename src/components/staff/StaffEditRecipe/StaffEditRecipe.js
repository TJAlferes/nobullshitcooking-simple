import React, { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';

import EquipmentRow from './EquipmentRow/EquipmentRow';
import IngredientRow from './IngredientRow/IngredientRow';
import SubrecipeRow from './SubrecipeRow/SubrecipeRow';
import LoaderButton from '../../LoaderButton/LoaderButton';
import RecipeImagesUploader from '../../uploaders/RecipeImagesUploader/RecipeImagesUploader';
import './editRecipe.css';

let endpoint;
if (process.env.NODE_ENV === "production") {
  endpoint = 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com';
} else {
  endpoint = 'http://localhost:3003';
}

const StaffEditRecipe = props => {
  const [ dataRecipeTypes, setDataRecipeTypes ] = useState([]);
  const [ dataCuisines, setDataCuisines ] = useState([]);
  const [ dataRecipes, setDataRecipes ] = useState([]);
  const [ dataEquipment, setDataEquipment ] = useState([]);
  const [ dataMeasurements, setDataMeasurements ] = useState([]);
  const [ dataIngredientTypes, setDataIngredientTypes ] = useState([]);
  const [ dataIngredients, setDataIngredients ] = useState([]);

  const [ isLoading, setIsLoading ] = useState(false);

  const [ recipeType, setRecipeType ] = useState("");
  const [ cuisine, setCuisine ] = useState("");
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
    {key: uuid(), amount: 1, unit: "", type: "", cuisine: "", subrecipe: ""},
    {key: uuid(), amount: 1, unit: "", type: "", cuisine: "", subrecipe: ""},
    {key: uuid(), amount: 1, unit: "", type: "", cuisine: "", subrecipe: ""},
  ]);
  const [ recipeImage, setRecipeImage ] = useState("");
  const [ recipeImageName, setRecipeImageName ] = useState("Choose File");
  const [ equipmentImage, setEquipmentImage ] = useState("");
  const [ equipmentImageName, setEquipmentImageName ] = useState("Choose File");
  const [ ingredientsImage, setIngredientsImage ] = useState("");
  const [ ingredientsImageName, setIngredientsImageName ] = useState("Choose File");
  const [ cookingImage, setCookingImage ] = useState("");
  const [ cookingImageName, setCookingImageName ] = useState("Choose File");

  useEffect(() => {
    const fetchDataCuisines = async () => {
      const res = await axios.get(`${endpoint}/cuisine/`);
      setDataCuisines(res.data);
    };
    const fetchDataRecipeTypes = async () => {
      const res = await axios.get(`${endpoint}/recipe-type/`);
      setDataRecipeTypes(res.data);
    };
    const fetchDataRecipes = async () => {
      const res = await axios.get(`${endpoint}/recipe/`);
      setDataRecipes(res.data);
    };
    const fetchDataEquipment = async () => {
      const res = await axios.get(`${endpoint}/equipment/`);
      setDataEquipment(res.data);
    };
    const fetchDataMeasurements = async () => {
      const res = await axios.get(`${endpoint}/measurement/`);
      setDataMeasurements(res.data);
    };
    const fetchDataIngredientTypes = async () => {
      const res = await axios.get(`${endpoint}/ingredient-type/`);
      setDataIngredientTypes(res.data);
    };
    const fetchDataIngredients = async () => {
      const res = await axios.get(`${endpoint}/ingredient/`);
      setDataIngredients(res.data);
    };
    const fetchDataRecipeInfo = async () => {
      const res = await axios.get(`${endpoint}/recipe/${props.editRecipeId}`);
      set(res.data.recipeType);
      set(res.data.cuisine);
      set(res.data.title);
      set(res.data.description);
      set(res.data.directions);
      set(res.data.equipmentRows);
      set(res.data.ingredientRows);
      set(res.data.subRecipeRows);
      // TO DO: finish for images
    };
    fetchDataRecipeTypes();
    fetchDataCuisines();
    fetchDataRecipes();
    fetchDataEquipment();
    fetchDataMeasurements();
    fetchDataIngredientTypes();
    fetchDataIngredients();
    fetchDataRecipeInfo();
  }, []);

  const handleRecipeTypeChange = e => setRecipeType(e.target.value);

  const handleCuisineChange = e => setCuisine(e.target.value);

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
    } else if (e.target.name === 'cuisine') {
      newSubrecipeRows[elToUpdate].cuisine = e.target.value;
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

  const handleImageChange = e => {
    if (e.target.name === 'submitted_recipe_image') {
      setRecipeImage(e.target.files[0]);
    } else if (e.target.name === 'submitted_equipment_image') {
      setEquipmentImage(e.target.files[0]);
    } else if (e.target.name === 'submitted_ingredients_image') {
      setIngredientsImage(e.target.files[0]);
    } else if (e.target.name === 'submitted_cooking_image') {
      setCookingImage(e.target.files[0]);
    }
  }

  const validate = () => {
    // TO DO: FINISH, also, messages
    return (
      (recipeType !== "") &&
      (cuisine !== "") &&
      (title !== "") &&
      (description !== "") &&
      (directions !== "")
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('recipeType', recipeType);
    formData.append('cuisine', cuisine);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('directions', directions);
    formData.append('equipmentRows', equipmentRows);
    formData.append('ingredientRows', ingredientRows);
    formData.append('subrecipeRows', subrecipeRows);
    formData.append('recipeImage', recipeImage);
    formData.append('equipmentImage', equipmentImage);
    formData.append('ingredientsImage', ingredientsImage);
    formData.append('cookingImage', cookingImage);
    try {
      const res = await axios.put(`${endpoint}/staff/recipe/edit/${recipeId}`);
    } catch (err) {

    }
  }

  return (
    <div className="submit_recipe">
      <div id="page">
        <div id="form">

          <h1>Edit Recipe</h1>

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
              {dataRecipeTypes.map(recipeType => (
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
              {dataCuisines.map(cuisine => (
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
                  dataEquipment={dataEquipment}
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
                  dataMeasurements={dataMeasurements}
                  dataIngredientTypes={dataIngredientTypes}
                  dataIngredients={dataIngredients}
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
                  cuisine={subrecipeRow.cuisine}
                  subrecipe={subrecipeRow.subrecipe}
                  dataMeasurements={dataMeasurements}
                  dataRecipeTypes={dataRecipeTypes}
                  dataCuisines={dataCuisines}
                  dataRecipes={dataRecipes}
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
          <div className="recipe_additions" id="directions_div">
            <label className="red_style">Directions</label>
            <textarea
              name="recipe_directions"
              id="recipe_directions"
              onChange={handleDirectionsChange}
              value={directions}
            />
          </div>

          {/* images */}
          <div>
            <div className="image_div">
              <label className="red_style">Image of Finished Recipe</label>
              <RecipeImagesUploader />
            </div>
            <div className="image_div">
              <label className="red_style">Image of All Equipment</label>
              <RecipeImagesUploader />
            </div>
            <div className="image_div">
              <label className="red_style">Image of All Ingredients</label>
              <RecipeImagesUploader />
            </div>
            <div className="image_div">
              <label className="red_style">Image of Cooking In Action</label>
              <RecipeImagesUploader />
            </div>
          </div>

          {/* status/feedback */}
          <div id="status"></div>

          {/* submit */}
          <div>
            <LoaderButton
              id="staff_edit_recipe_button"
              type="button"
              name="submit"
              text="Edit Recipe"
              loadingText="Editing Recipe..."
              isLoading={isLoading}
              disabled={!validate()}
              onClick={handleSubmit}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default StaffEditRecipe;