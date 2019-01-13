import React, { Component } from 'react';
// use react-final-form here  meh?
// elasticsearch not meant for public facing high traffic search???

import './search.css';
import DownArrowGray from '../../../assets/images/header/down-arrow-gray.png';

class Search extends Component {
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
  swapFacadeText = () => {  // edit this
    var fT = document.getElementById("facade_text");
    var sInsert = document.getElementById("search_insert_input");
    var sIndex = document.getElementById("search_prefilter").selectedIndex;
    var x = document.getElementById("search_prefilter").options[sIndex].text;
    fT.innerHTML = x;  // don't use this, like, ever! innerHTML is an invitation XSS attacks! (OK if you use dompurify?) (also, how does this fit into state???) declarative, react-final-form, or refs? https://reactjs.org/docs/refs-and-the-dom.html
    sInsert.focus();
  }
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
      <form name="search_form" id="search_form">

          <div id="search_category">
            <div id="search_facade">
              <span id="facade_text">All</span>
              <img id="facade_arrow" src={DownArrowGray} />
            </div>
            {/* change to react or react-select or react-final-form or some combination */}
            <select name="search_prefilter" id="search_prefilter" type="select-one" onChange={this.swapFacadeText}>
              <option id="search_all" value="search-filter-none">All</option>
              <option id="search_recipes" value="search-filter-recipes">Recipes</option>
              <option id="search_ingredients" value="search-filter-ingredients">Ingredients</option>
              <option id="search_nutrients" value="search-filter-nutrients">Nutrients</option>
              <option id="search_kitchen_equipment" value="search-filter-kitchen-equipment">Kitchen Equipment</option>
              <option id="search_fitness_gear" value="search-filter-fitness-gear">Fitness Gear</option>
              <option id="search_exercises" value="search-filter-exercises">Exercises</option>
            </select>
          </div>

          <div id="search_insert">
            <input id="search_insert_input" type="text" autoComplete="off" />
            <div id="search_auto_suggestions">
              {/* live from the database table column */}
            </div>
          </div>

          <div id="search_execute">
            <input id="search_execute_input" type="submit" value="Search" />
          </div>
          
      </form>
    );
  }
}

export default Search;