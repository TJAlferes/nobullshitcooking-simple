import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './ingredients.css';
import { viewGetIngredients } from '../../../../store/actions/index';

const Ingredients = props => {
  const [
    checkedIngredientTypesFilters,
    setCheckedIngredientTypesFilters
  ] = useState({
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
  });
  const [ checkedDisplay, setCheckedDisplay ] = useState({
    25: true,
    50: false,
    100: false
  });

  // be sure they are not used anywhere else
  // search page..?
  // use querystring / qs to pre-apply filters?

  // recipes, checkedRecipeTypesFilters, checkedCuisinesFilters, recipesDisplay, recipesPages, recipesStarting -- NO! recipes you still filter on backend with mysql and elasticsearch

  useEffect(() => {
    getIngredientsView();
  }, [checkedIngredientTypesFilters, checkedDisplay]);
  
  const getIngredientsView = async (startingAt = 0) => {  // async not needed if filtering on frontend (since no network call)?
    try {
      //e.preventDefault();
      //e.stopPropagation();
      //props.viewGetIngredients(types, display, start);
      props.viewGetIngredients(getCheckedIngredientTypesFilters(), getCheckedDisplay(), startingAt);
    } catch (err) {
      console.error(err);
    }
  }

  const getCheckedIngredientTypesFilters = () => {
    let checkedIngredientTypes = [];
    Object.entries(checkedIngredientTypesFilters).forEach(([key, value]) => {
      if (value === true) checkedIngredientTypes.push(Number(key));
    });
    console.log(checkedIngredientTypes);
    return checkedIngredientTypes;
  }

  const getCheckedDisplay = () => {
    let displayAmount = [];
    Object.entries(checkedDisplay).forEach(([key, value]) => value && displayAmount.push(Number(key)));
    return displayAmount;
  };

  const handleIngredientTypesFilterChange = async (e) => {  // why async..?
    //e.preventDefault();
    //e.stopPropagation();
    const id = e.target.id;
    await setCheckedIngredientTypesFilters(prevState => ({
      ...prevState,
      [id]: !prevState[[id]]
    }));
  }

  const handleDisplayChange = async (e) => {  // why async..?
    //e.preventDefault();
    //e.stopPropagation();
    const id = e.target.id;
    await setCheckedDisplay(prevState => ({
      ...prevState,
      [id]: !prevState[[id]]
    }));
  }

  const paginationNumbers = () => {
    //const display = 25;
    const currentPage = Math.floor((props.viewStarting / props.viewDisplay) + 1);
    let numbers = [];
    for (let i = 1; i <= props.viewPages; i++) {
      let startingAt = (props.viewDisplay * (i - 1));
      if (i != currentPage) {
        numbers.push(
          <span
            className="page_number"
            onClick={() => getIngredientsView(startingAt)}
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

  const paginate = () => {
    //const display = 25;
    const currentPage = Math.floor((props.viewStarting / props.viewDisplay) + 1);
    const startingAtPrev = (props.viewStarting == 0) ? props.viewStarting : (props.viewStarting - props.viewDisplay);
    const startingAtNext = (props.viewStarting + props.viewDisplay);
    const paginationLinks = (
      <div className="page_links">
        <span className="page_numbers">
          {
            (currentPage != 1) &&
            <span
              className="page_nav"
              onClick={() => getIngredientsView(startingAtPrev)}
            >
              Prev
            </span>
          }
          {paginationNumbers()}
          {
            (currentPage != props.viewPages) &&
            <span
              className="page_nav"
              onClick={() => getIngredientsView(startingAtNext)}
            >
              Next
            </span>
          }
        </span>
      </div>
    );
    return paginationLinks;
  }

  return (
    <div>

      <div id="page">

        <div id="page_col_left">

          <div id="list_header"><h1>Ingredients</h1></div>

          <div id="filters">
            <form
              id="itid"
              name="itid"
              onChange={e => handleIngredientTypesFilterChange(e)}
            >
              <span id="filter_title"><b>Filter by:</b></span>
              <div>
                <p className="filter_type"><b>Ingredient type</b></p>
                {props.dataIngredientTypes.map(ingredientType => (
                  <span
                    className="filter_span"
                    key={ingredientType.ingredient_type_id}
                  >
                    <input
                      type="checkbox"
                      id={ingredientType.ingredient_type_id}
                    />
                    <label className="filter_label">
                      {ingredientType.ingredient_type_name}
                    </label>
                  </span>
                ))}
              </div>
            </form>
          </div>

          {(props.viewPages > 1) && paginate()}

          <div>
            {props.viewIngredients.map(ingredient => (
              <div className="ingredient" key={ingredient.ingredient_id}>
                <Link
                  className="ingredient_link"
                  to={`/food/ingredient/${ingredient.ingredient_id}`}
                >
                  <div className="ingredient_name">
                    {ingredient.ingredient_name}
                  </div>
                  {/* TO DO: change to thumbnail image */}
                  <img
                    className="ingredient_thumbnail"
                    src={`https://s3.amazonaws.com/nobsc-images-01/ingredients/${ingredient.ingredient_image}.jpg`}
                  />
                </Link>
              </div>
            ))}
          </div>

          {(props.viewPages > 1) && paginate()}

        </div>

        <div id="page_col_right">
        </div>

      </div>

    </div>
  );
}

const mapStateToProps = state => ({
  viewIngredients: state.data.ingredients,
  //viewIngredientTypesChecked: state.data.ingredientTypesChecked,
  viewDisplay: state.data.ingredientsDisplay,
  viewPages: state.data.ingredientsPages,
  viewStarting: state.data.ingredientsStarting,
  dataIngredientTypes: state.data.ingredientTypes
});

const mapDispatchToProps = dispatch => ({
  viewGetIngredients: (types, display, start) => dispatch(viewGetIngredients(types, display, start))
});

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);