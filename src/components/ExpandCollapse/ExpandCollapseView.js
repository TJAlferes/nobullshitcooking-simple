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
        <div className="expand-collapse-heading" onClick={toggle}>
          {headingWhenCollapsed}
        </div>
      )
      : (
        <div>
          <div className="expand-collapse-heading" onClick={toggle}>
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