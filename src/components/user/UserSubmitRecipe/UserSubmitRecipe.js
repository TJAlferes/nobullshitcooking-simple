import React, { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';

import EquipmentRow from './EquipmentRow/EquipmentRow';
import IngredientRow from './IngredientRow/IngredientRow';
import SubrecipeRow from './SubrecipeRow/SubrecipeRow';
import LoaderButton from '../../LoaderButton/LoaderButton';
import './submitRecipe.css';

import { NOBSCBackendAPIEndpointOne } from '../../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

const UserSubmitRecipe = () => {
  const [ dataRecipeTypes, setDataRecipeTypes ] = useState([]);
  const [ dataCuisines, setDataCuisines ] = useState([]);
  const [ dataRecipes, setDataRecipes ] = useState([]);
  const [ dataEquipment, setDataEquipment ] = useState([]);
  const [ dataMeasurements, setDataMeasurements ] = useState([]);
  const [ dataIngredientTypes, setDataIngredientTypes ] = useState([]);
  const [ dataIngredients, setDataIngredients ] = useState([]);
  const [ dataMethods, setDataMethods ] = useState([]);

  const [ message, setMessage ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);

  const [ recipeType, setRecipeType ] = useState("");
  const [ cuisine, setCuisine ] = useState("");
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ directions, setDirections ] = useState("");
  const [ methods, setMethods ] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false
  });
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
    const fetchDataMethods = async () => {
      const res = await axios.get(`${endpoint}/method`);
      setDataMethods(res.data);
    }
    fetchDataRecipeTypes();
    fetchDataCuisines();
    fetchDataRecipes();
    fetchDataEquipment();
    fetchDataMeasurements();
    fetchDataIngredientTypes();
    fetchDataIngredients();
    fetchDataMethods();
  }, []);

  const handleRecipeTypeChange = e => setRecipeType(e.target.value);

  const handleCuisineChange = e => setCuisine(e.target.value);

  const handleTitleChange = e => setTitle(e.target.value);

  const handleDescriptionChange = e => setDescription(e.target.value);

  const handleDirectionsChange = e => setDirections(e.target.value);

  const getCheckedMethods = () => {
    let checkedMethods = [];
    Object.entries(methods).forEach(([key, value]) => {
      if (value === true) checkedMethods.push(Number(key));
    });
    return checkedMethods;
  }

  const handleMethodsChange = async (e) => {
    const id = e.target.id;
    await setMethods(prevState => ({
      ...prevState,
      [id]: !prevState[[id]]
    }));
  }

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

  const handleSubmit = async () => {
    const recipeInfo = {
      ownership,
      recipeTypeId: recipeType,
      cuisineId: cuisine,
      title,
      description,
      directions,
      requiredMethods: getCheckedMethods(),
      requiredEquipment: equipmentRows,
      requiredIngredients: ingredientRows,
      requiredSubrecipes: subrecipeRows,
      recipeImage,
      equipmentImage,
      ingredientsImage,
      cookingImage
    };
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

          {/* methods */}
          <div className="recipe_additions" id="methods_div">
            <label className="red_style">Methods</label>
            <div onChange={e => handleMethodsChange(e)}>
              {dataMethods.map(method => (
                <span className="filter_span" key={method.method_id}>
                  <input type="checkbox" id={method.method_id} />
                  <label className="filter_label">{method.method_name}</label>
                </span>
              ))}
            </div>
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
              <div className="recipe-image-preview"></div>
              <input name="setRecipeImage" type="file" onChange={handleImageChange} />
            </div>
            <div className="image_div">
              <label className="red_style">Image of All Equipment</label>
              <div className="recipe-image-preview"></div>
              <input name="setEquipmentImage" type="file" onChange={handleImageChange} />
            </div>
            <div className="image_div">
              <label className="red_style">Image of All Ingredients</label>
              <div className="recipe-image-preview"></div>
              <input name="setIngredientsImage" type="file" onChange={handleImageChange} />
            </div>
            <div className="image_div">
              <label className="red_style">Image of Cooking In Action</label>
              <div className="recipe-image-preview"></div>
              <input name="setCookingImage" type="file" onChange={handleImageChange} />
            </div>
          </div>

          {/* status/feedback */}
          <div id="status"></div>

          {/* submit */}
          <div>
            <LoaderButton
              id="user_submit_recipe_button"
              type="button"
              name="submit"
              text="Submit Recipe"
              loadingText="Submitting Recipe..."
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

export default UserSubmitRecipe;