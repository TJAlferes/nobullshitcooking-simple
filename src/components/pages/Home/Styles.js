import styled from 'styled-components';

export const Styles = styled.div`
  #page {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    min-width: 1280px;
    margin: 0 auto;
    padding-top: 10px;
  }
  /*
  #left_aside {
    width: 200px;
    margin-top: 10px;
    margin-right: 10px;
    padding: 10px;
    background-color: #fff;
  }
  */
  #torso {
    order: 2;
    width: 600px;
    margin: 10px;
    background-color: #fff;
  }
  #container {}
  #right_aside {
    order: 3;
    width: 340px;
    margin-top: 10px;
    margin-left: 10px;
    padding: 10px;
    background-color: #fff;
  }

  #span_new {background-color: #ddd;}

  /*
  #left_aside span, #right_aside span {
    display: block;
    margin-bottom: 5px;
  }
  #left_aside span:hover {
    background-color: #ddd;
    cursor: pointer;
    cursor: hand;
  }
  #left_aside hr, #right_aside hr {
    height: 1px;
    border: 0 none;
    margin-bottom: 5px;
    background-color: #bfbfbf;
  }
  #left_aside a {
    text-decoration: none;
    color: #000;
  }
  */
  
  .news_item {
    border-bottom: 20px solid #eee;
    padding: 10px;
  }
`;