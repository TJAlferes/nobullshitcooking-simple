export interface IRecipe {
  recipe_id: number
  recipe_type_id: number
  cuisine_id: number
  author_id: number
  owner_id: number
  title: string
  recipe_type_name: string
  cuisine_name: string
  author: string
  author_avatar: string
  description: string
  directions: string
  recipe_image: string
  equipment_image: string
  ingredients_image: string
  cooking_image: string
  required_methods: IRequiredMethod[]
  required_equipment: IRequiredEquipment[]
  required_ingredients: IRequiredIngredient[]
  required_subrecipes: IRequiredSubrecipe[]
}

export interface IRequiredMethod {
  method_name: string
}

export interface IRequiredEquipment {
  amount: number
  equipment_name: string
}

export interface IRequiredIngredient {
  amount: number
  measurement_name: string
  ingredient_name: string
}

export interface IRequiredSubrecipe {
  amount: number
  measurement_name: string
  subrecipe_title: string
}