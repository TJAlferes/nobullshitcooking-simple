export default {
  "recipeTypes": [
    {"recipe_type_id": 1, "recipe_type_name": "Drink"},
    {"recipe_type_id": 2, "recipe_type_name": "Appetizer"},
    {"recipe_type_id": 3, "recipe_type_name": "Main"},
    {"recipe_type_id": 4, "recipe_type_name": "Side"},
    {"recipe_type_id": 5, "recipe_type_name": "Dessert"},
    {"recipe_type_id": 6, "recipe_type_name": "Soup"},
    {"recipe_type_id": 7, "recipe_type_name": "Salad"},
    {"recipe_type_id": 8, "recipe_type_name": "Stew"},
    {"recipe_type_id": 9, "recipe_type_name": "Casserole"},
    {"recipe_type_id": 10, "recipe_type_name": "Sauce"},
    {"recipe_type_id": 11, "recipe_type_name": "Dressing"},
    {"recipe_type_id": 12, "recipe_type_name": "Condiment"}
  ],
  "cuisines": [
    {"cuisine_id": 1, "cuisine_name": "Russian"},
    {"cuisine_id": 2, "cuisine_name": "German"},
    {"cuisine_id": 3, "cuisine_name": "Turkish"},
    {"cuisine_id": 4, "cuisine_name": "French"},
    {"cuisine_id": 5, "cuisine_name": "Italian"},
    {"cuisine_id": 6, "cuisine_name": "Mexican"},
    {"cuisine_id": 7, "cuisine_name": "Greek"},
    {"cuisine_id": 8, "cuisine_name": "Irish"},
    {"cuisine_id": 9, "cuisine_name": "Chinese"},
    {"cuisine_id": 10, "cuisine_name": "Indian"},
    {"cuisine_id": 11, "cuisine_name": "Japanese"},
    {"cuisine_id": 12, "cuisine_name": "Iranian"}
  ],
  "recipes": [
    {
      "recipe_id": 62,
      "recipe_type_id": 3,
      "recipe_cuisine_id": 6,
      "recipe_title": "Swiss Chard and Chicken Tacos",
      "recipe_description": "Tastes good.",
      "required_equipment": [
        {"amount": 1, "equipment_id": 1},
        {"amount": 1, "equipment_id": 2}
      ],
      "required_ingredients": [
        {"amount": 2, "measurement_id": 3, "ingredient_id": 242},
        {"amount": 0.5, "measurement_id": 5, "ingredient_id": 278}
      ],
      "required_subrecipes": [
        {"amount": 6, "measurement_id": null, "recipe_id": 1},
        {"amount": 2, "measurement_id": 3, "recipe_id": 13}
      ],
      "recipe_directions": "Preheat oven 350 F. On roasting pan, coat chicken with olive oil and salt, roast 50 minutes.",
      "recipe_image": "aws-s3-bucket-url",
      "equipment_image": "aws-s3-bucket-url",
      "ingredients_image": "aws-s3-bucket-url",
      "cooking_image": "aws-s3-bucket-url"
    },
    {"recipe_id": 13, "recipe_title": "Salsa Verde"},
    {"recipe_id": 1, "recipe_title": "Corn Tortillas"}
  ],
  "equipment": [
    {"equipment_id": 1, "equipment_name": "Chef's Knife", "equipment_type_id": 2},
    {"equipment_id": 2, "equipment_name": "Cutting Board", "equipment_type_id": 2},
    {"equipment_id": 3, "equipment_name": "Y Peeler", "equipment_type_id": 2},
    {"equipment_id": 38, "equipment_name": "Medium Sauce Pan", "equipment_type_id": 3},
    {"equipment_id": 52, "equipment_name": "Spider", "equipment_type_id": 3},
    {"equipment_id": 53, "equipment_name": "Sturdy Spatula", "equipment_type_id": 3}
  ],
  "measurements": [
    {"measurement_id": 1, "measurement_name": "teaspoon"},
    {"measurement_id": 2, "measurement_name": "Tablespoon"},
    {"measurement_id": 3, "measurement_name": "cup"},
    {"measurement_id": 4, "measurement_name": "ounce"},
    {"measurement_id": 5, "measurement_name": "pound"},
    {"measurement_id": 6, "measurement_name": "milliliter"},
    {"measurement_id": 7, "measurement_name": "liter"},
    {"measurement_id": 8, "measurement_name": "gram"},
    {"measurement_id": 9, "measurement_name": "kilogram"}
  ],
  "ingredientTypes": [
    {"ingredient_type_id": 1, "ingredient_type_name": "Fish"},
    {"ingredient_type_id": 2, "ingredient_type_name": "Shellfish"},
    {"ingredient_type_id": 3, "ingredient_type_name": "Beef"},
    {"ingredient_type_id": 4, "ingredient_type_name": "Pork"},
    {"ingredient_type_id": 5, "ingredient_type_name": "Poultry"},
    {"ingredient_type_id": 6, "ingredient_type_name": "Egg"},
    {"ingredient_type_id": 7, "ingredient_type_name": "Dairy"},
    {"ingredient_type_id": 8, "ingredient_type_name": "Oil"},
    {"ingredient_type_id": 9, "ingredient_type_name": "Starch"},
    {"ingredient_type_id": 10, "ingredient_type_name": "Bean"},
    {"ingredient_type_id": 11, "ingredient_type_name": "Vegetable"},
    {"ingredient_type_id": 12, "ingredient_type_name": "Fruit"},
    {"ingredient_type_id": 13, "ingredient_type_name": "Nut"},
    {"ingredient_type_id": 14, "ingredient_type_name": "Seed"},
    {"ingredient_type_id": 15, "ingredient_type_name": "Spice"},
    {"ingredient_type_id": 16, "ingredient_type_name": "Herb"},
    {"ingredient_type_id": 17, "ingredient_type_name": "Acid"},
    {"ingredient_type_id": 18, "ingredient_type_name": "Product"}
  ],
  "ingredients": [
    {"ingredient_id": 235, "ingredient_name": "Salmon", "ingredient_type_id": 1},
    {"ingredient_id": 233, "ingredient_name": "Crab", "ingredient_type_id": 2},
    {"ingredient_id": 85, "ingredient_name": "Flank Steak", "ingredient_type_id": 3},
    {"ingredient_id": 277, "ingredient_name": "Bacon", "ingredient_type_id": 4},
    {"ingredient_id": 278, "ingredient_name": "Chicken Legs", "ingredient_type_id": 5},
    {"ingredient_id": 279, "ingredient_name": "Eggs", "ingredient_type_id": 6},
    {"ingredient_id": 285, "ingredient_name": "Butter", "ingredient_type_id": 7},
    {"ingredient_id": 281, "ingredient_name": "Coconut", "ingredient_type_id": 8},
    {"ingredient_id": 282, "ingredient_name": "Potatoes", "ingredient_type_id": 9},
    {"ingredient_id": 273, "ingredient_name": "Garbanzo Beans Chickpeas", "ingredient_type_id": 10},
    {"ingredient_id": 141, "ingredient_name": "Broccoli", "ingredient_type_id": 11},
    {"ingredient_id": 140, "ingredient_name": "Pomegranate", "ingredient_type_id": 12},
    {"ingredient_id": 107, "ingredient_name": "Cashews", "ingredient_type_id": 13},
    {"ingredient_id": 110, "ingredient_name": "Sesame Seeds", "ingredient_type_id": 14},
    {"ingredient_id": 251, "ingredient_name": "Guajillo Pepper", "ingredient_type_id": 15},
    {"ingredient_id": 242, "ingredient_name": "Cilantro", "ingredient_type_id": 16},
    {"ingredient_id": 283, "ingredient_name": "Balsamic Vinegar", "ingredient_type_id": 17},
    {"ingredient_id": 284, "ingredient_name": "Tobasco Sauce", "ingredient_type_id": 18},
  ],
};