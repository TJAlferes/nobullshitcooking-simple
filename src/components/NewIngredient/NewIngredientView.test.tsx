import { shallow } from 'enzyme';
import React from 'react';

import { LoaderButton } from '../LoaderButton/LoaderButton';
import { NewIngredientView } from './NewIngredientView';

const beginProps = {
  oneColumnATheme: "one-column-a-light",
  feedback: "Some message.",
  loading: false,
  ingredientTypeId: 1,
  ingredientName: "",
  ingredientDescription: "",
  ingredientImage: null,
  prevIngredientImage: "nobsc-ingredient-default",
  dataIngredientTypes: [
    {ingredient_type_id: 11, ingredient_type_name: "Vegetable"},
    {ingredient_type_id: 12, ingredient_type_name: "Fruit"}
  ],
  handleIngredientTypeChange: jest.fn(),
  handleIngredientNameChange: jest.fn(),
  handleIngredientDescriptionChange: jest.fn(),
  onSelectFile: jest.fn(),
  onImageLoaded: jest.fn(),
  crop: {aspect: 280 / 172},
  cropFullSizePreview: "",
  cropTinySizePreview: "",
  onCropChange: jest.fn(),
  onCropComplete: jest.fn(),
  cancelIngredientImage: jest.fn(),
  handleSubmit: jest.fn()
};

describe('NewIngredientView', () => {
  describe('when creating', () => {
    it('displays a h1 element with text Submit New Ingredient', () => {
      const wrapper = shallow(
        <NewIngredientView editing={false} {...beginProps} />
      );
      expect(wrapper.find('h1').text()).toEqual("Submit New Ingredient");
    });
  });

  describe('when editing', () => {
    it('displays a h1 element with text Edit Ingredient', () => {
      const wrapper = shallow(
        <NewIngredientView editing={true} {...beginProps} />
      );
      expect(wrapper.find('h1').text()).toEqual("Edit Ingredient");
    });
  });

  describe('content', () => {
    const wrapper = shallow(
      <NewIngredientView editing={false} {...beginProps} />
    );

    it('displays feedback', () => {
      expect(wrapper.find('p.new-ingredient__feedback').text())
      .toEqual("Some message.");
    });

    it('displays a h2 element with text Type Of Ingredient', () => {
      expect(wrapper.find('[data-test="ingredient-type-heading"]').text())
      .toEqual("Type of Ingredient");
    });

    it('displays an ingredient type select element', () => {
      expect(wrapper.find('select[name="ingredientType"]')).toHaveLength(1);
    });

    it('displays a h2 element with text Name', () => {
      expect(wrapper.find('[data-test="name-heading"]').text())
      .toEqual("Name");
    });

    it('displays a name input element', () => {
      expect(wrapper.find('input[name="name"]')).toHaveLength(1);
    });

    it('displays a h2 element with text Description', () => {
      expect(wrapper.find('[data-test="description-heading"]').text())
      .toEqual("Description");
    });

    it('displays a description input element', () => {
      expect(wrapper.find('input[name="description"]')).toHaveLength(1);
    });

    it('displays a h2 element with text Image of Ingredient', () => {
      expect(wrapper.find('[data-test="image-heading"]').text())
      .toEqual("Image of Ingredient");
    });

    // finish

    it('displays a Link to /staff-dashboard with text Cancel', () => {
      expect(wrapper.find('[data-test="cancel-link"]').props().to)
      .toEqual("/staff-dashboard");
      expect(wrapper.find('[data-test="cancel-link"]').props().children)
      .toEqual("Cancel");
    });

    it('displays a LoaderButton with text Create', () => {
      expect(wrapper.find(LoaderButton).props().text).toEqual("Create");
    });
  });
});