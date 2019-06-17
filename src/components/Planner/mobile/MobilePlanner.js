import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
const uuidv4 = require('uuid/v4');

import MobilePlannerRecipesList from './MobilePlannerRecipesList/MobilePlannerRecipesList';
import MobilePlannerDay from './MobilePlannerDay/MobilePlannerDay';
import MobilePlannerExpandedDay from './MobilePlannerExpandedDay/MobilePlannerExpandedDay';
//import CustomDragLayer from './CustomDragLayer';
import './mobilePlanner.css';  // use BEM

// TO DO: on page refresh, preserve state (localStorage? indexedDB? webSQL?) (... localForage.)
// TO DO: clear/delete plan button
// TO DO: button on recipe page to add to plan

class MobilePlanner extends Component {
  render() {
    const { isSaving, expanded, expandedDay, recipeListsInsideDays } = this.props;
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
            <div id="table">
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
                {Object.keys(recipeListsInsideDays).map((recipeList, i) => (
                  <div key={i} className="td">
                    <div className="content">
                      <MobilePlannerDay
                        day={i + 1}
                        list={recipeListsInsideDays[recipeList]}
                        expanded={expanded}
                        expandedDay={expandedDay}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id="mobile_work_area">
            <MobilePlannerRecipesList
              day="0"
              list={[
                {key: uuidv4(), id: 1, text: "Sheperd's Pie"},
                {key: uuidv4(), id: 2, text: "Split Pea Soup"},
                {key: uuidv4(), id: 3, text: "Steak Asparagus and Sweet Potato"}
              ]}
            />
            <div id="mobile_expanded_day_area">
              <MobilePlannerExpandedDay
                day={expandedDay}
                list={(expanded) ? recipeListsInsideDays[expandedDay] : []}
                expanded={expanded}
                expandedDay={expandedDay}
              />
            </div>
          </div>
        </div>
      </article>
    );
  }
}

const mapStateToProps = state => ({
  isSaving: state.planner.isSaving,
  expanded: state.planner.expanded,
  expandedDay: state.planner.expandedDay,
  recipeListsInsideDays: state.planner.recipeListsInsideDays
});

export default withRouter(connect(mapStateToProps)(MobilePlanner));