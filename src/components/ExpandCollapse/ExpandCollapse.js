import React, { useState } from 'react';

import './expandCollapse.css';

const ExpandCollapse = ({ children, headingWhileCollapsed, headingWhileExpanded }) => {
  const [ expanded, setExpanded ] = useState(false);

  const toggle = () => setExpanded(prevState => !prevState);

  headingWhileCollapsed
  let headingWhenExpanded = headingWhileExpanded || "(Click here to collapse)";
  let headingWhenCollapsed = headingWhileCollapsed || "More info (Click here to expand)";

  return (
    <div className="expand-collapse">
      {
        !expanded
        ? <div className="expand-collapse-heading" onClick={toggle}>{headingWhenCollapsed}</div>
        : (
          <div>
            <div className="expand-collapse-heading" onClick={toggle}>{headingWhenExpanded}</div>
            <br />
            {children}
          </div>
        )
      }
    </div>
  );
};

export default ExpandCollapse;