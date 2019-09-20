import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './ingredients.css';
import { viewGetIngredients } from '../../../../store/actions/index';

// if double renders, fix
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
  const [ checkedDisplay, setCheckedDisplay ] = useState(25);

  // be sure they are not used anywhere else
  // search page..?
  // use querystring / qs to pre-apply filters? or props?

  // recipes, checkedRecipeTypesFilters, checkedCuisinesFilters, recipesDisplay, recipesPages, recipesStarting -- NO! recipes you still filter on backend with mysql and elasticsearch

  // change starch to grain (in db too)

  useEffect(() => {
    if (props.match.params.type == "fish-and-shellfish") setCheckedIngredientTypesFilters(prevState => ({...prevState, ...{1: true, 2: true}}));
    if (props.match.params.type == "meat-and-poultry") setCheckedIngredientTypesFilters(prevState => ({...prevState, ...{3: true, 4: true, 5: true}}));
    if (props.match.params.type == "eggs-and-dairy") setCheckedIngredientTypesFilters(prevState => ({...prevState, ...{6: true, 7: true}}));
    if (props.match.params.type == "beans-and-vegetables") setCheckedIngredientTypesFilters(prevState => ({...prevState, ...{10: true, 11: true}}));
    if (props.match.params.type == "fruit") setCheckedIngredientTypesFilters(prevState => ({...prevState, 12: true}));
    if (props.match.params.type == "seeds-and-grains") setCheckedIngredientTypesFilters(prevState => ({...prevState, ...{9: true, 14: true}}));
    if (props.match.params.type == "fats-and-oils") setCheckedIngredientTypesFilters(prevState => ({...prevState, 8: true}));
    if (props.match.params.type == "acids-herbs-and-spices") setCheckedIngredientTypesFilters(prevState => ({...prevState, ...{15: true, 16: true, 17: true}}));
  }, []);

  useEffect(() => {
    getIngredientsView();
  }, [props.dataIngredients, checkedIngredientTypesFilters, checkedDisplay]);
  
  const getIngredientsView = (startingAt = 0) =>
    props.viewGetIngredients(getCheckedIngredientTypesFilters(), checkedDisplay, startingAt);

  const getCheckedIngredientTypesFilters = () => {
    let checkedIngredientTypes = [];
    Object.entries(checkedIngredientTypesFilters).forEach(([key, value]) => {
      if (value === true) checkedIngredientTypes.push(Number(key));
    });
    return checkedIngredientTypes;
  };

  const handleIngredientTypesFilterChange = e => {
    const id = e.target.id;
    setCheckedIngredientTypesFilters(prevState => ({
      ...prevState,
      [id]: !prevState[[id]]
    }));
  };

  const handleDisplayChange = e => setCheckedDisplay(e.target.value);

  // move pagination to own function/hook/module
  // limit pagination numbers
  const paginationNumbers = () => {
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
  };

  const paginate = () => {
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
  };

  return (
    <div className={`ingredients two-column-b ${props.twoColumnBTheme}`}>

        <div className="left-column">

          <div><h1>Ingredients</h1></div>

          <div className="ingredients-list-filters">
            <form
              className="ingredients-list-filters-form"
              name="itid"
              onChange={e => handleIngredientTypesFilterChange(e)}
            >
              <span className="ingredients-filter-title">Filter by:</span>
              <div>
                <p className="ingredients-filter-type">Ingredient type</p>
                {props.dataIngredientTypes.map(ingredientType => (
                  <span
                    className="ingredients-filter-span"
                    key={ingredientType.ingredient_type_id}
                  >
                    <input
                      type="checkbox"
                      id={ingredientType.ingredient_type_id}
                      checked={checkedIngredientTypesFilters[ingredientType.ingredient_type_id] == true}
                    />
                    <label className="ingredients-filter-label">
                      {ingredientType.ingredient_type_name}
                    </label>
                  </span>
                ))}
              </div>
            </form>
          </div>

          <div className="ingredients-list-display">
            <form className="ingredients-list-filters-form">
              <span className="ingredients-filter-title">Results per page:</span>
              <div>
                <span className="ingredients-filter-span">
                  <input
                    type="radio"
                    checked={props.viewDisplay == 25}
                    onChange={handleDisplayChange}
                    value="25"
                  />
                  <label className="ingredients-filter-label">25</label>
                </span>
                <span className="ingredients-filter-span">
                  <input
                    type="radio"
                    checked={props.viewDisplay == 50}
                    onChange={handleDisplayChange}
                    value="50"
                  />
                  <label className="ingredients-filter-label">50</label>
                </span>
                <span className="ingredients-filter-span">
                  <input
                    type="radio"
                    checked={props.viewDisplay == 100}
                    onChange={handleDisplayChange}
                    value="100"
                  />
                  <label className="ingredients-filter-label">100</label>
                </span>
              </div>
            </form>
          </div>

          {(props.viewPages > 1) && paginate()}

          <div className="ingredients-list">
            {props.viewIngredients.map(ingredient => (
              <div className="ingredients-list-item" key={ingredient.ingredient_id}>
                <Link
                  className="ingredient-link"
                  to={`/food/ingredient/${ingredient.ingredient_id}`}
                >
                  <div className="ingredient-name">{ingredient.ingredient_name}</div>
                  <img
                    className="ingredient-thumbnail"
                    src={`https://s3.amazonaws.com/nobsc-images-01/ingredients/${ingredient.ingredient_image}.jpg`}
                  />
                </Link>
              </div>
            ))}
          </div>

          {(props.viewPages > 1) && paginate()}

        </div>

        <div className="right-column">
        </div>

    </div>
  );
}

const mapStateToProps = state => ({
  viewIngredients: state.data.viewMainIngredients,
  viewDisplay: state.data.viewMainIngredientsDisplay,
  viewPages: state.data.viewMainIngredientsPages,
  viewStarting: state.data.viewMainIngredientsStarting,
  dataIngredients: state.data.ingredients,
  dataIngredientTypes: state.data.ingredientTypes
});

const mapDispatchToProps = dispatch => ({
  viewGetIngredients: (types, display, start) => dispatch(viewGetIngredients(types, display, start))
});

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);