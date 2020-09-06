import { shallow } from 'enzyme';
import React from 'react';

import { LoaderButton } from '../../../src/components/LoaderButton/LoaderButton';
import { NewEquipmentView } from '../../../src/pages/NewEquipment/NewEquipmentView';

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
  dataEquipmentTypes: [{id: 2, name: "Preparing"}, {id: 3, name: "Cooking"}],
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
  prevImage: "nobsc-equipment-default",
  staffIsAuthenticated: false,  // TO DO: test for this
  tinyCrop: "",
  typeId: 1,
};

describe('NewEquipmentView', () => {
  describe('when creating', () => {
    it('displays a h1 element with text Create New Private Equipment', () => {
      const wrapper =
        shallow(<NewEquipmentView editing={false} {...intialProps} />);
      expect(wrapper.find('h1').text()).toEqual("Create New Private Equipment");
    });
  });

  describe('when editing', () => {
    it('displays a h1 element with text Edit Private Equipment', () => {
      const wrapper =
        shallow(<NewEquipmentView editing={true} {...intialProps} />);
      expect(wrapper.find('h1').text()).toEqual("Edit Private Equipment");
    });
  });

  describe('content', () => {
    const wrapper =
      shallow(<NewEquipmentView editing={false} {...intialProps} />);

    it('displays feedback', () => {
      expect(wrapper.find('p.new-equipment__feedback').text())
      .toEqual("Some message.");
    });

    it('displays a h2 element with text Type Of Equipment', () => {
      expect(wrapper.find('[data-test="equipment-type-heading"]').text())
      .toEqual("Type of Equipment");
    });

    it('displays an equipment type select element', () => {
      expect(wrapper.find('select[name="equipmentType"]')).toHaveLength(1);
    });

    it('displays a h2 element with text Name', () => {
      expect(wrapper.find('[data-test="name-heading"]').text())
      .toEqual("Name");
    });

    it('displays a name input element', () => {
      expect(wrapper.find('input.new-equipment__name')).toHaveLength(1);
    });

    it('displays a h2 element with text Description', () => {
      expect(wrapper.find('[data-test="description-heading"]').text())
      .toEqual("Description");
    });

    it('displays a description textarea element', () => {
      expect(wrapper.find('textarea.new-equipment__description'))
      .toHaveLength(1);
    });

    it('displays a h2 element with text Image of Equipment', () => {
      expect(wrapper.find('[data-test="image-heading"]').text())
      .toEqual("Image of Equipment");
    });

    // finish

    it('displays a Link to /dashboard with text Cancel', () => {
      expect(wrapper.find('.new-equipment__cancel-button').props().to)
      .toEqual("/dashboard");
      expect(wrapper.find('.new-equipment__cancel-button').props().children)
      .toEqual("Cancel");
    });

    it('displays a LoaderButton with text Create', () => {
      expect(wrapper.find(LoaderButton).props().text).toEqual("Create");
    });
  });
});