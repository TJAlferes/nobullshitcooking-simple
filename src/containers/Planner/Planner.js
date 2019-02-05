import React, { Component } from 'react';
import { connect } from 'react-redux';

import LeftNav from '../../components/LeftNav/LeftNav';  // instead of doing it this way, just set up a component for pages that use leftnav
import PlannerRecipesList from './PlannerRecipesList/PlannerRecipesList';
import PlannerDay from './PlannerDay/PlannerDay';
import PlannerExpandedDay from './PlannerExpandedDay/PlannerExpandedDay';
import './planner.css';  // use BEM

//import planData from './plan-data'; // just dummy data for dev

class Planner extends Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
    /*this.state = {
      isSaving: false,
      expanded: false,
      expandedDay: "none",
      recipeLists: planData
    };*/
  }

  // TO DO: finish delegating these methods to reducers
  handleClick = day => {
    const { expanded, expandedDay } = this.state;
    if (day === expandedDay) {
      this.setState({expanded: false, expandedDay: "none"});
    } else {
      this.setState({expanded: true, expandedDay: day});
    }
  }

  /*
  In the 3 methods below, we're not using standard JavaScript syntax
  We're using a syntax provided by the 'immutability-helper' npm package

  move to redux? for undo at least?
  */

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

  render() {
    const { recipeLists, expanded, expandedDay } = this.state;
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
                  {/* 
                  This may be the WRONG way to handle keys in React! find that lecture!
                  okay, here it's fine, the issue in in the recipes
                  */}
                  {recipeLists.map((recipeList, i) => (
                    <div key={i} className="td">
                      <div className="content">
                        <PlannerDay
                          day={recipeList.day}
                          list={recipeList.list}
                          onDayClick={this.handleClick}
                          onPushRecipe={this.handlePushRecipe}
                          onRemoveRecipe={this.handleRemoveRecipe}
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
                  list={(expanded) ? recipeLists[expandedDay - 1].list : []}
                  onDayClick={this.handleClick}
                  onPushRecipe={this.handlePushRecipe}
                  onRemoveRecipe={this.handleRemoveRecipe}
                  onReorderRecipe={this.handleReorderRecipe}
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

export default connect(mapStateToProps, mapDispatchToProps)(Planner);