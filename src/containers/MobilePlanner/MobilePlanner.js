import React, { Component } from 'react';
import { connect } from 'react-redux';

import MobilePlannerRecipesList from './MobilePlannerRecipesList/MobilePlannerRecipesList';
import MobilePlannerDay from './MobilePlannerDay/MobilePlannerDay';
import MobilePlannerExpandedDay from './MobilePlannerExpandedDay/MobilePlannerExpandedDay';
import './mobilePlanner.css';  // use BEM

//import planData from './plan-data'; // just dummy data for dev

// TO DO: on page refresh, preserve state (localStorage? indexedDB? webSQL?)
// TO DO: clear/delete plan button
// TO DO: 1 week and 1 day views
// TO DO: plannerExpandedRecipe
// TO DO: button on recipe page to add to plan
// Prevent duplicate adds

class MobilePlanner extends Component {
  /*handleSave = async () => {  // put in redux-saga, perform 5 seconds after no mouse or keyboard activity
    const { isSaving, recipeLists } = this.state;
    // fetch or axios PUT on the already created record
    // setState({isSaving: true});
    // setState({isSaving: false});
  }*/

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
                {/* do you need Object.assign({}, ...Object.keys--) here? */}
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
                {id: 1, text: "Sheperd's Pie"},
                {id: 2, text: "Split Pea Soup"}
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

// = ({ blah blah blah }) => WATCH REDUX EGGHEAD IO
const mapStateToProps = state => ({
  isSaving: state.planner.isSaving,
  expanded: state.planner.expanded,
  expandedDay: state.planner.expandedDay,
  recipeListsInsideDays: state.planner.recipeListsInsideDays
});

export default connect(mapStateToProps)(MobilePlanner);