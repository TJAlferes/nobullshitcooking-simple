import React, { Component } from 'react';

import menuAim from '../../../../components/Modal/MenuAim';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    /*this.day = null;
    this.setSelfRef = element => {
      this.day = element;
    };*/
    this.state = {
      activeMenuIndex: 0
    };
  }
  
  /*componentDidUpdate() {
    const { display } = this.state;
    // without this conditional, setState would be called endlessly
    if (display === "hide") return;
    this.setState({shiftX: moveX, shiftY: moveY});
  }
  
  handleMouseOver = async (e) => {
    // or use onMouseEnter
    const { dropdown, expanded, expandedDropdown, onNavMouseOver } = this.props;
    e.preventDefault(); // stoppropagation or none?
    await onNavMouseOver(dropdown);
  }*/

  getDefaultProps = () => ({submenuDirection: 'right'});  // update?

  getInitialState = () => ({activeMenuIndex: 0});  // update?

  UNSAFE_componentWillMount() {  // update
    this.initMenuAim({
      submenuDirection: this.props.submenuDirection,
      menuSelector: '.menu',
      delay: 300,
      tolerance: 75
    });
  }

  handleSwitchMenuIndex = index => {
    this.setState({activeMenuIndex: index});
  }

  render() {
    /*const { expanded, dropdown, expandedDropdown } = this.props;
    let display = (expanded && (dropdown === expandedDropdown)) ? 'show' : 'hide';
    return (
      <div
        className={`dropdown ${display}`}
        expanded={expanded}
        expandedDropdown={expandedDropdown}
      >
        {this.props.content}
      </div>
    );*/
    let self = this;  // ?
    let containerClassName = 'menu-container ' + this.props.submenuDirection;
    let subMenuStyle = {};
    //if (this.props.submenuDirection === 'below') subMenuStyle.left = this.state.activeMenuIndex * 140;
    
    return (
      <div className={containerClassName}>
        <ul className="menu" onMouseLeave={this.handleMouseLeaveMenu}>
          {
            this.props.menuData.map(function(menu, index) {
              var className = 'menu-item';
              if (index === self.state.activeMenuIndex) className += ' active';
              return (
                <li 
                  className={className}
                  key={index}
                  onMouseEnter={function(){
                    self.handleMouseEnterRow.call(self, index, self.handleSwitchMenuIndex);
                  }}
                >
                  {menu.name}
                </li>
              );
            })
          }
        </ul>
        <ul className="sub-menu" style={subMenuStyle}>
          {
            this.props
            .menuData[this.state.activeMenuIndex].subMenu
            .map(function(subMenu, index){
              return <li className="sub-menu-item" key={index}>{subMenu}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default menuAim(Dropdown);