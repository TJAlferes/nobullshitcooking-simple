import React, { Component } from 'react';

import LeftNav from '../../components/LeftNav/LeftNav';
import { Styles } from './Styles';

import PlannerRecipe from './PlannerRecipe/PlannerRecipe';
import PlannerDay from './PlannerDay/PlannerDay';
import PlannerRecipesList from './PlannerRecipesList/PlannerRecipesList';

class Planner extends Component {
  constructor(props) {
    super(props);
    
    this.tableRef = React.createRef();

    // need to lift state up
    this.state = {expanded: false};
  }

  render() {
    // use objects instead of arrays? so you have key for db? there's gotta be a way to clean this up anyway
    const list0 = [{id: 1, text: "Sheperd's Pie"}, {id: 2, text: "Split Pea Soup"}, {id: 3, text: "Steak Asparagus and Sweet Potato"}];
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
                <table ref={this.tableRef}>
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
                      <PlannerDay day="1" list={list1} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="2" list={list2} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="3" list={list3} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="4" list={list4} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="5" list={list5} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="6" list={list6} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="7" list={list7} tRef={this.tableRef}></PlannerDay>
                    </tr>
                    <tr id="week_2">
                      <PlannerDay day="8" list={list8} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="9" list={list9} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="10" list={list10} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="11" list={list11} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="12" list={list12} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="13" list={list13} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="14" list={list14} tRef={this.tableRef}></PlannerDay>
                    </tr>
                    <tr id="week_3">
                      <PlannerDay day="15" list={list15} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="16" list={list16} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="17" list={list17} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="18" list={list18} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="19" list={list19} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="20" list={list20} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="21" list={list21} tRef={this.tableRef}></PlannerDay>
                    </tr>
                    <tr id="week_4">
                      <PlannerDay day="22" list={list22} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="23" list={list23} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="24" list={list24} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="25" list={list25} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="26" list={list26} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="27" list={list27} tRef={this.tableRef}></PlannerDay>
                      <PlannerDay day="28" list={list28} tRef={this.tableRef}></PlannerDay>
                    </tr>
                  </tbody>
                </table>
              </div>

              <PlannerRecipesList day="0" list={list0}></PlannerRecipesList>

            </div>
          </article>
        </div>
      </Styles>
    );
  }
}

export default Planner;