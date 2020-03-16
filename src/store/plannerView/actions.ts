import { PLANNER_VIEW_CLICK_DAY, PLANNER_VIEW_LOAD, PlannerViewData } from './types';

export const plannerViewClickDay = (day: number) => ({
  type: PLANNER_VIEW_CLICK_DAY,
  day
});

export const plannerViewLoad = (
  planName: string,
  planData: PlannerViewData
) => ({
  type: PLANNER_VIEW_LOAD,
  planName,
  planData
});