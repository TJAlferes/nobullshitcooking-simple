import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
const uuidv4 = require('uuid/v4');

import convertUrlToPlanner from '../../../utils/publicPlanner/convertUrlToPlanner';

import { plannerPublicLoadFromUrl } from '../../../store/actions/index';

import LeftNav from '../../LeftNav/LeftNav';

import PlannerDay from './PlannerDay/PlannerDay';
import PlannerExpandedDay from './PlannerExpandedDay/PlannerExpandedDay';
import PlannerRecipesList from './PlannerRecipesList/PlannerRecipesList';

import './plan.css';

// TO DO: MAKE SPECIAL PLANNER BREADCRUMBS
// TO DO: LIMIT THE RECIPES PER DAY (including expanded day) TO SEVEN
// TO DO: actual recipes

class Plan extends Component {
  async componentDidMount() {
    const urlString = this.props.match.params.plan;
    // VALIDATE HERE TOO, have fallback to just /planner
    if (urlString !== '' && typeof urlString !== "undefined") {
      const preLoadedPlan = await convertUrlToPlanner(urlString);
      this.props.plannerPublicLoadFromUrl(preLoadedPlan);
    }
  }

  render() {
    const {
      expanded,
      expandedDay,
      publicUrl,
      recipeListsInsideDays,
      twoColumnATheme
    } = this.props;

    return (
      <div className={`two-column-a ${twoColumnATheme}`}>
        <LeftNav />
        <section>
          <div id="planner_header">
            <span className="demo-only-notice" style={{wordWrap: 'break-word'}}>
              {
                (
                  publicUrl == '' ||
                  publicUrl == "d1!d2!d3!d4!d5!d6!d7!d8!d9!d10!d11!d12!d13!d14!d15!d16!d17!d18!d19!d20!d21!d22!d23!d24!d25!d26!d27!d28"
                )
                ? `Drag recipes to days`
                : `Link to share: https://nobullshitcooking.com/planner/${publicUrl}`
              }
            </span>
            <h1>Planner</h1>
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
              list={props.dataRecipes.map(recipe => ({
                key: uuidv4(),
                id: recipe.recipe_id,
                text: recipe.title,
                image: recipe.recipe_image
              }))}
            />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  expanded: state.planner.expanded,
  expandedDay: state.planner.expandedDay,
  publicUrl: state.planner.publicUrl,
  recipeListsInsideDays: state.planner.recipeListsInsideDays,
  dataRecipes: state.data.recipes
});

const mapDispatchToProps = dispatch => ({
  plannerPublicLoadFromUrl: (preLoadedPlan) =>
    dispatch(plannerPublicLoadFromUrl(preLoadedPlan)) 
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Plan));