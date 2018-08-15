import styled from 'styled-components';

const Styles = styled.div`
  /* General */
  main {order: 2; flex: 1; width: 100%; min-width: 1200px; background-color: #ddd;}
  #page {display: flex; flex-flow: row; justify-content: center; flex-direction: row; flex-wrap: nowrap; width: 900px; margin: 12px auto 18px auto; background-color: #fff;}
  #page_col_left {width: 600px; border-right: 1px solid #bfbfbf; padding: 10px;}
  #page_col_right {width: 300px;}

  .ingredient {}
  .ingredient_name {font-size: 1.6rem; color: #000;}
  .ingredient_image {}
`;

export default Styles;