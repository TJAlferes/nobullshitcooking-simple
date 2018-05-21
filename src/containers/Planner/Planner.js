import React, { Component } from 'react';

import LeftNav from '../../components/LeftNav/LeftNav';
import { Styles } from './Styles';

import PlannerRecipe from './PlannerRecipe/PlannerRecipe';
import PlannerDay from './PlannerDay/PlannerDay';

/*
function plannerActionOne() {
	var recipes = document.getElementsByClassName('recipe');
	for (var i = 0; i < recipes.length; i++) {
		recipes[i].addEventListener("dragstart", dragStart, false);
		recipes[i].addEventListener("dragend", dragEnd, false);
	}
	
	recipesList = document.getElementById('recipes_list');
	recipesList.addEventListener("dragover", function(event) {
		event.prevenPlannerDayefault();
	});
	recipesList.addEventListener("drop", drop, false);
	
	var days = document.querySelectorAll('PlannerDay');
	for (var i = 0; i < days.length; i++) {
		days[i].addEventListener("dragover", function(event) {
			event.prevenPlannerDayefault();
		});
		days[i].addEventListener("drop", drop, false);
	}
}

function dragStart(event) {
	event.dataTransfer.sePlannerDayata("text", event.target.id);
}
function dragEnd(event) {
	recipe = event.target;
	recipe.style.visibility = 'visible';
}
function drop(event) {
	event.prevenPlannerDayefault();
    var data = event.dataTransfer.gePlannerDayata("text");
    event.target.appendChild(document.getElementById(data));
}

window.addEventListener("load", plannerActionOne, false);
*/

class Planner extends Component {
  constructor(props) {  // do you need the constructor???
    super(props);
    this.state = {};
  }
  render() {
    // use objects instead of arrays? so you have key for db? there's gotta be a way to clean this up anyway
    const list0 = []; // for the PlannerRecipesList
    const list1 = []; // and the rest of these are for the PlannerDays
    const list2 = [];
    const list3 = [];
    const list4 = [];
    const list5 = [];
    const list6 = [];
    const list7 = [];
    const list8 = [];
    const list9 = [];
    const list10 = [];
    const list11 = [];
    const list12 = [];
    const list13 = [];
    const list14 = [];
    const list15 = [];
    const list16 = [];
    const list17 = [];
    const list18 = [];
    const list19 = [];
    const list20 = [];
    const list21 = [];
    const list22 = [];
    const list23 = [];
    const list24 = [];
    const list25 = [];
    const list26 = [];
    const list27 = [];
    const list28 = [];

    return (
      <Styles>
        <div id="page">
          <LeftNav />
          <article>
            <h1>Planner</h1>
            <p id="autosave_feedback">All changes saved.</p>
            <hr />
            <div id="calendar_container">
              <div id="monthly_plan">
                <table>
                  <thead>
                    <tr>
                      <th>Sunday</th>
                      <th>Monday</th>
                      <th>Tuesday</th>
                      <th>Wednesday</th>
                      <th>Thursday</th>
                      <th>Friday</th>
                      <th>Saturday</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr id="week_1">
                      <PlannerDay day="1" list={list1}></PlannerDay>
                      <PlannerDay day="2" list={list2}></PlannerDay>
                      <PlannerDay day="3" list={list3}></PlannerDay>
                      <PlannerDay day="4" list={list4}></PlannerDay>
                      <PlannerDay day="5" list={list5}></PlannerDay>
                      <PlannerDay day="6" list={list6}></PlannerDay>
                      <PlannerDay day="7" list={list7}></PlannerDay>
                    </tr>
                    <tr id="week_2">
                      <PlannerDay day="8" list={list8}></PlannerDay>
                      <PlannerDay day="9" list={list9}></PlannerDay>
                      <PlannerDay day="10" list={list10}></PlannerDay>
                      <PlannerDay day="11" list={list11}></PlannerDay>
                      <PlannerDay day="12" list={list12}></PlannerDay>
                      <PlannerDay day="13" list={list13}></PlannerDay>
                      <PlannerDay day="14" list={list14}></PlannerDay>
                    </tr>
                    <tr id="week_3">
                      <PlannerDay day="15" list={list15}></PlannerDay>
                      <PlannerDay day="16" list={list16}></PlannerDay>
                      <PlannerDay day="17" list={list17}></PlannerDay>
                      <PlannerDay day="18" list={list18}></PlannerDay>
                      <PlannerDay day="19" list={list19}></PlannerDay>
                      <PlannerDay day="20" list={list20}></PlannerDay>
                      <PlannerDay day="21" list={list21}></PlannerDay>
                    </tr>
                    <tr id="week_4">
                      <PlannerDay day="22" list={list22}></PlannerDay>
                      <PlannerDay day="23" list={list23}></PlannerDay>
                      <PlannerDay day="24" list={list24}></PlannerDay>
                      <PlannerDay day="25" list={list25}></PlannerDay>
                      <PlannerDay day="26" list={list26}></PlannerDay>
                      <PlannerDay day="27" list={list27}></PlannerDay>
                      <PlannerDay day="28" list={list28}></PlannerDay>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="recipes_list">
                <PlannerRecipe id="1" text="Sheperd's Pie" />
                <PlannerRecipe id="2" text="Split Pea Soup" />
                <PlannerRecipe id="3" text="Steak Asparagus and Sweet Potato" />
              </div>
            </div>
          </article>
        </div>
      </Styles>
    );
  }
}

export default Planner;