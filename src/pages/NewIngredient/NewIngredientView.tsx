import React from 'react';
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/lib/ReactCrop.scss";
import { Link } from 'react-router-dom';

import { LoaderButton } from '../../components/LoaderButton/LoaderButton';
import { IIngredientType } from '../../store/data/types';
import './newIngredient.css';

export function NewIngredientView({
  cancelImage,
  crop,
  dataIngredientTypes,
  description,
  editing,
  feedback,
  fullCrop,
  handleDescriptionChange,
  handleNameChange,
  handleSubmit,
  handleTypeChange,
  image,
  loading,
  name,
  onCropChange,
  onCropComplete,
  oneColumnATheme,
  onImageLoaded,
  onSelectFile,
  prevImage,
  staffIsAuthenticated,
  tinyCrop,
  typeId
}: Props): JSX.Element {
  // move up into parent container NewIngredient component?
  const dir = staffIsAuthenticated
  ? 'https://s3.amazonaws.com/nobsc-images-01/ingredients'
  : 'https://s3.amazonaws.com/nobsc-user-ingredients';
  const page = staffIsAuthenticated
    ? editing ? 'Edit Ingredient' : 'Create New Ingredient'
    : editing ? 'Edit Private Ingredient' : 'Create New Private Ingredient';
  const path = staffIsAuthenticated ? '/staff-dashboard' : '/dashboard';

  return (
    <div className="new-ingredient-view">

      <div>
        <span><Link to="/home">Home</Link><i>{`&gt;`}</i></span>
        <span><Link to={path}>Dashboard</Link><i>{`&gt;`}</i></span>
        <span>{page}</span>
      </div>

      <div className={`new-ingredient one-column-a ${oneColumnATheme}`}>

        <h1>{page}</h1>

        <p className="new-ingredient__feedback">{feedback}</p>

        <h2 className="new-ingredient__h2" data-test="ingredient-type-heading">
          Type of Ingredient
        </h2>
        <select
          name="ingredientType"
          onChange={handleTypeChange}
          required
          value={typeId}
        >
          <option value=""></option>
          {dataIngredientTypes.map(t => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>

        <h2 className="new-ingredient__h2" data-test="name-heading">
          Name
        </h2>
        <input
          className="new-ingredient__name"
          onChange={handleNameChange}
          type="text"
          value={name}
        />

        <h2 className="new-ingredient__h2" data-test="description-heading">
          Description
        </h2>
        <textarea
          className="new-ingredient__description"
          onChange={handleDescriptionChange}
          value={description}
        />

        <div className="new-ingredient__image">
          <h2 className="new-ingredient__h2" data-test="image-heading">
            Image of Ingredient
          </h2>
          {!image && (
            <div>
              {
                !editing
                ? <img src={`${dir}/nobsc-ingredient-default`} />
                : prevImage && <img src={`${dir}/${prevImage}`} />
              }
              <h4 className="new-ingredient__h4">Change</h4>
              <input
                className="new-ingredient__image-input"
                type="file"
                accept="image/*"
                onChange={onSelectFile}
              />
            </div>
          )}
          {image && (
            <div>
              <ReactCrop
                className="new-ingredient__crop-tool"
                crop={crop}
                imageStyle={{minHeight: "300px"}}
                onChange={onCropChange}
                onComplete={onCropComplete}
                onImageLoaded={onImageLoaded}
                src={image as string}
                style={{minHeight: "300px"}}
              />
              <span className="new-ingredient__crop-tool-tip">
                Move the crop to your desired position. These two images will be saved for you:
              </span>
              <div className="new-ingredient__crops">
                <div className="new-ingredient__crop-full-outer">
                  <span>Full Size: </span>
                  <img className="new-ingredient__crop-full" src={fullCrop} />
                </div>
                <div className="new-ingredient__crop-tiny-outer">
                  <span>Tiny Size: </span>
                  <img className="new-ingredient__crop-tiny" src={tinyCrop} />
                </div>
              </div>
              <button
                className="new-ingredient-image-cancel-button"
                disabled={loading}
                onClick={cancelImage}
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="new-ingredient__finish-area">
          <Link className="new-ingredient__cancel-button" to={path}>
            Cancel
          </Link>
          <LoaderButton
            className="new-ingredient__submit-button"
            id="create_new_private_user_ingredient_button"
            isLoading={loading}
            loadingText="Creating..."
            name="submit"
            onClick={handleSubmit}
            text="Create"
          />
        </div>

      </div>

    </div>
  );
}

type Props = {
  cancelImage(): void;
  crop: Crop;
  dataIngredientTypes: IIngredientType[];
  description: string;
  editing: boolean;
  feedback: string;
  fullCrop: string;
  handleDescriptionChange(e: React.SyntheticEvent<EventTarget>): void;
  handleNameChange(e: React.SyntheticEvent<EventTarget>): void;
  handleSubmit(): void;
  handleTypeChange(e: React.SyntheticEvent<EventTarget>): void;
  image: string | ArrayBuffer | null;
  loading: boolean;
  name: string;
  onCropChange(crop: Crop): void;
  onCropComplete(crop: Crop): void;
  oneColumnATheme: string;
  onImageLoaded(image: HTMLImageElement): void;
  onSelectFile(e: React.ChangeEvent<HTMLInputElement>): void;
  prevImage: string;
  staffIsAuthenticated?: boolean;
  tinyCrop: string;
  typeId: number;
};