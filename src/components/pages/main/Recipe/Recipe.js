import React, { Component } from 'react';
import axios from 'axios';

import './recipe.css';

let endpoint;
if (process.env.NODE_ENV === "production") {
  endpoint = 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com';
} else {
  endpoint = 'http://localhost:3003';
}

class Recipe extends Component {
  state = {recipe: null};

  // TODO: Redirect them to Recipes if they only navigate to /recipe (if there is no /:id)

  getRecipe = async (id) => {
    try {
      const url = `${endpoint}/recipe/${id}`;
      const response = await axios.get(url);
      const [ row ] = response.data;
      this.setState({recipe: row});
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {  // use useEffect() hook?
    const { id } = this.props.match.params;
    this.getRecipe(id);
  }

  render() {
    const { recipe } = this.state;
    return (
      <div>
        <div id="page">
          {
            (recipe) &&
            <div className="recipe">
              <div className="recipe_name">
                {recipe.recipe_name}
              </div>
              <img
                className="recipe_image"
                src={`https://s3.amazonaws.com/nobsc-images-01/recipes/recipe/${recipe.recipe_image}.jpg`}
              />
              <div className="recipe_name">
                Recipe ID: {recipe.recipe_id}
              </div>
              <div className="recipe_name">
                Recipe Type: {recipe.recipe_type_name}
              </div>
              <p>Nutrition: Coming soon.</p>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Recipe;