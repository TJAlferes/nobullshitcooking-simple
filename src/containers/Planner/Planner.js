import React, { Component } from 'react';

import LeftNav from '../../components/LeftNav/LeftNav';  // instead of doing it this way, just set up a component for pages that use leftnav?
import PlannerRecipesList from './PlannerRecipesList/PlannerRecipesList';
import PlannerDay from './PlannerDay/PlannerDay';
import './planner.css';  // use BEM

import planData from './plan-data'; // just dummy data for dev

class Planner extends Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
    this.state = {
      isSaving: false,
      expanded: false,
      expandedDay: "none",
      recipeLists: planData
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
    const { recipeLists, expanded, expandedDay } = this.state;
    return (
      <div id="desktop_planner">
        <LeftNav
          isAuthenticated={this.props.isAuthenticated}
          getUser={this.props.getUser}
        />

        <article className="desktop_display">
          <h1>Planner</h1>
          <p id="autosave_feedback">
            {/*isSaving ? 'Saving changes...' : 'All changes saved.'*/}
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
                    <td><PlannerDay day="1" list={recipeLists[0].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="2" list={recipeLists[1].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="3" list={recipeLists[2].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="4" list={recipeLists[3].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="5" list={recipeLists[4].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="6" list={recipeLists[5].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="7" list={recipeLists[6].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  </tr>
                  <tr id="week_2">
                    <td><PlannerDay day="8" list={recipeLists[7].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="9" list={recipeLists[8].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="10" list={recipeLists[9].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="11" list={recipeLists[10].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="12" list={recipeLists[11].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="13" list={recipeLists[12].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="14" list={recipeLists[13].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  </tr>
                  <tr id="week_3">
                    <td><PlannerDay day="15" list={recipeLists[14].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="16" list={recipeLists[15].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="17" list={recipeLists[16].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="18" list={recipeLists[17].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="19" list={recipeLists[18].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="20" list={recipeLists[19].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="21" list={recipeLists[20].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  </tr>
                  <tr id="week_4">
                    <td><PlannerDay day="22" list={recipeLists[21].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="23" list={recipeLists[22].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="24" list={recipeLists[23].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="25" list={recipeLists[24].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="26" list={recipeLists[25].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="27" list={recipeLists[26].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                    <td><PlannerDay day="28" list={recipeLists[27].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <PlannerRecipesList
              day="0"
              list={[
                {id: 1, text: "Sheperd's Pie"},
                {id: 2, text: "Split Pea Soup"},
                {id: 3, text: "Steak Asparagus and Sweet Potato"}
              ]}
            />
          </div>
        </article>

      </div>
    );
  }
}

export default Planner;