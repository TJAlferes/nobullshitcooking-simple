import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';

import { LeftNav } from '../../../src/components/LeftNav/LeftNav';

const initialProps = {authname: "Person", theme: "light"};

describe ('LeftNav', () => {

  describe('when user is unauthenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <LeftNav userIsAuthenticated={false} {...initialProps} />
      </MemoryRouter>
    );
    
    it(`displays a link to "/home" with text "News"`, () => {
      const element = wrapper.find('[data-test="home"]').at(0);
      expect(element.prop('to')).toEqual("/home");
      expect(element.props().children).toEqual("News");
    });

    it(`
      displays a link to "/page/guide/food/nutrition/supplements"
      with text "Supplements"
    `, () => {
      const element = wrapper.find('[data-test="supplements"]').at(0);
      expect(element.prop('to'))
        .toEqual("/page/guide/food/nutrition/supplements");
      expect(element.props().children).toEqual("Supplements");
    });

    it(`
      displays a link to "/supply/kitchen-equipment"
      with text "Equipment"
    `, () => {
      const element = wrapper.find('[data-test="equipment"]').at(0);
      expect(element.prop('to')).toEqual("/supply/kitchen-equipment");
      expect(element.props().children).toEqual("Equipment");
    });

    it(`
      displays a link to "/page/promo/water-filtration"
      with text "Water Filtration"
    `, () => {
      const element = wrapper.find('[data-test="filtration"]').at(0);
      expect(element.prop('to')).toEqual("/page/promo/water-filtration");
      expect(element.props().children).toEqual("Water Filtration");
    });

    it(`displays a link to "/page/promo/tea" with text "Tea"`, () => {
      const element = wrapper.find('[data-test="tea"]').at(0);
      expect(element.prop('to')).toEqual("/page/promo/tea");
      expect(element.props().children).toEqual("Tea");
    });

    it(`displays a link to "/page/promo/coffee" with text "Coffee"`, () => {
      const element = wrapper.find('[data-test="coffee"]').at(0);
      expect(element.prop('to')).toEqual("/page/promo/coffee");
      expect(element.props().children).toEqual("Coffee");
    });

    it(`displays a link to "/page/promo/outdoors" with text "Outdoors"`, () => {
      const element = wrapper.find('[data-test="outdoors"]').at(0);
      expect(element.prop('to')).toEqual("/page/promo/outdoors");
      expect(element.props().children).toEqual("Outdoors");
    });

    it(`displays a link to "/page/promo/garden" with text "Garden"`, () => {
      const element = wrapper.find('[data-test="garden"]').at(0);
      expect(element.prop('to')).toEqual("/page/promo/garden");
      expect(element.props().children).toEqual("Garden");
    });

    it(`displays a link to "/page/promo/tools" with text ""`, () => {
      const element = wrapper.find('[data-test="tools"]').at(0);
      expect(element.prop('to')).toEqual("/page/promo/tools");
      expect(element.props().children).toEqual("Tools");
    });

    it(`displays a link to "/page/promo/seasonal" with text "Seasonal"`, () => {
      const element = wrapper.find('[data-test="seasonal"]').at(0);
      expect(element.prop('to')).toEqual("/page/promo/seasonal");
      expect(element.props().children).toEqual("Seasonal");
    });

    it(`displays a link to "/page/site/charity" with text "Charity"`, () => {
      const element = wrapper.find('[data-test="charity"]').at(0);
      expect(element.prop('to')).toEqual("/page/site/charity");
      expect(element.props().children).toEqual("Charity");
    });
  });

  describe('when user is authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <LeftNav userIsAuthenticated={true} {...initialProps} />
      </MemoryRouter>
    );
    
    it(`displays a link to "/dashboard" with text "Person"`, () => {
      const element = wrapper.find('[data-test="dashboard"]').at(0);
      expect(element.prop('to')).toEqual("/dashboard");
      expect(element.at(0).props().children).toEqual("Person");
    });

    it(`displays a link to "/messenger" with text "Messenger"`, () => {
      const element = wrapper.find('[data-test="messenger"]').at(0);
      expect(element.prop('to')).toEqual("/messenger");
      expect(element.props().children).toEqual("Messenger");
    });

    it(`displays a link to "/friends" with text "Friends"`, () => {
      const element = wrapper.find('[data-test="friends"]').at(0);
      expect(element.prop('to')).toEqual("/friends");
      expect(element.props().children).toEqual("Friends");
    });
  });

});