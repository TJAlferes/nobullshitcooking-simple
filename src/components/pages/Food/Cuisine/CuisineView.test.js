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
      wrapper.find('button.cuisine-tab[name="intro"]').text()
    )
    .toEqual("Intro");
  });

  it('displays a button element with text Sources', () => {
    expect(
      wrapper.find('button.cuisine-tab[name="sources"]').text()
    )
    .toEqual("Sources");
  });

  it('displays a button element with text Equipment', () => {
    expect(
      wrapper.find('button.cuisine-tab[name="equipment"]').text()
    )
    .toEqual("Equipment");
  });

  it('displays a button element with text Ingredients', () => {
    expect(
      wrapper.find('button.cuisine-tab[name="ingredients"]').text()
    )
    .toEqual("Ingredients");
  });

  it('displays a button element with text Recipes', () => {
    expect(
      wrapper.find('button.cuisine-tab[name="recipes"]').text()
    )
    .toEqual("Recipes");
  });

  it('displays a button element with text Plans', () => {
    expect(
      wrapper.find('button.cuisine-tab[name="plans"]').text()
    )
    .toEqual("Plans");
  });

  it('displays respective tab when tab button is clicked', () => {

  });
});