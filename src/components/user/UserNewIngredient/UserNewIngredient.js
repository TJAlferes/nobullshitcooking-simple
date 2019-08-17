import React, { useState } from 'react';
import { connect } from 'react-redux';

import './newIngredient.css';

const UserNewIngredient = props => {
  const [ ingredientType, setIngredientType ] = useState("");
  const [ ingredientName, setIngredientName ] = useState("");
  const [ ingredientDescription, setIngredientDescription ] = useState("");
  const [ ingredientImage, setIngredientImage ] = useState("");

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <div className="new-ingredient">
      <h1>Create New Private Ingredient</h1>
      <h2>Type</h2>
      <select onChange={handleChange}>
        {props.dataIngredientTypes.map(type => (
          <option key={type.ingredient_type_id} value={type.ingredient_type_id}>
            {type.ingredient_type_name}
          </option>
        ))}
      </select>
      <h2>Name</h2>
      <input onChange={handleChange} />
      <h2>Description</h2>
      <textarea onChange={handleChange} />
      <h2>Image</h2>
      <input onChange={handleChange} />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
};

const mapStateToProps = state => ({
  dataIngredientTypes: state.data.ingredientTypes
});

export default connect(mapStateToProps)(UserNewIngredient);