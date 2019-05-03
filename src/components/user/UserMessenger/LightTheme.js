import styled from 'styled-components';

const LightTheme = styled.div`
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
    border-top: 10px solid #ddd;
    border-right: 10px solid #ddd;
    border-left: 10px solid #ddd;
    background: #fff;
    button {
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
    border: 10px solid #ddd;
    order: 1;
    color: #292929;
    p {padding-bottom: 3px;}
  }
  #message-input {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 10px solid #ddd;
    input {
      width: 100%;
      height: 30px;
      border: 2px solid #68abe6;
      padding-left: 7px;
      color: #292929;
      background: #fff;
    }
    input:focus {
      outline: none;
      border: 2px solid #68abe6;
      /* make lighter */
    }
  }
  #friends {
    width: 100%;
    order: 2;
    border-top: 10px solid #ddd;
    border-right: 10px solid #ddd;
    border-bottom: 10px solid #ddd;
    ul {
      width: 100%;
      background: #fff;
    }
    li {
      display: flex;
      flex-direction: row;
      height: 30px;
      padding: 2px;
      border-style: solid;
      border-width: 1px;
      border-radius: 1px;
      border-top-color: #fff;
      border-right-color: #b3b3b3;
      border-bottom-color: #b3b3b3;
      border-left-color: #fff;
      margin: 3px;
      list-style-type: none;
      color: #292929;
      background: #eaeaea;
      img {order: 1;}
      span {
        order: 2;
        height: 25px;
        line-height: 35px;
        margin-left: 8px;
        border: 1px solid #eaeaea;
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
      color: #292929;
      background: #bfbfbf;
    }
    .chat-nav-current {background: #fff;}
  }
  .chat-display-admin {
    font-style: italic;
    color: #c10006;
  }
  .chat-display-username-self {color: #009fff;}
  .chat-display-username-other {color: #0029ff;}

  #messenger_span {background-color: #ddd;}
`;

export default LightTheme;