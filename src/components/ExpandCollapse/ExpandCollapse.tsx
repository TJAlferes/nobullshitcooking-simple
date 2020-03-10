import React, { useState } from 'react';
import PropTypes, { InferProps } from "prop-types";

import ExpandCollapseView from './ExpandCollapseView';

import './expandCollapse.css';

export default function ExpandCollapse({
  children,
  headingWhileCollapsed,
  headingWhileExpanded
}: InferProps<typeof ExpandCollapse.propTypes>): JSX.Element {
  const [ expanded, setExpanded ] = useState(false);

  const toggle = () => setExpanded(prevState => !prevState);

  return (
    <ExpandCollapseView
      expanded={expanded}
      toggle={toggle}
      headingWhileCollapsed={headingWhileCollapsed}
      headingWhileExpanded={headingWhileExpanded}
    >
      {children}
    </ExpandCollapseView>
  );
};

ExpandCollapse.propTypes = {
  children: PropTypes.element.isRequired,
  headingWhileCollapsed: PropTypes.string,
  headingWhileExpanded: PropTypes.string
};

ExpandCollapse.defaultProps = {
  headingWhileCollapsed: "More info (Click here to expand)",
  headingWhileExpanded: "(Click here to collapse)"
};