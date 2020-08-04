import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import foodMenuData from '../data/foodMenuData';
import { Menu } from './Menu';

const wrapper = mount(
  <MemoryRouter>
    <Menu menuItems={foodMenuData} theme="drop-down-menu-light" />
  </MemoryRouter>
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('Menu', () => {
  it('needs tests', () => {
    expect(1).toEqual(1);
  });
});