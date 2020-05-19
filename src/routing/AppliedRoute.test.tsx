import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { AppliedRoute } from './AppliedRoute';

const ExampleComponent = ({ someProp }: any): JSX.Element =>
  <div className="test-example">{someProp}</div>;

const initialProps = {
  path: "/example",
  component: ExampleComponent,
  childProps: {someProp: "Some text."},
  breadCrumbsTheme: "light",
  navGridATheme: "light",
  oneColumnATheme: "light",
  twoColumnATheme: "light",
  twoColumnBTheme: "light",
  tableATheme: "light"
};

describe('AppliedRoute', () => {
  it('should render component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/example"]}>
        <AppliedRoute {...initialProps} />
      </MemoryRouter>
    );
    expect(wrapper.find('.test-example')).toHaveLength(1);
  });

  it('should pass down childProps', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/example"]}>
        <AppliedRoute {...initialProps} />
      </MemoryRouter>
    );
    expect(wrapper.find('.test-example').text()).toEqual("Some text.");
  });
});