import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.day = null;
    this.setSelfRef = element => {
      this.day = element;
    };
  }
  
  /*componentDidUpdate() {
    const { display } = this.state;
    // without this conditional, setState would be called endlessly
    if (display === "hide") return;
    this.setState({shiftX: moveX, shiftY: moveY});
  }*/
  
  handleMouseOver = async (e) => {
    // or use onMouseEnter
    const { dropdown, expanded, expandedDropdown, onNavMouseOver } = this.props;
    e.preventDefault(); // stoppropagation or none?
    await onNavMouseOver(dropdown);
  }

  render() {
    const { expanded, dropdown, expandedDropdown } = this.props;
    let display = (expanded && (dropdown === expandedDropdown)) ? 'show' : 'hide';
    return (
      <div
        className={`dropdown ${display}`}
        expanded={expanded}
        expandedDropdown={expandedDropdown}
      >
        {this.props.content}
      </div>
    );
  }
}

export default Dropdown;