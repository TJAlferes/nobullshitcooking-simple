import { shallow } from 'enzyme';
import React from 'react';

import { LoaderButton } from './LoaderButton';

const someHandler = jest.fn();

describe('LoaderButton component', () => {
  it('displays text when not loading', () => {
    const wrapper = shallow(
      <LoaderButton
        className="something"
        name="something"
        id="something"
        text="Some Text"
        loadingText="Some Loading Text..."
        isLoading={false}
        onClick={someHandler}
        onKeyUp={someHandler}
      />
    );
    expect(wrapper.find('button').text()).toEqual("Some Text");
  });

  it('displays loadingText when loading', () => {
    const wrapper = shallow(
      <LoaderButton
        className="something"
        name="something"
        id="something"
        text="Some Text"
        loadingText="Some Loading Text..."
        isLoading={true}
        onClick={someHandler}
        onKeyUp={someHandler}
      />
    );
    expect(wrapper.find('button').text()).toEqual("Some Loading Text...");;
  });

  it('is disabled when loading', () => {
    const wrapper = shallow(
      <LoaderButton
        className="something"
        name="something"
        id="something"
        text="Some Text"
        loadingText="Some Loading Text..."
        isLoading={true}
        onClick={someHandler}
        onKeyUp={someHandler}
      />
    );
    expect(wrapper.find('button').props().disabled).toEqual(true);;
  });
});