import {
  PLANNER_VIEW_CLICK_DAY,
  PLANNER_VIEW_LOAD,
  IPlannerViewData
} from './types';

export const plannerViewClickDay = (day: number) => ({
  type: PLANNER_VIEW_CLICK_DAY,
  day
});

export const plannerViewLoad = (
  planName: string,
  planData: IPlannerViewData
) => ({
  type: PLANNER_VIEW_LOAD,
  planName,
  planData
});