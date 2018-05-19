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
                    <tr id="week_1"> {/* nested DnD! */}
                      <PlannerDay  day="1"></PlannerDay>
                      <PlannerDay  day="2"></PlannerDay>
                      <PlannerDay  day="3"></PlannerDay>
                      <PlannerDay  day="4"></PlannerDay>
                      <PlannerDay  day="5"></PlannerDay>
                      <PlannerDay  day="6"></PlannerDay>
                      <PlannerDay  day="7"></PlannerDay>
                    </tr>
                    <tr id="week_2">
                      <PlannerDay day="8"></PlannerDay>
                      <PlannerDay day="9"></PlannerDay>
                      <PlannerDay day="10"></PlannerDay>
                      <PlannerDay day="11"></PlannerDay>
                      <PlannerDay day="12"></PlannerDay>
                      <PlannerDay day="13"></PlannerDay>
                      <PlannerDay day="14"></PlannerDay>
                    </tr>
                    <tr id="week_3">
                      <PlannerDay day="15"></PlannerDay>
                      <PlannerDay day="day_16"></PlannerDay>
                      <PlannerDay day="day_17"></PlannerDay>
                      <PlannerDay day="day_18"></PlannerDay>
                      <PlannerDay day="day_19"></PlannerDay>
                      <PlannerDay day="day_20"></PlannerDay>
                      <PlannerDay day="day_21"></PlannerDay>
                    </tr>
                    <tr id="week_4">
                      <PlannerDay day="22"></PlannerDay>
                      <PlannerDay day="23"></PlannerDay>
                      <PlannerDay day="24"></PlannerDay>
                      <PlannerDay day="25"></PlannerDay>
                      <PlannerDay day="26"></PlannerDay>
                      <PlannerDay day="27"></PlannerDay>
                      <PlannerDay day="28"></PlannerDay>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="recipes_list">
                <PlannerRecipe id="meal_000050" name="Sheperd's Pie" />
                <PlannerRecipe id="meal_000081" name="Split Pea Soup" />
                <PlannerRecipe id="meal_000001" name="Steak Asparagus and Sweet Potato" />
              </div>
            </div>
          </article>
        </div>
      </Styles>
    );
  }
}

export default Planner;