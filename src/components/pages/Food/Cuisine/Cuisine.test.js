import { shallow } from 'enzyme';
import React from 'react';

import { Cuisine } from './Cuisine';

describe('Cuisine', () => {
  it('should load the appropriate cuisine', () => {
    const props = {
      match: {params: {id: "999"}},
      oneColumnATheme: "light",
      dataCuisines: [
        {cuisine_id: 1, cuisine_name: "Chinese"},
        {cuisine_id: 2, cuisine_name: "Italian"}
      ]
    };

    const wrapper = shallow(<Cuisine {...props} />);

    expect(wrapper.state("cuisine")).not.toBeNull();  // insufficient?
  });

  it('should redirect to /food/cuisines if given no cuisine', () => {
    const props = {
      match: {params: {id: "999"}},
      oneColumnATheme: "light",
      dataCuisines: [
        {cuisine_id: 1, cuisine_name: "Chinese"},
        {cuisine_id: 2, cuisine_name: "Italian"}
      ]
    };

    const wrapper = shallow(<Cuisine {...props} />);


  });

  it('should redirect to /food/cuisines if given a non-existent/invalid cuisine', () => {
    const props = {
      match: {params: {id: "999"}},
      oneColumnATheme: "light",
      dataCuisines: [
        {cuisine_id: 1, cuisine_name: "Chinese"},
        {cuisine_id: 2, cuisine_name: "Italian"}
      ]
    };

    const wrapper = shallow(<Cuisine {...props} />);


  });
});