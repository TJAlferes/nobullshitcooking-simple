import { shallow } from 'enzyme';
import React from 'react';

import { ExpandCollapse } from '../../components/ExpandCollapse/ExpandCollapse';
import { LoaderButton } from '../../components/LoaderButton/LoaderButton';
import { EquipmentRow } from './components/EquipmentRow';
import { IngredientRow } from './components/IngredientRow';
//import { SubrecipeRow } from './components/SubrecipeRow';
import { ImageUploads } from './components/ImageUploads';
import { NewRecipeView } from './NewRecipeView';

const addEquipmentRow = jest.fn();
const addIngredientRow = jest.fn();
const addSubrecipeRow = jest.fn();
const cancelCookingImage = jest.fn();
const cancelEquipmentImage = jest.fn();
const cancelIngredientsImage = jest.fn();
const cancelRecipeImage = jest.fn();
const handleCuisineChange = jest.fn();
const handleDescriptionChange = jest.fn();
const handleDirectionsChange = jest.fn();
const handleEquipmentRowChange = jest.fn();
const handleIngredientRowChange = jest.fn();
const handleMethodsChange = jest.fn();
const handleRecipeTypeChange = jest.fn();
const handleSubmit = jest.fn();
const handleSubrecipeRowChange = jest.fn();
const handleTitleChange = jest.fn();
const onCookingCropChange = jest.fn();
const onCookingCropComplete = jest.fn();
const onCookingImageLoaded = jest.fn();
const onEquipmentCropChange = jest.fn();
const onEquipmentCropComplete = jest.fn();
const onEquipmentImageLoaded = jest.fn();
const onIngredientsCropChange = jest.fn();
const onIngredientsCropComplete = jest.fn();
const onIngredientsImageLoaded = jest.fn();
const onRecipeCropChange = jest.fn();
const onRecipeCropComplete = jest.fn();
const onRecipeImageLoaded = jest.fn();
const onSelectCookingFile = jest.fn();
const onSelectEquipmentFile = jest.fn();
const onSelectIngredientsFile = jest.fn();
const onSelectRecipeFile = jest.fn();
const removeEquipmentRow = jest.fn();
const removeIngredientRow = jest.fn();
const removeSubrecipeRow = jest.fn();

const beginProps = {
  addEquipmentRow,
  addIngredientRow,
  addSubrecipeRow,
  authname: "Person",
  cancelCookingImage,
  cancelEquipmentImage,
  cancelIngredientsImage,
  cancelRecipeImage,
  cookingCrop: {aspect: 280 / 172},
  cookingFullCrop: "",
  cookingImage: null,
  cookingPrevImage: "nobsc-recipe-cooking-default",
  cuisineId: 1,
  dataCuisines: [
    {id: 1, name: "American", nation: "America"},
    {id: 2, name: "Japanese", nation: "Japan"}
  ],
  dataEquipment: [
    {
      id: 1,
      name: "Cutting Board",
      equipment_type_id: 2,
      owner_id: 1,
      equipment_type_name: "Preparing",
      description: "You need one.",
      image: "nobsc-cutting-board"
    },
    {
      id: 2,
      name: "Metal Spatula",
      equipment_type_id: 3,
      owner_id: 1,
      equipment_type_name: "Cooking",
      description: "You need one.",
      image: "nobsc-metal-spatula"
    }
  ],
  dataIngredients: [
    {
      id: 1,
      brand: null,
      variety: "Granny Smith",
      name: "Apple",
      ingredient_type_id: 12,
      owner_id: 1,
      ingredient_type_name: "Fruit",
      description: "Energizing",
      image: "nobsc-apple"
    },
    {
      id: 2,
      brand: null,
      variety: "Baby",
      name: "Spinach",
      ingredient_type_id: 11,
      owner_id: 1,
      ingredient_type_name: "Vegetable",
      description: "Strengthening",
      image: "nobsc-spinach"
    }
  ],
  dataIngredientTypes: [{id: 11, name: "Vegetable"}, {id: 12, name: "Fruit"}],
  dataMeasurements: [{id: 1, name: "teaspoon"}, {id: 2, name: "Tablespoon"}],
  dataMethods: [{id: 1, name: "Steam"}, {id: 2, name: "Freeze"}],
  dataMyFavoriteRecipes: [],
  dataMyPrivateEquipment: [],
  dataMyPrivateIngredients: [],
  dataMyPrivateRecipes: [],
  dataMyPublicRecipes: [],
  dataMySavedRecipes: [],
  dataRecipes: [],
  dataRecipeTypes: [{id: 1, name: "Drink"}, {id: 2, name: "Appetizer"}],
  description: "",
  directions: "",
  editing: false,
  equipmentCrop: {aspect: 280 / 172},
  equipmentFullCrop: "",
  equipmentImage: null,
  equipmentPrevImage: "nobsc-recipe-equipment-default",
  equipmentRows: [
    {key: "XYZ1", amount: "", type: "", equipment: ""},
    {key: "XYZ2", amount: "", type: "", equipment: ""}
  ],
  feedback: "Some message.",
  id: 0,
  ingredientRows: [
    {key: "XYZ3", amount: 1, unit: "", type: "", ingredient: ""},
    {key: "XYZ4", amount: 1, unit: "", type: "", ingredient: ""}
  ],
  ingredientsCrop: {aspect: 280 / 172},
  ingredientsFullCrop: "",
  ingredientsImage: null,
  ingredientsPrevImage: "nobsc-recipe-ingredients-default",
  loading: false,
  methods: {
     1: false,  2: false,  3: false,  4: false,  5: false,  6: false,
     7: false,  8: false,  9: false, 10: false, 11: false, 12: false,
    13: false, 14: false, 15: false, 16: false, 17: false, 18: false,
    19: false, 20: false, 21: false, 22: false, 23: false, 24: false
  },
  handleCuisineChange,
  handleDescriptionChange,
  handleDirectionsChange,
  handleEquipmentRowChange,
  handleIngredientRowChange,
  handleMethodsChange,
  handleRecipeTypeChange,
  handleSubmit,
  handleSubrecipeRowChange,
  handleTitleChange,
  oneColumnATheme: "one-column-a-light",
  onCookingCropChange,
  onCookingCropComplete,
  onCookingImageLoaded,
  onEquipmentCropChange,
  onEquipmentCropComplete,
  onEquipmentImageLoaded,
  onIngredientsCropChange,
  onIngredientsCropComplete,
  onIngredientsImageLoaded,
  onRecipeCropChange,
  onRecipeCropComplete,
  onRecipeImageLoaded,
  onSelectCookingFile,
  onSelectEquipmentFile,
  onSelectIngredientsFile,
  onSelectRecipeFile,
  ownership: "private",
  recipeCrop: {aspect: 280 / 172},
  recipeFullCrop: "",
  recipeImage: null,
  recipePrevImage: "nobsc-recipe-default",
  recipeThumbCrop: "",
  recipeTinyCrop: "",
  recipeTypeId: 1,
  removeEquipmentRow,
  removeIngredientRow,
  removeSubrecipeRow,
  staffIsAuthenticated: false,  // test for this
  subrecipeRows: [],
  title: "Title"
};

afterEach(() => {
  jest.clearAllMocks();
});

// TO DO: this needs more thorough tests
describe('NewRecipeView', () => {

  describe('when creating', () => {

    describe('when ownership is private', () => {
      const wrapper = shallow(<NewRecipeView {...beginProps} />);

      it('displays a h1 element with text Submit New Private Recipe', () => {
        expect(wrapper.find('h1').text()).toEqual("Submit New Private Recipe");
      });

      it('displays an input element with the following properties', () => {
        const props = wrapper.find('input[name="private"]').props();
        expect(props.type).toEqual("radio");
        expect(props.checked).toEqual(true);
        expect(props.value).toEqual("private");
        expect(props.disabled).toEqual(true);
      });
  
      it('displays another input element with the following properties', () => {
        const props = wrapper.find('input[name="public"]').props();
        expect(props.type).toEqual("radio");
        expect(props.checked).toEqual(false);
        expect(props.value).toEqual("public");
        expect(props.disabled).toEqual(true);
      });
    });

    describe('when ownership is public', () => {
      const beginPropsCopy = {...beginProps};
      beginPropsCopy.ownership = "public";
      const wrapper = shallow(<NewRecipeView {...beginPropsCopy} />);

      it('displays a h1 element with text Submit New Public Recipe', () => {
        expect(wrapper.find('h1').text()).toEqual("Submit New Public Recipe");
      });

      it('displays an input element with the following properties', () => {
        const props = wrapper.find('input[name="private"]').props();
        expect(props.type).toEqual("radio");
        expect(props.checked).toEqual(false);
        expect(props.value).toEqual("private");
        expect(props.disabled).toEqual(true);
      });
  
      it('displays another input element with the following properties', () => {
        const props = wrapper.find('input[name="public"]').props();
        expect(props.type).toEqual("radio");
        expect(props.checked).toEqual(true);
        expect(props.value).toEqual("public");
        expect(props.disabled).toEqual(true);
      });
    });
  });

  describe('when editing', () => {

    describe('when ownership is private', () => {
      it('displays a h1 element with text Edit Private Recipe', () => {
        const props = {...beginProps};
        props.editing = true;
        const wrapper = shallow(<NewRecipeView {...props} />);
        expect(wrapper.find('h1').text()).toEqual("Edit Private Recipe");
      });
    });

    describe('when ownership is public', () => {
      it('displays a h1 element with text Edit Public Recipe', () => {
        const props = {...beginProps};
        props.editing = true;
        props.ownership = "public";
        const wrapper = shallow(<NewRecipeView {...props} />);
        expect(wrapper.find('h1').text()).toEqual("Edit Public Recipe");
      });
    });

  });

  describe('content', () => {
    const wrapper = shallow(<NewRecipeView {...beginProps} />);

    it('displays feedback', () => {
      expect(wrapper.find('p.new-recipe__feedback').text())
      .toEqual("Some message.");
    });

    it('displays an ExpandCollapse component', () => {
      expect(wrapper.find(ExpandCollapse)).toHaveLength(1);
    });

    it('displays a h2 element with text Ownership', () => {
      expect(wrapper.find('[data-test="ownership-heading"]').text())
      .toEqual("Ownership");
    });

    it('displays a h2 element with text Type Of Recipe', () => {
      expect(wrapper.find('[data-test="recipe-type-heading"]').text())
      .toEqual("Type of Recipe");
    });

    it('displays a h2 element with text Cuisine', () => {
      expect(wrapper.find('[data-test="cuisine-heading"]').text())
      .toEqual("Cuisine");
    });

    it('displays a h2 element with text Title', () => {
      expect(wrapper.find('[data-test="title-heading"]').text())
      .toEqual("Title");
    });

    it('displays a h2 element with text Description / Author Note', () => {
      expect(wrapper.find('[data-test="description-heading"]').text())
      .toEqual("Description / Author Note");
    });

    it('displays a h2 element with text Methods', () => {
      expect(wrapper.find('[data-test="methods-heading"]').text())
      .toEqual("Methods");
    });

    it('displays a h2 element with text Equipment', () => {
      expect(wrapper.find('[data-test="equipment-heading"]').text())
      .toEqual("Equipment");
    });

    it('displays a h2 element with text Ingredients', () => {
      expect(wrapper.find('[data-test="ingredients-heading"]').text())
      .toEqual("Ingredients");
    });

    it('displays a h2 element with text Subrecipes', () => {
      expect(wrapper.find('[data-test="subrecipes-heading"]').text())
      .toEqual("Subrecipes");
    });

    it('displays a h2 element with text Directions', () => {
      expect(wrapper.find('[data-test="directions-heading"]').text())
      .toEqual("Directions");
    });

    it('displays a recipe type select element', () => {
      expect(wrapper.find('select[name="recipeType"]')).toHaveLength(1);
    });

    it('displays a cuisine select element', () => {
      expect(wrapper.find('select[name="cuisine"]')).toHaveLength(1);
    });

    it('displays a title input element', () => {
      expect(wrapper.find('input[name="title"]')).toHaveLength(1);
    });

    it('displays a description input element', () => {
      expect(wrapper.find('input[name="description"]')).toHaveLength(1);
    });

    it('displays a directions textarea element', () => {
      expect(wrapper.find('textarea[name="directions"]')).toHaveLength(1);
    });

    it('displays a button element with text Add Equipment', () => {
      expect(wrapper.find('button[data-test="add-equipment"]').text())
      .toEqual("Add Equipment");
    });

    it('displays a button element with text Add Ingredient', () => {
      expect(wrapper.find('button[data-test="add-ingredient"]').text())
      .toEqual("Add Ingredient");
    });

    it('displays a button element with text Add Subrecipe', () => {
      expect(wrapper.find('button[data-test="add-subrecipe"]').text())
      .toEqual("Add Subrecipe");
    });

    it('displays an ImageUploads component', () => {
      expect(wrapper.find(ImageUploads)).toHaveLength(1);
    });

    // dynamic elements

    it('displays recipe type options', () => {
      expect(wrapper.find('[data-test="Drink"]').props().children)
      .toEqual("Drink");

      expect(wrapper.find('[data-test="Appetizer"]').props().children)
      .toEqual("Appetizer");
    });

    it('displays cuisine options', () => {
      expect(wrapper.find('[data-test="American"]').props().children)
      .toEqual("American");

      expect(wrapper.find('[data-test="Japanese"]').props().children)
      .toEqual("Japanese");
    });

    it('displays method inputs and labels', () => {
      expect(wrapper.find('[data-test="1-Steam"]').props().id)
      .toEqual("1");

      expect(wrapper.find('[data-test="2-Freeze"]').props().id)
      .toEqual("2");

      expect(wrapper.find('[data-test="Steam"]').props().children)
      .toEqual("Steam");

      expect(wrapper.find('[data-test="Freeze"]').props().children)
      .toEqual("Freeze");
    });

    it('displays EquipmentRows', () => {
      expect(wrapper.find(EquipmentRow).at(0).props().rowKey).toEqual("XYZ1");
      expect(wrapper.find(EquipmentRow).at(1).props().rowKey).toEqual("XYZ2");
    });

    it('displays IngredientRows', () => {
      expect(wrapper.find(IngredientRow).at(0).props().rowKey).toEqual("XYZ3");
      expect(wrapper.find(IngredientRow).at(1).props().rowKey).toEqual("XYZ4");
    });
    
    /*it('displays ', () => {
      expect(wrapper.find('')).toHaveLength(1);
    });*/
  });

  describe('finish area', () => {
    const wrapper = shallow(<NewRecipeView {...beginProps} />);

    it('displays a Link to /dashboard with text Cancel', () => {
      expect(wrapper.find('[data-test="cancel-link"]').props().to)
      .toEqual("/dashboard");
      expect(wrapper.find('[data-test="cancel-link"]').props().children)
      .toEqual("Cancel");
    });

    it('displays a LoaderButton with text Submit Recipe', () => {
      expect(wrapper.find(LoaderButton).props().text).toEqual("Submit Recipe");
    });
  });
});