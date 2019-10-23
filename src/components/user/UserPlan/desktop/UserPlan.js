import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { plannerPrivateLoad } from '../../../../store/actions/index';

import LeftNav from '../../../LeftNav/LeftNav';

import PlannerDay from './PlannerDay/PlannerDay';
import PlannerExpandedDay from './PlannerExpandedDay/PlannerExpandedDay';

import './userPlan.css';

const UserPlan = props => {
  const history = useHistory();

  useEffect(() => {
    const getPlan = () => {
      window.scrollTo(0,0);
      const [ prev ] = props.dataMyPlans
      .filter(plan => plan.plan_id === Number(props.match.params.id));
      props.plannerPrivateLoad(prev.plan_name, prev.plan_data);
    };

    if (props.match.params.id) {
      getPlan();
    } else {
      history.push('/home');
    }
  }, []);

  return (
    <div className={`user-plan two-column-a ${props.twoColumnATheme}`}>

      <LeftNav />

      <section>

        <div className="user-plan__header">
          <h1>Plan</h1>
          <div className="user-plan__name">
            <label className="user-plan__name-label">Plan Name:</label>
            <span className="user-plan__name-value">{props.planName}</span>
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

        </div>

      </section>

    </div>
  );
};

const mapStateToProps = state => ({
  dataMyPlans: state.data.myPlans,
  expanded: state.plannerView.expanded,
  expandedDay: state.plannerView.expandedDay,
  planName: state.plannerView.planName,
  recipeListsInsideDays: state.plannerView.recipeListsInsideDays
});

const mapDispatchToProps = dispatch => ({
  plannerPrivateLoad: (planName, planData) =>
    dispatch(plannerPrivateLoad(planName, planData))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserPlan)
);