import React, { useEffect, useState } from 'react';
import AriaModal from 'react-aria-modal';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
const uuidv4 = require('uuid/v4');

import { userCreateNewPlan, plannerClearWork, plannerSetPlanName } from '../../../store/actions/index';
import LeftNav from '../../LeftNav/LeftNav';
import PlannerRecipesList from './PlannerRecipesList/PlannerRecipesList';
import PlannerDay from './PlannerDay/PlannerDay';
import PlannerExpandedDay from './PlannerExpandedDay/PlannerExpandedDay';
//import CustomDragLayer from './CustomDragLayer';
import LoaderButton from '../../LoaderButton/LoaderButton';
import ExpandCollapse from '../../ExpandCollapse/ExpandCollapse';
import './planner.css';  // use BEM

const Planner = props => {
  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ modalActive, setModalActive ] = useState(false);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (props.feedback !== "") window.scrollTo(0,0);
      setFeedback(props.feedback);
    }
    return () => isSubscribed = false;
  }, [props.feedback]);

  const handlePlanNameChange = e => {
    e.preventDefault();
    e.stopPropagation();
    props.plannerSetPlanName((e.target.value).trim());
  };

  const activateModal = () => setModalActive(true);

  const deactivateModal = () => setModalActive(false);

  const getApplicationNode = () => document.getElementById('root');

  const discardChanges = () => {
    setModalActive(false);
    props.plannerClearWork();
    props.history.push('/user/dashboard');
  };

  const getPlanData = () => {
    return props.recipeListsInsideDays;
  };

  const handleSubmit = () => {
    const planInfo = {planName: props.planName, planData: getPlanData()};
    setLoading(true);
    try {
      //props.userCreateNewPlan(planInfo, props.history);
      console.log(planInfo);
    } catch(err) {
      setLoading(false);
      window.scrollTo(0,0);
    } finally {
      setLoading(false);
    }
  }

  return(
    <div className={`desktop-planner two-column-a ${props.twoColumnATheme}`}>

      <LeftNav />

      <section>

        <div className="planner-header">
          <h1>Create New Plan</h1>
          <p className="error-message">{feedback}</p>
          <div className="planner-name">
            <label className="planner-name-label">Plan Name:</label>
            <input
              className="planner-name-input"
              type="text"
              onChange={handlePlanNameChange}
              value={props.planName}
            />
          </div>
        </div>

        <hr className="planner-hr" />

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
                {Object.keys(props.recipeListsInsideDays).map((recipeList, i) => (
                  <div key={i} className="td">
                    <div className="content">
                      <PlannerDay
                        day={i + 1}
                        list={props.recipeListsInsideDays[recipeList]}
                        expanded={props.expanded}
                        expandedDay={props.expandedDay}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="expanded_day_area">
              <PlannerExpandedDay
                day={props.expandedDay}
                list={(props.expanded) ? props.recipeListsInsideDays[props.expandedDay] : []}
                expanded={props.expanded}
                expandedDay={props.expandedDay}
              />
            </div>
          </div>

          {/* make filters */}
          <PlannerRecipesList
            day="0"
            list={[
              {key: uuidv4(), id: 1, text: "Sheperd's Pie"},
              {key: uuidv4(), id: 2, text: "Split Pea Soup"},
              {key: uuidv4(), id: 3, text: "Steak Asparagus and Sweet Potato"}
            ]}
          />

        </div>

        <div>
          <ExpandCollapse>
            <div>
              <p>- To add a recipe to your plan, drag it from the recipe list and drop it on a day</p>
              <p>- To use the same recipe more than once, simply drag from the recipe list again</p>
              <p>- To remove a recipe from your plan, drag and drop it back into the recipe list</p>
              <br />
              <p>Tip: Remember that you can make multiple plans.</p>
              <br />
              <p>- To move a recipe to a different day, drag it from its current day and drop it on your desired day</p>
              <p>- Click on a day to expand it</p>
              <p>- While a day is expanded, you may reorder its recipes by dragging them up or down</p>
              <br />
              <p>Tip: You don't have to cook every day, especially when just starting out. It's best to make a plan you can follow through on.</p>
              <br />
            </div>
          </ExpandCollapse>
        </div>

        <div className="planner-finish-area">
          <button className="planner-cancel-button" onClick={activateModal}>Cancel</button>
          {
            modalActive
            ? (
              <AriaModal
                dialogClass="planner-cancel-modal"
                titleText="Cancel?"
                onExit={deactivateModal}
                focusDialog="true"
                getApplicationNode={getApplicationNode}
                focusTrapOptions={{returnFocusOnDeactivate: false}}
              >
                <p className="planner-cancel-prompt">Cancel new plan? Changes will not be saved.</p>
                <button className="planner-cancel-cancel-button" onClick={deactivateModal}>No, Keep Working</button>
                <button className="planner-cancel-button" onClick={discardChanges}>Yes, Discard Changes</button>
              </AriaModal>
            )
            : false
          }
          <LoaderButton
            className="planner-submit-button"
            type="button"
            name="submit"
            text="Save Plan"
            loadingText="Saving Plan..."
            isLoading={loading}
            disabled={loading}
            onClick={handleSubmit}
          />
        </div>

      </section>

    </div>
  );
}

const mapStateToProps = state => ({
  viewingPlan: state.planner.viewing,
  creatingPlan: state.planner.creating,
  updatingPlan: state.planner.updating,
  isSaving: state.planner.isSaving,
  expanded: state.planner.expanded,
  expandedDay: state.planner.expandedDay,
  planName: state.planner.planName,
  recipeListsInsideDays: state.planner.recipeListsInsideDays
});

const mapDispatchToProps = dispatch => ({
  userCreateNewPlan: (planInfo, history) => dispatch(userCreateNewPlan(planInfo, history)),
  plannerClearWork: () => dispatch(plannerClearWork()),
  plannerSetPlanName: (name) => dispatch(plannerSetPlanName(name))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Planner));