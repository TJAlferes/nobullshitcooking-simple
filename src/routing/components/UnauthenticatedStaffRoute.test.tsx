import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { UnauthenticatedStaffRoute } from './UnauthenticatedStaffRoute';

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

describe('UnauthenticatedStaffRoute', () => {
  it('should render component if user is not authenticated', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/example"]}>
        <UnauthenticatedStaffRoute staffIsAuthenticated={false} {...initialProps} />
      </MemoryRouter>
    );
    expect(wrapper.find('.test-example')).toHaveLength(1);
  });

  it('should not render component if user is authenticated', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/example"]}>
        <UnauthenticatedStaffRoute staffIsAuthenticated={true} {...initialProps} />
      </MemoryRouter>
    );
    expect(wrapper.find('.test-example')).toHaveLength(0);
  });

  it('should pass down childProps', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/example"]}>
        <UnauthenticatedStaffRoute staffIsAuthenticated={false} {...initialProps} />
      </MemoryRouter>
    );
    expect(wrapper.find('.test-example').text()).toEqual("Some text.");
  });
});