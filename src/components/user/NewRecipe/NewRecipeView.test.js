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
  editing: false,
  ownership: "private",
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
    {key: "XYZ1", amount: "", type: "", equipment: ""},
    {key: "XYZ2", amount: "", type: "", equipment: ""}
  ],
  ingredientRows: [
    {key: "XYZ3", amount: 1, unit: "", type: "", ingredient: ""},
    {key: "XYZ4", amount: 1, unit: "", type: "", ingredient: ""}
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

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: props => <div></div>
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('NewRecipeView', () => {

  describe('when creating', () => {
    describe('when ownership is private', () => {
      it('displays a h1 element with text Submit New Private Recipe', () => {
        const wrapper = shallow(<NewRecipeView {...beginProps} />);
        expect(wrapper.find('h1').text()).toEqual("Submit New Private Recipe");
      });
    });
    describe('when ownership is public', () => {
      it('displays a h1 element with text Submit New Public Recipe', () => {
        const props = {...beginProps};
        props.ownership = "public";
        const wrapper = shallow(<NewRecipeView {...props} />);
        expect(wrapper.find('h1').text()).toEqual("Submit New Public Recipe");
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


});