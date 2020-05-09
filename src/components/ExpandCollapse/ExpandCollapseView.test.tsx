import { shallow } from 'enzyme';
import React from 'react';

import { ExpandCollapseView } from './ExpandCollapseView';

const toggle = jest.fn();

describe('ExpandCollapseView', () => {
  it('displays correct heading when collapsed', () => {
    const wrapper = shallow(
      <ExpandCollapseView
        children="Howdy!"
        expanded={false}
        toggle={toggle}
        headingWhileCollapsed="Click Here To Expand"
        headingWhileExpanded="Click Here To Collapse"
      />
    );

    expect(wrapper.find('[data-test="expand"]')).toHaveLength(1);

    expect(wrapper.find('[data-test="collapse"]')).toHaveLength(0);

    expect(wrapper.find('[data-test="expand"]').text())
    .toEqual("Click Here To Expand");
  });

  it('displays correct heading when expanded', () => {
    const wrapper = shallow(
      <ExpandCollapseView
        children="Howdy!"
        expanded={true}
        toggle={toggle}
        headingWhileCollapsed="Click Here To Expand"
        headingWhileExpanded="Click Here To Collapse"
      />
    );

    expect(wrapper.find('[data-test="expand"]')).toHaveLength(0);

    expect(wrapper.find('[data-test="collapse"]')).toHaveLength(1);
    
    expect(wrapper.find('[data-test="collapse"]').text())
    .toEqual("Click Here To Collapse");
  });
});