import React, { Component } from 'react';

import MobilePlannerRecipesList from './MobilePlannerRecipesList/MobilePlannerRecipesList';
import MobilePlannerDay from './MobilePlannerDay/MobilePlannerDay';
import './mobilePlanner.css';  // use BEM

import planData from './plan-data'; // just dummy data for dev

class MobilePlanner extends Component {
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
      <article id="mobile_planner">
        <div id="mobile_planner_header">
          <h1>Planner</h1>
          <p id="mobile_autosave_feedback">
            {/*isSaving ? 'Saving changes...' : 'All changes saved.'*/}
          </p>
        </div>
        <hr />
        <div id="mobile_calendar_container">
          <div id="mobile_monthly_plan">
            <div id="table" ref={this.tableRef}>
              <div id="thead">
                <span className="th">Sun</span>
                <span className="th">Mon</span>
                <span className="th">Tue</span>
                <span className="th">Wed</span>
                <span className="th">Thu</span>
                <span className="th">Fri</span>
                <span className="th">Sat</span>
              </div>
              <div id="tbody">
                <div className="td"><div className="content"><MobilePlannerDay day="1" list={recipeLists[0].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="2" list={recipeLists[1].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="3" list={recipeLists[2].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="4" list={recipeLists[3].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="5" list={recipeLists[4].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="6" list={recipeLists[5].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="7" list={recipeLists[6].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="8" list={recipeLists[7].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="9" list={recipeLists[8].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="10" list={recipeLists[9].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="11" list={recipeLists[10].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="12" list={recipeLists[11].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="13" list={recipeLists[12].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="14" list={recipeLists[13].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="15" list={recipeLists[14].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="16" list={recipeLists[15].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="17" list={recipeLists[16].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="18" list={recipeLists[17].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="19" list={recipeLists[18].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="20" list={recipeLists[19].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="21" list={recipeLists[20].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="22" list={recipeLists[21].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="23" list={recipeLists[22].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="24" list={recipeLists[23].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="25" list={recipeLists[24].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="26" list={recipeLists[25].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="27" list={recipeLists[26].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
                <div className="td"><div className="content"><MobilePlannerDay day="28" list={recipeLists[27].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></div></div>
              </div>
            </div>
            {/*<table ref={this.tableRef}>
              <thead>
                <tr>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr id="week_1">
                  <td><MobilePlannerDay day="1" list={recipeLists[0].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="2" list={recipeLists[1].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="3" list={recipeLists[2].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="4" list={recipeLists[3].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="5" list={recipeLists[4].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="6" list={recipeLists[5].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="7" list={recipeLists[6].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                </tr>
                <tr id="week_2">
                  <td><MobilePlannerDay day="8" list={recipeLists[7].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="9" list={recipeLists[8].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="10" list={recipeLists[9].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="11" list={recipeLists[10].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="12" list={recipeLists[11].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="13" list={recipeLists[12].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="14" list={recipeLists[13].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                </tr>
                <tr id="week_3">
                  <td><MobilePlannerDay day="15" list={recipeLists[14].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="16" list={recipeLists[15].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="17" list={recipeLists[16].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="18" list={recipeLists[17].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="19" list={recipeLists[18].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="20" list={recipeLists[19].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="21" list={recipeLists[20].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                </tr>
                <tr id="week_4">
                  <td><MobilePlannerDay day="22" list={recipeLists[21].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="23" list={recipeLists[22].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="24" list={recipeLists[23].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="25" list={recipeLists[24].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="26" list={recipeLists[25].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="27" list={recipeLists[26].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                  <td><MobilePlannerDay day="28" list={recipeLists[27].list} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay} /></td>
                </tr>
              </tbody>
            </table>*/}
          </div>
          <MobilePlannerRecipesList
            day="0"
            list={[
              {id: 1, text: "Sheperd's Pie"},
              {id: 2, text: "Split Pea Soup"},
              {id: 3, text: "Steak Asparagus and Sweet Potato"}
            ]}
          />
        </div>
      </article>
    );
  }
}

export default MobilePlanner;