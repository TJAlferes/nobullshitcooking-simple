import { mount } from 'enzyme';
import React from 'react';

import { StaffDashboard } from '../../../src/pages/StaffDashboard/Dashboard';

const staffDeleteContent = jest.fn();
const staffDeleteEquipment = jest.fn();
const staffDeleteIngredient = jest.fn();
const staffDeleteRecipe = jest.fn();

const initialProps = {
  authname: "Person",
  creatingContent: false,
  content: [],
  editingId: null,
  equipment: [],
  ingredients: [],
  message: "Some message.",
  oneColumnATheme: "light",
  recipes: [],
  staffDeleteContent,
  staffDeleteEquipment,
  staffDeleteIngredient,
  staffDeleteRecipe
};

window.scrollTo = jest.fn();

describe('StaffDashboard', () => {
  it('needs tests', () => {
    
  });
});