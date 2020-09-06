import { shallow } from 'enzyme';
import React from 'react';

import { LoaderButton } from '../../../src/components/LoaderButton/LoaderButton';

const onClick = jest.fn();
const onKeyUp = jest.fn();

const initialProps = {
  className: "something",
  id: "something",
  loadingText: "Some Loading Text...",
  name: "something",
  onClick,
  onKeyUp,
  text: "Some Text"
};

describe('LoaderButton', () => {
  it('displays text when not loading', () => {
    const wrapper =
      shallow(<LoaderButton isLoading={false} {...initialProps} />);
    expect(wrapper.find('button').text()).toEqual("Some Text");
  });

  it('is not disabled when not loading', () => {
    const wrapper =
      shallow(<LoaderButton isLoading={false} {...initialProps} />);
    expect(wrapper.find('button').props().disabled).toEqual(false);;
  });

  it('displays loadingText when loading', () => {
    const wrapper =
      shallow(<LoaderButton isLoading={true} {...initialProps} />);
    expect(wrapper.find('button').text()).toEqual("Some Loading Text...");;
  });

  it('is disabled when loading', () => {
    const wrapper =
      shallow(<LoaderButton isLoading={true} {...initialProps} />);
    expect(wrapper.find('button').props().disabled).toEqual(true);;
  });
});