import React, { Component } from 'react';
import { createPortal, findDOMNode } from 'react-dom';

import './portalRoom.css';

const planData = [
  {
    day: 1,
    list: []
  },
  {
    day: 2,
    list: []
  }
];

const MobilePlannerRecipe = props => {
  const { recipe } = props;
  return <div className="mobile_planner_recipe">{recipe.text}</div>;
}

class MobilePlannerDay extends Component {
  constructor(props) {
    super(props);
    this.day = null;
    this.setSelfRef = element => {
      this.day = element;
    };
    this.state = {recipes: props.list};
  }

  handleClick = async (e) => {
    const { day, onDayClick } = this.props;
    e.preventDefault(); // stoppropagation or none?
    await onDayClick(day);
  }

  render() {
    const { recipes } = this.state;
    const { expanded, day, expandedDay } = this.props;
    //let size = (expanded && (day === expandedDay)) ? "mobile_planner_day_expanded" : "mobile_planner_day_collapsed";
    return (
      <div
        className="mobile_planner_day_collapsed"
        ref={this.setSelfRef}
        onClick={this.handleClick}
      >
        <span className="mobile_the_date">{day}</span>
        {recipes.map((recipe, i) => (
          <MobilePlannerRecipe
            key={recipe.id}
            index={i}
            listId={this.props.id}
            recipe={recipe}
            expanded={expanded}
            day={day}
            expandedDay={expandedDay}
            className="mobile_planner_recipe"
          />
        ))}
      </div>
    );
  }
}

/*class AreaThree extends Component {
  constructor(props) {
    super(props);
    this.day = null;
    this.setSelfRef = element => {
      this.day = element;
    };
  }

  handleClick = 
}*/

class PortalRoom extends Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef(); // do you need this now? we still may, for handleClick?
    this.areaThreeRef = React.createRef();
    this.state = {
      expanded: false,
      expandedDay: "none",
      recipeLists: planData
    };
  }

  handleClick = day => {
    const { expandedDay } = this.state;
    if (day === expandedDay) {
      this.setState({expanded: false, expandedDay: "none"});
    } else {
      this.setState({expanded: true, expandedDay: day});
    }
    //areaThreeById.appendChild(this.el);
    //areaThreeById.removeChild(this.el);
  }

  render() {
    const { recipeLists, expanded, expandedDay } = this.state;
    return (
      <div id="portal-room">

        Welcome to the portal room.

        <div id="tbody">
          <div className="td">
            <MobileDayToggle aRef={this.areaThreeRef}>
              <MobilePlannerDay
                day="1"
                list={recipeLists[0].list}
                tRef={this.tableRef}
                onDayClick={this.handleClick}
                expanded={expanded}
                expandedDay={expandedDay}
              />
            </MobileDayToggle>
          </div>
          <div className="td">
            <MobileDayToggle aRef={this.areaThreeRef}>
              <MobilePlannerDay
                day="2"
                list={recipeLists[1].list}
                tRef={this.tableRef}
                onDayClick={this.handleClick}
                expanded={expanded}
                expandedDay={expandedDay}
              />
            </MobileDayToggle>
          </div>
        </div>

        <div>
          Area 3
          <div id="area-3" ref={this.areaThreeRef}></div>
        </div>

      </div>
    );
  }
}

const areaThreeById = document.getElementById('area-3');

class MobileDayToggle extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    //this.areaThree = findDOMNode(this.props.aRef.current);
    /*this.day = null;
    this.setSelfRef = element => {
      this.day = element;
    }; but in area3?*/
  }

  /*triggerPortal = () => {
    this.areaThree.appendChild(this.el);
  }*/

  /*componentDidMount() {
    //this.areaThree.appendChild(this.el);
    areaThreeById.appendChild(this.el);
  }

  componentWillUnmount() {
    //this.areaThree.removeChild(this.el);
    areaThreeById.removeChild(this.el);
  }*/

  /*render() {
    return createPortal(
      <div onClick={this.triggerPortal}>{this.props.children}</div>,
      this.el
    );
  }*/
  render() {
    return <div className="content">{this.props.children}</div>;
  }
}

export default PortalRoom;