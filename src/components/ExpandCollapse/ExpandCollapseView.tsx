import React, { FC } from 'react';

export const ExpandCollapseView: FC<Props> = ({
  children,
  expanded,
  headingWhileCollapsed,
  headingWhileExpanded,
  toggle
}): JSX.Element => {
  return (
    <div className="expand-collapse">
      {
        !expanded
        ? (
          <div
            className="expand-collapse__heading"
            data-test="expand"
            onClick={toggle}
          >
            {headingWhileCollapsed}
          </div>
        )
        : (
          <>
            <div
              className="expand-collapse__heading"
              data-test="collapse"
              onClick={toggle}
            >
              {headingWhileExpanded}
            </div>
            <br />
            {children}
          </>
        )
      }
    </div>
  );
};

type Props = {
  expanded: boolean;
  headingWhileCollapsed: string;
  headingWhileExpanded: string;
  toggle(): void; 
};