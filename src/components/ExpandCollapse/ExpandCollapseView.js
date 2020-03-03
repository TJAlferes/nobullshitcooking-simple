import React from 'react';

const ExpandCollapseView = ({
  children,
  expanded,
  toggle,
  headingWhenCollapsed,
  headingWhenExpanded
}) => (
  <div className="expand-collapse">
    {
      !expanded
      ? (
        <div
          className="expand-collapse-heading"
          onClick={toggle}
          data-test="expand"
        >
          {headingWhenCollapsed}
        </div>
      )
      : (
        <div>
          <div
            className="expand-collapse-heading"
            onClick={toggle}
            data-test="collapse"
          >
            {headingWhenExpanded}
          </div>
          <br />
          {children}
        </div>
      )
    }
  </div>
);

export default ExpandCollapseView;