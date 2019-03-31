import React, { Component } from 'react';
import { connect } from 'react-redux';
const uuidv4 = require('uuid/v4');

import LeftNav from '../../components/LeftNav/LeftNav';  // instead of doing it this way, just set up a component for pages that use leftnav
import PlannerRecipesList from './PlannerRecipesList/PlannerRecipesList';
import PlannerDay from './PlannerDay/PlannerDay';
import PlannerExpandedDay from './PlannerExpandedDay/PlannerExpandedDay';
//import CustomDragLayer from './CustomDragLayer';
import './planner.css';  // use BEM

// TO DO: on page refresh, preserve state (localStorage? indexedDB? webSQL?)
// TO DO: clear/delete plan button
// TO DO: button on recipe page to add to plan

class Planner extends Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();  // needed?
  }
  /*  also move to redux:
  handleSave = async () => {  // put in componentDidUpdate? throttle every 5 seconds
    const { isSaving, recipeLists } = this.state;
    // fetch or axios PUT on the already created record
    // setState({isSaving: true});
    // setState({isSaving: false});

    // or this should go in redux-thunk / redux-saga
  }
  */
  render() {
    const { isSaving, expanded, expandedDay, recipeListsInsideDays } = this.props;
    return (
      <div id="desktop_planner">
        <LeftNav
          isAuthenticated={this.props.isAuthenticated}
          getUser={this.props.getUser}
        />
        <article>
          <div id="planner_header">
            <h1>Planner</h1>
            <p id="autosave_feedback">
              {/*isSaving ? 'Saving changes...' : 'All changes saved.'*/}
            </p>
          </div>
          <hr />
          <div id="calendar_container">
            <div id="monthly_plan">
              <div id="table">
                <div id="thead">
                  <span className="th">Sunday</span>
                  <span className="th">Monday</span>
                  <span className="th">Tuesday</span>
                  <span className="th">Wednesday</span>
                  <span className="th">Thursday</span>
                  <span className="th">Friday</span>
                  <span className="th">Saturday</span>
                </div>
                <div id="tbody">
                  {/* do you need Object.assign({}, ...Object.keys etc.) here? */}
                  {Object.keys(recipeListsInsideDays).map((recipeList, i) => (
                    <div key={i} className="td">
                      <div className="content">
                        <PlannerDay
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
              <div id="expanded_day_area">
                <PlannerExpandedDay
                  day={expandedDay}
                  list={(expanded) ? recipeListsInsideDays[expandedDay] : []}
                  expanded={expanded}
                  expandedDay={expandedDay}
                />
              </div>
            </div>
            <PlannerRecipesList
              day="0"
              list={[
                {key: uuidv4(), id: 1, text: "Sheperd's Pie"},
                {key: uuidv4(), id: 2, text: "Split Pea Soup"},
                {key: uuidv4(), id: 3, text: "Steak Asparagus and Sweet Potato"}
              ]}
            />
          </div>
        </article>
      </div>
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

export default connect(mapStateToProps)(Planner);