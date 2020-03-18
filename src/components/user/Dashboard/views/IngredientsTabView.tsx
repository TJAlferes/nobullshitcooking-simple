import React from 'react';
import { Link } from 'react-router-dom';

const IngredientsTabView = ({
  myPrivateIngredients,
  handleDeletePrivateIngredient
}) => (
  <div className="dashboard-content">
    <h2 className="dashboard-content-heading">Private Ingredients</h2>
    <Link className="create-new-entity" to="/user-ingredients/submit">
      Create New Ingredient
    </Link>
    {
      myPrivateIngredients.length
      ? myPrivateIngredients.map(ingredient => (
        <div
          className="dashboard-content-item"
          key={ingredient.ingredient_id}
        >
          <span className="dashboard-content-item-tiny">
            {
              ingredient.ingredient_image !== "nobsc-ingredient-default"
              ? <img src={`https://s3.amazonaws.com/nobsc-user-ingredients/${ingredient.ingredient_image}-tiny`} />
              : <div className="image-default-28-18"></div>
            }
          </span>
          <span className="dashboard-content-item-name">
            <Link to={`/user-ingredients/${ingredient.ingredient_id}`}>
              {ingredient.ingredient_name}
            </Link>
          </span>
          <span className="dashboard-content-item-action">
            <Link to={`/user-ingredients/edit/${ingredient.ingredient_id}`}>
              Edit
            </Link>
          </span>
          <span
            className="dashboard-content-item-delete"
            onClick={() => handleDeletePrivateIngredient(ingredient.ingredient_id)}
          >
            Delete
          </span>
        </div>
      ))
      : (
        <div className="dashboard-content-none">
          You haven't created any private ingredients yet.
        </div>
      )
    }
  </div>
);

export default IngredientsTabView;