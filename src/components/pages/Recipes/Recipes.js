import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './recipes.css';

// For dev only. Real data is in our MySQL DB, gotten with an HTTP request to our Node.js API.
//import devData from './dev-ingredients-data';
// Location of our backend API
// set up if (dev) here
// get this AWS EB back up online
//const endpoint = 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com';
const endpoint = 'http://localhost:3003';

class Recipes extends Component {
  state = {  // remember to not initialize state from props, use useState() hook
    recipes: [],
    recipeTypes: [],
    pages: 1,
    starting: 0,
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
      12: false
    }
  };

  getAllRecipeTypes = async () => {
    try {
      const url = `${endpoint}/recipe-type`;
      const response = await axios.get(url);
      const recipeTypes = response.data;
      this.setState({recipeTypes});
    } catch (err) {
      console.log(err);
    }
  }

  getRecipes = async (startingAt = 0) => {
    try {
      const url = `${endpoint}/recipe`;
      const response = await axios.post(
        url,
        {types: this.getCheckedRecipeTypes(), start: startingAt}
      );
      const { rows, pages, starting } = response.data;
      this.setState({recipes: rows, pages, starting});
    } catch (err) {
      console.error(err);
    }
  }

  getCheckedRecipesTypes = () => {
    let checkedRecipesTypes = [];
    Object.entries(this.state.checkedFilters).forEach(([key, value]) => {
      if (value === true) checkedRecipesTypes.push(Number(key));
    });
    return checkedRecipesTypes;
  }

  handleFilterChange = async (e) => {
    try {
      const id = e.target.id;
      // use 'immutability-helper' for state nested much deeper than this
      // better yet, use 'flat' or your own utility function to keep state flat
      await this.setState(prevState => ({
        ...prevState, checkedFilters: {
          ...prevState.checkedFilters, [id]: !prevState.checkedFilters[[id]]
        }
      }));
      this.getRecipes();
    } catch (err) {
      console.error(err);
    }
  }

  // TO DO: move paginationNumbers and paginate to utils

  paginationNumbers = () => {
    const { pages, starting } = this.state;
    const display = 25;
    const currentPage = Math.floor((starting / display) + 1);

    let numbers = [];
    
    for (let i = 1; i <= pages; i++) {
      let startingAt = (display * (i - 1));
      if (i != currentPage) {
        numbers.push(
          <span
            className="page_number"
            onClick={() => this.getRecipes(startingAt)}
            key={i}
          >
            {i}
          </span>
        );
      } else {
        numbers.push(<span className="current_page_number" key={i}>{i}</span>);
      }
    }

    return numbers;
  }

  paginate = () => {
    const { pages, starting } = this.state;
    const display = 25;
    const currentPage = Math.floor((starting / display) + 1);
    const startingAtPrev = (starting == 0) ? starting : (starting - display);
    const startingAtNext = (starting + display);

    const paginationLinks = (
      <div className="page_links">
        <span className="page_numbers">
          {
            (currentPage != 1) &&
            <span
              className="page_nav"
              onClick={() => this.getRecipes(startingAtPrev)}
            >
              Prev
            </span>
          }
          {this.paginationNumbers()}
          {
            (currentPage != pages) &&
            <span
              className="page_nav"
              onClick={() => this.getRecipes(startingAtNext)}
            >
              Next
            </span>
          }
        </span>
      </div>
    );

    return paginationLinks;
  }

  // use SSR here...
  componentDidMount() {  // use useEffect() hook (?)
    this.getAllRecipeTypes();
    this.getRecipes();
  }

  render() {
    const { recipes, recipeTypes, pages } = this.state;
    return(
      <div>
        <div id="page">

          <div id="page_col_left">

            <div id="list_header"><h1>Recipes</h1></div>

            <div id="filters">
              <form
                id="itid"
                name="itid"
                onChange={e => this.handleFilterChange(e)}
              >
                <span id="filter_title"><b>Filter by:</b></span>
                <div>
                  <p className="filter_type"><b>Recipe type</b></p>
                  {recipeTypes.map(recipeType => (
                    <span
                      className="filter_span"
                      key={recipeType.recipe_type_id}
                    >
                      <input
                        type="checkbox"
                        id={recipeType.recipe_type_id}
                      />
                      <label className="filter_label">
                        {recipeType.recipe_type_name}
                      </label>
                    </span>
                  ))}
                </div>
              </form>
            </div>

            {(pages > 1) && this.paginate()}

            <div>
              {recipes.map(recipe => (
                <div className="recipe" key={recipe.recipe_id}>
                  <Link
                    className="recipe_link"
                    to={`/food/recipe/${recipe.recipe_id}`}
                  >
                    {/* TO DO: change to thumbnail image */}
                    <div className="recipe_name">
                      {recipe.recipe_name}
                    </div>
                    <img
                      className="recipe_thumbnail"
                      src={`https://s3.amazonaws.com/nobsc-images-01/recipes/${recipe.recipe_image}.jpg`}
                    />
                  </Link>
                </div>
              ))}
            </div>

            {(pages > 1) && this.paginate()}

          </div>

          <div id="page_col_right">
          </div>

        </div>
      </div>
    );
  }
}

export default Recipes;