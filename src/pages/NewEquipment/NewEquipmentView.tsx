import React from 'react';
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/lib/ReactCrop.scss";
import { Link } from 'react-router-dom';

import { LoaderButton } from '../../components/LoaderButton/LoaderButton';
import { IEquipmentType } from '../../store/data/types';
import './newEquipment.css';

export function NewEquipmentView({
  cancelImage,
  crop,
  dataEquipmentTypes,
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
  // move up into parent container NewEquipment component?
  const dir = staffIsAuthenticated
  ? 'https://s3.amazonaws.com/nobsc-images-01/equipment'
  : 'https://s3.amazonaws.com/nobsc-user-equipment';
  const page = staffIsAuthenticated
    ? editing ? 'Edit Equipment' : 'Create New Equipment'
    : editing ? 'Edit Private Equipment' : 'Create New Private Equipment';
  const path = staffIsAuthenticated ? '/staff-dashboard' : '/dashboard';

  return (
    <div className="new-equipment-view">

      <div>
        <span><Link to="/home">Home</Link><i>{`&gt;`}</i></span>
        <span><Link to={path}>Dashboard</Link><i>{`&gt;`}</i></span>
        <span>{page}</span>
      </div>

      <div className={`new-equipment one-column-a ${oneColumnATheme}`}>
        
        <h1>{page}</h1>

        <p className="new-equipment__feedback">{feedback}</p>

        <h2 className="new-equipment__h2" data-test="equipment-type-heading">
          Type of Equipment
        </h2>
        <select
          name="equipmentType"
          onChange={handleTypeChange}
          required
          value={typeId}
        >
          <option value=""></option>
          {dataEquipmentTypes.map(t => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>

        <h2 className="new-equipment__h2" data-test="name-heading">
          Name
        </h2>
        <input
          className="new-equipment__name"
          onChange={handleNameChange}
          type="text"
          value={name}
        />

        <h2 className="new-equipment__h2" data-test="description-heading">
          Description
        </h2>
        <textarea
          className="new-equipment__description"
          onChange={handleDescriptionChange}
          value={description}
        />

        <div className="new-equipment__image">
          <h2 className="new-equipment__h2" data-test="image-heading">
            Image of Equipment
          </h2>
          {!image && (
            <div>
              {
                !editing
                ? <img src={`${dir}/nobsc-equipment-default`} />
                : prevImage && <img src={`${dir}/${prevImage}`} />
              }
              <h4 className="new-equipment__h4">Change</h4>
              <input
                className="new-equipment__image-input"
                type="file"
                accept="image/*"
                onChange={onSelectFile}
              />
            </div>
          )}
          {image && (
            <div>
              <ReactCrop
                className="new-equipment__crop-tool"
                crop={crop}
                imageStyle={{minHeight: "300px"}}
                onChange={onCropChange}
                onComplete={onCropComplete}
                onImageLoaded={onImageLoaded}
                src={image as string}
                style={{minHeight: "300px"}}
              />
              <span className="new-equipment__crop-tool-tip">
                Move the crop to your desired position. These two images will be saved for you:
              </span>
              <div className="new-equipment__crops">
                <div className="new-equipment__crop-full-outer">
                  <span>Full Size: </span>
                  <img className="new-equipment__crop-full" src={fullCrop} />
                </div>
                <div className="new-equipment__crop-tiny-outer">
                  <span>Tiny Size: </span>
                  <img className="new-equipment__crop-tiny" src={tinyCrop} />
                </div>
              </div>
              <button
                className="new-equipment__image-cancel-button"
                disabled={loading}
                onClick={cancelImage}
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="new-equipment__finish-area">
          <Link className="new-equipment__cancel-button" to={path}>
            Cancel
          </Link>
          <LoaderButton
            className="new-equipment__submit-button"
            id="create_new_private_user_equipment_button"
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
  dataEquipmentTypes: IEquipmentType[];
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