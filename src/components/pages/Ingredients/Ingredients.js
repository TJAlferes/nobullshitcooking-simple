import React, { Component } from 'react';
import axios from 'axios';
//import queryString from 'query-string';

//import { getIngredientsStart } from '../../actions/ingredients';
import { Styles } from './Styles';

// Location of our backend API
//const endpoint = 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com/ingredients';
const endpoint = 'http://localhost:3003/ingredients';

/*
  Ingredients Component

  Purpose

    The Ingredients page/component lists thumbnail preview links to individual Ingredient pages/components.

  Features

    Filter

      It includes filter options. Multiple filters may be applied simultaneously.

    Pagination

      It also includes pagination, performed on the backend.

      If more than 25 ingredients are returned from the database,
      then the backend API only returns the first 25 rows,
      but also returns a notification to the frontend that it should render page links,
      as well as instructions on how to do so.

      Those page links, when clicked, will then call the appropriate next or previous 25 ingredients.

  Props

  State (Local)

    The local state holds 5 first-level properties:

      ingredients -- Array -- Holds data for ingredients to be currently rendered
      ingredientTypes -- Array -- Holds data to send along on call to backend API
      pages -- Number -- 
      starting -- Number --
      checkedFilters -- Object -- Keeps track of which filters are currently unchecked/checked
*/
class Ingredients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      ingredientTypes: [],
      pages: 1,
      starting: 1,
      checkedFilters: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
        17: false,
        18: false
      }
    };
  }

  // use SSR here...
  componentDidMount() {
    this.getAllIngredientTypes();  // used in filter
    this.getIngredients();  // initial/default ingredients load
  }

  getAllIngredientTypes = async () => {
    // TO DO: on backend API, make types like ingredients
    try {
      const url = `${endpoint}/types/all`;
      const response = await axios.get(url);
      const ingredientTypes = response.data;
      this.setState({ingredientTypes});
    } catch (err) {
      console.log(err);
    }
  }

  getIngredients = async (checkedIngredientTypes, startingAtt) => {
    try {
      const checkedIngredientTypes = (typeof checkedIngredientTypes === 'undefined') ? [] : checkedIngredientTypes;
      const startingAtt = (typeof startingAtt === 'undefined') ? '0' : startingAtt;
      /*console.log('-------------- (in getIngredients()) --------------');
      console.log('checkedIngredientTypes: ' + checkedIngredientTypes)
      console.log('startingAtt: ' + startingAtt);*/

      const url = `${endpoint}`;
      const response = await axios.post(url, {types: checkedIngredientTypes, start: startingAtt});
      let { rows, pages, starting } = response.data;
      /*console.log(...rows);
      console.log('pages: ' + pages);
      console.log('starting: ' + starting);*/

      this.setState({ingredients: rows, pages, starting});
    } catch (err) {
      console.error(err);
    }
  }

  getCheckedIngredientTypes = () => {
    let checkedIngredientTypes = [];
    Object.entries(this.state.checkedFilters).forEach(([key, value]) => {
      if (value === true) {
        checkedIngredientTypes.push(key);
      }
    });
    return checkedIngredientTypes;
  }

  handleFilterChange = async (e) => {
    const id = e.target.id;
    // use 'immutability-helper' for state nested much deeper than this
    await this.setState(prevState => ({
      ...prevState, checkedFilters: {
        ...prevState.checkedFilters, [id]: !prevState.checkedFilters[[id]]
      }
    }));

    this.getIngredients(this.getCheckedIngredientTypes(), this.state.starting);
  }

  //paginationLocation

  paginationNumbers = () => {
    const display = 25;
    const { pages, starting } = this.state;
    let currentPage = Math.floor((starting / display) + 1);
    //console.log('(in paginationNumbers()) currentPage: ' + currentPage);

    let numbers = [];
    let startingAt;  // ???

    for (let i = 1; i <= pages; i++) {
      if (i != currentPage) {
        startingAt = `${display * (i - 1)}`;
        //console.log('(in for loop iteration ' + i + ') startingAt: ' + startingAt);
        numbers.push(<span className="page_number" onClick={() => this.getIngredients(this.getCheckedIngredientTypes(), startingAt)} key={i}>{i}</span>);
      } else {
        //console.log('(in for loop iteration ' + i + ')');
        numbers.push(<span className="current_page_number" key={i}>{i}</span>);
      }
    }
    return numbers;
  }

  render() {
    const display = 25;
    const { pages, starting } = this.state;
    let currentPage = Math.floor((starting / display) + 1);
    //console.log('(in render()) currentPage: ' + currentPage);
    const startingAt = `${starting - display}`;

    let paginationLinks = (
      <div className="page_links">
        {
          (pages > 1) &&
          <span className="page_numbers">
            {(currentPage != 1) && <span className="page_nav" onClick={() => this.getIngredients(this.getCheckedIngredientTypes(), startingAt)}>Prev</span>}
            {this.paginationNumbers()}
            {(currentPage != pages) && <span className="page_nav" onClick={() => this.getIngredients(this.getCheckedIngredientTypes(), startingAt)}>Next</span>}
          </span>
        }
      </div>
    );

    return(
      <Styles>
        <div id="page">

          <div id="page_col_left">

            <div id="list_header">
              <h1>Ingredients</h1>
            </div>

            <div id="filters">
              <form id="itid" name="itid" onChange={e => this.handleFilterChange(e)}>
                <span id="filter_title"><b>Filter by:</b></span>
                <div>
                  <p className="filter_type"><b>Ingredient type</b></p>
                  {this.state.ingredientTypes.map((ingredientType, index) => (
                    <span className="filter_span" key={index}>
                      <input type="checkbox" id={ingredientType.ingredient_type_id} />
                      <label className="filter_label">{ingredientType.ingredient_type_name}</label>
                    </span>
                  ))}
                </div>
              </form>
            </div>

            {paginationLinks}

            <div>
              {this.state.ingredients.map((ingredient, index) => (
                <div key={index}>
                  {/* TO DO: change to thumbnail image */}
                  <img src={`https://s3.amazonaws.com/nobsc-images-01/ingredients/${ingredient.ingredient_image}.jpg`} />
                  <div className="ingredient_name">{ingredient.ingredient_name}</div>
                  <div className="ingredient_id">{ingredient.ingredient_id}</div>
                  <div className="ingredient_type_id">{ingredient.ingredient_type_id}</div>
                </div>
              ))}
            </div>

            {paginationLinks}

          </div>

          <div id="page_col_right">
          </div>

        </div>
      </Styles>
    );
  }
}

export default Ingredients;