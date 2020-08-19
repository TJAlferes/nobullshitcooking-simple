import { shallow } from 'enzyme';
import React from 'react';

import { ContentView } from './ContentView';

const initialProps = {
  contents: [{type: 'paragraph', children: [{text: 'Some text.'}]}],
  oneColumnATheme: "light"
};

describe ('ContentView', () => {
  const wrapper = shallow(<ContentView {...initialProps} />);

  it ('works', () => {
    expect(1).toEqual(1);
  });
});