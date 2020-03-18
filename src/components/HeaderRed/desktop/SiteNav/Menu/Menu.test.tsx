import { mount, shallow } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Menu } from './Menu';

const menuData = [];

const wrapper = mount(
  <MemoryRouter>
    <Menu theme="drop-down-menu-light" menuData={menuData} />
  </MemoryRouter>
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('Menu', () => {
  it('?', () => {
    
  });
});