import { shallow } from 'enzyme';
import React from 'react';
import { Link } from 'react-router-dom';

import ExpandCollapse from '../../ExpandCollapse/ExpandCollapse';
import LoaderButton from '../../LoaderButton/LoaderButton';

import EquipmentRow from './views/EquipmentRow/EquipmentRow';
import IngredientRow from './views/IngredientRow/IngredientRow';
import SubrecipeRow from './views/SubrecipeRow/SubrecipeRow';
import ImageUploads from './views/ImageUploads';

import NewRecipeView from './NewRecipeView';

const beginProps = {
  match: {params: {id: "1"}},
  oneColumnATheme: "one-column-a-light",
  authname: "Person",
  feedback: "Some message.",
  loading: false,
  editing: true,
  ownership: "public",
  recipeTypeId: 1,
  cuisineId: 1,
  title: "Title",
  description: "",
  directions: "",
  methods: {
    1: false,
    2: false,
    3: false
  },
  equipmentRows: [
    {key: uuid(), amount: "", type: "", equipment: ""},
    {key: uuid(), amount: "", type: "", equipment: ""}
  ],
  ingredientRows: [
    {key: uuid(), amount: 1, unit: "", type: "", ingredient: ""},
    {key: uuid(), amount: 1, unit: "", type: "", ingredient: ""}
  ],
  subrecipeRows: [],
  prevRecipeImage: "nobsc-recipe-default",
  prevEquipmentImage: "nobsc-recipe-equipment-default",
  prevIngredientsImage: "nobsc-recipe-ingredients-default",
  prevCookingImage: "nobsc-recipe-cooking-default",
  dataRecipeTypes: [],
  dataCuisines: [],
  dataMethods: [],
  dataEquipment: [],
  dataMyPrivateEquipment: [],
  dataMeasurements: [],
  dataIngredientTypes: [],
  dataIngredients: [],
  dataMyPrivateIngredients: [],
  dataRecipes: [],
  dataMyPrivateRecipes: [],
  dataMyPublicRecipes: [],
  dataMyFavoriteRecipes: [],
  dataMySavedRecipes: [],
  recipeImage: null,
  recipeEquipmentImage: null,
  recipeIngredientsImage: null,
  recipeCookingImage: null,
  cropOne: {
    disabled: true,
    locked: true,
    width: 280,
    maxWidth: 280,
    height: 172,
    maxHeight: 172
  },
  cropFullSizePreview: null,
  cropThumbSizePreview: null,
  cropTinySizePreview: null,
  cropTwo: {
    disabled: true,
    locked: true,
    width: 280,
    maxWidth: 280,
    height: 172,
    maxHeight: 172
  },
  equipmentCropFullSizePreview: null,
  cropThree: {
    disabled: true,
    locked: true,
    width: 280,
    maxWidth: 280,
    height: 172,
    maxHeight: 172
  },
  ingredientsCropFullSizePreview: null,
  cropFour: {
    disabled: true,
    locked: true,
    width: 280,
    maxWidth: 280,
    height: 172,
    maxHeight: 172
  },
  cookingCropFullSizePreview: null,
  handleRecipeTypeChange: jest.fn(),
  handleCuisineChange: jest.fn(),
  handleTitleChange: jest.fn(),
  handleDescriptionChange: jest.fn(),
  handleDirectionsChange: jest.fn(),
  handleMethodsChange: jest.fn(),
  handleEquipmentRowChange: jest.fn(),
  handleIngredientRowChange: jest.fn(),
  handleSubrecipeRowChange: jest.fn(),
  addEquipmentRow: jest.fn(),
  removeEquipmentRow: jest.fn(),
  addIngredientRow: jest.fn(),
  removeIngredientRow: jest.fn(),
  addSubrecipeRow: jest.fn(),
  removeSubrecipeRow: jest.fn(),
  onSelectFile: jest.fn(),
  onSelectEquipmentFile: jest.fn(),
  onSelectIngredientsFile: jest.fn(),
  onSelectCookingFile: jest.fn(),
  onImageLoaded: jest.fn(),
  onEquipmentImageLoaded: jest.fn(),
  onIngredientsImageLoaded: jest.fn(),
  onCookingImageLoaded: jest.fn(),
  onCropOneChange: jest.fn(),
  onCropTwoChange: jest.fn(),
  onCropThreeChange: jest.fn(),
  onCropFourChange: jest.fn(),
  onCropComplete: jest.fn(),
  onEquipmentCropComplete: jest.fn(),
  onIngredientsCropComplete: jest.fn(),
  onCookingCropComplete: jest.fn(),
  cancelRecipeImage: jest.fn(),
  cancelRecipeEquipmentImage: jest.fn(),
  cancelRecipeIngredientsImage: jest.fn(),
  cancelRecipeCookingImage: jest.fn(),
  handleSubmit: jest.fn()
};

let wrapper;

jest.mock(Link);

afterEach(() => {
  jest.clearAllMocks();
});

describe('NewRecipeView', () => {
  beforeEach(() => {
    wrapper = shallow(<NewRecipeView {...beginProps} />);
  });

  it('needs testing', () => {
    expect(1).toEqual(1);
  });
});