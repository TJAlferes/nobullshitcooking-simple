import React, { Component } from 'react';

import LeftNav from '../../../components/LeftNav/LeftNav';
import { Styles } from './Styles';

import UserPlannerRecipe from './UserPlannerRecipe/UserPlannerRecipe';
import UserPlannerDay from './UserPlannerDay/UserPlannerDay';
import UserPlannerRecipesList from './UserPlannerRecipesList/UserPlannerRecipesList';

class UserPlanner extends Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
    this.state = {expanded: false, expandedDay: "none"};
  }

  handleClick = day => {
    const { expanded, expandedDay } = this.state;
    if (day === expandedDay) {
      this.setState({expandedDay: "none", expanded: false});
    } else {
      this.setState({expandedDay: day, expanded: true});
    }
  }

  render() {
    // use objects instead of arrays? so you have key for db? there's gotta be a way to clean this up anyway
    const list0 = [{id: 1, text: "Sheperd's Pie"}, {id: 2, text: "Split Pea Soup"}, {id: 3, text: "Steak Asparagus and Sweet Potato"}];
    const list1 = []; // and the rest of these are for the PlannerDays
    const list2 = [];
    const list3 = [];
    const list4 = [];
    const list5 = [];
    const list6 = [];
    const list7 = [];
    const list8 = [];
    const list9 = [];
    const list10 = [];
    const list11 = [];
    const list12 = [];
    const list13 = [];
    const list14 = [];
    const list15 = [];
    const list16 = [];
    const list17 = [];
    const list18 = [];
    const list19 = [];
    const list20 = [];
    const list21 = [];
    const list22 = [];
    const list23 = [];
    const list24 = [];
    const list25 = [];
    const list26 = [];
    const list27 = [];
    const list28 = [];

    const { expanded, expandedDay } = this.state;

    return (
      <Styles>
        <div id="page">

          <LeftNav isAuthenticated={this.props.isAuthenticated} getUser={this.props.getUser} userEmail={props.userEmail} />

          <article>

            <h1>Planner</h1>
            <p id="autosave_feedback">All changes saved.</p>
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
                      <td><UserPlannerDay day="1" list={list1} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="2" list={list2} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="3" list={list3} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="4" list={list4} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="5" list={list5} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="6" list={list6} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="7" list={list7} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                    </tr>
                    <tr id="week_2">
                      <td><UserPlannerDay day="8" list={list8} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="9" list={list9} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="10" list={list10} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="11" list={list11} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="12" list={list12} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="13" list={list13} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="14" list={list14} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                    </tr>
                    <tr id="week_3">
                      <td><UserPlannerDay day="15" list={list15} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="16" list={list16} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="17" list={list17} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="18" list={list18} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="19" list={list19} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="20" list={list20} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="21" list={list21} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                    </tr>
                    <tr id="week_4">
                      <td><UserPlannerDay day="22" list={list22} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="23" list={list23} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="24" list={list24} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="25" list={list25} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="26" list={list26} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="27" list={list27} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                      <td><UserPlannerDay day="28" list={list28} tRef={this.tableRef} onDayClick={this.handleClick} expanded={expanded} expandedDay={expandedDay}></UserPlannerDay></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <UserPlannerRecipesList day="0" list={list0}></UserPlannerRecipesList>

            </div>
            
          </article>

        </div>
      </Styles>
    );
  }
}

export default UserPlanner;