import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';

import { rootReducer } from '../../../../store/rootReducer';
import foodMenuData from './data/foodMenuData';
import fitnessMenuData from './data/fitnessMenuData';
import { Menu } from './Menu/Menu';
import { SiteNav } from './SiteNav';

const storeFactory = (initialState = undefined): Store =>
  createStore(rootReducer, initialState);

const store = storeFactory();

const menuShadowShow = jest.fn();
const menuShadowHide = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <SiteNav
        menuShadowShow={menuShadowShow}
        menuShadowHide={menuShadowHide}
      />
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
    //expect();
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
    //expect();
    expect(menuShadowHide).toBeCalledTimes(1);
  });

  /*it('shows Food dropdown and shadow on mouse enter', () => {
    //jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    //wrapper.find('[data-test="food-area"]').simulate('mouseEnter');
    //expect(wrapper.state('expanded')).toEqual(true);
    //expect(mockSetState).toBeCalledWith(true);
    //expect(wrapper.state('expandedDropdown')).toEqual("Food");
    //expect(mockSetState).toBeCalledWith("Food");
    //expect(mockSetState).toBeCalledTimes(2);
    //expect(menuShadowShow).toBeCalledTimes(1);
  });

  it('hides Food dropdown and shadow on mouse leave', () => {
    wrapper.find('[data-test="food-area"]').simulate('mouseEnter');
    wrapper.find('[data-test="food-area"]').simulate('mouseLeave');
    expect(wrapper.state('expanded')).toEqual(false);
    expect(wrapper.state('expandedDropdown')).toEqual("none");
    expect(menuShadowHide).toBeCalledTimes(1);
  });

  it('shows Fitness dropdown and shadow on mouse enter', () => {
    wrapper.find('[data-test="fitness-area"]').simulate('mouseEnter');
    expect(wrapper.state('expanded')).toEqual(true);
    expect(wrapper.state('expandedDropdown')).toEqual("Fitness");
    expect(menuShadowShow).toBeCalledTimes(1);
  });

  it('hides Fitness dropdown and shadow on mouse leave', () => {
    wrapper.find('[data-test="fitness-area"]').simulate('mouseEnter');
    wrapper.find('[data-test="fitness-area"]').simulate('mouseLeave');
    expect(wrapper.state('expanded')).toEqual(false);
    expect(wrapper.state('expandedDropdown')).toEqual("none");
    expect(menuShadowHide).toBeCalledTimes(1);
  });*/
});