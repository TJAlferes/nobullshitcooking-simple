import React from 'react';

interface ExpandCollapseViewProps {
  children: object;
  expanded: boolean;
  toggle(): void;
  headingWhenCollapsed: string;
  headingWhenExpanded: string;
}

const ExpandCollapseView = ({
  children,
  expanded,
  toggle,
  headingWhenCollapsed,
  headingWhenExpanded
}: ExpandCollapseViewProps): JSX.Element => (
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