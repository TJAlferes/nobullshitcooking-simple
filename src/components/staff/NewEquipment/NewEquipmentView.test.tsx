import { shallow } from 'enzyme';
import React from 'react';

import { LoaderButton } from '../../LoaderButton/LoaderButton';
import { StaffNewEquipmentView } from './NewEquipmentView';

const beginProps = {
  oneColumnATheme: "one-column-a-light",
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

describe('StaffNewEquipmentView', () => {
  describe('when creating', () => {
    it('displays a h1 element with text Submit New Equipment', () => {
      const wrapper = shallow(
        <StaffNewEquipmentView editing={false} {...beginProps} />
      );
      expect(wrapper.find('h1').text()).toEqual("Submit New Equipment");
    });
  });

  describe('when editing', () => {
    it('displays a h1 element with text Edit Equipment', () => {
      const wrapper = shallow(
        <StaffNewEquipmentView editing={true} {...beginProps} />
      );
      expect(wrapper.find('h1').text()).toEqual("Edit Equipment");
    });
  });

  describe('content', () => {
    const wrapper = shallow(
      <StaffNewEquipmentView editing={false} {...beginProps} />
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
      expect(wrapper.find('input[name="name"]')).toHaveLength(1);
    });

    it('displays a h2 element with text Description', () => {
      expect(wrapper.find('[data-test="description-heading"]').text())
      .toEqual("Description");
    });

    it('displays a description input element', () => {
      expect(wrapper.find('input[name="description"]')).toHaveLength(1);
    });

    it('displays a h2 element with text Image of Equipment', () => {
      expect(wrapper.find('[data-test="image-heading"]').text())
      .toEqual("Image of Equipment");
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