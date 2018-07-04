import React, { Component } from 'react';
import axios from 'axios';
//import queryString from 'query-string';

//import { getIngredientsStart } from '../../actions/ingredients';

import { Styles } from './Styles';

// remember you can place logic up here before the class too, as well as import it from elsewhere
// remember to properly separate component and container! (you can mix them at start, especially when app is small)
// which state should be local, which context, and which redux???
// for most of the old PHP $_GET['blah'] sessions, you'll use state(?)
//require 'starter.php';  // this will be cognito user session now (aws amplify)

// Location of our Backend API
//const endpoint = 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com/ingredients';
const endpoint = 'http://localhost:3003/ingredients';  // CORS

class Ingredients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      ingredientTypes: [],
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
    const url = `${endpoint}/types/all`;
    axios.get(url)
    .then(response => {
      const ingredientTypes = response.data;
      this.setState({ingredientTypes});
    })
    .catch(err => console.log(err));
  }

  /*componentDidUpdate() {
    let checkedIngredientTypes = [];
    let { checkedFilters } = this.state;

    Object.entries(checkedFilters).forEach(([key, value]) => {
      if (value === true) {
        checkedIngredientTypes.push(key);
      }
    });

    this.getIngredientsOfTypes(checkedIngredientTypes);
  }*/
  
  getIngredients = async (id) => {
    try {
      const url = id ? `${endpoint}/${id}` : `${endpoint}`;
      const response = await axios.get(url);
      const ingredients = response.data;
      this.setState({ingredients});
    } catch (err) {
      console.error(err);
    }
  }

  getIngredientsOfTypes = async (checkedIngredientTypes) => {
    try {
      const url = `${endpoint}/of-types`;
      const response = await axios.post(url, {types: checkedIngredientTypes});
      const ingredients = response.data;
      this.setState({ingredients});
    } catch (err) {
      console.error(err);
    }
  }

  handleFilterChange = async (e) => {
    const id = e.target.id;
    // (remember to use 'immutability-helper' for state nested much deeper than this)
    await this.setState(prevState => ({
      ...prevState, checkedFilters: {
        ...prevState.checkedFilters, [id]: !prevState.checkedFilters[[id]]
      }
    }));

    let checkedIngredientTypes = [];
    let { checkedFilters } = this.state;

    await Object.entries(checkedFilters).forEach(([key, value]) => {
      if (value === true) {
        checkedIngredientTypes.push(key);
      }
    });

    this.getIngredientsOfTypes(checkedIngredientTypes);
  }


  /*
  // functions to automatically apply filter changes
  function ingredientsActionOne() {
    var iTID = document.getElementById('itid');
    iTID.addEventListener("change", niceFilter, false);
  }
  function niceFilter() {
    this.submit();
  }
  
  window.addEventListener("load", ingredientsActionOne, false);
  */


  render() {
    return(
      <Styles>
        <div id="page">
          <div id="page_col_left">
            <div id="list_header">
              <h1>Ingredients</h1>
              <button onClick={() => this.getIngredients()}>Get Ingredients</button>
            </div>


            <div id="filters">
              <form id="itid" name="itid" onChange={e => this.handleFilterChange(e)}>
                <span id="filter_title"><b>Filter by:</b></span>
                <div>

                  {/*SELECT ingredient_type_id, ingredient_type_name FROM nobsc_ingredient_types*/}
                  
                  {/* create ingredient type filter UI */}
                  <p className="filter_type"><b>Ingredient type</b></p>
                  {this.state.ingredientTypes.map((ingredientType, index) => (
                    <span className="filter_span" key={index}>
                      <input
                        type="checkbox"
                        id={ingredientType.ingredient_type_id}
                        //onClick={() => this.handleFilterClick(ingredientType.ingredient_type_id)}
                      />
                      <label className="filter_label">{ingredientType.ingredient_type_name}</label>
                    </span>
                  ))}
                  {/*
                    if (
                      isset($_GET['itid' . $row['ingredient_type_id']]) &&
                      ($_GET['itid' . $row['ingredient_type_id']] == $row['ingredient_type_id'])) {
                      optionHtml += 'checked ';
                    }
                  */}
                  
                </div>
                {/* <button type="submit" style="display: none;"> */}
              </form>
            </div>


            <div>
            {this.state.ingredients.map((ingredient, index) => (
              <div key={index}>
                <img src={`https://s3.amazonaws.com/nobsc-images-01/ingredients/${ingredient.ingredient_image}.jpg`} />
                <div className="ingredient_name">{ingredient.ingredient_name}</div>
                <div className="ingredient_id">{ingredient.ingredient_id}</div>
                <div className="ingredient_type_id">{ingredient.ingredient_type_id}</div>
              </div>
            ))}
          </div>
          </div>

          <div id="page_col_right">
          </div>
        </div>
      </Styles>
    );
  }
}

export default Ingredients;