import React, { useState } from 'react';

//import './expandCollapse.css';

const ExpandCollapse = ({ children }) => {
  const [ currentClass, setCurrentClass ] = useState("collapsed");

  const expand = () => setCurrentClass("expanded");

  const collapse = () => setCurrentClass("collapsed");

  return (
    <div className="expand-collapse">
      {
        currentClass == "collapsed"
        ? <div onClick={expand}>More info</div>
        : (
          <div className="expanded" onClick={collapse}>
            <div>OK, got it</div>
            {children}
          </div>
        )
      }
    </div>
  );
};

export default ExpandCollapse;