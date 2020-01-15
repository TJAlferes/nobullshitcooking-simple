import React from 'react';
import LeftNav from '../../../LeftNav/LeftNav';

import PlannerDay from './PlannerDay/PlannerDay';
import PlannerExpandedDay from './PlannerExpandedDay/PlannerExpandedDay';

import './userPlan.css';

const UserPlanView = ({
  twoColumnATheme,
  planName,
  recipeListsInsideDays,
  expandedDay,
  expanded
}) => (
  <div className={`user-plan two-column-a ${twoColumnATheme}`}>

    <LeftNav />

    <section>

      <div className="user-plan__header">
        <h1>Plan</h1>
        <div className="user-plan__name">
          <label className="user-plan__name-label">Plan Name:</label>
          <span className="user-plan__name-value">{planName}</span>
        </div>
      </div>

      <hr className="user-plan__hr" />

      <div className="user-plan__calendar-container">

        <div className="user-plan__monthly-plan">
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
          
          <div className="expanded-day-container">
            <PlannerExpandedDay
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

      </div>

    </section>

  </div>
);

export default UserPlanView;