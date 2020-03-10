import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

export default function ExpandCollapseView({
  children,
  expanded,
  toggle,
  headingWhileCollapsed,
  headingWhileExpanded
}: InferProps<typeof ExpandCollapseView.propTypes>): JSX.Element {
  return (
    <div className="expand-collapse">
      {
        !expanded
        ? (
          <div
            className="expand-collapse-heading"
            onClick={toggle}
            data-test="expand"
          >
            {headingWhileCollapsed}
          </div>
        )
        : (
          <div>
            <div
              className="expand-collapse-heading"
              onClick={toggle}
              data-test="collapse"
            >
              {headingWhileExpanded}
            </div>
            <br />
            {children}
          </div>
        )
      }
    </div>
  );
}

ExpandCollapseView.propTypes = {
  children: PropTypes.element.isRequired,
  expanded: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  headingWhileCollapsed: PropTypes.string,
  headingWhileExpanded: PropTypes.string
};