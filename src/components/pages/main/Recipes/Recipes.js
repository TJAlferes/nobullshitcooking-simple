import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './recipes.css';

let endpoint;
if (process.env.NODE_ENV === "production") {
  endpoint = 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com';
} else {
  endpoint = 'http://localhost:3003';
}

class Recipes extends Component {
  state = {  // remember to not initialize state from props
    recipes: [],
    recipeTypes: [],
    cuisines: [],
    pages: 1,
    starting: 0,
    checkedRecipeTypesFilters: {
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
    },
    checkedCuisinesFilters: {
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
      const res = await axios.get(url);
      const recipeTypes = res.data;
      this.setState({recipeTypes});
    } catch (err) {
      console.log(err);  // change me
    }
  }

  getAllCuisines = async () => {
    try {
      const url = `${endpoint}/cuisine`;
      const res = await axios.get(url);
      const cuisines = res.data;
      this.setState({cuisines});
    } catch (err) {
      console.log(err);  // change me
    }
  }

  getRecipes = async (startingAt = 0) => {
    try {
      const url = `${endpoint}/recipe`;
      const res = await axios.post(
        url,
        {types: this.getCheckedRecipeTypes(), cuisines: this.getCheckedCuisines(), start: startingAt}
      );
      const { rows, pages, starting } = res.data;
      this.setState({recipes: rows, pages, starting});
    } catch (err) {
      console.error(err);  // change me
    }
  }

  getCheckedRecipesTypes = () => {
    let checkedRecipesTypes = [];
    Object.entries(this.state.checkedRecipeTypesFilters).forEach(([key, value]) => {
      if (value === true) checkedRecipesTypes.push(Number(key));
    });
    return checkedRecipesTypes;
  }

  getCheckedCuisines = () => {
    let checkedCuisines = [];
    Object.entries(this.state.checkedCuisinesFilters).forEach(([key, value]) => {
      if (value === true) checkedCuisines.push(Number(key));
    });
    return checkedCuisines;
  }

  handleRecipeTypesFilterChange = async (e) => {
    try {
      const id = e.target.id;
      await this.setState(prevState => ({
        ...prevState, checkedRecipeTypesFilters: {
          ...prevState.checkedRecipeTypesFilters, [id]: !prevState.checkedRecipeTypesFilters[[id]]
        }
      }));
      this.getRecipes();
    } catch (err) {
      console.error(err);
    }
  }

  handleCuisinesFilterChange = async (e) => {
    try {
      const id = e.target.id;
      await this.setState(prevState => ({
        ...prevState, checkedCuisinesFilters: {
          ...prevState.checkedCuisinesFilters, [id]: !prevState.checkedCuisinesFilters[[id]]
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
    this.getAllCuisines();
    this.getRecipes();
  }

  render() {
    const { recipes, recipeTypes, cuisines, pages } = this.state;
    return(
      <div>
        <div id="page">

          <div id="page_col_left">

            <div id="list_header"><h1>Recipes</h1></div>

            <div id="filters">

              <form
                id="rtid"
                name="rtid"
                onChange={e => this.handleFilterChange(e)}
              >
                <span id="filter_title"><b>Filter by:</b></span>
                <div>
                  <p className="filter_type"><b>Recipe type</b></p>
                  {recipeTypes.map(recipeType => (
                    <span className="filter_span" key={recipeType.recipe_type_id}>
                      <input type="checkbox" id={recipeType.recipe_type_id} />
                      <label className="filter_label">{recipeType.recipe_type_name}</label>
                    </span>
                  ))}
                </div>
              </form>

              <form
                id="cid"
                name="cid"
                onChange={e => this.handleFilterChange(e)}
              >
                <span id="filter_title"><b>Filter by:</b></span>
                <div>
                  <p className="filter_type"><b>Cuisine</b></p>
                  {cuisines.map(cuisine => (
                    <span className="filter_span" key={cuisine.cuisine_id}>
                      <input type="checkbox" id={cuisine.cuisine_id}/>
                      <label className="filter_label">{cuisine.cuisine_name}</label>
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
                      src={`https://s3.amazonaws.com/nobsc-images-01/recipes/recipe/${recipe.recipe_image}.jpg`}
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