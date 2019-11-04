import React from 'react';
import { connect } from 'react-redux';

import PlannerRecipe from '../PlannerRecipe/PlannerRecipe';
import { plannerViewClickDay } from '../../../../../store/actions/index';

const PlannerExpandedDay = ({
  list,
  expanded,
  day,
  expandedDay,
  plannerViewClickDay
}) => {
  const handleClickDay = () => plannerViewClickDay(day);

  let color = "planner_day_white";

  return expanded
  ? (
    <div className={`planner_expanded_day ${color}`} onClick={handleClickDay}>
      <span className="the_date">{day}</span>
      {list.map((recipe, i) => (
        <PlannerRecipe
          className="plan_recipe"
          key={recipe.key}
          id={recipe.key}
          index={i}
          recipe={recipe}
          expanded={expanded}
          day={day}
          expandedDay={expandedDay}
        />
      ))}
    </div>
  )
  : false;
};

const mapDispatchToProps = dispatch => ({
  plannerViewClickDay: (day) => dispatch(plannerViewClickDay(day))
});

export default connect(null, mapDispatchToProps)(PlannerExpandedDay);