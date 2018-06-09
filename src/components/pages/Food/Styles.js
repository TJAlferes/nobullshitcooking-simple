import styled from 'styled-components';

// move or delete most of this
const Styles = styled.div`
  h1 {
    margin-top: 18px;
    margin-bottom: 12px;
    margin-left: 6px;
  }
  /*
  h2 {
    margin-top: 18px;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: #bfbfbf;
    padding-top: 60px;
    padding-left: 6px;
  }

  h3 {
    margin-top: 10px;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: #bfbfbf;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 6px;
  }
  */
  main span {
    display: inline-block;
    width: 80px;
    padding-bottom: 24px;
    text-align: center;
  }

  #container {
    margin: 18px auto 24px auto;
    width: 600px;
    border-style: solid;
    border-radius: 3px;
    border-width: 1px;
    border-color: #bfbfbf;
    overflow: auto;
    background-color: #ddd;
  }

  #container p {
    margin-left: 10px;
  }

  #current_location {
    margin: 6px auto 0 auto;
    width: 100%;
    font-family: Arial, sans-serif;
  }
  /*
  #tab_list {
    display: flex;
    margin-top: 6px;
    margin-right: 12px;
    margin-left: 12px;
    padding-bottom: 6px;
    list-style-type: none;
    overflow: hidden;
  }

  .tab {
    flex-direction: row;
    flex: 1;
    margin-right: 3px;
    margin-left: 3px;
    padding-top: 6px;
    padding-right: 12px;
    padding-bottom: 6px;
    padding-left: 12px;
    text-align: center;
    font-size: 14px;
    font-weight: 900;
    cursor: pointer;
    background-color: #eee;
  }

  .panel {
    position: relative;
    margin-top: -6px;
    margin-right: 6px;
    margin-bottom: 10px;
    margin-left: 6px;
    padding-top: 18px;
    padding-right: 15px;
    padding-bottom: 12px;
    padding-left: 15px;
    background-color: #fff;
    font-family: Arial, sans-serif;
  }

  #fresh_tab {
    background-color: #fff;
  }

  #panel_2, #panel_3, #panel_4, #panel_5 {
    display: none;
  }

  .tab:hover a {
  color: #c10006;
  text-decoration: underline;
  }

  #p1_b1, #p1_b2, #p1_b3, #p1_b4, #p1_b5, #p1_b6, #p1_b7, #p1_b8, #p1_b9, #p1_b10 {
    position: absolute;
    display: none;
    font-size: 14px;
    background-color: #eee;
  }

  #p1_b1 {
    top: 110px;
    left: 98px;
  }
  */
  .ingredients_sections {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 599px;
    background-color: #ddd;
  }

  .single_section {
    width: 299px;
    height: 224px;
    display: inline-block;
    background-color: #fff;
    padding: 18px 10px;
    border-style: solid;
    border-radius: 2px;
    border-width: 1px;
    border-color: #ddd;
  }

  .single_section span {
    display: block;
    text-align: center;
    padding-bottom: 12px;
    margin-right: auto;
    margin-left: auto;
    width: 160px;
    background-color: #fff;
    font-weight: 900;
    font-size: 15px;
  }

  .single_section img {
    display: block;
    margin-top: 24px;
    margin-right: auto;
    margin-left: auto;
  }
  
  a:link {
  color: #68abe6;       
  }

  a:visited {
  color: #68abe6;
  }

  a:hover {
  color: #c10006;
  text-decoration: underline;
  }

  a:active {
  color: #c10006;
  text-decoration: underline;
  }
`;

export default Styles;