import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AriaModal from 'react-aria-modal';
const uuidv4 = require('uuid/v4');

import {
  plannerClearWork,
  plannerSetCreating,
  plannerSetEditingId,
  plannerSetPlanName,
  plannerSetPlanData,
  userCreateNewPlan,
  userEditPlan
} from '../../../../store/actions/index';

import ExpandCollapse from '../../../ExpandCollapse/ExpandCollapse';
import LeftNav from '../../../LeftNav/LeftNav';
import LoaderButton from '../../../LoaderButton/LoaderButton';

import PlannerDay from './PlannerDay/PlannerDay';
import PlannerExpandedDay from './PlannerExpandedDay/PlannerExpandedDay';
import PlannerRecipesList from './PlannerRecipesList/PlannerRecipesList';

import './userNewPlan.css';

const UserNewPlan = props => {
  const history = useHistory();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ editing, setEditing ] = useState(false);
  const [ tab, setTab ] = useState("official");
  const [ modalActive, setModalActive ] = useState(false);

  useEffect(() => {
    const getExistingPlanToEdit = () => {
      //if (props.childProps.editing !== "true") return;

      window.scrollTo(0,0);
      setLoading(true);
      setEditing(true);

      const [ prev ] = props.dataMyPlans
      .filter(plan => plan.plan_id === Number(props.match.params.id));
      console.log(prev);

      props.plannerSetEditingId(Number(prev.plan_id));
      props.plannerSetPlanName(prev.plan_name);
      props.plannerSetPlanData(prev.plan_data);
      setLoading(false);
    };

    if (props.editing && props.editing === "true") {
      props.plannerClearWork();
      getExistingPlanToEdit();
    } else {
      props.plannerClearWork();
      props.plannerSetCreating();
    }
  }, []);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (props.feedback !== "") window.scrollTo(0,0);
      setFeedback(props.feedback);
      if (
        props.feedback === "Plan created." ||
        props.feedback === "Plan updated."
      ) {
        setTimeout(() => {
          props.plannerClearWork();
          history.push('/user/dashboard');
        }, 3000);
      }
    }
    return () => isSubscribed = false;
  }, [props.feedback]);

  const handlePlanNameChange = e => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.value.trim().length > 20) {
      window.scrollTo(0,0);
      setFeedback("Please keep your plan name under 20 characters");
      setTimeout(() => setFeedback(""), 3000);
      return;
    }

    props.plannerSetPlanName(e.target.value);
  };

  const handleTabClick = e => setTab(e.target.name);

  const activateModal = () => setModalActive(true);

  const deactivateModal = () => setModalActive(false);

  const getApplicationNode = () => document.getElementById('root');

  const discardChanges = () => {
    setModalActive(false);
    props.plannerClearWork();
    history.push('/user/dashboard');
  };

  const getPlanData = () => {
    // not done; clean/format? *** keys???
    return JSON.stringify(props.recipeListsInsideDays);
  };

  const valid = () => {
    let validPlanName = props.planName.trim() !== "";
    let validPlanNameLength = props.planName.trim().length < 21;

    if (!validPlanName) {
      window.scrollTo(0,0);
      setFeedback("You forgot to name your plan...");
      setTimeout(() => setFeedback(""), 3000);
      return false;
    }

    if (!validPlanNameLength) {
      window.scrollTo(0,0);
      setFeedback("Please keep your plan name under 20 characters");
      setTimeout(() => setFeedback(""), 3000);
      return false;
    }

    return validPlanName && validPlanNameLength;
  };

  const handleSubmit = () => {
    const planInfo = {
      planName: props.planName,
      planData: getPlanData()
    };
    if (!valid()) return;
    if (editing === true) {
      planInfo.planId = props.editingId;
    }
    setLoading(true);
    try {
      if (editing === true) {
        props.userEditPlan(planInfo);
      } else {
        props.userCreateNewPlan(planInfo);
      }
    } catch(err) {
      setLoading(false);
      window.scrollTo(0,0);
    } finally {
      setLoading(false);
    }
  }

  return(
    <div className={`user-new-plan two-column-a ${props.twoColumnATheme}`}> 

      <LeftNav />

      <section>

        <div className="user-new-plan__header">
          <h1>{editing ? 'Edit Plan' : 'Create New Plan'}</h1>
          <p className="user-new-plan__error-message">{feedback}</p>
          <div className="user-new-plan__name">
            <label className="user-new-plan__name-label">Plan Name:</label>
            <input
              className="user-new-plan__name-input"
              type="text"
              onChange={handlePlanNameChange}
              value={props.planName}
            />
          </div>
        </div>

        <hr className="user-new-plan__hr" />



        <div className="user-new-plan__calendar-container">

          <div className="user-new-plan__monthly-plan">
            <div className="monthly-plan">
              <div className="monthly-plan__header">
                <span className="monthly-plan__header-day">Sunday</span>
                <span className="monthly-plan__header-day">Monday</span>
                <span className="monthly-plan__header-day">Tuesday</span>
                <span className="monthly-plan__header-day">Wednesday</span>
                <span className="monthly-plan__header-day">Thursday</span>
                <span className="monthly-plan__header-day">Friday</span>
                <span className="monthly-plan__header-day">Saturday</span>
              </div>
              <div className="monthly-plan__body">
                {Object.keys(props.recipeListsInsideDays).map((recipeList, i) => (
                  <div key={i} className="monthly-plan__body-day">
                    <div className="body-day__content">
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

            <div className="expanded-day-container">
              <PlannerExpandedDay
                day={props.expandedDay}
                list={(props.expanded)
                  ? props.recipeListsInsideDays[props.expandedDay]
                  : []
                }
                expanded={props.expanded}
                expandedDay={props.expandedDay}
              />
            </div>
          </div>



          <div className="planner-recipes-list-tabs">
            <button
              className={(tab === "official")
                ? "planner-recipes-list-tab active"
                : "planner-recipes-list-tab inactive"
              }
              name="official"
              onClick={e => handleTabClick(e)}
            >
              All Official
            </button>
            <button
              className={(tab === "private")
                ? "planner-recipes-list-tab active"
                : "planner-recipes-list-tab inactive"
              }
              name="private"
              onClick={e => handleTabClick(e)}
            >
              My Private
            </button>
            <button
              className={(tab === "public")
                ? "planner-recipes-list-tab active"
                : "planner-recipes-list-tab inactive"
              }
              name="public"
              onClick={e => handleTabClick(e)}
            >
              My Public
            </button>
            <button
              className={(tab === "favorite")
                ? "planner-recipes-list-tab active"
                : "planner-recipes-list-tab inactive"
              }
              name="favorite"
              onClick={e => handleTabClick(e)}
            >
              My Favorite
            </button>
            <button
              className={(tab === "saved")
                ? "planner-recipes-list-tab active"
                : "planner-recipes-list-tab inactive"
              }
              name="saved"
              onClick={e => handleTabClick(e)}
            >
              My Saved
            </button>
          </div>

          {tab === "official" && (
            <PlannerRecipesList
              day="0"
              list={props.dataRecipes.map(recipe => ({
                key: uuidv4(),
                id: recipe.recipe_id,
                text: recipe.title,
                image: recipe.recipe_image
              }))}
            />
          )}
          {tab === "private" && (
            <PlannerRecipesList
              day="0"
              list={props.dataMyPrivateRecipes.map(recipe => ({
                key: uuidv4(),
                id: recipe.recipe_id,
                text: recipe.title,
                image: recipe.recipe_image
              }))}
            />
          )}
          {tab === "public" && (
            <PlannerRecipesList
              day="0"
              list={props.dataMyPublicRecipes.map(recipe => ({
                key: uuidv4(),
                id: recipe.recipe_id,
                text: recipe.title,
                image: recipe.recipe_image
              }))}
            />
          )}
          {tab === "favorite" && (
            <PlannerRecipesList
              day="0"
              list={props.dataMyFavoriteRecipes.map(recipe => ({
                key: uuidv4(),
                id: recipe.recipe_id,
                text: recipe.title,
                image: recipe.recipe_image
              }))}
            />
          )}
          {tab === "saved" && (
            <PlannerRecipesList
              day="0"
              list={props.dataMySavedRecipes.map(recipe => ({
                key: uuidv4(),
                id: recipe.recipe_id,
                text: recipe.title,
                image: recipe.recipe_image
              }))}
            />
          )}

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
          <button className="planner-cancel-button" onClick={activateModal}>
            Cancel
          </button>
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
                underlayClickExits={false}
              >
                <p className="planner-cancel-prompt">
                  Cancel new plan? Changes will not be saved.
                </p>
                <button
                  className="planner-cancel-cancel-button"
                  onClick={deactivateModal}
                >
                  No, Keep Working
                </button>
                <button
                  className="planner-cancel-button"
                  onClick={discardChanges}
                >
                  Yes, Discard Changes
                </button>
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
            onClick={handleSubmit}
          />
        </div>

      </section>

    </div>
  );
}

const mapStateToProps = state => ({
  feedback: state.user.message,

  dataMyPlans: state.data.myPlans,

  dataRecipes: state.data.recipes,
  dataMyPublicRecipes: state.data.myPublicRecipes,
  dataMyPrivateRecipes: state.data.myPrivateRecipes,
  dataMyFavoriteRecipes: state.data.myFavoriteRecipes,
  dataMySavedRecipes: state.data.mySavedRecipes,

  expanded: state.planner.expanded,
  expandedDay: state.planner.expandedDay,
  editingId: state.planner.editingId,
  planName: state.planner.planName,
  recipeListsInsideDays: state.planner.recipeListsInsideDays
});

const mapDispatchToProps = dispatch => ({
  userCreateNewPlan: (planInfo) => dispatch(userCreateNewPlan(planInfo)),
  userEditPlan: (planInfo) => dispatch(userEditPlan(planInfo)),
  plannerClearWork: () => dispatch(plannerClearWork()),
  plannerSetCreating: () => dispatch(plannerSetCreating()),
  plannerSetEditingId: (id) => dispatch(plannerSetEditingId(id)),
  plannerSetPlanName: (name) => dispatch(plannerSetPlanName(name)),
  plannerSetPlanData: (data) => dispatch(plannerSetPlanData(data))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserNewPlan)
);