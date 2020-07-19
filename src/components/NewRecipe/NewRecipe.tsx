import React, { useEffect, useRef, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Crop } from 'react-image-crop';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

import {
  NOBSCBackendAPIEndpointOne
} from '../../config/NOBSCBackendAPIEndpointOne';
import {
  IMeasurement,
  IEquipment,
  IIngredient,
  IIngredientType,
  IWorkRecipe,
  IRecipeType,
  ICuisine,
  IMethod
} from '../../store/data/types';
import {
  ICreatingRecipeInfo,
  IEditingRecipeInfo,
  IRequiredMethod,
  IRequiredEquipment,
  IRequiredIngredient,
  IRequiredSubrecipe
} from '../../store/user/recipe/types';  // ?
import {
  staffCreateNewRecipe,
  staffEditRecipe,
} from '../../store/staff/recipe/actions';
import {
  userCreateNewPrivateRecipe,
  userCreateNewPublicRecipe,
  userEditPrivateRecipe,
  userEditPublicRecipe
} from '../../store/user/recipe/actions';
import {
  getCroppedImage
} from '../../utils/imageCropPreviews/imageCropPreviews';
import { validRecipeInfo } from './validation/validRecipeInfo';
import { NewRecipeView } from './NewRecipeView';

const endpoint = NOBSCBackendAPIEndpointOne;

export function NewRecipe({
  oneColumnATheme,
  staffIsAuthenticated,
  editing,
  ownership,
  authname,
  staffMessage,
  userMessage,
  dataMeasurements,
  dataEquipment,
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
  staffCreateNewRecipe,
  staffEditRecipe,
  userCreateNewPrivateRecipe,
  userCreateNewPublicRecipe,
  userEditPrivateRecipe,
  userEditPublicRecipe
}: Props): JSX.Element {
  const history = useHistory();
  const { id } = useParams();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);

  const [ editingId, setEditingId ] = useState<number>(0);  // |null ?
  const [ recipeTypeId, setRecipeTypeId ] = useState<number>(0);
  const [ cuisineId, setCuisineId ] = useState<number>(0);
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ directions, setDirections ] = useState("");
  const [ methods, setMethods ] = useState<IMethods>({
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
  const [ equipmentRows, setEquipmentRows ] = useState<IEquipmentRow[]>([
    {key: uuid(), amount: "", type: "", equipment: ""},
    {key: uuid(), amount: "", type: "", equipment: ""},
    {key: uuid(), amount: "", type: "", equipment: ""},
  ]);
  const [ ingredientRows, setIngredientRows ] = useState<IIngredientRow[]>([
    {key: uuid(), amount: 1, unit: "", type: "", ingredient: ""},
    {key: uuid(), amount: 1, unit: "", type: "", ingredient: ""},
    {key: uuid(), amount: 1, unit: "", type: "", ingredient: ""},
  ]);
  const [ subrecipeRows, setSubrecipeRows ] = useState<ISubrecipeRow[]>([]);
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

  const [ cropOne, setCropOne ] = useState<Crop>({
    aspect: 280 / 172
  });
  const [ cropFullSizePreview, setCropFullSizePreview ] = useState("");
  const [ cropThumbSizePreview, setCropThumbSizePreview ] = useState("");
  const [ cropTinySizePreview, setCropTinySizePreview ] = useState("");
  const [
    recipeImage,
    setRecipeImage
  ] = useState<string | ArrayBuffer | null>(null);
  const [ fullRecipeImage, setFullRecipeImage ] = useState<File | null>(null);
  const [ thumbRecipeImage, setThumbRecipeImage ] = useState<File | null>(null);
  const [ tinyRecipeImage, setTinyRecipeImage ] = useState<File | null>(null);

  const [ cropTwo, setCropTwo ] = useState<Crop>({
    aspect: 280 / 172
  });
  const [
    equipmentCropFullSizePreview,
    setEquipmentCropFullSizePreview
  ] = useState("");
  const [
    recipeEquipmentImage,
    setRecipeEquipmentImage
  ] = useState<string | ArrayBuffer | null>(null);
  const [
    fullRecipeEquipmentImage,
    setFullRecipeEquipmentImage
  ] = useState<File | null>(null);

  const [ cropThree, setCropThree ] = useState<Crop>({
    aspect: 280 / 172
  });
  const [
    ingredientsCropFullSizePreview,
    setIngredientsCropFullSizePreview
  ] = useState("");
  const [
    recipeIngredientsImage,
    setRecipeIngredientsImage
  ] = useState<string | ArrayBuffer | null>(null);
  const [
    fullRecipeIngredientsImage,
    setFullRecipeIngredientsImage
  ] = useState<File | null>(null);

  const [ cropFour, setCropFour ] = useState<Crop>({
    aspect: 280 / 172
  });
  const [
    cookingCropFullSizePreview,
    setCookingCropFullSizePreview
  ] = useState("");
  const [
    recipeCookingImage,
    setRecipeCookingImage
  ] = useState<string | ArrayBuffer | null>(null);
  const [
    fullRecipeCookingImage,
    setFullRecipeCookingImage
  ] = useState<File | null>(null);

  const imageRef = useRef<HTMLImageElement>();
  const equipmentImageRef = useRef<HTMLImageElement>();
  const ingredientsImageRef = useRef<HTMLImageElement>();
  const cookingImageRef = useRef<HTMLImageElement>();

  useEffect(() => {
    const getExistingRecipeToEdit = async () => {
      if (!id || (!staffIsAuthenticated && !ownership)) {
        history.push('/dashboard');
        return;
      }

      window.scrollTo(0,0);
      setLoading(true);

      const url = staffIsAuthenticated
      ? `${endpoint}/staff/recipe/edit`
      : `${endpoint}/user/recipe/edit/${ownership}`;

      const res = await axios.post(
        url,
        {recipeId: id},
        {withCredentials: true}
      );

      const recipe: IExistingRecipeToEdit = res.data.recipe;
      const redirectPath = staffIsAuthenticated
      ? '/staff-dashboard'
      : '/dashboard';

      if (!recipe) {
        history.push(redirectPath);
        return;
      }

      setEditingId(recipe.recipe_id);
      setRecipeTypeId(recipe.recipe_type_id);
      setCuisineId(recipe.cuisine_id);
      setTitle(recipe.title);
      setDescription(recipe.description);
      setDirections(recipe.directions);

      let methodsToSet: number[] = [];
      let equipmentToSet: IEquipmentRow[] = [];
      let ingredientsToSet: IIngredientRow[] = [];
      let subrecipesToSet: ISubrecipeRow[] = [];

      recipe.required_methods.length &&
      recipe.required_methods.map(met => methodsToSet.push(met.method_id));

      recipe.required_equipment.length &&
      recipe.required_equipment.map(equ => equipmentToSet.push({
        key: uuid(),
        amount: equ.amount,
        type: equ.equipment_type_id,
        equipment: equ.equipment_id
      }));

      recipe.required_ingredients.length &&
      recipe.required_ingredients.map(ing => ingredientsToSet.push({
        key: uuid(),
        amount: ing.amount,
        unit: ing.measurement_id,
        type: ing.ingredient_type_id,
        ingredient: ing.ingredient_id
      }));

      recipe.required_subrecipes.length &&
      recipe.required_subrecipes.map(sub => subrecipesToSet.push({
        key: uuid(),
        amount: sub.amount,
        unit: sub.measurement_id,
        type: sub.recipe_type_id,
        cuisine: sub.cuisine_id,
        subrecipe: sub.subrecipe_id
      }))

      setMethods(prevState => {
        const nextState = {...prevState};
        methodsToSet.map(method => {
          nextState[method] = true;
        });
        return nextState;
      });
      setEquipmentRows(equipmentToSet);
      setIngredientRows(ingredientsToSet);
      setSubrecipeRows(subrecipesToSet);

      setPrevRecipeImage(recipe.recipe_image);
      setPrevEquipmentImage(recipe.equipment_image);
      setPrevIngredientsImage(recipe.ingredients_image);
      setPrevCookingImage(recipe.cooking_image);

      setLoading(false);
    };
    
    if (editing) getExistingRecipeToEdit();
  }, []);

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      const message = staffIsAuthenticated ? staffMessage : userMessage;
      const redirectPath = staffIsAuthenticated
      ? '/staff-dashboard'
      : '/dashboard';

      if (message !== "") window.scrollTo(0,0);

      setFeedback(message);

      if (
        message === "Recipe created." ||
        message === "Recipe updated."
      ) {
        setTimeout(() => history.push(redirectPath), 3000);
      }

      setLoading(false);  // move?
    }

    return () => {
      isSubscribed = false;
    };
  }, [staffMessage, userMessage]);

  const handleRecipeTypeChange = (e: React.SyntheticEvent<EventTarget>) => {
    setRecipeTypeId(Number((e.target as HTMLInputElement).value));
  };

  const handleCuisineChange = (e: React.SyntheticEvent<EventTarget>) => {
    setCuisineId(Number((e.target as HTMLInputElement).value));
  };

  const handleTitleChange = (e: React.SyntheticEvent<EventTarget>) => {
    setTitle((e.target as HTMLInputElement).value);
  };

  const handleDescriptionChange = (e: React.SyntheticEvent<EventTarget>) => {
    setDescription((e.target as HTMLInputElement).value);
  };

  const handleDirectionsChange = (e: React.SyntheticEvent<EventTarget>) => {
    setDirections((e.target as HTMLInputElement).value);
  };

  const handleMethodsChange = (e: React.SyntheticEvent<EventTarget>) => {
    const id = (e.target as HTMLInputElement).id;
    setMethods(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const handleEquipmentRowChange = (
    e: React.SyntheticEvent<EventTarget>,
    rowKey: string
  ) => {
    const newEquipmentRows = Array.from(equipmentRows);
    const elToUpdate = newEquipmentRows.findIndex(el => el.key === rowKey);
    const targetName = (e.target as HTMLInputElement).name;
    const targetValue = (e.target as HTMLInputElement).value;
    newEquipmentRows[elToUpdate][targetName] = targetValue;
    setEquipmentRows(newEquipmentRows);
  };

  const handleIngredientRowChange = (
    e: React.SyntheticEvent<EventTarget>,
    rowKey: string
  ) => {
    const newIngredientRows = Array.from(ingredientRows);
    const elToUpdate = newIngredientRows.findIndex(el => el.key === rowKey);
    const targetName = (e.target as HTMLInputElement).name;
    const targetValue = (e.target as HTMLInputElement).value;
    newIngredientRows[elToUpdate][targetName] = targetValue;
    setIngredientRows(newIngredientRows);
  };

  const handleSubrecipeRowChange = (
    e: React.SyntheticEvent<EventTarget>,
    rowKey: string
  ) => {
    const newSubrecipeRows = Array.from(subrecipeRows);
    const elToUpdate = newSubrecipeRows.findIndex(el => el.key === rowKey);
    const targetName = (e.target as HTMLInputElement).name;
    const targetValue = (e.target as HTMLInputElement).value;
    newSubrecipeRows[elToUpdate][targetName] = targetValue;
    setSubrecipeRows(newSubrecipeRows);
  };

  const addEquipmentRow = () => {
    const newEquipmentRows = equipmentRows.concat({
      key: uuid(),
      amount: "",
      type: "",
      equipment: ""
    });
    setEquipmentRows(newEquipmentRows);
  };

  const removeEquipmentRow = (rowKey: string) => {
    const newEquipmentRows = equipmentRows.filter(row => row.key !== rowKey);
    setEquipmentRows(newEquipmentRows);
  };

  const addIngredientRow = () => {
    const newIngredientRows = ingredientRows.concat({
      key: uuid(),
      amount: "",
      unit: "",
      type: "",
      ingredient: ""
    });
    setIngredientRows(newIngredientRows);
  };

  const removeIngredientRow = (rowKey: string) => {
    const newIngredientRows = ingredientRows.filter(row => row.key !== rowKey);
    setIngredientRows(newIngredientRows);
  };

  const addSubrecipeRow = () => {
    const newSubrecipeRows = subrecipeRows.concat({
      key: uuid(),
      amount: "",
      unit: "",
      type: "",
      cuisine: "",
      subrecipe: ""
    });
    setSubrecipeRows(newSubrecipeRows);
  };

  const removeSubrecipeRow = (rowKey: string) => {
    const newSubrecipeRows = subrecipeRows.filter(row => row.key !== rowKey);
    setSubrecipeRows(newSubrecipeRows);
  };

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (!(target.files && target.files.length > 0)) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => setRecipeImage(reader.result));
    reader.readAsDataURL(target.files[0]);
  };

  const onSelectEquipmentFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (!(target.files && target.files.length > 0)) return;
    const reader = new FileReader();
    reader
    .addEventListener("load", () => setRecipeEquipmentImage(reader.result));
    reader.readAsDataURL(target.files[0]);
  };

  const onSelectIngredientsFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (!(target.files && target.files.length > 0)) return;
    const reader = new FileReader();
    reader
    .addEventListener("load", () => setRecipeIngredientsImage(reader.result));
    reader.readAsDataURL(target.files[0]);
  };

  const onSelectCookingFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (!(target.files && target.files.length > 0)) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => setRecipeCookingImage(reader.result));
    reader.readAsDataURL(target.files[0]);
  };

  const onImageLoaded = (image: HTMLImageElement) => imageRef.current = image;

  const onEquipmentImageLoaded = (image: HTMLImageElement) =>
    equipmentImageRef.current = image;

  const onIngredientsImageLoaded = (image: HTMLImageElement) =>
    ingredientsImageRef.current = image;

  const onCookingImageLoaded = (image: HTMLImageElement) =>
    cookingImageRef.current = image;

  const onCropOneChange = (crop: Crop) => setCropOne(crop);

  const onCropTwoChange = (crop: Crop) => setCropTwo(crop);

  const onCropThreeChange = (crop: Crop) => setCropThree(crop);

  const onCropFourChange = (crop: Crop) => setCropFour(crop);

  const onCropComplete = (crop: Crop) => makeClientCrops(crop);

  const onEquipmentCropComplete = (crop: Crop) =>
    makeClientEquipmentCrops(crop);

  const onIngredientsCropComplete = (crop: Crop) =>
    makeClientIngredientsCrops(crop);

  const onCookingCropComplete = (crop: Crop) => makeClientCookingCrops(crop);

  const makeClientCrops = async (crop: Crop) => {
    if (!imageRef || !imageRef.current) return;
    if (!crop.width) return;
    const full = await getCroppedImage(
      280, 172, imageRef.current, crop, "newFile.jpeg"
    );
    const thumb = await getCroppedImage(
      100, 62, imageRef.current, crop, "newFile.jpeg"
    );
    const tiny = await getCroppedImage(
      28, 18, imageRef.current, crop, "newFile.jpeg"
    );
    if (!full || !thumb || !tiny) return;
    setCropFullSizePreview(full.resizedPreview);
    setCropThumbSizePreview(thumb.resizedPreview);
    setCropTinySizePreview(tiny.resizedPreview);
    setFullRecipeImage(full.resizedFinal);
    setThumbRecipeImage(thumb.resizedFinal);
    setTinyRecipeImage(tiny.resizedFinal);
  };

  const makeClientEquipmentCrops = async (crop: Crop) => {
    if (!equipmentImageRef || !equipmentImageRef.current) return;
    if (!crop.width) return;
    const full = await getCroppedImage(
      280, 172, equipmentImageRef.current, crop, "newFile.jpeg"
    );
    if (!full) return;
    setEquipmentCropFullSizePreview(full.resizedPreview);
    setFullRecipeEquipmentImage(full.resizedFinal);
  };

  const makeClientIngredientsCrops = async (crop: Crop) => {
    if (!ingredientsImageRef || !ingredientsImageRef.current) return;
    if (!crop.width) return;
    const full = await getCroppedImage(
      280, 172, ingredientsImageRef.current, crop, "newFile.jpeg"
    );
    if (!full) return;
    setIngredientsCropFullSizePreview(full.resizedPreview);
    setFullRecipeIngredientsImage(full.resizedFinal);
  };

  const makeClientCookingCrops = async (crop: Crop) => {
    if (!cookingImageRef || !cookingImageRef.current) return;
    if (!crop.width) return;
    const full = await getCroppedImage(
      280, 172, cookingImageRef.current, crop, "newFile.jpeg"
    );
    if (!full) return;
    setCookingCropFullSizePreview(full.resizedPreview);
    setFullRecipeCookingImage(full.resizedFinal);
  };

  const cancelRecipeImage = () => {
    setCropFullSizePreview("");
    setCropThumbSizePreview("");
    setCropTinySizePreview("");
    setRecipeImage(null);
    setFullRecipeImage(null);
    setThumbRecipeImage(null);
    setTinyRecipeImage(null);
  };

  const cancelRecipeEquipmentImage = () => {
    setEquipmentCropFullSizePreview("");
    setRecipeEquipmentImage(null);
    setFullRecipeEquipmentImage(null);
  };

  const cancelRecipeIngredientsImage = () => {
    setIngredientsCropFullSizePreview("");
    setRecipeIngredientsImage(null);
    setFullRecipeIngredientsImage(null);
  };

  const cancelRecipeCookingImage = () => {
    setCookingCropFullSizePreview("");
    setRecipeCookingImage(null);
    setFullRecipeCookingImage(null);
  };
  
  const getCheckedMethods = () => {
    let checkedMethods: IRequiredMethod[] = [];
    Object.entries(methods).forEach(([key, value]) => {
      if (value === true) checkedMethods.push({methodId: Number(key)});
    });
    return checkedMethods;
  };

  const getRequiredEquipment = () => {
    if (!equipmentRows.length) return [];
    let requiredEquipment: IRequiredEquipment[] = [];
    equipmentRows.map(eR => {
      requiredEquipment.push({
        amount: Number(eR.amount),
        equipment: Number(eR.equipment)
      });
    });
    return requiredEquipment;
  };

  const getRequiredIngredients = () => {
    if (!ingredientRows.length) return [];
    let requiredIngredients: IRequiredIngredient[] = [];
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
    if (subrecipeRows.length) return [];
    let requiredSubrecipes: IRequiredSubrecipe[] = [];
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
    if (
      !validRecipeInfo({
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
      })
    ) {
      return;
    }

    setLoading(true);

    if (editing && editingId) {

      const recipeInfo: IEditingRecipeInfo = {
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
        fullRecipeCookingImage,
        recipeId: editingId,  // change?
        prevRecipeImage,
        prevEquipmentImage,
        prevIngredientsImage,
        prevCookingImage
      };

      if (staffIsAuthenticated) {
        staffEditRecipe(recipeInfo);
      } else {
        if (ownership === "private") userEditPrivateRecipe(recipeInfo);
        else if (ownership === "public") userEditPublicRecipe(recipeInfo);
      }

    } else {

      const recipeInfo: ICreatingRecipeInfo = {
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

      if (staffIsAuthenticated) {
        staffCreateNewRecipe(recipeInfo);
      } else {
        if (ownership === "private") userCreateNewPrivateRecipe(recipeInfo);
        else if (ownership === "public") userCreateNewPublicRecipe(recipeInfo);
      }
      
    }
  };

  return (
    <NewRecipeView
      id={editingId}
      oneColumnATheme={oneColumnATheme}
      staffIsAuthenticated={staffIsAuthenticated}
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

interface RootState {
  auth: {
    authname: string;
    staffIsAuthenticated: boolean;
  };
  staff: {
    message: string;
  };
  user: {
    message: string;
  };
  data: {
    measurements: IMeasurement[];
    equipment: IEquipment[];
    ingredients: IIngredient[];
    ingredientTypes: IIngredientType[];
    recipes: IWorkRecipe[];
    recipeTypes: IRecipeType[];
    cuisines: ICuisine[];
    methods: IMethod[];
    myPublicRecipes: IWorkRecipe[];
    myPrivateEquipment: IEquipment[];
    myPrivateIngredients: IIngredient[];
    myPrivateRecipes: IWorkRecipe[];
    myFavoriteRecipes: IWorkRecipe[];
    mySavedRecipes: IWorkRecipe[];
  };
}

export interface IExistingRecipeToEdit {
  recipe_id: number;
  recipe_type_id: number;
  cuisine_id: number;
  owner_id: number;
  title: string;
  description: string;
  directions: string;
  required_methods: IExistingRequiredMethod[];
  required_equipment: IExistingRequiredEquipment[];
  required_ingredients: IExistingRequiredIngredient[];
  required_subrecipes: IExistingRequiredSubrecipe[];
  recipe_image: string;
  equipment_image: string;
  ingredients_image: string;
  cooking_image: string;
}

export interface IExistingRequiredMethod {
  method_id: number;
}

export interface IExistingRequiredEquipment {
  amount: number;
  equipment_type_id: number;
  equipment_id: number;
}

export interface IExistingRequiredIngredient {
  amount: number;
  measurement_id: number;
  ingredient_type_id: number;
  ingredient_id: number;
}

export interface IExistingRequiredSubrecipe {
  amount: number;
  measurement_id: number;
  recipe_type_id: number;
  cuisine_id: number;
  subrecipe_id: number;
}

export interface IMethods {
  [index: string]: any;
  1: boolean;
  2: boolean;
  3: boolean;
  4: boolean;
  5: boolean;
  6: boolean;
  7: boolean;
  8: boolean;
  9: boolean;
  10: boolean;
  11: boolean;
  12: boolean;
  13: boolean;
  14: boolean;
  15: boolean;
  16: boolean;
  17: boolean;
  18: boolean;
  19: boolean;
  20: boolean;
  21: boolean;
  22: boolean;
  23: boolean;
  24: boolean;
}

export interface IEquipmentRow {
  [index: string]: any;
  key: string;
  amount: string|number;
  type: string|number;
  equipment: string|number;
}

export interface IIngredientRow {
  [index: string]: any;
  key: string;
  amount: string|number;
  unit: string|number;
  type: string|number;
  ingredient: string|number;
}

export interface ISubrecipeRow {
  [index: string]: any;
  key: string;
  amount: string|number;
  unit: string|number;
  type: string|number;
  cuisine: string|number;
  subrecipe: string|number;
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  oneColumnATheme: string;
  editing: boolean;
  ownership: string;
};

const mapStateToProps = (state: RootState) => ({
  staffIsAuthenticated: state.auth.staffIsAuthenticated,
  authname: state.auth.authname,
  staffMessage: state.staff.message,
  userMessage: state.user.message,
  dataMeasurements: state.data.measurements,
  dataEquipment: state.data.equipment,
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

const mapDispatchToProps = {
  staffCreateNewRecipe: (recipeInfo: ICreatingRecipeInfo) =>
    staffCreateNewRecipe(recipeInfo),
  staffEditRecipe: (recipeInfo: IEditingRecipeInfo) =>
    staffEditRecipe(recipeInfo),
  userCreateNewPrivateRecipe: (recipeInfo: ICreatingRecipeInfo) =>
    userCreateNewPrivateRecipe(recipeInfo),
  userCreateNewPublicRecipe: (recipeInfo: ICreatingRecipeInfo) =>
    userCreateNewPublicRecipe(recipeInfo),
  userEditPrivateRecipe: (recipeInfo: IEditingRecipeInfo) =>
    userEditPrivateRecipe(recipeInfo),
  userEditPublicRecipe: (recipeInfo: IEditingRecipeInfo) =>
    userEditPublicRecipe(recipeInfo)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NewRecipe);