import React, { useMemo } from 'react';
import AriaModal from 'react-aria-modal';
const uuidv4 = require('uuid/v4');

import ExpandCollapse from '../../../ExpandCollapse/ExpandCollapse';
import LeftNav from '../../../LeftNav/LeftNav';
import LoaderButton from '../../../LoaderButton/LoaderButton';

import Day from './Day/Day';
import ExpandedDay from './ExpandedDay/ExpandedDay';
import RecipesList from './RecipesList/RecipesList';

import './newPlan.css';

const NewPlanView = ({
  twoColumnATheme,
  feedback,
  loading,
  editing,

  planName,
  handlePlanNameChange,

  recipeListsInsideDays,
  expandedDay,
  expanded,

  dataRecipes,
  dataMyPrivateRecipes,
  dataMyPublicRecipes,
  dataMyFavoriteRecipes,
  dataMySavedRecipes,

  tab,
  handleTabClick,
  
  modalActive,
  activateModal,
  deactivateModal,
  getApplicationNode,
  discardChanges,
  handleSubmit
}) => {
  const memoizedMonthlyPlan = useMemo(() => {
    return (
      <div className="new-plan__monthly-plan">
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
            {Object.keys(recipeListsInsideDays).map((recipeList, i) => (
              <div key={i} className="monthly-plan__body-day">
                <div className="body-day__content">
                  <Day
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

        <div className="expanded-day-container">
          <ExpandedDay
            day={expandedDay}
            list={(expanded)
              ? recipeListsInsideDays[expandedDay]
              : []
            }
            expanded={expanded}
            expandedDay={expandedDay}
          />
        </div>
      </div>
    );
  }, [recipeListsInsideDays, expanded, expandedDay]);

  const memoizedRecipesLists = useMemo(() => {
    let list;

    if (tab === "official") list = dataRecipes;
    if (tab === "private") list = dataMyPrivateRecipes;
    if (tab === "public") list = dataMyPublicRecipes;
    if (tab === "favorite") list = dataMyFavoriteRecipes;
    if (tab === "saved") list = dataMySavedRecipes;

    return (
      <RecipesList
        day="0"
        list={list.map(recipe => ({
          key: uuidv4(),
          id: recipe.recipe_id,
          text: recipe.title,
          image: recipe.recipe_image,
          owner: recipe.owner_id
        }))}
      />
    );
  }, [tab]);

  return (
    <div className={`new-plan two-column-a ${twoColumnATheme}`}> 

      <LeftNav />

      <section>

        <div className="new-plan__heading">
          <h1>{editing ? 'Edit Plan' : 'Create New Plan'}</h1>
          <p className="new-plan__feedback">{feedback}</p>
          <div className="new-plan__name">
            <label className="new-plan__name-label">Plan Name:</label>
            <input
              className="new-plan__name-input"
              type="text"
              onChange={handlePlanNameChange}
              value={planName}
            />
          </div>
        </div>

        <hr className="new-plan__hr" />

        <div className="new-plan__calendar-container">

          {memoizedMonthlyPlan}

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

          {memoizedRecipesLists}

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
};

export default NewPlanView;