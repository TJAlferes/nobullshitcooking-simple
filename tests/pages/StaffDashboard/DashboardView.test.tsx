import { shallow } from 'enzyme';
import React from 'react';

import { DashboardView } from '../../../src/pages/StaffDashboard/DashboardView';

const activateModal = jest.fn();
const deactivateModal = jest.fn();
const getApplicationNode = jest.fn();
const handleDeleteContent = jest.fn();
const handleDeleteEquipment = jest.fn();
const handleDeleteIngredient = jest.fn();
const handleDeleteRecipe = jest.fn();
const handleTabClick = jest.fn();

const initialProps = {
  activateModal,
  authname: "Person",
  content: [],
  creatingContent: false,
  deactivateModal,
  deleteName: "",
  editingId: null,
  equipment: [],
  feedback: "Some message.",
  getApplicationNode,
  handleDeleteContent,
  handleDeleteEquipment,
  handleDeleteIngredient,
  handleDeleteRecipe,
  handleTabClick,
  ingredients: [],
  loading: false,
  modalActive: false,
  oneColumnATheme: "light",
  recipes: [],
  tab: "content"
};

describe('DashboardView', () => {
  const wrapper = shallow(<DashboardView {...initialProps} />);

  it ('displays a h1 element with text COOK EAT WIN REPEAT', () => {
    expect(wrapper.find('h1.staff-dashboard__h1').text())
    .toEqual("COOK EAT WIN REPEAT");
  });
});