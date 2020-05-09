import React, { FunctionComponent } from 'react';

export const ExpandCollapseView: FunctionComponent<Props> = ({
  children,
  expanded,
  toggle,
  headingWhileCollapsed,
  headingWhileExpanded
}): JSX.Element => {
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
};

type Props = {
  expanded: boolean;
  toggle(): void; 
  headingWhileCollapsed: string;
  headingWhileExpanded: string;
};