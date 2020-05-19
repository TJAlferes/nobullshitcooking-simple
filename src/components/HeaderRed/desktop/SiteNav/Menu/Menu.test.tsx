import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import foodMenuData from '../data/foodMenuData';
import { Menu } from './Menu';

const wrapper = mount(
  <MemoryRouter>
    <Menu theme="drop-down-menu-light" menuItems={foodMenuData} />
  </MemoryRouter>
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('Menu', () => {
  it('needs testing', () => {
    
  });
}); 