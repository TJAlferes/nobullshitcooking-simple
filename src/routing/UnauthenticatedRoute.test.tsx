import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { UnauthenticatedRoute } from './UnauthenticatedRoute';

describe('UnauthenticatedRoute', () => {
  it('should render component if user is not authenticated', () => {
    const TestExample = () => <div className="test-example"></div>;
    const wrapper = mount(
      <MemoryRouter>
        <UnauthenticatedRoute
          to="/example"
          component={TestExample}
          isAuthenticated={false}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('.test-example')).toHaveLength(1);
  });

  it('should not render component if user is authenticated', () => {
    const TestExample = () => <div className="test-example"></div>;
    const wrapper = mount(
      <MemoryRouter>
        <UnauthenticatedRoute
          to="/example"
          component={TestExample}
          isAuthenticated={true}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('.test-example')).toHaveLength(0);
  });
});