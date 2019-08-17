import React, { useState } from 'react';
import { connect } from 'react-redux';

import './newIngredient.css';
import LoaderButton from '../../LoaderButton/LoaderButton';
import { userCreateNewPrivateIngredient } from '../../../store/actions/index';

const UserNewIngredient = props => {
  const [ message, setMessage ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ ingredientTypeId, setIngredientTypeId ] = useState("");
  const [ ingredientName, setIngredientName ] = useState("");
  const [ ingredientDescription, setIngredientDescription ] = useState("");
  const [ ingredientImage, setIngredientImage ] = useState("");
  const [ ingredientImageName, setIngredientImageName ] = useState("Choose File");

  const handleIngredientTypeChange = e => setIngredientTypeId(e.target.value);

  const handleIngredientNameChange = e => setIngredientName(e.target.value);

  const handleIngredientDescriptionChange = e => setIngredientDescription(e.target.value);

  const handleIngredientImageChange = e => setIngredientImage(e.target.files[0]);

  const validate = () => (ingredientTypeId !== "") && (ingredientName !== "");

  const handleSubmit = () => {
    const ingredientInfo = {
      ingredientType,
      ingredientName,
      ingredientDescription,
      ingredientImage
    };
    setLoading(true);
    try {
      props.userCreateNewPrivateIngredient(ingredientInfo);
    } catch(err) {
      setLoading(false);
      setMessage(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="new-ingredient">
      <h1>Create New Private Ingredient</h1>
      <h2>Type</h2>
      <select onChange={handleIngredientTypeChange}>
        {props.dataIngredientTypes.map(type => (
          <option key={type.ingredient_type_id} value={type.ingredient_type_id}>
            {type.ingredient_type_name}
          </option>
        ))}
      </select>
      <h2>Name</h2>
      <input onChange={handleIngredientNameChange} />
      <h2>Description</h2>
      <textarea onChange={handleIngredientDescriptionChange} />
      <h2>Image</h2>
      <input onChange={handleChange} />
      <LoaderButton
        type="button"
        name="submit"
        id="create_new_private_user_ingredient_button"
        text="Create"
        loadingText="Creating..."
        isLoading={loading}
        disabled={!validate()}
        onClick={handleSubmit}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  dataIngredientTypes: state.data.ingredientTypes
});

const mapDispatchToProps = dispatch => ({
  userCreateNewPrivateIngredient: (ingredientInfo) => dispatch(userCreateNewPrivateIngredient(ingredientInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNewIngredient);