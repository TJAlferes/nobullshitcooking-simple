import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore, Store } from 'redux';

import { rootReducer } from '../../../../store/rootReducer';
import foodMenuData from './data/foodMenuData';
import fitnessMenuData from './data/fitnessMenuData';
import { Menu } from './Menu/Menu';
import { SiteNav } from './SiteNav';

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