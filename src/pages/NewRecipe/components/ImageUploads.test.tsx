import { shallow } from 'enzyme';
import React from 'react';

import { ImageUploads } from './ImageUploads';

const cancelCookingImage = jest.fn();
const cancelEquipmentImage = jest.fn();
const cancelIngredientsImage = jest.fn();
const cancelRecipeImage = jest.fn();
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

const intialProps = {
  cancelCookingImage,
  cancelEquipmentImage,
  cancelIngredientsImage,
  cancelRecipeImage,
  cookingCrop: {aspect: 280 / 172},
  cookingFullCrop: "",
  cookingImage: null,
  cookingPrevImage: "nobsc-recipe-cooking-default",
  equipmentCrop: {aspect: 280 / 172},
  equipmentFullCrop: "",
  equipmentImage: null,
  equipmentPrevImage: "nobsc-recipe-equipment-default",
  ingredientsCrop: {aspect: 280 / 172},
  ingredientsFullCrop: "",
  ingredientsImage: null,
  ingredientsPrevImage: "nobsc-recipe-ingredients-default",
  loading: false,
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
  recipeCrop: {aspect: 280 / 172},
  recipeFullCrop: "",
  recipeImage: null,
  recipePrevImage: "nobsc-recipe-default",
  recipeThumbCrop: "",
  recipeTinyCrop: ""
};

describe ('ImageUploads', () => {
  const wrapper = shallow(
    <ImageUploads editing={false} {...intialProps} />
  );

  it('displays a h2 element with text Image of Finished Recipe', () => {
    expect(wrapper.find('[data-test="image-heading"]').text())
    .toEqual("Image of Finished Recipe");
  });

  // TO DO: finish
});