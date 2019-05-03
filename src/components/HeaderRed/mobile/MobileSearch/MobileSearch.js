import React, { Component } from 'react';
// use react-final-form here  meh?
// elasticsearch not meant for public facing high traffic search???

import './mobileSearch.css';
//import DownArrowGray from '../../../assets/images/header/down-arrow-gray.png';

class MobileSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /*
  function headerRedActionOne() {
    var sInsert = document.getElementById("search_insert_input");
    
    sInsert.addEventListener("input", liveSearchRed, false);
    sInsert.addEventListener("input", liveSearchShow, false);
    document.addEventListener("click", function(e) { liveSearchHide(e); }, false);
  }
  
  window.addEventListener("load", function() { headerRedActionOne(); }, false);
  */

  /*
  // not needed on mobile, remove
  swapFacadeText = () => {  // edit this
    var fT = document.getElementById("facade_text");
    var sInsert = document.getElementById("search_insert_input");
    var sIndex = document.getElementById("search_prefilter").selectedIndex;
    var x = document.getElementById("search_prefilter").options[sIndex].text;
    fT.innerHTML = x;  // don't use this, like, ever! innerHTML is an invitation XSS attacks! (OK if you use dompurify?) (also, how does this fit into state???) declarative, react-final-form, or refs? https://reactjs.org/docs/refs-and-the-dom.html
    sInsert.focus();
  }
  */

  /*
  liveSearchShow = () => {
    var sInsert = document.getElementById("search_insert_input");
    var sAuto = document.getElementById("search_auto_suggestions");
    var sAutoShadow = document.getElementById("search_auto_suggestions_shadow");
    
    if (sInsert == document.activeElement) {
      sAuto.style.display = "block";
      sAutoShadow.style.display = "block";
    }
  }

  liveSearchHide = e => {
    var sInsert = document.getElementById("search_insert_input");
    var sAuto = document.getElementById("search_auto_suggestions");
    var sAutoShadow = document.getElementById("search_auto_suggestions_shadow");
    
    if ((e.target != sInsert) && (e.target != sAuto)) {
      sAuto.style.display = "none";
      sAutoShadow.style.display = "none";
    }
  }

  liveSearchWidthExtend = e => {
    var childLink = e.firstChild.href;
    
    window.location.href = childLink;
  }

  liveSearchArrowKeysSupport () => {
    
  }

  liveSearchRed = () => {  // THIS NEEDS DEBOUNCING (time: half a second?)
    var sInsert = document.getElementById("search_insert_input").value;
    
    if (sInsert.length > 2) {
      var fdata = new FormData();
      var xhttp = new XMLHttpRequest();
      
      fdata.append("search_insert_input", sInsert);
      
      xhttp.open("POST", "https://www.nobullshitcooking.com/search_auto_suggestions.php", true);
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          var sAuto = document.getElementById("search_auto_suggestions");
          
          sAuto.innerHTML = xhttp.responseText;
        }
      }
      xhttp.send(fdata);
    }
  }
  */
  render() {
    return (
      <form name="search_form" id="mobile_search_form">
          <div id="mobile_search_insert">
            <input id="mobile_search_insert_input" type="text" autoComplete="off" />
            <div id="search_auto_suggestions">
              {/* live from the database table column */}
            </div>
          </div>
          <div id="mobile_search_execute">
            <input id="mobile_search_execute_input" type="submit" value="Search" />
          </div>
      </form>
    );
  }
}

export default MobileSearch;