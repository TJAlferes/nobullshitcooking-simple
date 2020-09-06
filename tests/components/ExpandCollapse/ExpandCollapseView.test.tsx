import { shallow } from 'enzyme';
import React from 'react';

import { ExpandCollapseView } from '../../../src/components/ExpandCollapse/ExpandCollapseView';

const toggle = jest.fn();

const initialProps = {
  children: "Howdy!",
  toggle,
  headingWhileCollapsed: "Click Here To Expand",
  headingWhileExpanded: "Click Here To Collapse"
};

describe('ExpandCollapseView', () => {
  it('displays correct heading when collapsed', () => {
    const wrapper =
      shallow(<ExpandCollapseView expanded={false} {...initialProps}/>);

    expect(wrapper.find('[data-test="expand"]')).toHaveLength(1);
    expect(wrapper.find('[data-test="collapse"]')).toHaveLength(0);
    expect(wrapper.find('[data-test="expand"]').text())
      .toEqual("Click Here To Expand");
  });

  it('displays correct heading when expanded', () => {
    const wrapper =
      shallow(<ExpandCollapseView expanded={true} {...initialProps} />);

    expect(wrapper.find('[data-test="expand"]')).toHaveLength(0);
    expect(wrapper.find('[data-test="collapse"]')).toHaveLength(1);
    expect(wrapper.find('[data-test="collapse"]').text())
      .toEqual("Click Here To Collapse");
  });
});