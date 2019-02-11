import React, { Component } from 'react';
import { connect } from 'react-redux';
//import update from 'immutability-helper';

import LeftNav from '../../components/LeftNav/LeftNav';  // instead of doing it this way, just set up a component for pages that use leftnav
import PlannerRecipesList from './PlannerRecipesList/PlannerRecipesList';
import PlannerDay from './PlannerDay/PlannerDay';
import PlannerExpandedDay from './PlannerExpandedDay/PlannerExpandedDay';
import CustomDragLayer from './CustomDragLayer';
/*import {
  plannerAddRecipeToPlan,
  plannerRemoveRecipeFromPlan,
  plannerClickDay,
  plannerAddRecipeToDay,
  plannerRemoveRecipeFromDay,
  plannerReorderRecipeInDay
} from '../../store/actions/index';*/
import './planner.css';  // use BEM

//import planData from './plan-data'; // just dummy data for dev

class Planner extends Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
  }
  /*
  handleAddRecipeToPlan = recipeInstance => {
    this.props.plannerAddRecipeToPlan(recipeInstance);
  }

  handleRemoveRecipeFromPlan = recipeInstance => {
    this.props.plannerRemoveRecipeFromPlan(recipeInstance);
  }
  */
  /*handleClickDay = day => {
    console.log(day + ' clicked.');
    this.props.plannerClickDay(day);
  }*/
  /*
  handleAddRecipeToDay = (day, recipe) => {
    this.props.plannerAddRecipeToDay(day, recipe);
  }

  handleRemoveRecipeFromDay = (day, index) => {
    this.props.plannerRemoveRecipeFromDay(day, index);
  }

  handleReorderRecipeInDay = (day, dragIndex, hoverIndex, dragRecipe) => {
    this.props.plannerReorderRecipeInDay(day, dragIndex, hoverIndex, dragRecipe);
  }
  */
  // also move to redux:
  /*
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
          <CustomDragLayer />
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
                  {/* do you need Object.assign({}, ...Object.keys--) here? */}
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

// = ({ blah blah blah }) => WATCH REDUX EGGHEAD IO
const mapStateToProps = state => ({
  isSaving: state.planner.isSaving,
  expanded: state.planner.expanded,
  expandedDay: state.planner.expandedDay,
  recipeListsInsideDays: state.planner.recipeListsInsideDays
});

/*const actionCreators = {
  plannerAddRecipeToPlan,
  plannerRemoveRecipeFromPlan,
  plannerClickDay,
  plannerAddRecipeToDay,
  plannerRemoveRecipeFromDay,
  plannerReorderRecipeInDay
};*/

/*const mapDispatchToProps = dispatch => ({
  plannerAddRecipeToPlan: (recipeInstance) => dispatch(plannerAddRecipeToPlan(recipeInstance)),
  plannerRemoveRecipeFromPlan: (recipeInstance) => dispatch(plannerRemoveRecipeFromPlan(recipeInstance)),
  plannerAddRecipeToDay: (day, recipe) => dispatch(plannerAddRecipeToDay(day, recipe)),
  plannerRemoveRecipeFromDay: (day, index) => dispatch(plannerRemoveRecipeFromDay(day, index)),
  plannerReorderRecipeInDay: (day, dragIndex, hoverIndex, dragRecipe) => dispatch(plannerReorderRecipeInDay(day, dragIndex, hoverIndex, dragRecipe))
});*/

export default connect(mapStateToProps)(Planner);