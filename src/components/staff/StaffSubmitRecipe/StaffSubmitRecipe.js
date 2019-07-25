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

const StaffSubmitRecipe = props => {
  const [ dataRecipeTypes, setDataRecipeTypes ] = useState([]);
  const [ dataCuisines, setDataCuisines ] = useState([]);
  const [ dataRecipes, setDataRecipes ] = useState([]);
  const [ dataEquipment, setDataEquipment ] = useState([]);
  const [ dataMeasurements, setDataMeasurements ] = useState([]);
  const [ dataIngredientTypes, setDataIngredientTypes ] = useState([]);
  const [ dataIngredients, setDataIngredients ] = useState([]);

  //const [ s3BucketUrl, setS3BucketUrl ] = useState("");  // needed?

  const [ isLoading, setIsLoading ] = useState(false);

  const [ recipeTypeId, setRecipeTypeId ] = useState("");
  const [ cuisineId, setCuisineId ] = useState("");
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ directions, setDirections ] = useState("");
  const [ requiredEquipment, setRequiredEquipment ] = useState([
    {"key": uuid(), "amount": "", "type": "", "equipment": ""},
    {"key": uuid(), "amount": "", "type": "", "equipment": ""},
    {"key": uuid(), "amount": "", "type": "", "equipment": ""},
  ]);
  const [ requiredIngredients, setRequiredIngredients ] = useState([
    {"key": uuid(), "amount": 1, "unit": "", "type": "", "ingredient": ""},
    {"key": uuid(), "amount": 1, "unit": "", "type": "", "ingredient": ""},
    {"key": uuid(), "amount": 1, "unit": "", "type": "", "ingredient": ""},
  ]);
  const [ requiredSubrecipes, setRequiredSubrecipes ] = useState([
    {"key": uuid(), "amount": 1, "unit": "", "type": "", "cuisine": "", "subrecipe": ""},
    {"key": uuid(), "amount": 1, "unit": "", "type": "", "cuisine": "", "subrecipe": ""},
    {"key": uuid(), "amount": 1, "unit": "", "type": "", "cuisine": "", "subrecipe": ""},
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
      const res = await axios.get(`${endpoint}/cuisine`);
      setDataCuisines(res.data);
    };
    const fetchDataRecipeTypes = async () => {
      const res = await axios.get(`${endpoint}/recipe-type`);
      setDataRecipeTypes(res.data);
    };
    const fetchDataRecipes = async () => {
      const res = await axios.get(`${endpoint}/recipe/submit-edit-form`);
      setDataRecipes(res.data);
    };
    const fetchDataEquipment = async () => {
      const res = await axios.get(`${endpoint}/equipment/submit-edit-form`);
      setDataEquipment(res.data);
    };
    const fetchDataMeasurements = async () => {
      const res = await axios.get(`${endpoint}/measurement`);
      setDataMeasurements(res.data);
    };
    const fetchDataIngredientTypes = async () => {
      const res = await axios.get(`${endpoint}/ingredient-type`);
      setDataIngredientTypes(res.data);
    };
    const fetchDataIngredients = async () => {
      const res = await axios.get(`${endpoint}/ingredient/submit-edit-form`);
      setDataIngredients(res.data);
    };
    fetchDataRecipeTypes();
    fetchDataCuisines();
    fetchDataRecipes();
    fetchDataEquipment();
    fetchDataMeasurements();
    fetchDataIngredientTypes();
    fetchDataIngredients();
  }, []);

  const handleRecipeTypeChange = e => setRecipeTypeId(e.target.value);

  const handleCuisineChange = e => setCuisineId(e.target.value);

  const handleTitleChange = e => setTitle(e.target.value);

  const handleDescriptionChange = e => setDescription(e.target.value);

  const handleDirectionsChange = e => setDirections(e.target.value);

  const handleEquipmentRowChange = (e, rowKey) => {
    const newEquipmentRows = Array.from(requiredEquipment);
    const elToUpdate = newEquipmentRows.findIndex(el => el.key === rowKey);
    if (e.target.name === 'amount') {
      newEquipmentRows[elToUpdate].amount = e.target.value;
    } else if (e.target.name === 'type') {
      newEquipmentRows[elToUpdate].type = e.target.value;
    } else if (e.target.name === 'equipment') {
      newEquipmentRows[elToUpdate].equipment = e.target.value;
    }
    setRequiredEquipment(newEquipmentRows);
  }

  const handleIngredientRowChange = (e, rowKey) => {
    const newIngredientRows = Array.from(requiredIngredients);
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
    setRequiredIngredients(newIngredientRows);
  }

  const handleSubrecipeRowChange = (e, rowKey) => {
    const newSubrecipeRows = Array.from(requiredSubrecipes);
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
    setRequiredSubrecipes(newSubrecipeRows);
  }

  const addEquipmentRow = () => {
    const newEquipmentRows = requiredEquipment.concat({key: uuid(),});
    setRequiredEquipment(newEquipmentRows);
  };

  const removeEquipmentRow = rowKey => {
    const newEquipmentRows = requiredEquipment.filter(row => row.key !== rowKey);
    setRequiredEquipment(newEquipmentRows);
  };

  const addIngredientRow = () => {
    const newIngredientRows = requiredIngredients.concat({key: uuid(),});
    setRequiredIngredients(newIngredientRows);
  };

  const removeIngredientRow = rowKey => {
    const newIngredientRows = requiredIngredients.filter(row => row.key !== rowKey);
    setRequiredIngredients(newIngredientRows);
  };

  const addSubrecipeRow = () => {
    const newSubrecipeRows = requiredSubrecipes.concat({key: uuid(),});
    setRequiredSubrecipes(newSubrecipeRows);
  };

  const removeSubrecipeRow = rowKey => {
    const newSubrecipeRows = requiredSubrecipes.filter(row => row.key !== rowKey);
    setRequiredSubrecipes(newSubrecipeRows);
  };

  const handleImageChange = e => {
    [e.target.name](e.target.files[0]);
  }

  const validate = () => {
    // TO DO: FINISH, also, messages
    return (
      (recipeTypeId !== "") &&
      (cuisineId !== "") &&
      (title !== "") &&
      (description !== "") &&
      (directions !== "")
    );
  }

  /*const tryImageUpload = async (image) => {
    let file = image;
    let fileParts = image.name.split('.');
    let fileName = fileParts[0];  // important: rename the file to nobsc-${title}- ... just do uuid here instead of in express?
    let fileType = fileParts[1];  // png
    try {
      const res1 = await axios.post(`${endpoint}/sign-s3-images-1`, {fileName, fileType});
      const { signedRequest, url } = res1.data.data;
      setS3BucketUrl(url);
      const res2 = await axios.put(signedRequest, file, {headers: {'Content-Type': fileType}});
    } catch (err) {

    }
  }*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const ri = await tryImageUpload(recipeImage); //
    //await tryImageUpload(equipmentImage); //
    //await tryImageUpload(ingredientsImage); //
    //await tryImageUpload(cookingImage); //
    try {
      const res = await axios.post(`${endpoint}/staff/recipe/create`, {
        recipeTypeId,
        cuisineId,
        title,
        description,
        directions,
        requiredEquipment,
        requiredIngredients,
        requiredSubrecipes,
        //recipeImage,
        //equipmentImage,
        //ingredientsImage,
        //cookingImage
      });
    } catch (err) {

    }
  }

  return (
    <div className={`submit-recipe one-column-a ${props.oneColumnATheme}`}>

      <h1>Submit New Recipe</h1>

      {/* type */}
      <div>
        <label className="red_style">Type of Recipe</label>
        <select
          name="recipe_type_id"
          id="recipe_type_id"
          required
          onChange={handleRecipeTypeChange}
          value={recipeTypeId}
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
          value={cuisineId}
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
          {requiredEquipment.map(equipmentRow => {
            console.log('dataEquipment: ', dataEquipment);
            return (
              <EquipmentRow
                key={equipmentRow.key}
                rowKey={equipmentRow.key}
                amount={equipmentRow.amount}
                type={equipmentRow.type}
                equipment={equipmentRow.equipment}
                dataEquipment={dataEquipment}
                handleEquipmentRowChange={handleEquipmentRowChange}
                removeEquipmentRow={removeEquipmentRow}
              />
            );
          })}
        </div>
        <button id="add_equipment_button" onClick={addEquipmentRow}>
          Add Equipment
        </button>
      </div>

      {/* ingredients */}
      <div className="recipe_additions" id="ingredients_div">
        <label className="red_style">Ingredients</label>
        <div id="ingredient_rows_container">
          {requiredIngredients.map(ingredientRow => (
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
          {requiredSubrecipes.map(subrecipeRow => {
            console.log('dataRecipes: ', dataRecipes);
            return (
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
            );
          })}
        </div>
        <button id="add_subrecipe_button" onClick={addSubrecipeRow}>
          Add Subrecipe
        </button>
      </div>

      {/* directions */}
      <div className="recipe_additions" id="directions_div">
        <label className="red_style">Directions</label>
        <textarea
          className="recipe-directions"
          id="recipe_directions"
          name="recipe_directions"
          value={directions}
          onChange={handleDirectionsChange}
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
          id="staff_submit_recipe_button"
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
  );
};

export default StaffSubmitRecipe;