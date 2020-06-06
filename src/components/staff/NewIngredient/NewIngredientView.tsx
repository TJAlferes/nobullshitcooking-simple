import React from 'react';
import { Link } from 'react-router-dom';
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/lib/ReactCrop.scss";

import { IIngredientType } from '../../../store/data/types';
import { LoaderButton } from '../../LoaderButton/LoaderButton';
import './newIngredient.css';

export function StaffNewIngredientView({
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
}: Props): JSX.Element {
  return (
    <div className="new-ingredient-view">

      <div>
        <span>
          <Link to="/home">Home</Link>
          <i>{`&gt;`}</i>
        </span>
        <span>
          <Link to="/staff-dashboard">Dashboard</Link>
          <i>{`&gt;`}</i>
        </span>
        <span>{editing ? 'Edit Ingredient' : 'Create New Ingredient'}</span>
      </div>

      <div className={`new-ingredient one-column-a ${oneColumnATheme}`}>

        <h1>{editing ? 'Edit Ingredient' : 'Create New Ingredient'}</h1>

        <p className="new-ingredient__feedback">{feedback}</p>

        <h2
          className="new-ingredient__heading-two"
          data-test="ingredient-type-heading"
        >
          Type of Ingredient
        </h2>
        <select
          name="ingredientType"
          id="ingredient_type_id"
          required
          onChange={handleIngredientTypeChange}
          value={ingredientTypeId}
        >
          <option value=""></option>
          {dataIngredientTypes.map((type: IIngredientType) => (
            <option
              key={type.ingredient_type_id}
              value={type.ingredient_type_id}
              data-test={type.ingredient_type_name}
            >
              {type.ingredient_type_name}
            </option>
          ))}
        </select>

        <h2 className="new-ingredient__heading-two" data-test="name-heading">
          Name
        </h2>
        <input
          className="new-ingredient__name"
          name="name"
          type="text"
          onChange={handleIngredientNameChange}
          value={ingredientName}
        />

        <h2
          className="new-ingredient__heading-two"
          data-test="description-heading"
        >
          Description
        </h2>
        <textarea
          className="new-ingredient__description"
          name="description"
          onChange={handleIngredientDescriptionChange}
          value={ingredientDescription}
        />

        <div className="new-ingredient__image">
          <h2
            className="new-ingredient__heading-two"
            data-test="image-heading"
          >
            Image of Ingredient
          </h2>
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
                src={ingredientImage as string}
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
            to="/staff-dashboard"
          >
            Cancel
          </Link>
          <LoaderButton
            className="new-ingredient__submit-button"
            name="submit"
            id="create_new_ingredient_button"
            text="Create"
            loadingText="Creating..."
            isLoading={loading}
            onClick={handleSubmit}
          />
        </div>

      </div>

    </div>
  );
}

type Props = {
  oneColumnATheme: string;
  feedback: string;
  loading: boolean;
  editing: boolean;
  ingredientTypeId: number;
  ingredientName: string;
  ingredientDescription: string;
  ingredientImage: string | ArrayBuffer | null;
  prevIngredientImage: string;
  dataIngredientTypes: IIngredientType[]
  handleIngredientTypeChange(e: React.SyntheticEvent<EventTarget>): void;
  handleIngredientNameChange(e: React.SyntheticEvent<EventTarget>): void;
  handleIngredientDescriptionChange(e: React.SyntheticEvent<EventTarget>): void;
  onSelectFile(e: React.ChangeEvent<HTMLInputElement>): void;
  onImageLoaded(image: HTMLImageElement): void;
  crop: Crop;
  cropFullSizePreview: string;
  cropTinySizePreview: string;
  onCropChange(crop: Crop): void;
  onCropComplete(crop: Crop): void;
  cancelIngredientImage(): void;
  handleSubmit(): void;
};