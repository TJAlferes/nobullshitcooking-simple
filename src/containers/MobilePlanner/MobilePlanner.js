import React, { Component } from 'react';
import { connect } from 'react-redux';

import MobilePlannerRecipesList from './MobilePlannerRecipesList/MobilePlannerRecipesList';
import MobilePlannerDay from './MobilePlannerDay/MobilePlannerDay';
import MobilePlannerExpandedDay from './MobilePlannerExpandedDay/MobilePlannerExpandedDay';
import {
  plannerAddRecipeToPlan,
  plannerRemoveRecipeFromPlan,
  plannerClickDay,
  plannerAddRecipeToDay,
  plannerRemoveRecipeFromDay,
  plannerReorderRecipeInDay
} from '../../store/actions/index';
import './mobilePlanner.css';  // use BEM

//import planData from './plan-data'; // just dummy data for dev

// TO DO: on page refresh, preserve state (localStorage? indexedDB? webSQL?)
// TO DO: clear/delete plan button
// TO DO: 1 week and 1 day views
// TO DO: plannerExpandedRecipe
// TO DO: button on recipe page to add to plan
// Prevent duplicate adds

class MobilePlanner extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      isSaving: false,
      expanded: false,
      expandedDay: "none",
      recipeLists: planData
    };
  }*/

  handleAddRecipeToPlan = recipeInstance => {
    this.props.plannerAddRecipeToPlan(recipeInstance);
  }

  handleRemoveRecipeFromPlan = recipeInstance => {
    this.props.plannerRemoveRecipeFromPlan(recipeInstance);
  }

  handleClickDay = day => {
    this.props.plannerClickDay(day);
  }
  
  handleAddRecipeToDay = (day, recipe) => {
    this.props.plannerAddRecipeToDay(day, recipe);
  }

  handleRemoveRecipeFromDay = (day, index) => {
    this.props.plannerRemoveRecipeFromDay(day, index);
  }

  handleReorderRecipeInDay = (day, dragIndex, hoverIndex, dragRecipe) => {
    this.props.plannerReorderRecipeInDay(day, dragIndex, hoverIndex, dragRecipe);
  }

  /*
  handleClick = day => {
    const { expandedDay } = this.state;
    if (day === expandedDay) {
      this.setState({expanded: false, expandedDay: "none"});
    } else {
      this.setState({expanded: true, expandedDay: day});
    }
  }

  handlePushRecipe = (day, recipe) => {
    this.setState(update(this.state, {
      recipeLists: {
        [day - 1]: {
          list: {
            $push: [recipe]
          }
        }
      }
    }));
  }

  handleRemoveRecipe = (day, index) => {
    this.setState(update(this.state, {
      recipeLists: {
        [day - 1]: {
          list: {
            $splice: [[index, 1]]
          }
        }
      }
    }));
  }

  handleReorderRecipe = (day, dragIndex, hoverIndex, dragRecipe) => {
    this.setState(update(this.state, {
      recipeLists: {
        [day - 1]: {
          list: {
            $splice: [[dragIndex, 1], [hoverIndex, 0, dragRecipe]]
          }
        }
      }
    }));
  }
  
  handleSave = async () => {  // put in componentDidUpdate? throttle every 5 seconds
    const { isSaving, recipeLists } = this.state;
    // fetch or axios PUT on the already created record
    // setState({isSaving: true});
    // setState({isSaving: false});

    // or this should go in redux-thunk / redux-saga
  }
  */

  render() {
    const { recipeListsInsideDays, expanded, expandedDay } = this.props;
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
                {/*
                This may be the WRONG way to handle keys in React! find that lecture!
                okay, here it's fine, the issue in in the recipes
                */}
                {recipeListsInsideDays.map((recipeList, i) => (
                  <div key={i} className="td">
                    <div className="content">
                      <MobilePlannerDay
                        day={i + 1}
                        list={recipeList}
                        onClickDay={this.handleClickDay}
                        onAddRecipeToDay={this.handleAddRecipeToDay}
                        onRemoveRecipeFromDay={this.handleRemoveRecipeFromDay}
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
                list={(expanded) ? recipeListsInsideDays[expandedDay - 1] : []}
                onClickDay={this.handleClickDay}
                onAddRecipeToDay={this.handleAddRecipeToDay}
                onRemoveRecipeFromDay={this.handleRemoveRecipeFromDay}
                onReorderRecipeInDay={this.handleReorderRecipeInDay}
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

/*const mapDispatchToProps = dispatch => ({

});*/

const actionCreators = {
  plannerAddRecipeToPlan,
  plannerRemoveRecipeFromPlan,
  plannerClickDay,
  plannerAddRecipeToDay,
  plannerRemoveRecipeFromDay,
  plannerReorderRecipeInDay
};

export default connect(mapStateToProps, actionCreators)(MobilePlanner);