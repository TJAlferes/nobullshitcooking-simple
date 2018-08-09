import styled from 'styled-components';

export const Styles = styled.div`
  /* General */
  main {order: 2; flex: 1; width: 100%; min-width: 1200px; background-color: #ddd;}
  #page {display: flex; flex-flow: row; justify-content: center; flex-direction: row; flex-wrap: nowrap; width: 900px; margin: 12px auto 18px auto; background-color: #fff;}
  #page_col_left {width: 600px; border-right: 1px solid #bfbfbf; padding: 10px;}
  #page_col_right {width: 300px;}

  /*#filters, #sorters {background-color: #eee;}*/

  span {margin-right: 6px; margin-left: 6px;}

  #list div a {display: flex; justify-content: space-between; flex-direction: row; flex-wrap: nowrap; border-bottom: 1px solid #777; padding: 10px; cursor: pointer; cursor: hand;}
  #list div a div {display: flex; justify-content: center; flex-direction: column; flex-wrap: nowrap; border: none; padding-left: 10px;}
  #list div a div span {border: none; font-size: 1.6rem; font-weight: 700; text-decoration: none; color: #000;}
  .list_image {margin-right: 20px;}

  a {text-decoration: none;}

  #list_header {display: flex; justify-content: space-between; text-align: top;}
  #list_header h1 {padding-bottom: 10px; padding-left: 4px;}

  .page_links {display: block; height: 75px; border-bottom: 1px solid white;}
  .page_numbers {display: block; max-width: min-content; height: 25px; margin: 0 auto; position: relative; top: 50%; transform: translateY(-50%);}
  .page_number, .current_page_number, .page_nav {font-size: 1.6rem; margin-right: 6px; margin-left: 6px; color: #c10006; cursor: pointer; cursor: hand;}
  .page_number:visited, .current_page_number:visited {color: #c10006;}
  .current_page_number {color: black;}

  #filter_title, #sort_title {display: block; font-size: 1.6rem; margin-bottom: 12px; margin-left: 5px;}
  #sorters a {margin-left: 5px;}
  .filter_type {margin-left: 5px; padding-top: 3px; padding-bottom: 8px;}
  .filter_span {display: inline-block; width: 80px; min-width: 80px; max-width: 80px; height: 32px; min-height: 32px; max-height: 32px;}
  .filter_label {font-size: 1.3rem; margin-left: 2px;}

  .ingredient {}
  .ingredient_link {display: flex; justify-content: space-between; flex-direction: row; width: 100%; height: 100%;}
  .ingredient_name {padding-top: 50%; padding-bottom: 50%; font-size: 1.6rem; color: #000;}
  .ingredient_image {}
`;