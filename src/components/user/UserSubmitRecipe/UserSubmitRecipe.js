import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import uuid from 'uuid/v4';
import axios from 'axios';
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import './submitRecipe.css';
import EquipmentRow from './EquipmentRow/EquipmentRow';
import IngredientRow from './IngredientRow/IngredientRow';
import SubrecipeRow from './SubrecipeRow/SubrecipeRow';
import ExpandCollapse from '../../ExpandCollapse/ExpandCollapse';
import LoaderButton from '../../LoaderButton/LoaderButton';
import {
  getCroppedFullImage,
  getCroppedThumbImage,
  getCroppedTinyImage
} from '../../../utils/imageCropPreviews/imageCropPreviews';
import {
  userCreateNewPrivateRecipe,
  userCreateNewPublicRecipe,
  userEditPrivateRecipe,
  userEditPublicRecipe
} from '../../../store/actions/index';

import { NOBSCBackendAPIEndpointOne } from '../../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

const UserSubmitRecipe = props => {
  const [ message, setMessage ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ editing, setEditing ] = useState(false);
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
  const [ prevRecipeImage, setPrevRecipeImage ] = useState("");
  const [ prevEquipmentImage, setPrevEquipmentImage ] = useState("");
  const [ prevIngredientsImage, setPrevIngredientsImage ] = useState("");
  const [ prevCookingImage, setPrevCookingImage ] = useState("");

  const [ cropOne, setCropOne ] = useState({
    disabled: true,
    locked: true,
    width: 280,
    maxWidth: 280,
    height: 172,
    maxHeight: 172
  });
  const [ cropFullSizePreview, setCropFullSizePreview ] = useState(null);
  const [ cropThumbSizePreview, setCropThumbSizePreview ] = useState(null);
  const [ cropTinySizePreview, setCropTinySizePreview ] = useState(null);
  const [ recipeImage, setRecipeImage ] = useState(null);
  const [ fullRecipeImage, setFullRecipeImage ] = useState(null);
  const [ thumbRecipeImage, setThumbRecipeImage ] = useState(null);
  const [ tinyRecipeImage, setTinyRecipeImage ] = useState(null);

  const [ cropTwo, setCropTwo ] = useState({
    disabled: true,
    locked: true,
    width: 280,
    maxWidth: 280,
    height: 172,
    maxHeight: 172
  });
  const [ equipmentCropFullSizePreview, setEquipmentCropFullSizePreview ] = useState(null);
  const [ equipmentCropThumbSizePreview, setEquipmentCropThumbSizePreview ] = useState(null);
  const [ equipmentCropTinySizePreview, setEquipmentCropTinySizePreview ] = useState(null);
  const [ recipeEquipmentImage, setRecipeEquipmentImage ] = useState(null);
  const [ fullRecipeEquipmentImage, setFullRecipeEquipmentImage ] = useState(null);
  const [ thumbRecipeEquipmentImage, setThumbRecipeEquipmentImage ] = useState(null);
  const [ tinyRecipeEquipmentImage, setTinyRecipeEquipmentImage ] = useState(null);

  const [ cropThree, setCropThree ] = useState({
    disabled: true,
    locked: true,
    width: 280,
    maxWidth: 280,
    height: 172,
    maxHeight: 172
  });
  const [ ingredientsCropFullSizePreview, setIngredientsCropFullSizePreview ] = useState(null);
  const [ ingredientsCropThumbSizePreview, setIngredientsCropThumbSizePreview ] = useState(null);
  const [ ingredientsCropTinySizePreview, setIngredientsCropTinySizePreview ] = useState(null);
  const [ recipeIngredientsImage, setRecipeIngredientsImage ] = useState(null);
  const [ fullRecipeIngredientsImage, setFullRecipeIngredientsImage ] = useState(null);
  const [ thumbRecipeIngredientsImage, setThumbRecipeIngredientsImage ] = useState(null);
  const [ tinyRecipeIngredientsImage, setTinyRecipeIngredientsImage ] = useState(null);

  const [ cropFour, setCropFour ] = useState({
    disabled: true,
    locked: true,
    width: 280,
    maxWidth: 280,
    height: 172,
    maxHeight: 172
  });
  const [ cookingCropFullSizePreview, setCookingCropFullSizePreview ] = useState(null);
  const [ cookingCropThumbSizePreview, setCookingCropThumbSizePreview ] = useState(null);
  const [ cookingCropTinySizePreview, setCookingCropTinySizePreview ] = useState(null);
  const [ recipeCookingImage, setRecipeCookingImage ] = useState(null);
  const [ fullRecipeCookingImage, setFullRecipeCookingImage ] = useState(null);
  const [ thumbRecipeCookingImage, setThumbRecipeCookingImage ] = useState(null);
  const [ tinyRecipeCookingImage, setTinyRecipeCookingImage ] = useState(null);

  const imageRef = useRef(null);
  const equipmentImageRef = useRef(null);
  const ingredientsImageRef = useRef(null);
  const cookingImageRef = useRef(null);

  // this effect only runs once,
  // and it is only used for editing an existing recipe
  // it is not used for creating a new recipe
  // this populates the form fields with the existing info
  useEffect(() => {
    const getExistingRecipeToEdit = async () => {
      setLoading(true);
      setEditing(true);
      const res = await axios.post(
        `${endpoint}/user/recipe/edit/${props.childProps.editingOwnership}`,
        {recipeId: props.match.params.id},
        {withCredentials: true}
      );
      console.log(res.data);
      setOwnership(res.data.recipe.ownerId);  // or from res.data?
      setRecipeTypeId(res.data.recipe.recipeTypeId);
      setCuisineId(res.data.recipe.cuisineId);
      setTitle(res.data.recipe.title);
      setDescription(res.data.recipe.description);
      setDirections(res.data.recipe.directions);

      res.data.requiredMethods.map(method => setMethods(prevState => ({
          ...prevState,
          [method]: true
        }))
      );

      let equipmentToSet = [];
      let ingredientsToSet = [];
      let subrecipesToSet = [];

      res.data.requiredEquipment.length &&
      res.data.requiredEquipment.map(equ => equipmentToSet.push({
        key: uuid(),
        amount: equ.amount,
        type: equ.equipmentTypeId,
        equipment: equ.equipmentId
      }));

      res.data.requiredIngredients.length &&
      res.data.requiredIngredients.map(ing => ingredientsToSet.push({
        key: uuid(),
        amount: 1,
        unit: ing.measurementId,
        type: ing.ingredientTypeId,
        ingredient: ing.ingredientId
      }));

      res.data.requiredSubrecipes.length &&
      res.data.requiredSubrecipes.map(sub => subrecipesToSet.push({
        key: uuid(),
        amount: 1,
        unit: sub.measurementId,
        type: sub.recipeTypeId,
        cuisine: sub.cuisineId,
        subrecipe: sub.subrecipeId
      }))

      setEquipmentRows(equipmentToSet);
      setIngredientRows(ingredientsToSet);
      setSubrecipeRows(subrecipesToSet);

      setPrevRecipeImage(res.data.recipe.recipeImage);
      setPrevEquipmentImage(res.data.recipe.recipeEquipmentImage);
      setPrevIngredientsImage(res.data.recipe.recipeIngredientsImage);
      setPrevCookingImage(res.data.recipe.recipeCookingImage);

      setLoading(false);

      // and then remember you need to handle list populations (and autosuggestions) *****
      // then pre populate checked filters
      // then max recipes per day in plan?
      // css, themes
      // content all in one place
    };
    if (props.childProps && props.childProps.editing === "true") getExistingRecipeToEdit();
  }, []);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (props.message !== "") window.scrollTo(0,0);
      setMessage(props.message);
    }
    return () => isSubscribed = false;
  }, [props.message]);

  const handleOwnershipChange = async (e) => {
    if (props.editing === "true" || editing === true) return;
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

  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setRecipeImage(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onSelectEquipmentFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setRecipeEquipmentImage(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onSelectIngredientsFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setRecipeIngredientsImage(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onSelectCookingFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setRecipeCookingImage(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onImageLoaded = image => imageRef.current = image;

  const onEquipmentImageLoaded = image => equipmentImageRef.current = image;

  const onIngredientsImageLoaded = image => ingredientsImageRef.current = image;

  const onCookingImageLoaded = image => cookingImageRef.current = image;

  const onCropOneChange = crop => setCropOne(crop);

  const onCropTwoChange = crop => setCropTwo(crop);

  const onCropThreeChange = crop => setCropThree(crop);

  const onCropFourChange = crop => setCropFour(crop);

  const onCropComplete = crop => makeClientCrops(crop);

  const onEquipmentCropComplete = crop => makeClientEquipmentCrops(crop);

  const onIngredientsCropComplete = crop => makeClientIngredientsCrops(crop);

  const onCookingCropComplete = crop => makeClientCookingCrops(crop);

  const makeClientCrops = async (crop) => {
    if (imageRef && crop.width) {
      const { resizedFullPreview, resizedFullFinal } = await getCroppedFullImage(imageRef.current, crop, "newFile.jpeg");
      const { resizedThumbPreview, resizedThumbFinal } = await getCroppedThumbImage(imageRef.current, crop, "newFile.jpeg");
      const { resizedTinyPreview, resizedTinyFinal } = await getCroppedTinyImage(imageRef.current, crop, "newFile.jpeg");
      setCropFullSizePreview(resizedFullPreview);
      setCropThumbSizePreview(resizedThumbPreview);
      setCropTinySizePreview(resizedTinyPreview);
      setFullRecipeImage(resizedFullFinal);
      setThumbRecipeImage(resizedThumbFinal);
      setTinyRecipeImage(resizedTinyFinal);
    }
  };

  const makeClientEquipmentCrops = async (crop) => {
    if (equipmentImageRef && crop.width) {
      const { resizedFullPreview, resizedFullFinal } = await getCroppedFullImage(equipmentImageRef.current, crop, "newFile.jpeg");
      const { resizedThumbPreview, resizedThumbFinal } = await getCroppedThumbImage(equipmentImageRef.current, crop, "newFile.jpeg");
      const { resizedTinyPreview, resizedTinyFinal } = await getCroppedTinyImage(equipmentImageRef.current, crop, "newFile.jpeg");
      setEquipmentCropFullSizePreview(resizedFullPreview);
      setEquipmentCropThumbSizePreview(resizedThumbPreview);
      setEquipmentCropTinySizePreview(resizedTinyPreview);
      setFullRecipeEquipmentImage(resizedFullFinal);
      setThumbRecipeEquipmentImage(resizedThumbFinal);
      setTinyRecipeEquipmentImage(resizedTinyFinal);
    }
  };

  const makeClientIngredientsCrops = async (crop) => {
    if (ingredientsImageRef && crop.width) {
      const { resizedFullPreview, resizedFullFinal } = await getCroppedFullImage(ingredientsImageRef.current, crop, "newFile.jpeg");
      const { resizedThumbPreview, resizedThumbFinal } = await getCroppedThumbImage(ingredientsImageRef.current, crop, "newFile.jpeg");
      const { resizedTinyPreview, resizedTinyFinal } = await getCroppedTinyImage(ingredientsImageRef.current, crop, "newFile.jpeg");
      setIngredientsCropFullSizePreview(resizedFullPreview);
      setIngredientsCropThumbSizePreview(resizedThumbPreview);
      setIngredientsCropTinySizePreview(resizedTinyPreview);
      setFullRecipeIngredientsImage(resizedFullFinal);
      setThumbRecipeIngredientsImage(resizedThumbFinal);
      setTinyRecipeIngredientsImage(resizedTinyFinal);
    }
  };

  const makeClientCookingCrops = async (crop) => {
    if (cookingImageRef && crop.width) {
      const { resizedFullPreview, resizedFullFinal } = await getCroppedFullImage(cookingImageRef.current, crop, "newFile.jpeg");
      const { resizedThumbPreview, resizedThumbFinal } = await getCroppedThumbImage(cookingImageRef.current, crop, "newFile.jpeg");
      const { resizedTinyPreview, resizedTinyFinal } = await getCroppedTinyImage(cookingImageRef.current, crop, "newFile.jpeg");
      setCookingCropFullSizePreview(resizedFullPreview);
      setCookingCropThumbSizePreview(resizedThumbPreview);
      setCookingCropTinySizePreview(resizedTinyPreview);
      setFullRecipeCookingImage(resizedFullFinal);
      setThumbRecipeCookingImage(resizedThumbFinal);
      setTinyRecipeCookingImage(resizedTinyFinal);
    }
  };

  const cancelRecipeImage = () => {
    setCropFullSizePreview(null);
    setCropThumbSizePreview(null);
    setCropTinySizePreview(null);
    setRecipeImage(null);
    setFullRecipeImage(null);
    setThumbRecipeImage(null);
    setTinyRecipeImage(null);
  };

  const cancelRecipeEquipmentImage = () => {
    setEquipmentCropFullSizePreview(null);
    setEquipmentCropThumbSizePreview(null);
    setEquipmentCropTinySizePreview(null);
    setRecipeEquipmentImage(null);
    setFullRecipeEquipmentImage(null);
    setThumbRecipeEquipmentImage(null);
    setTinyRecipeEquipmentImage(null);
  };

  const cancelRecipeIngredientsImage = () => {
    setIngredientsCropFullSizePreview(null);
    setIngredientsCropThumbSizePreview(null);
    setIngredientsCropTinySizePreview(null);
    setRecipeIngredientsImage(null);
    setFullRecipeIngredientsImage(null);
    setThumbRecipeIngredientsImage(null);
    setTinyRecipeIngredientsImage(null);
  };

  const cancelRecipeCookingImage = () => {
    setCookingCropFullSizePreview(null);
    setCookingCropThumbSizePreview(null);
    setCookingCropTinySizePreview(null);
    setRecipeCookingImage(null);
    setFullRecipeCookingImage(null);
    setThumbRecipeCookingImage(null);
    setTinyRecipeCookingImage(null);
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
    if (methods.length) {
      Object.entries(methods).forEach(([key, value]) => {
        if (value === true) checkedMethods.push({methodId: Number(key)});
      });
      return checkedMethods;
    }
    checkedMethods = "none";
    return checkedMethods;
  }

  const getRequiredEquipment = () => {
    let requiredEquipment = [];
    if (equipmentRows.length) {
      equipmentRows.map(eR => {
        requiredEquipment.push({
          amount: Number(eR.amount),
          equipment: Number(eR.equipment)
        });
      });
      return requiredEquipment;
    }
    requiredEquipment = "none";
    return requiredEquipment;
  }

  const getRequiredIngredients = () => {
    let requiredIngredients = [];
    if (ingredientRows.length) {
      ingredientRows.map(iR => {
        requiredIngredients.push({
          amount: Number(iR.amount),
          unit: Number(iR.unit),
          ingredient: Number(iR.ingredient)
        });
      });
      return requiredIngredients;
    }
    requiredIngredients = "none";
    return requiredIngredients;
  }

  const getRequiredSubrecipes = () => {
    let requiredSubrecipes;
    if (subrecipeRows.length) {
      subrecipeRows.map(sR => {
        requiredSubrecipes.push({
          amount: Number(sR.amount),
          unit: Number(sR.unit),
          subrecipe: Number(sR.subrecipe)
        });
      });
      return requiredSubrecipes;
    }
    requiredSubrecipes = "none";
    return requiredSubrecipes;
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
      requiredEquipment: getRequiredEquipment(),
      requiredIngredients: getRequiredIngredients(),
      requiredSubrecipes: getRequiredSubrecipes(),
      recipeImage,
      fullRecipeImage,
      thumbRecipeImage,
      tinyRecipeImage,
      recipeEquipmentImage,
      fullRecipeEquipmentImage,
      thumbRecipeEquipmentImage,
      tinyRecipeEquipmentImage,
      recipeIngredientsImage,
      fullRecipeIngredientsImage,
      thumbRecipeIngredientsImage,
      tinyRecipeIngredientsImage,
      recipeCookingImage,
      fullRecipeCookingImage,
      thumbRecipeCookingImage,
      tinyRecipeCookingImage
    };
    if (props.childProps.editing === "true" || editing === true) {
      recipeInfo.prevRecipeImage = prevRecipeImage;
      recipeInfo.prevEquipmentImage = prevEquipmentImage;
      recipeInfo.prevIngredientsImage = prevIngredientsImage;
      recipeInfo.prevCookingImage = prevCookingImage;
    }
    setLoading(true);
    try {
      if (props.childProps.editing === "true" || editing === true) {
        if (props.editingOwnership === "private" || ownership === "private") {
          props.userEditPrivateRecipe(recipeInfo, props.history);
        } else if (props.editingOwnership === "public" || ownership === "public") {
          props.userEditPublicRecipe(recipeInfo, props.history);
        }
      } else {
        if (ownership === "private") {
          props.userCreateNewPrivateRecipe(recipeInfo, props.history);
        } else if (ownership === "public") {
          props.userCreateNewPublicRecipe(recipeInfo, props.history);
        }
      }
    } catch(err) {
      setLoading(false);
      window.scrollTo(0,0);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={`submit-recipe one-column-a ${props.oneColumnATheme}`}>

      <h1>{editing ? 'Edit Recipe' : 'Submit New Recipe'}</h1>

      <p className="submit-recipe__error-message">{message}</p>



      {/* ownership */}
      <div className="submit-recipe__section-ownership">
        <h2 className="submit-recipe__heading-two">Ownership</h2>
        <ExpandCollapse>
          <div>
            <p>Once submitted, a recipe's ownership can't be changed.</p>
            <br />
            <p>Public:</p>
            <p>- Anyone can view</p>
            <p>- May only use official NOBSC equipment, ingredients, and recipes, and public recipes submitted by other users</p>
            <p>- Can't be deleted, but can be disowned (author will be changed from "{props.authname}" to "Unknown")</p>
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
              name="ownership"
              type="radio"
              checked={ownership === "public"}
              onChange={handleOwnershipChange}
              value="public"
              disabled={editing === true}
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
              disabled={editing === true}
            />
            <label className="ownership-span-label">Private</label>
          </span>
        </div>
      </div>



      {/* recipe type */}
      <div className="submit-recipe__section-recipe-type">
        <h2 className="submit-recipe__heading-two">Type of Recipe</h2>
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
      <div className="submit-recipe__section-cuisine">
        <h2 className="submit-recipe__heading-two">Cuisine</h2>
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
      <div className="submit-recipe__section-title">
        <h2 className="submit-recipe__heading-two">Title</h2>
        <input
          className="submit-recipe__title"
          type="text"
          name="recipe_title"
          id="recipe_title"
          onChange={handleTitleChange}
          value={title}
        />
      </div>



      {/* description */}
      <div className="submit-recipe__section-description">
        <h2 className="submit-recipe__heading-two">Description / Author Note</h2>
        <input
          className="submit-recipe__description"
          type="text"
          name="recipe_description"
          id="recipe_description"
          onChange={handleDescriptionChange}
          value={description}
        />
      </div>



      {/* required methods */}
      <div className="submit-recipe__section-required-methods">
        <h2 className="submit-recipe__heading-two">Methods</h2>
        <div className="method-spans" onChange={e => handleMethodsChange(e)}>
          {props.dataMethods.map(method => (
            <span className="method-span" key={method.method_id}>
              <input className="method-span-input" type="checkbox" id={method.method_id} />
              <label className="method-span-label">{method.method_name}</label>
            </span>
          ))}
        </div>
      </div>



      {/* required equipment */}
      <div className="submit-recipe__section-required-equipment">
        <h2 className="submit-recipe__heading-two">Equipment</h2>
        <div id="equipment_rows_container">
          {equipmentRows.map(equipmentRow => (
            <EquipmentRow
              key={equipmentRow.key}
              rowKey={equipmentRow.key}
              amount={equipmentRow.amount}
              type={equipmentRow.type}
              equipment={equipmentRow.equipment}
              dataEquipment={props.dataEquipment}
              dataMyPrivateEquipment={ownership === "private" ? props.dataMyPrivateEquipment : []}
              handleEquipmentRowChange={handleEquipmentRowChange}
              removeEquipmentRow={removeEquipmentRow} />
          ))}
        </div>
        <button id="add_equipment_button" onClick={addEquipmentRow}>
          Add Equipment
        </button>
      </div>



      {/* required ingredients */}
      <div className="submit-recipe__section-required-ingredients">
        <h2 className="submit-recipe__heading-two">Ingredients</h2>
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
              dataMyPrivateIngredients={ownership === "private" ? props.dataMyPrivateIngredients : []}
              handleIngredientRowChange={handleIngredientRowChange}
              removeIngredientRow={removeIngredientRow}
            />
          ))}
        </div>
        <button id="add_ingredient_button" onClick={addIngredientRow}>
          Add Ingredient
        </button>
      </div>



      {/* required subrecipes */}
      <div className="submit-recipe__section-required-subrecipes">
        <h2 className="submit-recipe__heading-two">Subrecipes</h2>
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
              dataMyPrivateRecipes={ownership === "private" ? props.dataMyPrivateRecipes : []}
              dataMyPublicRecipes={props.dataMyPublicRecipes}
              dataMyFavoriteRecipes={props.dataMyFavoriteRecipes}
              dataMySavedRecipes={props.dataMySavedRecipes}
              editing={editing === true ? "true" : "false"}
              selfId={props.match.params.id && props.match.params.id}
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
      <div className="submit-recipe__section-directions">
        <h2 className="submit-recipe__heading-two">Directions</h2>
        <textarea
          className="recipe-directions"
          name="recipe_directions"
          id="recipe_directions"
          onChange={handleDirectionsChange}
          value={directions}
        />
      </div>



      {/* images */}

      <div className="submit-recipe__section-recipe-image">
        <h2 className="submit-recipe__heading-two">Image of Finished Recipe</h2>
        {!recipeImage && (
          <div>
            {
              !editing
              ? <img src="https://nobsc-user-recipe.s3.amazonaws.com/nobsc-recipe-default" />
              : <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${prevRecipeImage}`} />
            }
            <h4 className="change-default">Change</h4>
            <input
              className="submit-recipe-image-input"
              name="setRecipeImage"
              type="file"
              accept="image/*"
              onChange={onSelectFile}
            />
          </div>
        )}
        {recipeImage && (
          <div>
            <ReactCrop
              className="submit-recipe-image-crop-tool"
              style={{minHeight: "300px"}}
              imageStyle={{minHeight: "300px"}}
              src={recipeImage}
              crop={cropOne}
              onImageLoaded={onImageLoaded}
              onChange={onCropOneChange}
              onComplete={onCropComplete}
            />
            <span>Move the crop to your desired position. These three images will be saved for you:</span>
            <div className="submit-recipe-image-crop-previews">
              <div className="submit-recipe-image-crop-full-preview">
                <span>Full Size: </span><img src={cropFullSizePreview} />
              </div>
              <div className="submit-recipe-image-crop-thumb-preview">
                <span>Thumb Size: </span><img src={cropThumbSizePreview} />
              </div>
              <div className="submit-recipe-image-crop-tiny-preview">
                <span>Tiny Size: </span><img src={cropTinySizePreview} />
              </div>
            </div>
            <button className="submit-recipe-image-cancel-button" name="cancel-recipe-image" disabled={loading} onClick={cancelRecipeImage}>Cancel</button>
          </div>
        )}
      </div>

      <div className="submit-recipe__section-equipment-image">
        <h2 className="submit-recipe__heading-two">Image of All Equipment</h2>
        {!recipeEquipmentImage && (
          <div>
            {
              !editing
              ? <img src="https://nobsc-user-recipe.s3.amazonaws.com/nobsc-recipe-default" />
              : <img src={`https://nobsc-user-recipe-equipment.s3.amazonaws.com/${prevEquipmentImage}`} />
            }
            <h4 className="change-default">Change</h4>
            <input className="submit-recipe-equipment-image-input" name="setRecipeEquipmentImage" type="file" accept="image/*" onChange={onSelectEquipmentFile} />
          </div>
        )}
        {recipeEquipmentImage && (
          <div>
            <ReactCrop
              className="submit-recipe-image-crop-tool"
              style={{minHeight: "300px"}}
              imageStyle={{minHeight: "300px"}}
              src={recipeEquipmentImage}
              crop={cropTwo}
              onImageLoaded={onEquipmentImageLoaded}
              onChange={onCropTwoChange}
              onComplete={onEquipmentCropComplete}
            />
            <span>Move the crop to your desired position. These three images will be saved for you:</span>
            <div className="submit-recipe-image-crop-previews">
              <div className="submit-recipe--image-crop-full-preview">
                <span>Full Size: </span><img src={equipmentCropFullSizePreview} />
              </div>
              <div className="submit-recipe-image-crop-thumb-preview">
                <span>Thumb Size: </span><img src={equipmentCropThumbSizePreview} />
              </div>
              <div className="submit-recipe-image-crop-tiny-preview">
                <span>Tiny Size: </span><img src={equipmentCropTinySizePreview} />
              </div>
            </div>
            <button className="submit-recipe-image-cancel-button" name="cancel-recipe-image" disabled={loading} onClick={cancelRecipeEquipmentImage}>Cancel</button>
          </div>
        )}
      </div>

      <div className="submit-recipe__section-ingredients-image">
        <h2 className="submit-recipe__heading-two">Image of All Ingredients</h2>
        {!recipeIngredientsImage && (
          <div>
            {
              !editing
              ? <img src="https://nobsc-user-recipe.s3.amazonaws.com/nobsc-recipe-default" />
              : <img src={`https://nobsc-user-recipe-ingredients.s3.amazonaws.com/${prevIngredientsImage}`} />
            }
            <h4 className="change-default">Change</h4>
            <input className="submit-recipe-ingredients-image-input" name="setRecipeIngredientsImage" type="file" accept="image/*" onChange={onSelectIngredientsFile} />
          </div>
        )}
        {recipeIngredientsImage && (
          <div>
            <ReactCrop
              className="submit-recipe-image-crop-tool"
              style={{minHeight: "300px"}}
              imageStyle={{minHeight: "300px"}}
              src={recipeIngredientsImage}
              crop={cropThree}
              onImageLoaded={onIngredientsImageLoaded}
              onChange={onCropThreeChange}
              onComplete={onIngredientsCropComplete}
            />
            <span>Move the crop to your desired position. These three images will be saved for you:</span>
            <div className="submit-recipe-image-crop-previews">
              <div className="submit-recipe-image-crop-full-preview">
                <span>Full Size: </span><img src={ingredientsCropFullSizePreview} />
              </div>
              <div className="submit-recipe-image-crop-thumb-preview">
                <span>Thumb Size: </span><img src={ingredientsCropThumbSizePreview} />
              </div>
              <div className="submit-recipe-image-crop-tiny-preview">
                <span>Tiny Size: </span><img src={ingredientsCropTinySizePreview} />
              </div>
            </div>
            <button className="submit-recipe-image-cancel-button" name="cancel-recipe-image" disabled={loading} onClick={cancelRecipeIngredientsImage}>Cancel</button>
          </div>
        )}
      </div>

      <div className="submit-recipe__section-cooking-image">
        <h2 className="submit-recipe__heading-two">Image of Cooking In Action</h2>
        {!recipeCookingImage && (
          <div>
            {
              !editing
              ? <img src="https://nobsc-user-recipe.s3.amazonaws.com/nobsc-recipe-default" />
              : <img src={`https://nobsc-user-recipe-cooking.s3.amazonaws.com/${prevCookingImage}`} />
            }
            <h4 className="change-default">Change</h4>
            <input className="submit-recipe-cooking-image-input" name="setRecipeCookingImage" type="file" accept="image/*" onChange={onSelectCookingFile} />
          </div>
        )}
        {recipeCookingImage && (
          <div>
            <ReactCrop
              className="submit-recipe-image-crop-tool"
              style={{minHeight: "300px"}}
              imageStyle={{minHeight: "300px"}}
              src={recipeCookingImage}
              crop={cropFour}
              onImageLoaded={onCookingImageLoaded}
              onChange={onCropFourChange}
              onComplete={onCookingCropComplete}
            />
            <span>Move the crop to your desired position. These three images will be saved for you:</span>
            <div className="submit-recipe-image-crop-previews">
              <div className="submit-recipe-image-crop-full-preview">
                <span>Full Size: </span><img src={cookingCropFullSizePreview} />
              </div>
              <div className="submit-recipe-image-crop-thumb-preview">
                <span>Thumb Size: </span><img src={cookingCropThumbSizePreview} />
              </div>
              <div className="submit-recipe-image-crop-tiny-preview">
                <span>Tiny Size: </span><img src={cookingCropTinySizePreview} />
              </div>
            </div>
            <button className="submit-recipe-image-cancel-button" name="cancel-recipe-image" disabled={loading} onClick={cancelRecipeCookingImage}>Cancel</button>
          </div>
        )}
      </div>



      {/* submit */}
      <div className="submit-recipe__finish-area">
        <Link
          className="submit-recipe__cancel-button"
          to="/user/dashboard"
        >
          Cancel
        </Link>
        <LoaderButton
          className="submit-recipe__submit-button"
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
  authname: state.auth.authname,
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
  dataMyPublicRecipes: state.data.myPublicRecipes,
  dataMyPrivateEquipment: state.data.myPrivateEquipment,
  dataMyPrivateIngredients: state.data.myPrivateIngredients,
  dataMyPrivateRecipes: state.data.myPrivateRecipes,
  dataMyFavoriteRecipes: state.data.myFavoriteRecipes,
  dataMySavedRecipes: state.data.mySavedRecipes
});

const mapDispatchToProps = dispatch => ({
  userCreateNewPrivateRecipe: (recipeInfo) => dispatch(userCreateNewPrivateRecipe(recipeInfo)),
  userCreateNewPublicRecipe: (recipeInfo) => dispatch(userCreateNewPublicRecipe(recipeInfo)),
  userEditPrivateRecipe: (recipeInfo) => dispatch(userEditPrivateRecipe(recipeInfo)),
  userEditPublicRecipe: (recipeInfo) => dispatch(userEditPublicRecipe(recipeInfo))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSubmitRecipe));