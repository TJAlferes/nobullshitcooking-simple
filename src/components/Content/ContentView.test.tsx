import { shallow } from 'enzyme';
import React from 'react';

import { ContentView } from './ContentView';

const initialProps = {
  oneColumnATheme: "light",
  contents: [
    {},
    {}
  ]
};

describe ('Content', () => {
  const wrapper = shallow(<ContentView {...initialProps} />);

  it('displays a h1 element with text Some Title', () => {
    expect(wrapper.find('.post-preview__title').at(0).text())
    .toEqual("Some Title");
  });

  it ('displays content items correctly', () => {

  });
});