import styled from 'styled-components';

export const Styles = styled.div`
  #page {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: center;
    width: 1200px;
    margin: 0 auto;
    padding-top: 10px;
  }
  article {
    order: 2;
    flex: 1 1 auto;
    width: 960px;
    min-width: 960px;
    max-width: 960px;
    margin-top: 10px;
    margin-left: 10px;
    padding: 10px 10px;
    overflow: auto;
    background-color: #fff;
  }

  #autosave_feedback {
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 5px;
    text-align: center;
    color: #aaa;
  }

  #calendar_container {
    width: 99%;
    height: 580px;
    margin: 0 auto 0 auto;
    padding-top: 5px;

    #monthly_plan {
      width: 757px;
      height: 328px;
      background: #b1d7f9;

      table {
        height: 321px;
        max-height: 321px;
        border-collapse: collapse;
        table-layout: fixed;
      }
      tr {
        position: relative;
        max-height: 75px;
        overflow: hidden;
      }
      th {
        width: 107px;
        height: 20px;
        text-align: center;
      }
      td {
        /*position: relative;*/
        width: 107px;
        height: 75px;
        max-height: 75px;
        overflow: hidden;
        border: 1px solid #b1d7f9;
      }
      .the_date {
        position: absolute;
        top: 0;
        right: 0;
        width: content;
        height: content;
        padding-top: 1px;
        padding-right: 3px;
        user-select: none;
        color: #afafaf;
      }
      .planner_day_collapsed {
        position: relative;
        width: 107px;
        height: 75px;
        max-height: 75px;
        padding-top: 18px;
        padding-left: 3px;
        overflow: hidden;
        /*border: 1px solid #bfbfbf;*/
        transform: none;
      }
      .planner_day_expanded {
        position: absolute;
        width: 150px;
        height: 450px;
        max-height: 460px;
        padding-top: 18px;
        padding-left: 6px;
        background: #fff;
        border: 1px solid #bfbfbf;
        overflow: hidden;
        box-shadow: 1px 1px 1px #555;
        z-index: 3;
        transform: translateX(var(--shiftX)) translateY(var(--shiftY));
      }
      .planner_day_green {
        background: #d6ffd6;
      }
      .planner_day_white {
        background: #fff;
      }
    }
  }

  #planner_span {background-color: #ddd;}

  #planner_recipes_list {
    width: 757px;
    height: 125px;
    border: 1px solid #bfbfbf;
  }
`;