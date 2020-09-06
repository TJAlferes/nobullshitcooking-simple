import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import foodMenuData from '../../../../../../../src/components/App/Header/desktop/SiteNav/data/foodMenuData';
import { Menu } from '../../../../../../../src/components/App/Header/desktop/SiteNav/Menu/Menu';

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