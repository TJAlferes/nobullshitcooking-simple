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

  componentDidMount() {
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
            <div className="view-recipe">

              <div className="view-recipe-title"><h1>{recipe.title}</h1></div>

              <div className="view-recipe-recipe-image">
                <img src={`https://s3.amazonaws.com/nobsc-images-01/recipes/recipe/${recipe.recipe_image}.png`} />
              </div>

              <div className="view-recipe-type">{recipe.recipe_type_name}</div>
              <div className="view-recipe-cuisine">{recipe.cuisine}</div>
              <div className="view-recipe-">{recipe.description}</div>

              <div className="view-recipe-">
                {recipe.required_equipment.map(equ => (
                  <div>{equ.amount}{' '}{equ.equipment}</div>
                ))}
              </div>
              <div className="view-recipe-">
                {recipe.required_ingredients.map(ing => (
                  <div>{ing.amount}{ing.unit}{' '}{ing.ingredient}</div>
                ))}
              </div>
              <div className="view-recipe-">
                {recipe.required_subrecipes.map(rec => (
                  <div>{rec.amount}{rec.unit}{' '}{rec.subrecipe}</div>
                ))}
              </div>
              
              <div className="view-recipe-">{recipe.directions}</div>

              <div className="view-recipe-equipment-image">
                <img src={`https://s3.amazonaws.com/nobsc-images-01/recipes/equipment/${recipe.equipment_image}.png`} />
              </div>
              <div className="view-recipe-ingredients-image">
                <img src={`https://s3.amazonaws.com/nobsc-images-01/recipes/ingredients/${recipe.ingredients_image}.png`} />
              </div>
              <div className="view-recipe-cooking-image">
                <img src={`https://s3.amazonaws.com/nobsc-images-01/recipes/cooking/${recipe.cooking_image}.png`} />
              </div>

            </div>
          }
        </div>
      </div>
    );
  }
}

export default Recipe;