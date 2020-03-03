import React, { useState } from 'react';

import ExpandCollapseView from './ExpandCollapseView';

import './expandCollapse.css';

const ExpandCollapse = ({
  children,
  headingWhileCollapsed,
  headingWhileExpanded
}) => {
  const [ expanded, setExpanded ] = useState(false);

  const toggle = () => setExpanded(prevState => !prevState);

  let headingWhenExpanded = headingWhileExpanded || "(Click here to collapse)";

  let headingWhenCollapsed = headingWhileCollapsed || "More info (Click here to expand)";

  return (
    <ExpandCollapseView
      expanded={expanded}
      toggle={toggle}
      headingWhenExpanded={headingWhenExpanded}
      headingWhenCollapsed={headingWhenCollapsed}
    >
      {children}
    </ExpandCollapseView>
  );
};

export default ExpandCollapse;