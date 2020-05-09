import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import AriaModal from 'react-aria-modal';
import { v4 as uuidv4 } from 'uuid';

import { IWorkRecipe } from '../../../../store/data/types';
import { IPlannerData } from '../../../../store/planner/types';
import ExpandCollapse from '../../../ExpandCollapse/ExpandCollapse';
import LeftNav from '../../../LeftNav/LeftNav';
import { LoaderButton } from '../../../LoaderButton/LoaderButton';
import Day from './Day/Day';
import ExpandedDay from './ExpandedDay/ExpandedDay';
import RecipesList from './RecipesList/RecipesList';
import './newPlan.css';
import { any } from 'prop-types';

export function NewPlanView({
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
}: Props): JSX.Element {
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
                    list={recipeListsInsideDays[Number(recipeList)]}
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
    const tabToList: ITabToList = {
      "official": dataRecipes,
      "private": dataMyPrivateRecipes,
      "public": dataMyPublicRecipes,
      "favorite": dataMyFavoriteRecipes,
      "saved": dataMySavedRecipes
    };
    const list = tabToList[tab];

    /*
    Note: even though recipe_id and owner_id
    are not used when creating/editing a plan (NewPlan-),
    they are set at this stage because
    they are used when viewing a plan (Plan-)
    */

    return (
      <RecipesList
        day={0}
        list={list.map((recipe: IWorkRecipe) => ({
          key: uuidv4(),
          recipe_id: recipe.recipe_id,
          title: recipe.title,
          recipe_image: recipe.recipe_image,
          owner_id: recipe.owner_id
        }))}
      />
    );
  }, [tab]);

  const TabButton = ({ tabName, displayText }: TabButtonProps) => (
    <button
      className={(tab === tabName)
        ? "planner-recipes-list-tab active"
        : "planner-recipes-list-tab inactive"
      }
      name={tabName}
      onClick={e => handleTabClick(e)}
    >
      {displayText}
    </button>
  );

  return (
    <div className="new-plan-view">

      <div>
        <span>
          <Link to="/home">Home</Link>
          <i> > </i>
        </span>
        <span>
          <Link to="/dashboard">Dashboard</Link>
          <i> > </i>
        </span>
        <span>{editing ? 'Edit Plan' : 'Create New Plan'}</span>
      </div>

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
              <TabButton tabName="official" displayText="All Official" />
              <TabButton tabName="private" displayText="My Private" />
              <TabButton tabName="public" displayText="My Public" />
              <TabButton tabName="favorite" displayText="My Favorite" />
              <TabButton tabName="saved" displayText="My Saved" />
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
              id="planner-submit-button"
              type="button"
              name="submit"
              text="Save Plan"
              loadingText="Saving Plan..."
              isLoading={loading}
              onClick={handleSubmit}
              onKeyUp={() => {}}
            />
          </div>

        </section>

      </div>

    </div>
  );
}

interface ITabToList {
  [index: string]: any;
  "official": IWorkRecipe[];
  "private": IWorkRecipe[];
  "public": IWorkRecipe[];
  "favorite": IWorkRecipe[];
  "saved": IWorkRecipe[];
}

type Props = {
  twoColumnATheme: string;
  feedback: string;
  loading: boolean;
  editing: boolean;
  planName: string;
  handlePlanNameChange(e: React.SyntheticEvent<EventTarget>): void;
  recipeListsInsideDays: IPlannerData;
  expandedDay: number; // string|number or 29
  expanded: boolean;
  dataRecipes: IWorkRecipe[];
  dataMyPrivateRecipes: IWorkRecipe[];
  dataMyPublicRecipes: IWorkRecipe[];
  dataMyFavoriteRecipes: IWorkRecipe[];
  dataMySavedRecipes: IWorkRecipe[];
  tab: string;
  handleTabClick(e: React.SyntheticEvent<EventTarget>): void;
  modalActive: boolean;
  activateModal(): void;
  deactivateModal(): void;
  getApplicationNode(): void;
  discardChanges(): void;
  handleSubmit(): void;
};

type TabButtonProps = {
  tabName: string;
  displayText: string;
};