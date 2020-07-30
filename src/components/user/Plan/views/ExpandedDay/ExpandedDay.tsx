import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { plannerViewClickDay } from '../../../../../store/plannerView/actions';
import { IPlannerViewRecipe } from '../../../../../store/plannerView/types';
import { Recipe } from '../Recipe/Recipe';

export function ExpandedDay({
  day,
  expanded,
  list,
  plannerViewClickDay
}: Props): JSX.Element | null {
  const handleClickDay = () => plannerViewClickDay(day);

  return expanded
  ? (
    <div
      className="planner_expanded_day planner_day_white"
      onClick={handleClickDay}
    >
      <span className="the_date">{day}</span>
      {list.map(recipe => <Recipe recipe={recipe} />)}
    </div>
  )
  : null;
};

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  day: number;
  expanded: boolean;
  list: IPlannerViewRecipe[];
};

const mapDispatchToProps = {
  plannerViewClickDay: (day: number) => plannerViewClickDay(day)
};

const connector = connect(null, mapDispatchToProps);

export default connector(ExpandedDay);