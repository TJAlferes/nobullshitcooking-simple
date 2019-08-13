import React, { useState } from 'react';

import './expandCollapse.css';

const ExpandCollapse = ({ children }) => {
  const [ expanded, setExpanded ] = useState(false);

  const toggle = () => setExpanded(prevState => !prevState);

  return (
    <div className="expand-collapse" onClick={toggle}>
      {
        !expanded
        ? <div className="expand-collapse-heading">More info (Click to expand)</div>
        : (
          <div>
            <div className="expand-collapse-heading">(Click to collapse)</div>
            <br />
            {children}
          </div>
        )
      }
    </div>
  );
};

export default ExpandCollapse;