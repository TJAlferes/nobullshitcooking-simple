import { shallow } from 'enzyme';
import React from 'react';

import { LoaderButton } from '../LoaderButton/LoaderButton';
import { NewIngredientView } from './NewIngredientView';

const cancelImage = jest.fn();
const handleDescriptionChange = jest.fn();
const handleNameChange = jest.fn();
const handleSubmit = jest.fn();
const handleTypeChange = jest.fn();
const onCropChange = jest.fn();
const onCropComplete = jest.fn();
const onImageLoaded = jest.fn();
const onSelectFile = jest.fn();

const intialProps = {
  cancelImage,
  crop: {aspect: 280 / 172},
  dataIngredientTypes: [
    {ingredient_type_id: 11, ingredient_type_name: "Vegetable"},
    {ingredient_type_id: 12, ingredient_type_name: "Fruit"}
  ],
  description: "",
  feedback: "Some message.",
  fullCrop: "",
  handleDescriptionChange,
  handleNameChange,
  handleSubmit,
  handleTypeChange,
  image: null,
  loading: false,
  name: "",
  oneColumnATheme: "one-column-a-light",
  onCropChange,
  onCropComplete,
  onImageLoaded,
  onSelectFile,
  prevImage: "nobsc-ingredient-default",
  staffIsAuthenticated: false,  // TO DO: test for this
  tinyCrop: "",
  typeId: 1,
};

describe('NewIngredientView', () => {
  describe('when creating', () => {
    it('displays a h1 element with text Create New Private Ingredient', () => {
      const wrapper =
        shallow(<NewIngredientView editing={false} {...intialProps} />);
      expect(wrapper.find('h1').text())
      .toEqual("Create New Private Ingredient");
    });
  });

  describe('when editing', () => {
    it('displays a h1 element with text Edit Private Ingredient', () => {
      const wrapper =
        shallow(<NewIngredientView editing={true} {...intialProps} />);
      expect(wrapper.find('h1').text()).toEqual("Edit Private Ingredient");
    });
  });

  describe('content', () => {
    const wrapper =
      shallow(<NewIngredientView editing={false} {...intialProps} />);

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
      expect(wrapper.find('input.new-ingredient__name')).toHaveLength(1);
    });

    it('displays a h2 element with text Description', () => {
      expect(wrapper.find('[data-test="description-heading"]').text())
      .toEqual("Description");
    });

    it('displays a description input element', () => {
      expect(wrapper.find('textarea.new-ingredient__description'))
      .toHaveLength(1);
    });

    it('displays a h2 element with text Image of Ingredient', () => {
      expect(wrapper.find('[data-test="image-heading"]').text())
      .toEqual("Image of Ingredient");
    });

    // finish

    it('displays a Link to /dashboard with text Cancel', () => {
      expect(wrapper.find('.new-ingredient__cancel-button').props().to)
      .toEqual("/dashboard");
      expect(wrapper.find('.new-ingredient__cancel-button').props().children)
      .toEqual("Cancel");
    });

    it('displays a LoaderButton with text Create', () => {
      expect(wrapper.find(LoaderButton).props().text).toEqual("Create");
    });
  });
});