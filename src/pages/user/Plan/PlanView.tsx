import React from 'react';

import { IPlannerViewData } from '../../../store/plannerView/types';
import LeftNav from '../../LeftNav/LeftNav';
import Day from './components/Day';
import ExpandedDay from './components/ExpandedDay';
import './plan.css';

export function PlanView({
  expanded,
  expandedDay,
  planName,
  recipeListsInsideDays,
  twoColumnATheme
}: Props): JSX.Element {
  return (
    <div className="plan-view">

      <div className={`plan two-column-a ${twoColumnATheme}`}>

        <LeftNav />

        <section>

          <div className="plan__header">
            <h1>Plan</h1>
            <div className="plan__name">
              <label className="plan__name-label">Plan Name:</label>
              <span className="plan__name-value">{planName}</span>
            </div>
          </div>

          <hr className="plan__hr" />

          <div className="plan__calendar-container">

            <div className="plan__monthly-plan">
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
                    <div className="monthly-plan__body-day" key={i}>
                      <div className="body-day__content">
                        <Day
                          day={i + 1}
                          expanded={expanded}
                          expandedDay={expandedDay}
                          recipes={recipeListsInsideDays[Number(recipeList)]}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="expanded-day-container">
                {expandedDay && <ExpandedDay
                  day={expandedDay}
                  expanded={expanded}
                  recipes={(expanded) ? recipeListsInsideDays[expandedDay] : []}
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
  expanded: boolean;
  expandedDay: number | null;
  planName: string;
  recipeListsInsideDays: IPlannerViewData;
  twoColumnATheme: string;
};