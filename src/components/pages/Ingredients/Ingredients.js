import React, { Component } from 'react';
import axios from 'axios';
//import queryString from 'query-string';

//import { getIngredientsStart } from '../../actions/ingredients';
import { Styles } from './Styles';
import { getIn } from 'final-form';

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
      starting: 5,
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

  getIngredients = async ({ checkedIngredientTypes = [11, 12], startingAtt = '1' } = {}) => {
    try {
      const url = `${endpoint}`;
      console.log('--------------');
      console.log(startingAtt);
      const response = await axios.post(url, {types: checkedIngredientTypes, start: startingAtt});
      let { rows, pages, starting } = response.data;
      console.log(rows);
      console.log(pages);
      console.log(starting);
      this.setState({ingredients: rows, pages, starting});
    } catch (err) {
      console.error(err);
    }
  }

  handleFilterChange = async (e) => {
    const id = e.target.id;
    // use 'immutability-helper' for state nested much deeper than this
    await this.setState(prevState => ({
      ...prevState, checkedFilters: {
        ...prevState.checkedFilters, [id]: !prevState.checkedFilters[[id]]
      }
    }));

    // 1 -- you're repeating this, see if you can cut it
    let checkedIngredientTypes = [];
    let { checkedFilters, starting } = this.state;

    await Object.entries(checkedFilters).forEach(([key, value]) => {
      if (value === true) {
        checkedIngredientTypes.push(key);
      }
    });

    this.getIngredients(checkedIngredientTypes, starting);
  }

  //paginationLocation

  paginationNumbers = () => {
    const display = 25;
    const { pages, starting, checkedFilters } = this.state;
    let currentPage = (starting / display) + 1;

    let numbers = [];
    let startingAt;

    // 2 -- you're repeating this, see if you can cut it
    let checkedIngredientTypes = [];
    Object.entries(checkedFilters).forEach(([key, value]) => {
      if (value === true) {
        checkedIngredientTypes.push(key);
      }
    });

    for (let i = 1; i <= pages; i++) {
      if (i != currentPage) {
        startingAt = `${display * (i - 1)}`;
        numbers.push(<span className="page_number" onClick={() => this.getIngredients(checkedIngredientTypes, startingAt)} key={i}>{i}</span>);
      } else {
        numbers.push(<span className="current_page_number" key={i}>{i}</span>);
      }
    }
    return numbers;
  }

  render() {
    const display = 25;
    const { pages, starting, checkedFilters } = this.state;
    let currentPage = (starting / display) + 1;
    const startingAt = `${starting - display}`;

    // 3 -- you're repeating this, see if you can cut it
    let checkedIngredientTypes = [];
    Object.entries(checkedFilters).forEach(([key, value]) => {
      if (value === true) {
        checkedIngredientTypes.push(key);
      }
    });

    let paginationLinks = (
      <div className="page_links">
        {
          (pages > 1) &&
          <span className="page_numbers">
            {(currentPage != 1) && <span className="page_nav" onClick={() => this.getIngredients(checkedIngredientTypes, startingAt)}>Prev</span>}
            {this.paginationNumbers()}
            {(currentPage != 1) && <span className="page_nav" onClick={() => this.getIngredients(checkedIngredientTypes, startingAt)}>Next</span>}
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