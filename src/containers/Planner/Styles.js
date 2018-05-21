import styled from 'styled-components';

export const Styles = styled.div`
  #page {display: flex; flex-direction: row; flex-wrap: nowrap; align-items: flex-start; justify-content: center; width: 1200px; margin: 0 auto; padding-top: 10px;}
  article {order: 2; flex: 1 1 auto; width: 960px; min-width: 960px; max-width: 960px; margin-top: 10px; margin-left: 10px; padding: 10px 10px; overflow: auto; background-color: #fff;}

  #autosave_feedback {margin-right: auto; margin-left: auto; padding-bottom: 5px; text-align: center; color: #aaa;}

  #calendar_container {width: 99%; height: 580px; margin: 0 auto 0 auto; padding-top: 5px; overflow: auto;}

  #monthly_plan {width: 805px; height: 328px;}
  table {border-collapse: collapse;}
  th {width: 115px; height: 20px; text-align: center;}
  td {width: 115px; height: 75px; border: 1px solid #bfbfbf;}

  #planner_span {background-color: #ddd;}
`;