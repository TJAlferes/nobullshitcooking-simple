import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Crop } from 'react-image-crop';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import {
  NOBSCBackendAPIEndpointOne
} from '../../config/NOBSCBackendAPIEndpointOne';
import {
  ICuisine,
  IEquipment,
  IIngredient,
  IIngredientType,
  IMeasurement,
  IMethod,
  IRecipeType,
  IWorkRecipe,
} from '../../store/data/types';
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
  ICreatingRecipeInfo,
  IEditingRecipeInfo,
  IRequiredMethod,
  IRequiredEquipment,
  IRequiredIngredient,
  IRequiredSubrecipe
} from '../../store/user/recipe/types';  // ?
import {
  getCroppedImage
} from '../../utils/imageCropPreviews/imageCropPreviews';
import { validRecipeInfo } from './validation/validRecipeInfo';
import { NewRecipeView } from './NewRecipeView';

const endpoint = NOBSCBackendAPIEndpointOne;

export function NewRecipe({
  authname,
  dataCuisines,
  dataEquipment,
  dataIngredients,
  dataIngredientTypes,
  dataMeasurements,
  dataMethods,
  dataMyFavoriteRecipes,
  dataMyPrivateEquipment,
  dataMyPrivateIngredients,
  dataMyPrivateRecipes,
  dataMyPublicRecipes,
  dataMySavedRecipes,
  dataRecipes,
  dataRecipeTypes,
  editing,
  oneColumnATheme,
  ownership,
  staffCreateNewRecipe,
  staffEditRecipe,
  staffIsAuthenticated,
  staffMessage,
  userCreateNewPrivateRecipe,
  userCreateNewPublicRecipe,
  userEditPrivateRecipe,
  userEditPublicRecipe,
  userMessage
}: Props): JSX.Element {
  const history = useHistory();
  const { id } = useParams();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);

  /*

  recipeInfo

  */

  const [ editingId, setEditingId ] = useState<number>(0);  // |null ?
  const [ recipeTypeId, setRecipeTypeId ] = useState<number>(0);
  const [ cuisineId, setCuisineId ] = useState<number>(0);
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ directions, setDirections ] = useState("");
  const [ methods, setMethods ] = useState<IMethods>({
     1: false,  2: false,  3: false,  4: false,  5: false,  6: false,
     7: false,  8: false,  9: false, 10: false, 11: false, 12: false,
    13: false, 14: false, 15: false, 16: false, 17: false, 18: false,
    19: false, 20: false, 21: false, 22: false, 23: false, 24: false
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

  const [ recipePrevImage, setRecipePrevImage ] =
    useState("nobsc-recipe-default");
  const [ recipeImage, setRecipeImage ] =
    useState<string | ArrayBuffer | null>(null);
  const [ recipeFullImage, setRecipeFullImage ] = useState<File | null>(null);
  const [ recipeThumbImage, setRecipeThumbImage ] = useState<File | null>(null);
  const [ recipeTinyImage, setRecipeTinyImage ] = useState<File | null>(null);

  const [ equipmentPrevImage, setEquipmentPrevImage ] =
    useState("nobsc-recipe-equipment-default");
  const [ equipmentImage, setEquipmentImage ] =
    useState<string | ArrayBuffer | null>(null);
  const [ equipmentFullImage, setEquipmentFullImage ] =
    useState<File | null>(null);

  const [ ingredientsPrevImage, setIngredientsPrevImage ] =
    useState("nobsc-recipe-ingredients-default");
  const [ ingredientsImage, setIngredientsImage ] =
    useState<string | ArrayBuffer | null>(null);
  const [ ingredientsFullImage, setIngredientsFullImage ] =
    useState<File | null>(null);

  const [ cookingPrevImage, setCookingPrevImage ] =
    useState("nobsc-recipe-cooking-default");
  const [ cookingImage, setCookingImage ] =
    useState<string | ArrayBuffer | null>(null);
  const [ cookingFullImage, setCookingFullImage ] = useState<File | null>(null);

  /*

  crops

  */

  const [ recipeCrop, setRecipeCrop ] = useState<Crop>({aspect: 280 / 172});
  const [ recipeFullCrop, setRecipeFullCrop ] = useState("");
  const [ recipeThumbCrop, setRecipeThumbCrop ] = useState("");
  const [ recipeTinyCrop, setRecipeTinyCrop ] = useState("");

  const [ equipmentCrop, setEquipmentCrop ] =
    useState<Crop>({aspect: 280 / 172});
  const [ equipmentFullCrop, setEquipmentFullCrop ] = useState("");

  const [ ingredientsCrop, setIngredientsCrop ] =
    useState<Crop>({aspect: 280 / 172});
  const [ ingredientsFullCrop, setIngredientsFullCrop ] = useState("");

  const [ cookingCrop, setCookingCrop ] = useState<Crop>({aspect: 280 / 172});
  const [ cookingFullCrop, setCookingFullCrop ] = useState("");

  //

  const recipeImageRef = useRef<HTMLImageElement>();
  const equipmentImageRef = useRef<HTMLImageElement>();
  const ingredientsImageRef = useRef<HTMLImageElement>();
  const cookingImageRef = useRef<HTMLImageElement>();

  useEffect(() => {
    const getExistingRecipeToEdit = async () => {
      if (!id || (!staffIsAuthenticated && !ownership)) {  // change this
        history.push('/dashboard');
        return;
      }

      setLoading(true);
      window.scrollTo(0,0);

      const url = staffIsAuthenticated
        ? `${endpoint}/staff/recipe/edit`
        : `${endpoint}/user/recipe/edit/${ownership}`;
      const res =
        await axios.post(url, {recipeId: id}, {withCredentials: true});

      const recipe: IExistingRecipeToEdit = res.data.recipe;
      if (!recipe) {
        const redirectPath = staffIsAuthenticated
          ? '/staff-dashboard' : '/dashboard';
        history.push(redirectPath);
        return;
      }

      const {
        recipe_id,
        recipe_type_id,
        cuisine_id,
        title,
        description,
        directions,
        required_equipment,
        required_ingredients,
        required_methods,
        required_subrecipes,
        recipe_image,
        equipment_image,
        ingredients_image,
        cooking_image
      } = recipe;

      setEditingId(recipe_id);
      setRecipeTypeId(recipe_type_id);
      setCuisineId(cuisine_id);
      setTitle(title);
      setDescription(description);
      setDirections(directions);
      //

      let methodsToSet: number[] = [];

      recipe.required_methods.length &&
      recipe.required_methods.map(m => methodsToSet.push(m.method_id));
      
      setMethods(prevState => {
        const nextState = {...prevState};

        methodsToSet.map(method => {
          nextState[method] = true;
        });

        return nextState;
      });

      //
      setRequiredEquipment(recipe.required_equipment);
      setRequiredIngredients(recipe.required_ingredients);
      setRequiredSubrecipes(recipe.required_subrecipes);
      setRecipePrevImage(recipe_image);
      setEquipmentPrevImage(equipment_image);
      setIngredientsPrevImage(ingredients_image);
      setCookingPrevImage(cooking_image);

      setLoading(false);
    };
    
    if (editing) getExistingRecipeToEdit();
  }, []);

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      const message = staffIsAuthenticated ? staffMessage : userMessage;
      const redirectPath = staffIsAuthenticated
        ? '/staff-dashboard' : '/dashboard';

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

  const addEquipmentRow = () => {
    const newEquipmentRows = equipmentRows
      .concat({key: uuid(), amount: "", type: "", equipment: ""});
    setEquipmentRows(newEquipmentRows);
  };

  const addIngredientRow = () => {
    const newIngredientRows = ingredientRows
      .concat({key: uuid(), amount: "", unit: "", type: "", ingredient: ""});
    setIngredientRows(newIngredientRows);
  };

  const addSubrecipeRow = () => {
    const newSubrecipeRows = subrecipeRows.concat({
      key: uuid(), amount: "", unit: "", type: "", cuisine: "", subrecipe: ""
    });
    setSubrecipeRows(newSubrecipeRows);
  };

  const cancelCookingImage = () => {
    setCookingFullCrop("");
    setCookingImage(null);
    setCookingFullImage(null);
  };

  const cancelEquipmentImage = () => {
    setEquipmentFullCrop("");
    setEquipmentImage(null);
    setEquipmentFullImage(null);
  };

  const cancelIngredientsImage = () => {
    setIngredientsFullCrop("");
    setIngredientsImage(null);
    setIngredientsFullImage(null);
  };

  const cancelRecipeImage = () => {
    setRecipeFullCrop("");
    setRecipeThumbCrop("");
    setRecipeTinyCrop("");
    setRecipeImage(null);
    setRecipeFullImage(null);
    setRecipeThumbImage(null);
    setRecipeTinyImage(null);
  };

  const getRequiredEquipment = () => {
    //if (!equipmentRows.length) return [];
    return equipmentRows.map(e => ({
      amount: Number(e.amount),
      equipment: Number(e.equipment)
    }));
  };

  const getRequiredIngredients = () => {
    //if (!ingredientRows.length) return [];
    return ingredientRows.map(i => ({
      amount: Number(i.amount),
      unit: Number(i.unit),
      ingredient: Number(i.ingredient)
    }));
  };

  const getCheckedMethods = () => {
    let checkedMethods: IRequiredMethod[] = [];
    Object.entries(methods).forEach(([key, value]) => {
      if (value === true) checkedMethods.push({methodId: Number(key)});
    });
    return checkedMethods;
  };

  const getRequiredSubrecipes = () => {
    //if (subrecipeRows.length) return [];
    return subrecipeRows.map(s => ({
      amount: Number(s.amount),
      unit: Number(s.unit),
      subrecipe: Number(s.subrecipe)
    }));
  };

  const handleCuisineChange = (e: React.SyntheticEvent<EventTarget>) =>
    setCuisineId(Number((e.target as HTMLInputElement).value));

  const handleDescriptionChange = (e: React.SyntheticEvent<EventTarget>) =>
    setDescription((e.target as HTMLInputElement).value);

  const handleDirectionsChange = (e: React.SyntheticEvent<EventTarget>) =>
    setDirections((e.target as HTMLInputElement).value);

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

  const handleMethodsChange = (e: React.SyntheticEvent<EventTarget>) => {
    const id = (e.target as HTMLInputElement).id;
    setMethods(prevState => ({...prevState, [id]: !prevState[id]}));
  };

  const handleRecipeTypeChange = (e: React.SyntheticEvent<EventTarget>) =>
    setRecipeTypeId(Number((e.target as HTMLInputElement).value));

  const handleSubmit = () => {
    if (
      !validRecipeInfo({
        cuisineId,
        description,
        directions,
        equipmentRows,
        ingredientRows,
        methods,
        ownership,
        recipeTypeId,
        setFeedback,
        subrecipeRows,
        title
      })
    ) {
      return;
    }

    setLoading(true);

    if (editing && editingId) {

      const recipeInfo: IEditingRecipeInfo = {
        recipeId: editingId,  // change?
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
        recipeFullImage,
        recipePrevImage,
        recipeThumbImage,
        recipeTinyImage,
        equipmentImage,
        equipmentFullImage,
        equipmentPrevImage,
        ingredientsImage,
        ingredientsFullImage,
        ingredientsPrevImage,
        cookingImage,
        cookingFullImage,
        cookingPrevImage
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
        recipeFullImage,
        recipeThumbImage,
        recipeTinyImage,
        equipmentImage,
        equipmentFullImage,
        ingredientsImage,
        ingredientsFullImage,
        cookingImage,
        cookingFullImage
      };

      if (staffIsAuthenticated) {
        staffCreateNewRecipe(recipeInfo);
      } else {
        if (ownership === "private") userCreateNewPrivateRecipe(recipeInfo);
        else if (ownership === "public") userCreateNewPublicRecipe(recipeInfo);
      }
      
    }
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

  const handleTitleChange = (e: React.SyntheticEvent<EventTarget>) =>
    setTitle((e.target as HTMLInputElement).value);

  const makeCookingCrops = async (crop: Crop) => {
    if (!cookingImageRef || !cookingImageRef.current) return;
    if (!crop.width) return;

    const full = await getCroppedImage(
      280, 172, cookingImageRef.current, crop, "newFile.jpeg"
    );
    if (!full) return;

    setCookingFullCrop(full.resizedPreview);
    setCookingFullImage(full.resizedFinal);
  };

  const makeEquipmentCrops = async (crop: Crop) => {
    if (!equipmentImageRef || !equipmentImageRef.current) return;
    if (!crop.width) return;
    
    const full = await getCroppedImage(
      280, 172, equipmentImageRef.current, crop, "newFile.jpeg"
    );
    if (!full) return;

    setEquipmentFullCrop(full.resizedPreview);
    setEquipmentFullImage(full.resizedFinal);
  };

  const makeIngredientsCrops = async (crop: Crop) => {
    if (!ingredientsImageRef || !ingredientsImageRef.current) return;
    if (!crop.width) return;

    const full = await getCroppedImage(
      280, 172, ingredientsImageRef.current, crop, "newFile.jpeg"
    );
    if (!full) return;

    setIngredientsFullCrop(full.resizedPreview);
    setIngredientsFullImage(full.resizedFinal);
  };

  const makeRecipeCrops = async (crop: Crop) => {
    if (!recipeImageRef || !recipeImageRef.current) return;
    if (!crop.width) return;

    const full = await getCroppedImage(
      280, 172, recipeImageRef.current, crop, "newFile.jpeg"
    );
    const thumb = await getCroppedImage(
      100, 62, recipeImageRef.current, crop, "newFile.jpeg"
    );
    const tiny = await getCroppedImage(
      28, 18, recipeImageRef.current, crop, "newFile.jpeg"
    );
    if (!full || !thumb || !tiny) return;

    setRecipeFullCrop(full.resizedPreview);
    setRecipeThumbCrop(thumb.resizedPreview);
    setRecipeTinyCrop(tiny.resizedPreview);
    setRecipeFullImage(full.resizedFinal);
    setRecipeThumbImage(thumb.resizedFinal);
    setRecipeTinyImage(tiny.resizedFinal);
  };

  const onCookingCropChange = (crop: Crop) => setCookingCrop(crop);

  const onCookingCropComplete = (crop: Crop) => makeCookingCrops(crop);

  const onCookingImageLoaded = (image: HTMLImageElement) =>
    cookingImageRef.current = image;

  const onEquipmentCropChange = (crop: Crop) => setEquipmentCrop(crop);

  const onEquipmentCropComplete = (crop: Crop) => makeEquipmentCrops(crop);

  const onEquipmentImageLoaded = (image: HTMLImageElement) =>
    equipmentImageRef.current = image;

  const onIngredientsCropChange = (crop: Crop) => setIngredientsCrop(crop);

  const onIngredientsCropComplete = (crop: Crop) => makeIngredientsCrops(crop);

  const onIngredientsImageLoaded = (image: HTMLImageElement) =>
    ingredientsImageRef.current = image;

  const onRecipeCropChange = (crop: Crop) => setRecipeCrop(crop);
  
  const onRecipeCropComplete = (crop: Crop) => makeRecipeCrops(crop);

  const onRecipeImageLoaded = (image: HTMLImageElement) =>
    recipeImageRef.current = image;
  
  const onSelectCookingFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (!(target.files && target.files.length > 0)) return;

    const reader = new FileReader();

    reader.addEventListener("load", () => setCookingImage(reader.result));
    reader.readAsDataURL(target.files[0]);
  };

  const onSelectEquipmentFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (!(target.files && target.files.length > 0)) return;

    const reader = new FileReader();

    reader
      .addEventListener("load", () => setEquipmentImage(reader.result));
    reader.readAsDataURL(target.files[0]);
  };

  const onSelectIngredientsFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (!(target.files && target.files.length > 0)) return;

    const reader = new FileReader();

    reader
      .addEventListener("load", () => setIngredientsImage(reader.result));
    reader.readAsDataURL(target.files[0]);
  };

  const onSelectRecipeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (!(target.files && target.files.length > 0)) return;

    const reader = new FileReader();

    reader.addEventListener("load", () => setRecipeImage(reader.result));
    reader.readAsDataURL(target.files[0]);
  };

  const removeEquipmentRow = (rowKey: string) => {
    const newEquipmentRows = equipmentRows.filter(row => row.key !== rowKey);
    setEquipmentRows(newEquipmentRows);
  };

  const removeIngredientRow = (rowKey: string) => {
    const newIngredientRows = ingredientRows.filter(row => row.key !== rowKey);
    setIngredientRows(newIngredientRows);
  };

  const removeSubrecipeRow = (rowKey: string) => {
    const newSubrecipeRows = subrecipeRows.filter(row => row.key !== rowKey);
    setSubrecipeRows(newSubrecipeRows);
  };

  const setRequiredEquipment = (required: IExistingRequiredEquipment[]) => {
    const rows = required.map(r => ({
      key: uuid(),
      amount: r.amount,
      type: r.equipment_type_id,
      equipment: r.equipment_id
    }));
    setEquipmentRows(rows);
  };

  const setRequiredIngredients = (required: IExistingRequiredIngredient[]) => {
    const rows = required.map(r => ({
      key: uuid(),
      amount: r.amount,
      unit: r.measurement_id,
      type: r.ingredient_type_id,
      ingredient: r.ingredient_id
    }));
    setIngredientRows(rows);
  };

  const setRequiredSubrecipes = (required: IExistingRequiredSubrecipe[]) => {
    const rows = required.map(r => ({
      key: uuid(),
      amount: r.amount,
      unit: r.measurement_id,
      type: r.recipe_type_id,
      cuisine: r.cuisine_id,
      subrecipe: r.subrecipe_id
    }));
    setSubrecipeRows(rows);
  };

  return (
    <NewRecipeView
    addEquipmentRow={addEquipmentRow}
    addIngredientRow={addIngredientRow}
    addSubrecipeRow={addSubrecipeRow}
    authname={authname}
    cancelCookingImage={cancelCookingImage}
    cancelEquipmentImage={cancelEquipmentImage}
    cancelIngredientsImage={cancelIngredientsImage}
    cancelRecipeImage={cancelRecipeImage}
    cookingCrop={cookingCrop}
    cookingFullCrop={cookingFullCrop}
    cookingImage={cookingImage}
    cookingPrevImage={cookingPrevImage}
    cuisineId={cuisineId}
    dataCuisines={dataCuisines}
    dataEquipment={dataEquipment}
    dataIngredients={dataIngredients}
    dataIngredientTypes={dataIngredientTypes}
    dataMeasurements={dataMeasurements}
    dataMethods={dataMethods}
    dataMyFavoriteRecipes={dataMyFavoriteRecipes}
    dataMyPrivateEquipment={dataMyPrivateEquipment}
    dataMyPrivateIngredients={dataMyPrivateIngredients}
    dataMyPrivateRecipes={dataMyPrivateRecipes}
    dataMyPublicRecipes={dataMyPublicRecipes}
    dataMySavedRecipes={dataMySavedRecipes}
    dataRecipes={dataRecipes}
    dataRecipeTypes={dataRecipeTypes}
    description={description}
    directions={directions}
    editing={editing}
    equipmentCrop={equipmentCrop}
    equipmentFullCrop={equipmentFullCrop}
    equipmentImage={equipmentImage}
    equipmentPrevImage={equipmentPrevImage}
    equipmentRows={equipmentRows}
    feedback={feedback}
    handleCuisineChange={handleCuisineChange}
    handleDescriptionChange={handleDescriptionChange}
    handleDirectionsChange={handleDirectionsChange}
    handleEquipmentRowChange={handleEquipmentRowChange}
    handleIngredientRowChange={handleIngredientRowChange}
    handleMethodsChange={handleMethodsChange}
    handleRecipeTypeChange={handleRecipeTypeChange}
    handleSubmit={handleSubmit}
    handleSubrecipeRowChange={handleSubrecipeRowChange}
    handleTitleChange={handleTitleChange}
    id={id}
    ingredientsCrop={ingredientsCrop}
    ingredientsFullCrop={ingredientsFullCrop}
    ingredientsImage={ingredientsImage}
    ingredientsPrevImage={ingredientsPrevImage}
    ingredientRows={ingredientRows}
    loading={loading}
    methods={methods}
    onCookingCropChange={onCookingCropChange}
    onCookingCropComplete={onCookingCropComplete}
    onCookingImageLoaded={onCookingImageLoaded}
    oneColumnATheme={oneColumnATheme}
    onEquipmentCropChange={onEquipmentCropChange}
    onEquipmentCropComplete={onEquipmentCropComplete}
    onEquipmentImageLoaded={onEquipmentImageLoaded}
    onIngredientsCropChange={onIngredientsCropChange}
    onIngredientsCropComplete={onIngredientsCropComplete}
    onIngredientsImageLoaded={onIngredientsImageLoaded}
    onRecipeCropChange={onRecipeCropChange}
    onRecipeCropComplete={onRecipeCropComplete}
    onRecipeImageLoaded={onRecipeImageLoaded}
    onSelectCookingFile={onSelectCookingFile}
    onSelectEquipmentFile={onSelectEquipmentFile}
    onSelectIngredientsFile={onSelectIngredientsFile}
    onSelectRecipeFile={onSelectRecipeFile}
    ownership={ownership}
    recipeCrop={recipeCrop}
    recipeFullCrop={recipeFullCrop}
    recipeImage={recipeImage}
    recipePrevImage={recipePrevImage}
    recipeThumbCrop={recipeThumbCrop}
    recipeTinyCrop={recipeTinyCrop}
    recipeTypeId={recipeTypeId}
    removeEquipmentRow={removeEquipmentRow}
    removeIngredientRow={removeIngredientRow}
    removeSubrecipeRow={removeSubrecipeRow}
    staffIsAuthenticated={staffIsAuthenticated}
    subrecipeRows={subrecipeRows}
    title={title}
    />
  );
};

interface RootState {
  auth: {
    authname: string;
    staffIsAuthenticated: boolean;
  };
  data: {
    cuisines: ICuisine[];
    equipment: IEquipment[];
    ingredients: IIngredient[];
    ingredientTypes: IIngredientType[];
    measurements: IMeasurement[];
    methods: IMethod[];
    myFavoriteRecipes: IWorkRecipe[];
    myPrivateEquipment: IEquipment[];
    myPrivateIngredients: IIngredient[];
    myPrivateRecipes: IWorkRecipe[];
    myPublicRecipes: IWorkRecipe[];
    mySavedRecipes: IWorkRecipe[];
    recipes: IWorkRecipe[];
    recipeTypes: IRecipeType[];
  };
  staff: {
    message: string;
  };
  user: {
    message: string;
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
  amount: string | number;
  type: string | number;
  equipment: string | number;
}

export interface IIngredientRow {
  [index: string]: any;
  key: string;
  amount: string | number;
  unit: string | number;
  type: string | number;
  ingredient: string | number;
}

export interface ISubrecipeRow {
  [index: string]: any;
  key: string;
  amount: string | number;
  unit: string | number;
  type: string | number;
  cuisine: string | number;
  subrecipe: string | number;
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  editing: boolean;
  oneColumnATheme: string;
  ownership: string;
};

const mapStateToProps = (state: RootState) => ({
  authname: state.auth.authname,
  dataCuisines: state.data.cuisines,
  dataEquipment: state.data.equipment,
  dataIngredients: state.data.ingredients,
  dataIngredientTypes: state.data.ingredientTypes,
  dataMeasurements: state.data.measurements,
  dataMethods: state.data.methods,
  dataMyFavoriteRecipes: state.data.myFavoriteRecipes,
  dataMyPrivateEquipment: state.data.myPrivateEquipment,
  dataMyPrivateIngredients: state.data.myPrivateIngredients,
  dataMyPrivateRecipes: state.data.myPrivateRecipes,
  dataMyPublicRecipes: state.data.myPublicRecipes,
  dataMySavedRecipes: state.data.mySavedRecipes,
  dataRecipes: state.data.recipes,
  dataRecipeTypes: state.data.recipeTypes,
  staffIsAuthenticated: state.auth.staffIsAuthenticated,
  staffMessage: state.staff.message,
  userMessage: state.user.message
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