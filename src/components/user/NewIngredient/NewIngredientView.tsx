import React from 'react';
import { Link } from 'react-router-dom';
import ReactCrop from "react-image-crop";
import "react-image-crop/lib/ReactCrop.scss";

import LoaderButton from '../../LoaderButton/LoaderButton';

import './newIngredient.css';

const NewIngredientView = ({
  oneColumnATheme,
  feedback,
  loading,

  editing,
  ingredientTypeId,
  ingredientName,
  ingredientDescription,
  ingredientImage,
  prevIngredientImage,

  dataIngredientTypes,
  handleIngredientTypeChange,
  handleIngredientNameChange,
  handleIngredientDescriptionChange,

  onSelectFile,
  onImageLoaded,
  crop,
  cropFullSizePreview,
  cropTinySizePreview,
  onCropChange,
  onCropComplete,

  cancelIngredientImage,
  handleSubmit
}) => (
  <div className="new-ingredient-view">

    <div>
      <span>
        <Link to="/home">Home</Link>
        <i> > </i>
      </span>
      <span>
        <Link to="/dashboard">Dashboard</Link>
        <i> > </i>
      </span>
      <span>Create New Private Ingredient</span>
    </div>

    <div className={`new-ingredient one-column-a ${oneColumnATheme}`}>

      <h1>
        {editing ? 'Edit Private Ingredient' : 'Create New Private Ingredient'}
      </h1>

      <p className="new-ingredient__feedback">{feedback}</p>

      <h2 className="new-ingredient__heading-two">Type of Ingredient</h2>
      <select
        required
        onChange={handleIngredientTypeChange}
        value={ingredientTypeId}
      >
        <option value=""></option>
        {dataIngredientTypes.map(type => (
          <option key={type.ingredient_type_id} value={type.ingredient_type_id}>
            {type.ingredient_type_name}
          </option>
        ))}
      </select>

      <h2 className="new-ingredient__heading-two">Name</h2>
      <input
        className="new-ingredient__name"
        type="text"
        onChange={handleIngredientNameChange}
        value={ingredientName}
      />

      <h2 className="new-ingredient__heading-two">Description</h2>
      <textarea
        className="new-ingredient__description"
        onChange={handleIngredientDescriptionChange}
        value={ingredientDescription}
      />

      <div className="new-ingredient__image">
        <h2 className="new-ingredient__heading-two">Image of Ingredient</h2>
        {!ingredientImage && (
          <div>
            {
              !editing
              ? <img src="https://s3.amazonaws.com/nobsc-user-ingredients/nobsc-ingredient-default" />
              : prevIngredientImage && <img src={`https://s3.amazonaws.com/nobsc-user-ingredients/${prevIngredientImage}`} />
            }
            <h4 className="change-default">Change</h4>
            <input
              className="new-ingredient-image-input"
              type="file"
              accept="image/*"
              onChange={onSelectFile}
            />
          </div>
        )}
        {ingredientImage && (
          <div>
            <ReactCrop
              className="new-ingredient__image-crop-tool"
              style={{minHeight: "300px"}}
              imageStyle={{minHeight: "300px"}}
              src={ingredientImage}
              crop={crop}
              onImageLoaded={onImageLoaded}
              onChange={onCropChange}
              onComplete={onCropComplete}
            />
            <span className="new-ingredient__image-crop-tool-tip">
              Move the crop to your desired position. These two images will be saved for you:
            </span>
            <div className="new-ingredient__image-crop-previews">
              <div className="new-ingredient__image-crop-full-preview">
                <span>Full Size: </span><img src={cropFullSizePreview} />
              </div>
              <div className="new-ingredient__image-crop-tiny-preview">
                <span>Tiny Size: </span><img src={cropTinySizePreview} />
              </div>
            </div>
            <button
              className="new-ingredient-image-cancel-button"
              disabled={loading}
              onClick={cancelIngredientImage}
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="new-ingredient__finish-area">
        <Link
          className="new-ingredient__cancel-button"
          to="/dashboard"
        >
          Cancel
        </Link>
        <LoaderButton
          className="new-ingredient__submit-button"
          type="button"
          name="submit"
          id="create_new_private_user_ingredient_button"
          text="Create"
          loadingText="Creating..."
          isLoading={loading}
          onClick={handleSubmit}
        />
      </div>

    </div>

  </div>
);

export default NewIngredientView;