import React from 'react';
import { connect } from 'react-redux';

import { plannerViewClickDay } from '../../../../../store/plannerView/actions';

import Recipe from '../Recipe/Recipe';

const ExpandedDay = ({
  list,
  expanded,
  day,
  expandedDay,
  plannerViewClickDay
}) => {
  const handleClickDay = () => plannerViewClickDay(day);

  return expanded
  ? (
    <div
      className="planner_expanded_day planner_day_white"
      onClick={handleClickDay}
    >
      <span className="the_date">{day}</span>
      {list.map((recipe, i) => (
        <Recipe
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

export default connect(null, mapDispatchToProps)(ExpandedDay);