import { shallow } from 'enzyme';
import React from 'react';

import { SiteNav } from './SiteNav';

const menuShadowShow = jest.fn();
const menuShadowHide = jest.fn();

const wrapper = shallow(
  <SiteNav
    menuShadowShow={menuShadowShow}
    menuShadowHide={menuShadowHide}
  />
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('SiteNav', () => {
  it('shows Food dropdown and shadow on mouse enter', () => {
    wrapper.find('[data-test="food-area"]').simulate('mouseEnter');
    expect(wrapper.state().expanded).toEqual(true);
    expect(wrapper.state().expandedDropdown).toEqual("Food");
    expect(menuShadowShow).toBeCalledTimes(1);
  });

  it('hides Food dropdown and shadow on mouse leave', () => {
    wrapper.find('[data-test="food-area"]').simulate('mouseEnter');
    wrapper.find('[data-test="food-area"]').simulate('mouseLeave');
    expect(wrapper.state().expanded).toEqual(false);
    expect(wrapper.state().expandedDropdown).toEqual("none");
    expect(menuShadowHide).toBeCalledTimes(1);
  });

  it('shows Fitness dropdown and shadow on mouse enter', () => {
    wrapper.find('[data-test="fitness-area"]').simulate('mouseEnter');
    expect(wrapper.state().expanded).toEqual(true);
    expect(wrapper.state().expandedDropdown).toEqual("Fitness");
    expect(menuShadowShow).toBeCalledTimes(1);
  });

  it('hides Fitness dropdown and shadow on mouse leave', () => {
    wrapper.find('[data-test="fitness-area"]').simulate('mouseEnter');
    wrapper.find('[data-test="fitness-area"]').simulate('mouseLeave');
    expect(wrapper.state().expanded).toEqual(false);
    expect(wrapper.state().expandedDropdown).toEqual("none");
    expect(menuShadowHide).toBeCalledTimes(1);
  });
});