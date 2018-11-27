import React, { Component } from 'react';
import { connect } from 'react-redux';

import LeftNav from '../../components/LeftNav/LeftNav';  // instead of doing it this way, just set up a component for pages that use leftnav?
import PlannerRecipesList from './PlannerRecipesList/PlannerRecipesList';
import PlannerDay from './PlannerDay/PlannerDay';
import './planner.css';  // use BEM

class Planner extends Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
    this.state = {
      isSaving: false,
      expanded: false,
      expandedDay: "none",
      recipeLists: {
        0: [
          {id: 1, text: "Sheperd's Pie"},
          {id: 2, text: "Split Pea Soup"},
          {id: 3, text: "Steak Asparagus and Sweet Potato"}
        ],
  
        1: [
          {id: 1, text: "Sheperd's Pie"}
        ],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
  
        8: [],
        9: [],
        10: [],
        11: [],
        12: [],
        13: [],
        14: [],
  
        15: [
          {id: 1, text: "Sheperd's Pie"}
        ],
        16: [],
        17: [],
        18: [],
        19: [],
        20: [],
        21: [],
  
        22: [],
        23: [],
        24: [],
        25: [],
        26: [],
        27: [],
        28: []
      }
    };
  }

  handleClick = day => {
    const { expanded, expandedDay } = this.state;
    if (day === expandedDay) {
      this.setState({expanded: false, expandedDay: "none"});
    } else {
      this.setState({expanded: true, expandedDay: day});
    }
  }

  handleSave = async () => {  // put in componentDidUpdate? throttle every 5 seconds
    const { isSaving, recipeLists } = this.state;
    // fetch or axios PUT on the already created record
    // setState({isSaving: true});
    // setState({isSaving: false});

    // or this should go in redux-thunk / redux-saga
  }

  render() {
    const { expanded, expandedDay } = this.state;
    return (
      <div id="page">
        <LeftNav
          isAuthenticated={this.props.isAuthenticated}
          getUser={this.props.getUser}
        />
        <article>
          <h1>Planner</h1>
          <p id="autosave_feedback">
            {isSaving ? 'Saving changes...' : 'All changes saved.'}
          </p>
          <hr />
          <div id="calendar_container">
            <div id="monthly_plan">
              <table ref={this.tableRef}>
                <thead>
                  <tr>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="week_1">
                    <td><PlannerDay day="1" list={list1} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="2" list={list2} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="3" list={list3} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="4" list={list4} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="5" list={list5} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="6" list={list6} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="7" list={list7} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  </tr>
                  <tr id="week_2">
                    <td><PlannerDay day="8" list={list8} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="9" list={list9} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="10" list={list10} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="11" list={list11} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="12" list={list12} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="13" list={list13} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="14" list={list14} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  </tr>
                  <tr id="week_3">
                    <td><PlannerDay day="15" list={list15} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="16" list={list16} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="17" list={list17} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="18" list={list18} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="19" list={list19} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="20" list={list20} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="21" list={list21} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  </tr>
                  <tr id="week_4">
                    <td><PlannerDay day="22" list={list22} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="23" list={list23} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="24" list={list24} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="25" list={list25} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="26" list={list26} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="27" list={list27} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="28" list={list28} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <PlannerRecipesList day="0" list={list0} />
          </div>
        </article>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Planner);