import React, { useState } from 'react';
import { connect } from 'react-redux';

import './newIngredient.css';
import LoaderButton from '../../LoaderButton/LoaderButton';
import {
  userCreateNewPrivateIngredient,
  userEditPrivateIngredient
} from '../../../store/actions/index';

const UserNewIngredient = props => {
  const [ message, setMessage ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ editing, setEditing ] = useState(false);
  const [ ingredientTypeId, setIngredientTypeId ] = useState("");
  const [ ingredientName, setIngredientName ] = useState("");
  const [ ingredientDescription, setIngredientDescription ] = useState("");
  const [ ingredientImage, setIngredientImage ] = useState("");

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
      if (props.childProps.editing === "true" || editing === true) {
        props.userEditPrivateIngredient(ingredientInfo);
      } else {
        props.userCreateNewPrivateIngredient(ingredientInfo);
      }
    } catch(err) {
      setLoading(false);
      setMessage(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`new-ingredient one-column-a ${props.oneColumnATheme}`}>

      <h1>Create New Private Ingredient</h1>

      <p className="error-message">{message}</p>

      <h2>Type of Ingredient</h2>
      <select onChange={handleIngredientTypeChange}>
        <option value=""></option>
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

      <div className="new-ingredient__image">
        <h2>Image of Ingredient</h2>
        {!ingredientImage && (
          <div>
            {
              !editing
              ? <img src="https://nobsc-user-ingredients.s3.amazon.com/nobsc-ingredients-default" />
              : <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${prevIngredientImage}`} />
            }
            <h4 className="change-default">Change</h4>
            <input
              className="new-ingredient-image-input"
              name="setIngredientImage"
              type="file"
              accept="image/*"
              onChange={onSelectFile}
            />
          </div>
        )}
        {ingredientImage && (
          <div>
            <ReactCrop
              className="new-ingredient-image-crop-tool"
              style={{minHeight: "300px"}}
              imageStyle={{minHeight: "300px"}}
              src={ingredientImage}
              crop={crop}
              onImageLoaded={onImageLoaded}
              onChange={onCropChange}
              onComplete={onCropComplete}
            />
            <span>Move the crop to your desired position. These three images will be saved for you:</span>
            <div className="new-ingredient-image-crop-previews">
              <div className="new-ingredient-image-crop-full-preview">
                <span>Full Size: </span><img src={cropFullSizePreview} />
              </div>
              <div className="new-ingredient-image-crop-thumb-preview">
                <span>Thumb Size: </span><img src={cropThumbSizePreview} />
              </div>
              <div className="new-ingredient-image-crop-tiny-preview">
                <span>Tiny Size: </span><img src={cropTinySizePreview} />
              </div>
            </div>
            <button
              className="new-ingredient-image-cancel-button"
              name="cancel-image"
              disabled={loading}
              onClick={cancelIngredientImage}
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      <div>
        <Link
          className="new-ingredient-cancel-button"
          to="/user/dashboard"
        >
          Cancel
        </Link>
        <LoaderButton
          className="new-ingredient-submit-button"
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

    </div>
  );
};

const mapStateToProps = state => ({
  message: state.user.message,
  dataIngredientTypes: state.data.ingredientTypes
});

const mapDispatchToProps = dispatch => ({
  userCreateNewPrivateIngredient: (ingredientInfo) => dispatch(userCreateNewPrivateIngredient(ingredientInfo)),
  userEditPrivateIngredient: (ingredientInfo) => dispatch(userEditPrivateIngredient(ingredientInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNewIngredient);