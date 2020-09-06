import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { UnauthenticatedUserRoute } from '../../../src/routing/components/UnauthenticatedUserRoute';

const ExampleComponent = ({ someProp }: any): JSX.Element =>
  <div className="test-example">{someProp}</div>;

const initialProps = {
  path: "/example",
  component: ExampleComponent,
  childProps: {someProp: "Some text."},
  breadCrumbsTheme: "light",
  navGridATheme: "light",
  oneColumnATheme: "light",
  tableATheme: "light",
  twoColumnATheme: "light",
  twoColumnBTheme: "light"
};

describe('UnauthenticatedRoute', () => {
  it('should render component if user is not authenticated', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/example"]}>
        <UnauthenticatedUserRoute userIsAuthenticated={false} {...initialProps} />
      </MemoryRouter>
    );
    expect(wrapper.find('.test-example')).toHaveLength(1);
  });

  it('should not render component if user is authenticated', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/example"]}>
        <UnauthenticatedUserRoute userIsAuthenticated={true} {...initialProps} />
      </MemoryRouter>
    );
    expect(wrapper.find('.test-example')).toHaveLength(0);
  });

  it('should pass down childProps', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/example"]}>
        <UnauthenticatedUserRoute userIsAuthenticated={false} {...initialProps} />
      </MemoryRouter>
    );
    expect(wrapper.find('.test-example').text()).toEqual("Some text.");
  });
});