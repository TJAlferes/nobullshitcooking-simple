import { render, shallow } from 'enzyme';
import React from 'react';

import { TestingRouter } from '../../../../test/testUtils';

import CuisineView from './CuisineView';

let wrapper;

describe('CuisineView Redirect', () => {
  it('should redirect to cuisines route if cuisineId not specified', () => {
    const container = render(
      <TestingRouter
        ComponentWithRedirection={() => (
          <CuisineView oneColumnATheme="light" cuisine={null} />
        )}
        RedirectUrl={'/food/cuisines'}
      />
    );
    expect(container[0].children[0].data).toEqual('/food/cuisines');
  });
});

describe('CuisineView', () => {
  beforeEach(() => {
    wrapper = shallow(<CuisineView oneColumnATheme="light" cuisine={null} />);
  });

  it('displays a button element with text Intro', () => {
    expect(
      wrapper.find('button.cuisine.cuisine-tab[name="intro-tab"]').text()
    )
    .toEqual("Intro");
  });

  it('displays a button element with text Sources', () => {
    expect(
      wrapper.find('button.cuisine.cuisine-tab[name="sources-tab"]').text()
    )
    .toEqual("Sources");
  });

  it('displays a button element with text Equipment', () => {
    expect(
      wrapper.find('button.cuisine.cuisine-tab[name="equipment-tab"]').text()
    )
    .toEqual("Equipment");
  });

  it('displays a button element with text Ingredients', () => {
    expect(
      wrapper.find('button.cuisine.cuisine-tab[name="ingredients-tab"]').text()
    )
    .toEqual("Ingredients");
  });

  it('displays a button element with text Recipes', () => {
    expect(
      wrapper.find('button.cuisine.cuisine-tab[name="recipes-tab"]').text()
    )
    .toEqual("Recipes");
  });

  it('displays a button element with text Plans', () => {
    expect(
      wrapper.find('button.cuisine.cuisine-tab[name="plans-tab"]').text()
    )
    .toEqual("Plans");
  });

  it('displays respective tab when tab button is clicked', () => {

  });
});