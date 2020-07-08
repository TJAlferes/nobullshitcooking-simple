import { shallow } from 'enzyme';
import React from 'react';

import { Feed } from './Feed';

const initialProps = {
  theme: 'feed-light',
  postPreviews: [
    {
      postId: 1,
      title: "Some Title",
      author: "Laura",
      thumbnail: "some-image",
      snippet: "Some snippet..."
    },
    {
      postId: 2,
      title: "Some Other Title",
      author: "Larry",
      thumbnail: "some-other-image",
      snippet: "Some other snippet..."
    }
  ]
};

describe('Feed', () => {
  const wrapper = shallow(<Feed {...initialProps} />);

  // first postPreview

  it('displays a div element with key 1', () => {
    expect(wrapper.find('.post-preview').at(0).key())
    .toEqual("1");
  });

  it('displays a h1 element with text Some Title', () => {
    expect(wrapper.find('.post-preview__title').at(0).text())
    .toEqual("Some Title");
  });

  it('displays a span element with text Laura', () => {
    expect(wrapper.find('.post-preview__author').at(0).text())
    .toEqual("Laura");
  });

  it('displays an img element with src some-image', () => {
    expect(wrapper.find('.post-preview__thumbnail').at(0).prop('src'))
    .toEqual("some-image");
  });

  it('displays a p element with text Some snippet...', () => {
    expect(wrapper.find('.post-preview__snippet').at(0).text())
    .toEqual("Some snippet...");
  });

  // second postPreview

  it('displays a div element with key 2', () => {
    expect(wrapper.find('.post-preview').at(1).key())
    .toEqual("2");
  });

  it('displays a h1 element with text Some Other Title', () => {
    expect(wrapper.find('.post-preview__title').at(1).text())
    .toEqual("Some Other Title");
  });

  it('displays a span element with text Larry', () => {
    expect(wrapper.find('.post-preview__author').at(1).text())
    .toEqual("Larry");
  });

  it('displays an img element with src some-other-image', () => {
    expect(wrapper.find('.post-preview__thumbnail').at(1).prop('src'))
    .toEqual("some-other-image");
  });

  it('displays a p element with text Some other snippet...', () => {
    expect(wrapper.find('.post-preview__snippet').at(1).text())
    .toEqual("Some other snippet...");
  });
});