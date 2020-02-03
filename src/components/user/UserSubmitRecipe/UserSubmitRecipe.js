import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import uuid from 'uuid/v4';
import axios from 'axios';

import {
  getCroppedImage
} from '../../../utils/imageCropPreviews/imageCropPreviews';

import {
  userCreateNewPrivateRecipe,
  userCreateNewPublicRecipe,
  userEditPrivateRecipe,
  userEditPublicRecipe
} from '../../../store/actions/index';

import { NOBSCBackendAPIEndpointOne } from '../../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

import { valid } from './validation/valid';

import UserSubmitRecipeView from './UserSubmitRecipeView';

export const UserSubmitRecipe = ({
  match,
  oneColumnATheme,
  authname,
  message,
  childProps,

  dataMeasurements,
  dataEquipment,
  dataEquipmentTypes,
  dataIngredients,
  dataIngredientTypes,
  dataRecipes,
  dataRecipeTypes,
  dataCuisines,
  dataMethods,
  dataMyPublicRecipes,
  dataMyPrivateEquipment,
  dataMyPrivateIngredients,
  dataMyPrivateRecipes,
  dataMyFavoriteRecipes,
  dataMySavedRecipes,

  userCreateNewPrivateRecipe,
  userCreateNewPublicRecipe,
  userEditPrivateRecipe,
  userEditPublicRecipe
}) => {
  const history = useHistory();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ editing, setEditing ] = useState(false);
  const [ editingId, setEditingId ] = useState("");
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
  const [ subrecipeRows, setSubrecipeRows ] = useState([]);
  const [
    prevRecipeImage,
    setPrevRecipeImage
  ] = useState("nobsc-recipe-default");
  const [
    prevEquipmentImage,
    setPrevEquipmentImage
  ] = useState("nobsc-recipe-equipment-default");
  const [
    prevIngredientsImage,
    setPrevIngredientsImage
  ] = useState("nobsc-recipe-ingredients-default");
  const [
    prevCookingImage,
    setPrevCookingImage
  ] = useState("nobsc-recipe-cooking-default");

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
  const [ recipeEquipmentImage, setRecipeEquipmentImage ] = useState(null);
  const [ fullRecipeEquipmentImage, setFullRecipeEquipmentImage ] = useState(null);

  const [ cropThree, setCropThree ] = useState({
    disabled: true,
    locked: true,
    width: 280,
    maxWidth: 280,
    height: 172,
    maxHeight: 172
  });
  const [ ingredientsCropFullSizePreview, setIngredientsCropFullSizePreview ] = useState(null);
  const [ recipeIngredientsImage, setRecipeIngredientsImage ] = useState(null);
  const [ fullRecipeIngredientsImage, setFullRecipeIngredientsImage ] = useState(null);

  const [ cropFour, setCropFour ] = useState({
    disabled: true,
    locked: true,
    width: 280,
    maxWidth: 280,
    height: 172,
    maxHeight: 172
  });
  const [ cookingCropFullSizePreview, setCookingCropFullSizePreview ] = useState(null);
  const [ recipeCookingImage, setRecipeCookingImage ] = useState(null);
  const [ fullRecipeCookingImage, setFullRecipeCookingImage ] = useState(null);

  const imageRef = useRef(null);
  const equipmentImageRef = useRef(null);
  const ingredientsImageRef = useRef(null);
  const cookingImageRef = useRef(null);

  useEffect(() => {
    const getExistingRecipeToEdit = async () => {
      window.scrollTo(0,0);
      setLoading(true);
      setEditing(true);

      const res = await axios.post(
        `${endpoint}/user/recipe/edit/${childProps.editingOwnership}`,
        {recipeId: match.params.id},
        {withCredentials: true}
      );

      setOwnership(childProps.editingOwnership);
      setEditingId(res.data.recipe.recipeId);
      setRecipeTypeId(res.data.recipe.recipeTypeId);
      setCuisineId(res.data.recipe.cuisineId);
      setTitle(res.data.recipe.title);
      setDescription(res.data.recipe.description);
      setDirections(res.data.recipe.directions);

      let methodsToSet = [];
      let equipmentToSet = [];
      let ingredientsToSet = [];
      let subrecipesToSet = [];

      res.data.requiredMethods.length &&
      res.data.requiredMethods.map(method => methodsToSet.push(method.methodId));

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

      setMethods(prevState => {
        const nextState = {...prevState};
        methodsToSet.map(method => {
          nextState[[method]] = true;
        });
        return nextState;
      });
      setEquipmentRows(equipmentToSet);
      setIngredientRows(ingredientsToSet);
      setSubrecipeRows(subrecipesToSet);

      setPrevRecipeImage(res.data.recipe.recipeImage);
      setPrevEquipmentImage(res.data.recipe.recipeEquipmentImage);
      setPrevIngredientsImage(res.data.recipe.recipeIngredientsImage);
      setPrevCookingImage(res.data.recipe.recipeCookingImage);

      setLoading(false);
    };
    
    if (
      childProps &&
      childProps.editing &&
      childProps.editing === "true"
    ) {
      getExistingRecipeToEdit();
    } else if (childProps && childProps.submittingOwnership) {
      setOwnership(childProps.submittingOwnership);
    } else {
      history.push('/user/dashboard');
    }
  }, []);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (message !== "") window.scrollTo(0,0);
      setFeedback(message);
      if (
        message === "Recipe created." ||
        message === "Recipe updated."
      ) {
        setTimeout(() => history.push('/user/dashboard'), 3000);
      }
      setLoading(false);
    }
    return () => isSubscribed = false;
  }, [message]);

  const handleRecipeTypeChange = e => setRecipeTypeId(e.target.value);

  const handleCuisineChange = e => setCuisineId(e.target.value);

  const handleTitleChange = e => setTitle(e.target.value);

  const handleDescriptionChange = e => setDescription(e.target.value);

  const handleDirectionsChange = e => setDirections(e.target.value);

  const handleMethodsChange = e => {
    const id = e.target.id;
    setMethods(prevState => ({
      ...prevState,
      [id]: !prevState[[id]]
    }));
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
  };

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
  };

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
  };

  const addEquipmentRow = () => {
    const newEquipmentRows = equipmentRows.concat({
      key: uuid(),
      amount: "",
      equipment: ""
    });
    setEquipmentRows(newEquipmentRows);
  };

  const removeEquipmentRow = rowKey => {
    const newEquipmentRows = equipmentRows.filter(row => row.key !== rowKey);
    setEquipmentRows(newEquipmentRows);
  };

  const addIngredientRow = () => {
    const newIngredientRows = ingredientRows.concat({
      key: uuid(),
      amount: "",
      unit: "",
      ingredient: ""
    });
    setIngredientRows(newIngredientRows);
  };

  const removeIngredientRow = rowKey => {
    const newIngredientRows = ingredientRows.filter(row => row.key !== rowKey);
    setIngredientRows(newIngredientRows);
  };

  const addSubrecipeRow = () => {
    const newSubrecipeRows = subrecipeRows.concat({
      key: uuid(),
      amount: "",
      unit: "",
      subrecipe: ""
    });
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
    if (!imageRef) return;
    if (!crop.width) return;
    const { resizedFullPreview, resizedFullFinal } = await getCroppedImage(
      280,
      172,
      imageRef.current,
      crop,
      "newFile.jpeg"
    );
    const { resizedThumbPreview, resizedThumbFinal } = await getCroppedImage(
      100,
      62,
      imageRef.current,
      crop,
      "newFile.jpeg"
    );
    const { resizedTinyPreview, resizedTinyFinal } = await getCroppedImage(
      28,
      18,
      imageRef.current,
      crop,
      "newFile.jpeg"
    );
    setCropFullSizePreview(resizedFullPreview);
    setCropThumbSizePreview(resizedThumbPreview);
    setCropTinySizePreview(resizedTinyPreview);
    setFullRecipeImage(resizedFullFinal);
    setThumbRecipeImage(resizedThumbFinal);
    setTinyRecipeImage(resizedTinyFinal);
  };

  const makeClientEquipmentCrops = async (crop) => {
    if (!equipmentImageRef) return;
    if (!crop.width) return;
    const { resizedFullPreview, resizedFullFinal } = await getCroppedImage(
      280,
      172,
      equipmentImageRef.current,
      crop,
      "newFile.jpeg"
    );
    setEquipmentCropFullSizePreview(resizedFullPreview);
    setFullRecipeEquipmentImage(resizedFullFinal);
  };

  const makeClientIngredientsCrops = async (crop) => {
    if (!ingredientsImageRef) return;
    if (!crop.width) return;
    const { resizedFullPreview, resizedFullFinal } = await getCroppedImage(
      280,
      172,
      ingredientsImageRef.current,
      crop,
      "newFile.jpeg"
    );
    setIngredientsCropFullSizePreview(resizedFullPreview);
    setFullRecipeIngredientsImage(resizedFullFinal);
  };

  const makeClientCookingCrops = async (crop) => {
    if (!cookingImageRef) return;
    if (!crop.width) return;
    const { resizedFullPreview, resizedFullFinal } = await getCroppedImage(
      280,
      172,
      cookingImageRef.current,
      crop,
      "newFile.jpeg"
    );
    setCookingCropFullSizePreview(resizedFullPreview);
    setFullRecipeCookingImage(resizedFullFinal);
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
    setRecipeEquipmentImage(null);
    setFullRecipeEquipmentImage(null);
  };

  const cancelRecipeIngredientsImage = () => {
    setIngredientsCropFullSizePreview(null);
    setRecipeIngredientsImage(null);
    setFullRecipeIngredientsImage(null);
  };

  const cancelRecipeCookingImage = () => {
    setCookingCropFullSizePreview(null);
    setRecipeCookingImage(null);
    setFullRecipeCookingImage(null);
  };
  
  const getCheckedMethods = () => {
    let checkedMethods = [];
    Object.entries(methods).forEach(([key, value]) => {
      if (value === true) checkedMethods.push({methodId: Number(key)});
    });
    if (checkedMethods.length) return checkedMethods;
    checkedMethods = "none";
    return checkedMethods;
  };

  const getRequiredEquipment = () => {
    if (!equipmentRows.length) return "none";
    let requiredEquipment = [];
    equipmentRows.map(eR => {
      requiredEquipment.push({
        amount: Number(eR.amount),
        equipment: Number(eR.equipment)
      });
    });
    return requiredEquipment;
  };

  const getRequiredIngredients = () => {
    if (!ingredientRows.length) return "none";
    let requiredIngredients = [];
    ingredientRows.map(iR => {
      requiredIngredients.push({
        amount: Number(iR.amount),
        unit: Number(iR.unit),
        ingredient: Number(iR.ingredient)
      });
    });
    return requiredIngredients;
  };

  const getRequiredSubrecipes = () => {
    if (subrecipeRows.length) return "none";
    let requiredSubrecipes = [];
    subrecipeRows.map(sR => {
      requiredSubrecipes.push({
        amount: Number(sR.amount),
        unit: Number(sR.unit),
        subrecipe: Number(sR.subrecipe)
      });
    });
    return requiredSubrecipes;
  };

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
      recipeIngredientsImage,
      fullRecipeIngredientsImage,
      recipeCookingImage,
      fullRecipeCookingImage
    };

    if (
      !valid(
        ownership,
        recipeTypeId,
        cuisineId,
        title,
        description,
        methods,
        equipmentRows,
        ingredientRows,
        subrecipeRows,
        directions,
        setFeedback
      )
    ) {
      return;
    }

    if (editing) {
      recipeInfo.recipeId = editingId;  // change?
      recipeInfo.prevRecipeImage = prevRecipeImage;
      recipeInfo.prevEquipmentImage = prevEquipmentImage;
      recipeInfo.prevIngredientsImage = prevIngredientsImage;
      recipeInfo.prevCookingImage = prevCookingImage;
    }

    setLoading(true);  // move up one?

    if (editing) {
      if (ownership === "private") userEditPrivateRecipe(recipeInfo);
      else if (ownership === "public") userEditPublicRecipe(recipeInfo);
    } else {
      if (ownership === "private") userCreateNewPrivateRecipe(recipeInfo);
      else if (ownership === "public") userCreateNewPublicRecipe(recipeInfo);
    }
  };

  return (
    <UserSubmitRecipeView
      match={match}
      oneColumnATheme={oneColumnATheme}
      authname={authname}
      feedback={feedback}
      loading={loading}
    
      editing={editing}
      ownership={ownership}
      recipeTypeId={recipeTypeId}
      cuisineId={cuisineId}
      title={title}
      description={description}
      directions={directions}
      methods={methods}
      equipmentRows={equipmentRows}
      ingredientRows={ingredientRows}
      subrecipeRows={subrecipeRows}
    
      prevRecipeImage={prevRecipeImage}
      prevEquipmentImage={prevEquipmentImage}
      prevIngredientsImage={prevIngredientsImage}
      prevCookingImage={prevCookingImage}
    
      dataRecipeTypes={dataRecipeTypes}
      dataCuisines={dataCuisines}
      dataMethods={dataMethods}
      dataEquipment={dataEquipment}
      dataMyPrivateEquipment={dataMyPrivateEquipment}
      dataMeasurements={dataMeasurements}
      dataIngredientTypes={dataIngredientTypes}
      dataIngredients={dataIngredients}
      dataMyPrivateIngredients={dataMyPrivateIngredients}
      dataRecipeTypes={dataRecipeTypes}
      dataRecipes={dataRecipes}
      dataMyPrivateRecipes={dataMyPrivateRecipes}
      dataMyPublicRecipes={dataMyPublicRecipes}
      dataMyFavoriteRecipes={dataMyFavoriteRecipes}
      dataMySavedRecipes={dataMySavedRecipes}
    
      recipeImage={recipeImage}
      recipeEquipmentImage={recipeEquipmentImage}
      recipeIngredientsImage={recipeIngredientsImage}
      recipeCookingImage={recipeCookingImage}
      cropOne={cropOne}
      cropFullSizePreview={cropFullSizePreview}
      cropThumbSizePreview={cropThumbSizePreview}
      cropTinySizePreview={cropTinySizePreview}
      cropTwo={cropTwo}
      equipmentCropFullSizePreview={equipmentCropFullSizePreview}
      cropThree={cropThree}
      ingredientsCropFullSizePreview={ingredientsCropFullSizePreview}
      cropFour={cropFour}
      cookingCropFullSizePreview={cookingCropFullSizePreview}
    
      handleRecipeTypeChange={handleRecipeTypeChange}
      handleCuisineChange={handleCuisineChange}
      handleTitleChange={handleTitleChange}
      handleDescriptionChange={handleDescriptionChange}
      handleDirectionsChange={handleDirectionsChange}
      handleMethodsChange={handleMethodsChange}
    
      handleEquipmentRowChange={handleEquipmentRowChange}
      handleIngredientRowChange={handleIngredientRowChange}
      handleSubrecipeRowChange={handleSubrecipeRowChange}
      addEquipmentRow={addEquipmentRow}
      removeEquipmentRow={removeEquipmentRow}
      addIngredientRow={addIngredientRow}
      removeIngredientRow={removeIngredientRow}
      addSubrecipeRow={addSubrecipeRow}
      removeSubrecipeRow={removeSubrecipeRow}
    
      onSelectFile={onSelectFile}
      onSelectEquipmentFile={onSelectEquipmentFile}
      onSelectIngredientsFile={onSelectIngredientsFile}
      onSelectCookingFile={onSelectCookingFile}
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
      cancelRecipeImage={cancelRecipeImage}
      cancelRecipeEquipmentImage={cancelRecipeEquipmentImage}
      cancelRecipeIngredientsImage={cancelRecipeIngredientsImage}
      cancelRecipeCookingImage={cancelRecipeCookingImage}
    
      handleSubmit={handleSubmit}
    />
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
  userCreateNewPrivateRecipe: (recipeInfo) =>
    dispatch(userCreateNewPrivateRecipe(recipeInfo)),
  userCreateNewPublicRecipe: (recipeInfo) =>
    dispatch(userCreateNewPublicRecipe(recipeInfo)),
  userEditPrivateRecipe: (recipeInfo) =>
    dispatch(userEditPrivateRecipe(recipeInfo)),
  userEditPublicRecipe: (recipeInfo) =>
    dispatch(userEditPublicRecipe(recipeInfo))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserSubmitRecipe)
);