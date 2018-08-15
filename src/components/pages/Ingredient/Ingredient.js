import React, { Component } from 'react';
import axios from 'axios';

import Styles from './Styles';

// Location of our backend API
//const endpoint = 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com/ingredients';
const endpoint = 'http://localhost:3003/ingredients';

/*
  Ingredients Component

  Purpose

    The Ingredient page/component displays detailed information about an individual ingredient.

  State (Local)

    The local state holds 1 first-level property:

      ingredient -- ? -- Holds data for ingredient to be currently rendered
  
  Methods (1)

    async getIngredient(id) -- Fetches data from backend API
  
  Explicit Lifecycle Methods (1)

    componentDidMount()

*/
class Ingredient extends Component {
  state = {ingredient: null};

  // TODO: Redirect them to Ingredients if they only navigate to /ingredient (if there is no /:id)

  getIngredient = async (id) => {  // move id into Ingredient.js?
    try {
      const url = `${endpoint}/${id}`;
      const response = await axios.get(url);
      const [ row ] = response.data;
      this.setState({ingredient: row});
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    this.getIngredient(id);
  }

  render() {
    const { ingredient } = this.state;
    return (
        <Styles>
          <div id="page">
          {
            (ingredient) &&
            <div className="ingredient">
              <div className="ingredient_name">{ingredient.ingredient_name}</div>
              <img className="ingredient_image" src={`https://s3.amazonaws.com/nobsc-images-01/ingredients/${ingredient.ingredient_image}.jpg`} />
              <div className="ingredient_name">Ingredient ID: {ingredient.ingredient_id}</div>
              <div className="ingredient_name">Ingredient Type: {ingredient.ingredient_type_name}</div>
              <p>Nutrition: Coming soon.</p>
            </div>
          }
          </div>
        </Styles>
    );
  }
}

export default Ingredient;