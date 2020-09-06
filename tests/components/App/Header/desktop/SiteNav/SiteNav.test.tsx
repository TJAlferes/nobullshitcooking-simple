import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore, Store } from 'redux';

import fitnessMenuData from '../../../../../../src/components/App/Header/desktop/SiteNav/data/fitnessMenuData';
import foodMenuData from '../../../../../../src/components/App/Header/desktop/SiteNav/data/foodMenuData';
import { Menu } from '../../../../../../src/components/App/Header/desktop/SiteNav/Menu/Menu';
import { SiteNav } from '../../../../../../src/components/App/Header/desktop/SiteNav/SiteNav';
import { rootReducer } from '../../../../../../src/store/rootReducer';

const storeFactory = (initialState = undefined): Store =>
  createStore(rootReducer, initialState);

const store = storeFactory();

const menuShadowHide = jest.fn();
const menuShadowShow = jest.fn();

const initialProps = {menuShadowHide, menuShadowShow};

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <SiteNav {...initialProps} />
    </MemoryRouter>
  </Provider>
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('SiteNav', () => {
  it('shows Food dropdown and shadow on mouse enter', () => {
    wrapper.find('[data-test="food-area"]').simulate('mouseEnter');
    expect(wrapper.find(Menu).prop('menuItems')).toEqual(foodMenuData);
    expect(menuShadowShow).toBeCalledTimes(1);
  });

  it('hides Food dropdown and shadow on mouse leave', () => {
    wrapper.find('[data-test="food-area"]').simulate('mouseEnter');
    wrapper.find('[data-test="food-area"]').simulate('mouseLeave');
    expect(menuShadowHide).toBeCalledTimes(1);
  });

  it('shows Fitness dropdown and shadow on mouse enter', () => {
    wrapper.find('[data-test="fitness-area"]').simulate('mouseEnter');
    expect(wrapper.find(Menu).prop('menuItems')).toEqual(fitnessMenuData);
    expect(menuShadowShow).toBeCalledTimes(1);
  });

  it('hides Fitness dropdown and shadow on mouse leave', () => {
    wrapper.find('[data-test="fitness-area"]').simulate('mouseEnter');
    wrapper.find('[data-test="fitness-area"]').simulate('mouseLeave');
    expect(menuShadowHide).toBeCalledTimes(1);
  });
});