import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.day = null;
    this.setSelfRef = element => {
      this.day = element;
    };
    this.state = {content: props.content, shiftX: 0, shiftY: 0};
  }
  
  componentDidUpdate() {
    // ********* JUST USE PORTALS INSTEAD??? **********
    // (would need to copy data / state over though)
    const dayClicked = this.day.getBoundingClientRect();
    const topCoords = dayClicked.top + pageYOffset;
    const leftCoords = dayClicked.left + pageXOffset;
    const { tRef } = this.props;
    const tablePos = findDOMNode(tRef.current).getBoundingClientRect();
    const moveY = (tablePos.top + pageYOffset) - topCoords;
    const moveX = (tablePos.right + pageXOffset + 10) - leftCoords;
    // without this conditional, setState would be called endlessly
    const { shiftX, shiftY } = this.state;
    if ((shiftX !== 0) || (shiftY !== 0)) return;  // issue is here I think... but maybe not... remember, it wasn't doing this before...
    this.setState({shiftX: moveX, shiftY: moveY});
  }
  
  handleMouse = async (e) => {
    // or use onMouseEnter
    const { dropdown, expanded, expandedDropdown, onNavMouseOver } = this.props;
    e.preventDefault(); // stoppropagation or none?
    await onDayClick(day);
  }

  render() {
    const { expanded, day, expandedDropdown } = this.props;
    let display = (expanded && (day === expandedDay))
    return (
      <div />
    );
  }
}