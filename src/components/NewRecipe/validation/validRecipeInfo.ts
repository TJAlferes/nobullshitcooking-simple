import {
  IEquipmentRow,
  IIngredientRow,
  IMethods,
  ISubrecipeRow
} from '../NewRecipe';

export function validRecipeInfo({
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
}: RecipeInfo): boolean {
  const validOwnership = ownership === "private" || ownership === "public";
  if (!validOwnership) {
    window.scrollTo(0,0);
    setFeedback("You forgot to select the ownership...");
    setTimeout(() => setFeedback(""), 3000);
    return false;
  }

  const validRecipeTypeId = recipeTypeId !== 0;
  if (!validRecipeTypeId) {
    window.scrollTo(0,0);
    setFeedback("You forgot to select the recipe type...");
    setTimeout(() => setFeedback(""), 3000);
    return false;
  }

  const validCuisineId = cuisineId !== 0;
  if (!validCuisineId) {
    window.scrollTo(0,0);
    setFeedback("You forgot to select the cuisine...");
    setTimeout(() => setFeedback(""), 3000);
    return false;
  }

  const validTitle = title.trim() !== "";
  if (!validTitle) {
    window.scrollTo(0,0);
    setFeedback("Umm, double check your title...");
    setTimeout(() => setFeedback(""), 3000);
    return false;
  }

  const validDescription = description.trim() !== "";
  if (!validDescription) {
    window.scrollTo(0,0);
    setFeedback("Umm, double check your description...");
    setTimeout(() => setFeedback(""), 3000);
    return false;
  }

  const validDirections = directions.trim() !== "";
  if (!validDirections) {
    window.scrollTo(0,0);
    setFeedback("Umm, double check your directions...");
    setTimeout(() => setFeedback(""), 3000);
    return false;
  }

  const validMethods = Object.values(methods).filter(m => m === true);
  if (!validMethods) {  //validMethods.length < 1
    window.scrollTo(0,0);
    setFeedback("You forgot to select the method(s)...");
    setTimeout(() => setFeedback(""), 3000);
    return false;
  }

  let validEquipmentRows = true;
  if (equipmentRows.length) {
    equipmentRows.map(r => {
      if (r.amount === "" || r.equipment === "") validEquipmentRows = false;
    });
    if (!validEquipmentRows) {
      window.scrollTo(0,0);
      setFeedback("Umm, double check your equipment...");
      setTimeout(() => setFeedback(""), 3000);
    }
  }
  if (!validEquipmentRows) return false;

  let validIngredientRows = true;
  if (ingredientRows.length) {
    ingredientRows.map(r => {
      if (r.amount === "" || r.unit === "" || r.ingredient === "") {
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

  let validSubrecipeRows = true;
  if (subrecipeRows.length) {
    subrecipeRows.map(r => {
      if (r.amount === "" || r.unit === "" || r.subrecipe === "") {
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

  return (
    validOwnership &&
    validRecipeTypeId &&
    validCuisineId &&
    validTitle &&
    validDescription &&
    validDirections &&
    validMethods &&
    validEquipmentRows &&
    validIngredientRows &&
    validSubrecipeRows
  );
}

type RecipeInfo = {
  cuisineId: number;
  description: string;
  directions: string;
  equipmentRows: IEquipmentRow[];
  ingredientRows: IIngredientRow[];
  methods: IMethods;
  ownership: string;
  recipeTypeId: number;
  setFeedback(feedback: string): void;
  subrecipeRows: ISubrecipeRow[];
  title: string;
};