import React, { Component } from 'react';
import axios from 'axios';

import Ingredients from './Ingredients';

// Location of our backend API
//const endpoint = 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com/ingredients';
const endpoint = 'http://localhost:3003/ingredients';

class IngredientsFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      ingredientTypes: []
    }
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

  getIngredients = async ({ startingAt } = {}) => {
    try {
      const startAt = (startingAt) ? startingAt : this.state.starting;

      console.log('-----start getIngredients-----');
      console.log('startAt: ' + startAt);
      console.log('startingAt: ' + startingAt);
      console.log('before setState -- this.state.starting: ' + this.state.starting);

      const url = `${endpoint}`;
      const response = await axios.post(url, {types: this.getCheckedIngredientTypes(), start: startAt});
      const { rows, pages, starting } = response.data;
      this.setState({ingredients: rows, pages, starting});

      console.log('after setState -- this.state.starting: ' + this.state.starting);
      console.log('-----end getIngredients-----');

    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return <Ingredients getAllIngredientTypes={} getIngredients={} />;
  }
}

export default IngredientsFetcher;