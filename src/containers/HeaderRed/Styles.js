import styled from 'styled-components';

export const StyledHeaderRed = styled.header`
  font-family: 'Play', sans-serif;

  z-index: 3; display: block;width: 100%; min-width: 1280px; height: 92px; background-color: #c10006;

  #header_row_1 {display: flex; flex-flow: row; justify-content: space-between; flex-direction: row; flex-wrap: nowrap; width: 100%; min-width: 1280px; height: 62px;}
  #header_row_1_col_1 {order: 1; width: 510px; min-width: 510px; max-width: 510px; height: inherit;}
  #header_row_1_col_2 {order: 2; width: 100%; min-width: 410px; height: inherit; padding-right: 42px; padding-left: 20px;}
  #header_row_1_col_3 {display: relative; order: 3; width: 320px; min-width: 320px; max-width: 320px; height: inherit; }

  #header_row_2 {display: flex; flex-flow: row; justify-content: space-between; flex-direction: row; flex-wrap: nowrap; width: 100%; min-width: 1280px; height: 30px;}
  #header_row_2_col_1 {order: 1; width: auto; min-width: 600px; height: inherit; padding-top: 5px; padding-left: 30px;}
  #header_row_2_col_2 {order: 2; width: auto; min-width: 0px; height: inherit;}
  #header_row_2_col_3 {order: 3; width: auto; min-width: 600px; height: inherit; padding-top: 5px; padding-right: 30px;}

  /* keep these flex or change to grid? */
  /* media queries -- mobile first, like, literally -- content breakpoints */
  /* 1200 */
  /* 900 */
  /* 600 */

`;