import { shallow } from 'enzyme';
import React from 'react';

import { ImageUploads } from './ImageUploads';

const beginProps = {
  recipeImage: null,
  recipeEquipmentImage: null,
  recipeIngredientsImage: null,
  recipeCookingImage: null,
  prevRecipeImage: "nobsc-recipe-default",
  prevEquipmentImage: "nobsc-recipe-equipment-default",
  prevIngredientsImage: "nobsc-recipe-ingredients-default",
  prevCookingImage: "nobsc-recipe-cooking-default",
  onSelectFile: jest.fn(),
  onSelectEquipmentFile: jest.fn(),
  onSelectIngredientsFile: jest.fn(),
  onSelectCookingFile: jest.fn(),
  cropOne: {aspect: 280 / 172},
  cropTwo: {aspect: 280 / 172},
  cropThree: {aspect: 280 / 172},
  cropFour: {aspect: 280 / 172},
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
  cropFullSizePreview: "",  // AWS S3 default?
  cropThumbSizePreview: "",  // AWS S3 default?
  cropTinySizePreview: "",  // AWS S3 default?
  equipmentCropFullSizePreview: "",  // AWS S3 default?
  ingredientsCropFullSizePreview: "",  // AWS S3 default?
  cookingCropFullSizePreview: "",  // AWS S3 default?
  loading: false,
  cancelRecipeImage: jest.fn(),
  cancelRecipeEquipmentImage: jest.fn(),
  cancelRecipeIngredientsImage: jest.fn(),
  cancelRecipeCookingImage: jest.fn()
};

describe ('ImageUploads', () => {
  const wrapper = shallow(
    <ImageUploads editing={false} {...beginProps} />
  );
  it('displays a h2 element with text Image of Finished Recipe', () => {
    expect(wrapper.find('[data-test="image-heading"]').text())
    .toEqual("Image of Finished Recipe");
  });
});