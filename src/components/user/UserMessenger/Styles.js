import styled from 'styled-components';

const Styles = styled.div`
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
    h1 {margin-bottom: 20px;}
  }

  #room {
    width: 100%;
    border-top: 10px solid #140442;
    border-right: 10px solid #140442;
    border-left: 10px solid #140442;
    background: #09032d;
    button {
      /*padding: 5px;
      border: none;*/
      height: 30px;
      padding-left: 8px;
      padding-right: 8px;
      border-style: solid;
      border-width: 1px;
      border-radius: 1px;
      border-top-color: #ddd;
      border-right-color: #666;
      border-bottom-color: #666;
      border-left-color: #ddd;
      background-image: linear-gradient(to bottom, #fff, #777);
      cursor: pointer;
    }
    span {
      line-height: 30px;
      padding: 5px;
      color: #ddd;
      background: #09032d;
    }
  }
  #container {display: flex;}
  #chat, #friends {
    height: 403px;
    background: #09032d;
  }
  #chat {
    position: relative;
    min-width: 720px;
    max-width: 720px;
    padding: 10px;
    border: 10px solid #140442;
    order: 1;
    color: #ddd;
    p {padding-bottom: 3px;}
  }
  #message-input {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 10px solid #140442;
    input {
      width: 100%;
      height: 30px;
      border: 2px solid #3d19a5;
      padding-left: 7px;
      color: #ccc;
      background: #000;
    }
    input:focus {
      outline: none;
      border: 2px solid #5017c5;
    }
  }
  #friends {
    width: 100%;
    order: 2;
    border-top: 10px solid #140442;
    border-right: 10px solid #140442;
    border-bottom: 10px solid #140442;
    ul {
      width: 100%;
      background: #09032d;
    }
    li {
      display: flex;
      flex-direction: row;
      height: 30px;
      padding: 2px;
      border-style: solid;
      border-width: 1px;
      border-radius: 1px;
      border-top-color: #3d19a5;
      border-right-color: #140442;
      border-bottom-color: #140442;
      border-left-color: #3d19a5;
      margin: 3px;
      list-style-type: none;
      color: #ddd;
      background: #23096f;
      img {order: 1;}
      span {
        order: 2;
        height: 25px;
        line-height: 35px;
        margin-left: 8px;
        border: 1px solid #23096f;
        line-height: 30px;
      }
    }
  }
  #chat-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    span {
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-family: Arial;
      color: #ddd;
      background: #140442;
    }
    .chat-nav-current {background: #3d19a5;}
  }
  .chat-display-admin {
    font-style: italic;
    color: #216eff;
  }
  .chat-display-username-self {color: #fffdbf;}
  .chat-display-username-other {color: #f7ce81;}

  #messenger_span {background-color: #ddd;}
`;

export default Styles;