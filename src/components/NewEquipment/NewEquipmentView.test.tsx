import { shallow } from 'enzyme';
import React from 'react';

import { LoaderButton } from '../LoaderButton/LoaderButton';
import { NewEquipmentView } from './NewEquipmentView';

const beginProps = {
  oneColumnATheme: "one-column-a-light",
  staffIsAuthenticated: false,  // test for this
  feedback: "Some message.",
  loading: false,
  equipmentTypeId: 1,
  equipmentName: "",
  equipmentDescription: "",
  equipmentImage: null,
  prevEquipmentImage: "nobsc-equipment-default",
  dataEquipmentTypes: [
    {equipment_type_id: 2, equipment_type_name: "Preparing"},
    {equipment_type_id: 3, equipment_type_name: "Cooking"}
  ],
  handleEquipmentTypeChange: jest.fn(),
  handleEquipmentNameChange: jest.fn(),
  handleEquipmentDescriptionChange: jest.fn(),
  onSelectFile: jest.fn(),
  onImageLoaded: jest.fn(),
  crop: {aspect: 280 / 172},
  cropFullSizePreview: "",
  cropTinySizePreview: "",
  onCropChange: jest.fn(),
  onCropComplete: jest.fn(),
  cancelEquipmentImage: jest.fn(),
  handleSubmit: jest.fn()
};

describe('NewEquipmentView', () => {
  describe('when creating', () => {
    it('displays a h1 element with text Create New Private Equipment', () => {
      const wrapper = shallow(
        <NewEquipmentView editing={false} {...beginProps} />
      );
      expect(wrapper.find('h1').text()).toEqual("Create New Private Equipment");
    });
  });

  describe('when editing', () => {
    it('displays a h1 element with text Edit Private Equipment', () => {
      const wrapper = shallow(
        <NewEquipmentView editing={true} {...beginProps} />
      );
      expect(wrapper.find('h1').text()).toEqual("Edit Private Equipment");
    });
  });

  describe('content', () => {
    const wrapper = shallow(
      <NewEquipmentView editing={false} {...beginProps} />
    );

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