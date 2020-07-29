import { shallow } from 'enzyme';
import React from 'react';

import { ContentView } from './ContentView';

const initialProps = {
  oneColumnATheme: "light",
  contents: [{type: 'paragraph', children: [{text: 'Some text.'}]}]
};

describe ('ContentView', () => {
  const wrapper = shallow(<ContentView {...initialProps} />);

  it ('works', () => {
    expect(1).toEqual(1);
  });
});