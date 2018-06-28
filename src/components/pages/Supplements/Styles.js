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
    padding-bottom: 10px;
  }
  article {
    order: 2;
    flex: 1 1 auto;
    width: 960px;
    min-width: 960px;
    max-width: 960px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    padding: 10px 10px;
    overflow: auto;
    background-color: #fff;
  }

  h1 {
    font-weight: bold;
    margin-bottom: 12px;
  }
  h2 {
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  table {
    width: 100%;
    margin: 0 auto 0 auto;
    border-collapse: collapse;
  }
  th {
    text-align: left;
    padding-top: 1px;
    padding-right: 2px;
    padding-bottom: 2px;
    padding-left: 2px;
  }
  td {
    border-style: solid;
    border-width: 1px;
    border-color: #ddd;
    padding-top: 1px;
    padding-right: 2px;
    padding-bottom: 2px;
    padding-left: 2px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      img {
        display: block;
        margin: 0 auto;
      }
    }
  }
  tbody tr:nth-child(even) {background: #eee;}

  thead th:nth-child(1) {width: 113px;}
  thead th:nth-child(2) {width: 178px;}
  thead th:nth-child(3) {
    width: 526px;
    text-align: left;
  }

  tbody td:nth-child(1) {width: 113px;}
  tbody td:nth-child(2) {width: 178px;}
  tbody td:nth-child(3) {
    width: 526px;
    text-align: left;
  }

  #supplements_span {background-color: #ddd;}
`;