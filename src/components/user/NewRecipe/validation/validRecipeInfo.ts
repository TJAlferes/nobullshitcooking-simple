import { IEquipmentRow, IIngredientRow, ISubrecipeRow } from '../NewRecipe';

export function validRecipeInfo({
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
}: RecipeInfo): boolean {
  // bare minimum validation, finish up,
  // but also finish up on back end, where it actually matters
  let validOwnership = ownership === "private" || ownership === "public";
  let validRecipeTypeId = recipeTypeId !== 0;
  let validCuisineId = cuisineId !== 0;
  let validTitle = title.trim() !== "";
  let validDescription = description.trim() !== "";
  let validMethods = Object.values(methods).filter(method => method === true);
  let validEquipmentRows = true;
  let validIngredientRows = true;
  let validSubrecipeRows = true;
  let validDirections = directions.trim() !== "";

  if (!validOwnership) {
    window.scrollTo(0,0);
    setFeedback("You forgot to select the ownership...");
    setTimeout(() => setFeedback(""), 3000);
    return false;
  }

  if (!validRecipeTypeId) {
    window.scrollTo(0,0);
    setFeedback("You forgot to select the recipe type...");
    setTimeout(() => setFeedback(""), 3000);
    return false;
  }

  if (!validCuisineId) {
    window.scrollTo(0,0);
    setFeedback("You forgot to select the cuisine...");
    setTimeout(() => setFeedback(""), 3000);
    return false;
  }

  if (!validTitle) {
    window.scrollTo(0,0);
    setFeedback("Umm, double check your title...");
    setTimeout(() => setFeedback(""), 3000);
    return false;
  }

  if (!validDescription) {
    window.scrollTo(0,0);
    setFeedback("Umm, double check your description...");
    setTimeout(() => setFeedback(""), 3000);
    return false;
  }

  if (!validMethods) {  //validMethods.length < 1
    window.scrollTo(0,0);
    setFeedback("You forgot to select the method(s)...");
    setTimeout(() => setFeedback(""), 3000);
    return false;
  }

  if (equipmentRows.length) {
    equipmentRows.map(row => {
      if (row.amount === "" || row.equipment === "")  {
        validEquipmentRows = false;
      }
    });
    if (!validEquipmentRows) {
      window.scrollTo(0,0);
      setFeedback("Umm, double check your equipment...");
      setTimeout(() => setFeedback(""), 3000);
    }
  }
  if (!validEquipmentRows) return false;

  if (ingredientRows.length) {
    ingredientRows.map(row => {
      if (row.amount === "" || row.unit === "" || row.ingredient === "") {
        validIngredientRows = false;
      }
    });
    if (!validIngredientRows) {
      window.scrollTo(0,0);
      setFeedback("Umm, double check your ingredients...");
      setTimeout(() => setFeedback(""), 3000);
    }
  }
  if (!validIngredientRows) return false;

  if (subrecipeRows.length) {
    subrecipeRows.map(row => {
      if (row.amount === "" || row.unit === "" || row.subrecipe === "") {
        validSubrecipeRows = false;
      }
    });
    if (!validSubrecipeRows) {
      window.scrollTo(0,0);
      setFeedback("Umm, double check your subrecipes...");
      setTimeout(() => setFeedback(""), 3000);
    }
  }
  if (!validSubrecipeRows) return false;

  if (!validDirections) {
    window.scrollTo(0,0);
    setFeedback("Umm, double check your directions...");
    setTimeout(() => setFeedback(""), 3000);
    return false;
  }

  return (
    validOwnership &&
    recipeTypeId !== 0 &&
    cuisineId !== 0 &&
    title.trim() !== "" &&
    description.trim() !== "" &&
    validMethods &&
    validEquipmentRows &&
    validIngredientRows &&
    validSubrecipeRows &&
    directions.trim() !== ""
  );
}

type RecipeInfo = {
  ownership: string;
  recipeTypeId: number;
  cuisineId: number;
  title: string;
  description: string;
  methods: number[];
  equipmentRows: IEquipmentRow[];
  ingredientRows: IIngredientRow[];
  subrecipeRows: ISubrecipeRow[];
  directions: string;
  setFeedback(feedback: string): void;
};