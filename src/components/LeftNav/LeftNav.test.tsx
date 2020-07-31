import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';

import { LeftNav } from './LeftNav';

const initialProps = {authname: "Person", theme: "light"};

describe ('LeftNav', () => {

  describe('when user is unauthenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <LeftNav userIsAuthenticated={false} {...initialProps} />
      </MemoryRouter>
    );
    
    it(`displays a link to "/home" with text "News"`, () => {
      expect(wrapper.find('[data-test="/home"]').at(0).prop('to'))
      .toEqual("/home");
      expect(wrapper.find('[data-test="/home"]').at(0).props().children)
      .toEqual("News");
    });

    it(`
      displays a link to "/page/guide/food/nutrition/supplements"
      with text "Supplements"
    `, () => {
      expect(
        wrapper
        .find('[data-test="/page/guide/food/nutrition/supplements"]')
        .at(0)
        .prop('to')
      ).toEqual("/page/guide/food/nutrition/supplements");
      expect(
        wrapper
        .find('[data-test="/page/guide/food/nutrition/supplements"]')
        .at(0)
        .props()
        .children
      ).toEqual("Supplements");
    });

    it(`
      displays a link to "/supply/kitchen-equipment"
      with text "Equipment"
    `, () => {
      expect(
        wrapper.find('[data-test="/supply/kitchen-equipment"]').at(0).prop('to')
      ).toEqual("/supply/kitchen-equipment");
      expect(
        wrapper
        .find('[data-test="/supply/kitchen-equipment"]')
        .at(0)
        .props()
        .children
      ).toEqual("Equipment");
    });

    it(`
      displays a link to "/page/promo/water-filtration"
      with text "Water Filtration"
    `, () => {
      expect(
        wrapper
        .find('[data-test="/page/promo/water-filtration"]')
        .at(0)
        .prop('to')
      ).toEqual("/page/promo/water-filtration");
      expect(
        wrapper
        .find('[data-test="/page/promo/water-filtration"]')
        .at(0)
        .props()
        .children
      ).toEqual("Water Filtration");
    });

    it(`displays a link to "/page/promo/tea" with text "Tea"`, () => {
      expect(wrapper.find('[data-test="/page/promo/tea"]').at(0).prop('to'))
      .toEqual("/page/promo/tea");
      expect(
        wrapper.find('[data-test="/page/promo/tea"]').at(0).props().children
      ).toEqual("Tea");
    });

    it(`displays a link to "/page/promo/coffee" with text "Coffee"`, () => {
      expect(wrapper.find('[data-test="/page/promo/coffee"]').at(0).prop('to'))
      .toEqual("/page/promo/coffee");
      expect(
        wrapper.find('[data-test="/page/promo/coffee"]').at(0).props().children
      ).toEqual("Coffee");
    });

    it(`displays a link to "/page/promo/outdoors" with text "Outdoors"`, () => {
      expect(
        wrapper.find('[data-test="/page/promo/outdoors"]').at(0).prop('to')
      ).toEqual("/page/promo/outdoors");
      expect(
        wrapper
        .find('[data-test="/page/promo/outdoors"]')
        .at(0)
        .props()
        .children
      ).toEqual("Outdoors");
    });

    it(`displays a link to "/page/promo/garden" with text "Garden"`, () => {
      expect(wrapper.find('[data-test="/page/promo/garden"]').at(0).prop('to'))
      .toEqual("/page/promo/garden");
      expect(
        wrapper.find('[data-test="/page/promo/garden"]').at(0).props().children
      ).toEqual("Garden");
    });

    it(`displays a link to "/page/promo/tools" with text ""`, () => {
      expect(wrapper.find('[data-test="/page/promo/tools"]').at(0).prop('to'))
      .toEqual("/page/promo/tools");
      expect(
        wrapper.find('[data-test="/page/promo/tools"]').at(0).props().children
      ).toEqual("Tools");
    });

    it(`displays a link to "/page/promo/seasonal" with text "Seasonal"`, () => {
      expect(
        wrapper.find('[data-test="/page/promo/seasonal"]').at(0).prop('to')
      ).toEqual("/page/promo/seasonal");
      expect(
        wrapper
        .find('[data-test="/page/promo/seasonal"]')
        .at(0)
        .props()
        .children
      ).toEqual("Seasonal");
    });

    it(`displays a link to "/page/site/charity" with text "Charity"`, () => {
      expect(wrapper.find('[data-test="/page/site/charity"]').at(0).prop('to'))
      .toEqual("/page/site/charity");
      expect(
        wrapper.find('[data-test="/page/site/charity"]')
        .at(0)
        .props()
        .children
      ).toEqual("Charity");
    });
  });

  describe('when user is authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <LeftNav userIsAuthenticated={true} {...initialProps} />
      </MemoryRouter>
    );
    
    it(`displays a link to "/dashboard" with text "Person"`, () => {
      expect(wrapper.find('[data-test="/dashboard"]').at(0).prop('to'))
      .toEqual("/dashboard");
      expect(wrapper.find('[data-test="/dashboard"]').at(0).props().children)
      .toEqual("Person");
    });

    it(`displays a link to "/messenger" with text "Messenger"`, () => {
      expect(wrapper.find('[data-test="/messenger"]').at(0).prop('to'))
      .toEqual("/messenger");
      expect(wrapper.find('[data-test="/messenger"]').at(0).props().children)
      .toEqual("Messenger");
    });

    it(`displays a link to "/friends" with text "Friends"`, () => {
      expect(wrapper.find('[data-test="/friends"]').at(0).prop('to'))
      .toEqual("/friends");
      expect(wrapper.find('[data-test="/friends"]').at(0).props().children)
      .toEqual("Friends");
    });
  });

});