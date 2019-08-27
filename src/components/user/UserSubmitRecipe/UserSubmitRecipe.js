import React, { useState } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import './submitRecipe.css';
import EquipmentRow from './EquipmentRow/EquipmentRow';
import IngredientRow from './IngredientRow/IngredientRow';
import SubrecipeRow from './SubrecipeRow/SubrecipeRow';
import ExpandCollapse from '../../ExpandCollapse/ExpandCollapse';
import LoaderButton from '../../LoaderButton/LoaderButton';
import {
  userCreateNewPrivateRecipe,
  userCreateNewPublicRecipe
} from '../../../store/actions/index';

const UserSubmitRecipe = props => {
  const [ message, setMessage ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ ownership, setOwnership ] = useState("");
  const [ recipeTypeId, setRecipeTypeId ] = useState("");
  const [ cuisineId, setCuisineId ] = useState("");
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
  const [ crop, setCrop ] = useState({
    disabled: true,
    locked: true,
    width: 250,
    maxWidth: 250,
    aspect: 1 / 1
  });
  const [ cropFullSizePreview, setCropFullSizePreview ] = useState(null);
  const [ cropThumbSizePreview, setCropThumbSizePreview ] = useState(null);
  const [ cropTinySizePreview, setCropTinySizePreview ] = useState(null);
  const [ recipeImage, setRecipeImage ] = useState(null);
  const [ fullRecipeImage, setFullRecipeImage ] = useState(null);
  const [ thumbRecipeImage, setThumbRecipeImage ] = useState(null);
  const [ tinyRecipeImage, setTinyRecipeImage ] = useState(null);
  const [ recipeEquipmentImage, setRecipeEquipmentImage ] = useState(null);
  const [ fullRecipeEquipmentImage, setFullRecipeEquipmentImage ] = useState(null);
  const [ thumbRecipeEquipmentImage, setThumbRecipeEquipmentImage ] = useState(null);
  const [ tinyRecipeEquipmentImage, setTinyRecipeEquipmentImage ] = useState(null);
  const [ recipeIngredientsImage, setRecipeIngredientsImage ] = useState(null);
  const [ fullRecipeIngredientsImage, setFullRecipeIngredientsImage ] = useState(null);
  const [ thumbRecipeIngredientsImage, setThumbRecipeIngredientsImage ] = useState(null);
  const [ tinyRecipeIngredientsImage, setTinyRecipeIngredientsImage ] = useState(null);
  const [ recipeCookingImage, setRecipeCookingImage ] = useState(null);
  const [ fullRecipeCookingImage, setFullRecipeCookingImage ] = useState(null);
  const [ thumbRecipeCookingImage, setThumbRecipeCookingImage ] = useState(null);
  const [ tinyRecipeCookingImage, setTinyRecipeCookingImage ] = useState(null);

  const imageRef = useRef(null);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) setMessage(props.message);
    return () => isSubscribed = false;
  });

  const handleOwnershipChange = async (e) => {
    if (ownership === "private" && e.target.value === "public") {
      // show prompt "Switching to from private to public. Any references to your private equipment, ingredients, or subrecipes will be removed. Continue Cancel"
      // if cancel return
      // filter existing equipment, ingredients, subrecipes for ownerId = 1
      // also, no longer show private data
    }
    //setOwnership(e.target.value);
    //if (e.target.value === "private") await fetchNeededPrivateData();
    setOwnership(e.target.value);
  };

  const handleRecipeTypeChange = e => setRecipeTypeId(e.target.value);

  const handleCuisineChange = e => setCuisineId(e.target.value);

  const handleTitleChange = e => setTitle(e.target.value);

  const handleDescriptionChange = e => setDescription(e.target.value);

  const handleDirectionsChange = e => setDirections(e.target.value);

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
    //newSubrecipeRows[elToUpdate].[e.target.name]
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

  /*const handleImageChange = e => {
    [e.target.name](e.target.files[0]);
  };*/

  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => [e.target.name](reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onImageLoaded = image => imageRef.current = image;

  const onCropChange = crop => setCrop(crop);

  const onCropComplete = crop => makeClientCrops(crop);

  const makeClientCrops = async (crop) => {
    if (imageRef && crop.width) {
      const { resizedFullPreview, resizedFullFinal } = await getCroppedFullImage(imageRef.current, crop, "newFile.jpeg");
      const { resizedThumbPreview, resizedThumbFinal } = await getCroppedThumbImage(imageRef.current, crop, "newFile.jpeg");
      const { resizedTinyPreview, resizedTinyFinal } = await getCroppedTinyImage(imageRef.current, crop, "newFile.jpeg");

      console.log(imageRef.current);
      
      setCropFullSizePreview(resizedFullPreview);
      setCropThumbSizePreview(resizedThumbPreview);
      setCropTinySizePreview(resizedTinyPreview);
      setFullRecipeImage(resizedFullFinal);
      setThumbRecipeImage(resizedThumbFinal);
      setTinyRecipeImage(resizedTinyFinal);
    }
  };

  const getCroppedFullImage = async (image, crop, fileName) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = 280;
    canvas.height = 172;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      280,
      172
    );

    const resizedFullPreview = await new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) return;
        blob.name = fileName;
        const fileUrl = window.URL.createObjectURL(blob);
        resolve(fileUrl);
      }, 'image/jpeg', 1);
    });

    const resizedFullFinal = await new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) return;
        blob.name = fileName;
        const image = new File([blob], "fullFinal", {type: "image/jpeg"});
        resolve(image);
      }, 'image/jpeg', 1);
    });

    return {resizedFullPreview, resizedFullFinal};
  };

  const getCroppedThumbImage = async (image, crop, fileName) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = 100;
    canvas.height = 62;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      100,
      62
    );

    const resizedThumbPreview = await new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) return;
        blob.name = fileName;
        const fileUrl = window.URL.createObjectURL(blob);
        resolve(fileUrl);
      }, 'image/jpeg', 1);
    });

    const resizedThumbFinal = await new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) return;
        blob.name = fileName;
        const image = new File([blob], "thumbFinal", {type: "image/jpeg"});
        resolve(image);
      }, 'image/jpeg', 1);
    });

    return {resizedThumbPreview, resizedThumbFinal};
  };

  const getCroppedTinyImage = async (image, crop, fileName) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = 25;
    canvas.height = 25;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      25,
      25
    );

    const resizedTinyPreview = await new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) return;
        blob.name = fileName;
        const fileUrl = window.URL.createObjectURL(blob);
        resolve(fileUrl);
      }, 'image/jpeg', 1);
    });

    const resizedTinyFinal = await new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) return;
        blob.name = fileName;
        const image = new File([blob], "tinyFinal", {type: "image/jpeg"});
        resolve(image);
      }, 'image/jpeg', 1);
    });

    return {resizedTinyPreview, resizedTinyFinal};
  };

  const cancelImage = () => {
    setCropFullSizePreview(null);
    setCropThumbSizePreview(null);
    setCropTinySizePreview(null);
    setRecipeImage(null);
    setFullRecipeImage(null);
    setThumbRecipeImage(null);
    setTinyRecipeImage(null);
  };

  const validate = () => {
    // TO DO: FINISH, also, messages
    return (
      (recipeTypeId !== "") &&
      (cuisineId !== "") &&
      (title !== "") &&
      (description !== "") &&
      (directions !== "")
    );
  };
  
  const getCheckedMethods = () => {
    let checkedMethods = [];
    Object.entries(methods).forEach(([key, value]) => {
      if (value === true) checkedMethods.push(Number(key));
    });
    return checkedMethods;
  }

  const handleSubmit = () => {
    const recipeInfo = {
      ownership,
      recipeTypeId,
      cuisineId,
      title,
      description,
      directions,
      requiredMethods: getCheckedMethods(),
      requiredEquipment: equipmentRows,
      requiredIngredients: ingredientRows,
      requiredSubrecipes: subrecipeRows,
      recipeImage,
      recipeEquipmentImage,
      recipeIngredientsImage,
      recipeCookingImage
    };
    setLoading(true);
    try {
      if (ownership === "private") props.userCreateNewPrivateRecipe(recipeInfo);
      else if (ownership === "public") props.userCreateNewPublicRecipe(recipeInfo);
    } catch(err) {
      setLoading(false);
      setMessage(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }



  return (
    <div className={`submit-recipe one-column-a ${props.oneColumnATheme}`}>

      <h1>Submit New Recipe</h1>

      {/* TO DO: SCROLL TO TOP pageY: 0 */}
      <div id="status">{message}</div>

      {/* ownership */}
      <div className="ownership">
        <h2 className="red_style">Ownership</h2>
        <ExpandCollapse>
          <div>
            <p>Once submitted, a recipe's ownership can't be changed.</p>
            <br />
            <p>Public:</p>
            <p>- Anyone can view</p>
            <p>- May only use official NOBSC equipment, ingredients, and recipes, and public recipes submitted by other users</p>
            <p>- Can't be deleted, but can be disowned (author will be changed from "authname{/*authname*/}" to "Unknown")</p>
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
              name="ownership"
              type="radio"
              checked={ownership === "public"}
              onChange={handleOwnershipChange}
              value="public"
            />
            <label className="ownership-span-label">Public</label>
          </span>
          <span className="ownership-span">
            <input
              className="ownership-span-input"
              name="ownership"
              type="radio"
              checked={ownership === "private"}
              onChange={handleOwnershipChange}
              value="private"
            />
            <label className="ownership-span-label">Private</label>
          </span>
        </div>
      </div>

      {/* recipe type */}
      <div className="recipe-type">
        <h2 className="red_style">Type of Recipe</h2>
        <select
          name="recipe_type_id"
          id="recipe_type_id"
          required
          onChange={handleRecipeTypeChange}
          value={recipeTypeId}
        >
          <option value=""></option>
          {props.dataRecipeTypes.map(recipeType => (
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
      <div className="cuisine">
        <h2 className="red_style">Cuisine</h2>
        <select
          name="cuisine_id"
          id="cuisine_id"
          required
          onChange={handleCuisineChange}
          value={cuisineId}
        >
          <option value=""></option>
          {props.dataCuisines.map(cuisine => (
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
      <div className="title">
        <h2 className="red_style">Title</h2>
        <input
          type="text"
          name="recipe_title"
          id="recipe_title"
          onChange={handleTitleChange}
          value={title}
        />
      </div>

      {/* description */}
      <div className="description">
        <h2 className="red_style">Description / Author Note</h2>
        <input
          type="text"
          name="recipe_description"
          id="recipe_description"
          onChange={handleDescriptionChange}
          value={description}
        />
      </div>

      {/* methods */}
      <div className="methods">
        <h2 className="red_style">Methods</h2>
        <div className="method-spans" onChange={e => handleMethodsChange(e)}>
          {props.dataMethods.map(method => (
            <span className="method-span" key={method.method_id}>
              <input className="method-span-input" type="checkbox" id={method.method_id} />
              <label className="method-span-label">{method.method_name}</label>
            </span>
          ))}
        </div>
      </div>

      {/* equipment */}
      <div className="recipe_additions" id="equipment_div">
        <h2 className="red_style">Equipment</h2>
        <div id="equipment_rows_container">
          {equipmentRows.map(equipmentRow => (
            <EquipmentRow
              key={equipmentRow.key}
              rowKey={equipmentRow.key}
              amount={equipmentRow.amount}
              type={equipmentRow.type}
              equipment={equipmentRow.equipment}
              dataEquipment={props.dataEquipment}
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
        <h2 className="red_style">Ingredients</h2>
        <div id="ingredient_rows_container">
          {ingredientRows.map(ingredientRow => (
            <IngredientRow
              key={ingredientRow.key}
              rowKey={ingredientRow.key}
              amount={ingredientRow.amount}
              unit={ingredientRow.unit}
              type={ingredientRow.type}
              ingredient={ingredientRow.ingredient}
              dataMeasurements={props.dataMeasurements}
              dataIngredientTypes={props.dataIngredientTypes}
              dataIngredients={props.dataIngredients}
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
        <h2 className="red_style">Subrecipes</h2>
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
              dataMeasurements={props.dataMeasurements}
              dataRecipeTypes={props.dataRecipeTypes}
              dataCuisines={props.dataCuisines}
              dataRecipes={props.dataRecipes}
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
      <div className="directions">
        <h2 className="red_style">Directions</h2>
        <textarea
          name="recipe_directions"
          id="recipe_directions"
          onChange={handleDirectionsChange}
          value={directions}
        />
      </div>

      {/* images */}
      <div className="images">
        <div className="image_div">
          <h2 className="red_style">Image of Finished Recipe</h2>
          <div className="recipe-image-preview"></div>
          <input name="setRecipeImage" type="file" accept="image/*" onChange={onSelectFile} />
        </div>
        <div className="image_div">
          <h2 className="red_style">Image of All Equipment</h2>
          <div className="recipe-image-preview"></div>
          <input name="setRecipeEquipmentImage" type="file" accept="image/*" onChange={onSelectFile} />
        </div>
        <div className="image_div">
          <h2 className="red_style">Image of All Ingredients</h2>
          <div className="recipe-image-preview"></div>
          <input name="setRecipeIngredientsImage" type="file" accept="image/*" onChange={onSelectFile} />
        </div>
        <div className="image_div">
          <h2 className="red_style">Image of Cooking In Action</h2>
          <div className="recipe-image-preview"></div>
          <input name="setRecipeCookingImage" type="file" accept="image/*" onChange={onSelectFile} />
        </div>
      </div>



      <div className="submit-recipe-image">
        {!recipeImage && (
          <div>
            <h2>Current Image of Finished Recipe</h2>
            <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${props.authname}`} />
            <h4>Change Image of Finished Recipe</h4>
            <input className="submit-recipe-image-input" name="setRecipeImage" type="file" accept="image/*" onChange={onSelectFile} />
          </div>
        )}

        {recipeImage && (
          <div>
            <ReactCrop
              className="submit-recipe-image-crop-tool"
              style={{minHeight: "300px"}}
              imageStyle={{minHeight: "300px"}}
              src={recipeImage}
              crop={crop}
              onImageLoaded={onImageLoaded}
              onChange={onCropChange}
              onComplete={onCropComplete}
            />
            <span>Move the crop to your desired position, then click "Complete". These three images will be saved for you:</span>
            <div className="submit-recipe-image-crop-previews">
              <div className="submit-recipe-image-crop-full-preview">
                <span>Full Size (280px by 172px): </span><img src={cropFullSizePreview} />
              </div>
              <div className="submit-recipe-image-crop-thumb-preview">
                <span>Thumb Size (100px by 62px): </span><img src={cropThumbSizePreview} />
              </div>
              <div className="submit-recipe-image-crop-tiny-preview">
                <span>Tiny Size (25px by 25px): </span><img src={cropTinySizePreview} />
              </div>
            </div>
            <button className="submit-recipe-image-cancel-button" name="cancel-recipe-image" disabled={loading} onClick={cancelRecipeImage}>Cancel</button>
            <button className="submit-recipe-image-submit-button" name="submit-recipe-image" disabled={loading} onClick={submitRecipeImage}>Complete</button>
          </div>
        )}
      </div>

      <div className="submit-recipe-equipment-image">
        {!recipeEquipmentImage && (
          <div>
            <h2>Current Image of All Equipment</h2>
            <img src={`https://nobsc-user-recipe-equipment.s3.amazonaws.com/${props.authname}`} />
            <h4>Change Image of All Equipment</h4>
            <input className="submit-recipe-equipment-image-input" name="setRecipeEquipmentImage" type="file" accept="image/*" onChange={onSelectFile} />
          </div>
        )}

        {recipeEquipmentImage && (
          <div>
            <ReactCrop
              className="submit-recipe-equipment-image-crop-tool"
              style={{minHeight: "300px"}}
              imageStyle={{minHeight: "300px"}}
              src={recipeEquipmentImage}
              crop={crop}
              onImageLoaded={onImageLoaded}
              onChange={onCropChange}
              onComplete={onCropComplete}
            />
            <span>Move the crop to your desired position, then click "Complete". These three images will be saved for you:</span>
            <div className="submit-recipe-equipment-image-crop-previews">
              <div className="submit-recipe-equipment-image-crop-full-preview">
                <span>Full Size (280px by 172px): </span><img src={cropFullSizePreview} />
              </div>
              <div className="submit-recipe-equipment-image-crop-thumb-preview">
                <span>Thumb Size (100px by 62px): </span><img src={cropThumbSizePreview} />
              </div>
              <div className="submit-recipe-equipment-image-crop-tiny-preview">
                <span>Tiny Size (25px by 25px): </span><img src={cropTinySizePreview} />
              </div>
            </div>
            <button className="submit-recipe-equipment-image-cancel-button" name="cancel-recipe-image" disabled={loading} onClick={cancelRecipeEquipmentImage}>Cancel</button>
            <button className="submit-recipe-equipment-image-submit-button" name="submit-recipe-image" disabled={loading} onClick={submitRecipeEquipmentImage}>Complete</button>
          </div>
        )}
      </div>

      <div className="submit-recipe-ingredients-image">
        {!recipeIngredientsImage && (
          <div>
            <h2>Current Image of All Ingredients</h2>
            <img src={`https://nobsc-user-recipe-ingredients.s3.amazonaws.com/${props.authname}`} />
            <h4>Change Image of All Ingredients</h4>
            <input className="submit-recipe-ingredients-image-input" name="setRecipeIngredientsImage" type="file" accept="image/*" onChange={onSelectFile} />
          </div>
        )}

        {recipeIngredientsImage && (
          <div>
            <ReactCrop
              className="submit-recipe-ingredients-image-crop-tool"
              style={{minHeight: "300px"}}
              imageStyle={{minHeight: "300px"}}
              src={recipeIngredientsImage}
              crop={crop}
              onImageLoaded={onImageLoaded}
              onChange={onCropChange}
              onComplete={onCropComplete}
            />
            <span>Move the crop to your desired position, then click "Complete". These three images will be saved for you:</span>
            <div className="submit-recipe-ingredients-image-crop-previews">
              <div className="submit-recipe-ingredients-image-crop-full-preview">
                <span>Full Size (280px by 172px): </span><img src={cropFullSizePreview} />
              </div>
              <div className="submit-recipe-ingredients-image-crop-thumb-preview">
                <span>Thumb Size (100px by 62px): </span><img src={cropThumbSizePreview} />
              </div>
              <div className="submit-recipe-ingredients-image-crop-tiny-preview">
                <span>Tiny Size (25px by 25px): </span><img src={cropTinySizePreview} />
              </div>
            </div>
            <button className="submit-recipe-ingredients-image-cancel-button" name="cancel-recipe-image" disabled={loading} onClick={cancelRecipeIngredientsImage}>Cancel</button>
            <button className="submit-recipe-ingredients-image-submit-button" name="submit-recipe-image" disabled={loading} onClick={submitRecipeIngredientsImage}>Complete</button>
          </div>
        )}
      </div>

      <div className="submit-recipe-cooking-image">
        {!recipeCookingImage && (
          <div>
            <h2>Current Image of Cooking In Action</h2>
            <img src={`https://nobsc-user-recipe-cooking.s3.amazonaws.com/${props.authname}`} />
            <h4>Change Image of Cooking In Action</h4>
            <input className="submit-recipe-cooking-image-input" name="setRecipeCookingImage" type="file" accept="image/*" onChange={onSelectFile} />
          </div>
        )}

        {recipeCookingImage && (
          <div>
            <ReactCrop
              className="submit-recipe-cooking-image-crop-tool"
              style={{minHeight: "300px"}}
              imageStyle={{minHeight: "300px"}}
              src={recipeCookingImage}
              crop={crop}
              onImageLoaded={onImageLoaded}
              onChange={onCropChange}
              onComplete={onCropComplete}
            />
            <span>Move the crop to your desired position, then click "Complete". These three images will be saved for you:</span>
            <div className="submit-recipe-cooking-image-crop-previews">
              <div className="submit-recipe-cooking-image-crop-full-preview">
                <span>Full Size (280px by 172px): </span><img src={cropFullSizePreview} />
              </div>
              <div className="submit-recipe-cooking-image-crop-thumb-preview">
                <span>Thumb Size (100px by 62px): </span><img src={cropThumbSizePreview} />
              </div>
              <div className="submit-recipe-cooking-image-crop-tiny-preview">
                <span>Tiny Size (25px by 25px): </span><img src={cropTinySizePreview} />
              </div>
            </div>
            <button className="submit-recipe-cooking-image-cancel-button" name="cancel-recipe-image" disabled={loading} onClick={cancelRecipeCookingImage}>Cancel</button>
            <button className="submit-recipe-cooking-image-submit-button" name="submit-recipe-image" disabled={loading} onClick={submitRecipeCookingImage}>Complete</button>
          </div>
        )}
      </div>



      {/* submit */}
      <div>
        <LoaderButton
          id="user_submit_recipe_button"
          type="button"
          name="submit"
          text="Submit Recipe"
          loadingText="Submitting Recipe..."
          isLoading={loading}
          disabled={!validate()}
          onClick={handleSubmit}
        />
      </div>

    </div>
  );
};

const mapStateToProps = state => ({
  message: state.user.message,
  dataMeasurements: state.data.measurements,
  dataEquipment: state.data.equipment,
  dataEquipmentTypes: state.data.equipmentTypes,
  dataIngredients: state.data.ingredients,
  dataIngredientTypes: state.data.ingredientTypes,
  dataRecipes: state.data.recipes,
  dataRecipeTypes: state.data.recipeTypes,
  dataCuisines: state.data.cuisines,
  dataMethods: state.data.methods,
  dataPublicRecipes: state.data.publicRecipes,
  dataMyPublicRecipes: state.data.myPublicRecipes,
  dataMyPrivateEquipment: state.data.myPrivateEquipment,
  dataMyPrivateIngredients: state.data.myPrivateIngredients,
  dataMyPrivateRecipes: state.data.myPrivateRecipes
});

const mapDispatchToProps = dispatch => ({
  userCreateNewPrivateRecipe: (recipeInfo) => dispatch(userCreateNewPrivateRecipe(recipeInfo)),
  userCreateNewPublicRecipe: (recipeInfo) => dispatch(userCreateNewPublicRecipe(recipeInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSubmitRecipe);