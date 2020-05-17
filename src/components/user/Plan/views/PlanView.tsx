import React from 'react';

import { IPlannerViewData } from '../../../../store/plannerView/types';
import LeftNav from '../../../LeftNav/LeftNav';
import Day from './Day/Day';
import ExpandedDay from './ExpandedDay/ExpandedDay';
import './plan.css';

export function PlanView({
  twoColumnATheme,
  planName,
  recipeListsInsideDays,
  expanded,
  expandedDay
}: Props): JSX.Element {
  return (
    <div className="user-plan-view">

      {/*<div>
        <span>
          <Link to="/home">Home</Link>
          <i> > </i>
        </span>
        <span>
          <Link to="/dashboard">Dashboard</Link>
          <i> > </i>
        </span>
        <span>View Plan</span>
      </div>*/}

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
                {expandedDay && <ExpandedDay
                  day={expandedDay}
                  list={(expanded)
                    ? recipeListsInsideDays[expandedDay]
                    : []
                  }
                  expanded={expanded}
                />}
              </div>
            </div>

          </div>

        </section>

      </div>

    </div>
  );
}

type Props = {
  twoColumnATheme: string;
  planName: string;
  recipeListsInsideDays: IPlannerViewData;
  expanded: boolean;
  expandedDay: number | null;
};