import React from 'react';
import { Link } from 'react-router-dom';
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/lib/ReactCrop.scss";

import { IEquipmentType } from '../../store/data/types';
import { LoaderButton } from '../LoaderButton/LoaderButton';
import './newEquipment.css';

export function NewEquipmentView({
  oneColumnATheme,
  staffIsAuthenticated,
  feedback,
  loading,
  editing,
  equipmentTypeId,
  equipmentName,
  equipmentDescription,
  equipmentImage,
  prevEquipmentImage,
  dataEquipmentTypes,
  handleEquipmentTypeChange,
  handleEquipmentNameChange,
  handleEquipmentDescriptionChange,
  onSelectFile,
  onImageLoaded,
  crop,
  cropFullSizePreview,
  cropTinySizePreview,
  onCropChange,
  onCropComplete,
  cancelEquipmentImage,
  handleSubmit
}: Props): JSX.Element {
  // move up into parent container NewEquipment component?
  const dir = staffIsAuthenticated
  ? 'https://s3.amazonaws.com/nobsc-images-01/equipment'
  : 'https://s3.amazonaws.com/nobsc-user-equipment';
  const page = staffIsAuthenticated
    ? editing
      ? 'Edit Equipment'
      : 'Create New Equipment'
    : editing
      ? 'Edit Private Equipment'
      : 'Create New Private Equipment';
  const path = staffIsAuthenticated ? '/staff-dashboard' : '/dashboard';

  return (
    <div className="new-equipment-view">

      <div>
        <span>
          <Link to="/home">Home</Link>
          <i>{`&gt;`}</i>
        </span>
        <span>
          <Link to={path}>Dashboard</Link>
          <i>{`&gt;`}</i>
        </span>
        <span>{page}</span>
      </div>

      <div className={`new-equipment one-column-a ${oneColumnATheme}`}>
        
        <h1>{page}</h1>

        <p className="new-equipment__feedback">{feedback}</p>

        <h2
          className="new-equipment__heading-two"
          data-test="equipment-type-heading"
        >
          Type of Equipment
        </h2>
        <select
          required
          name="equipmentType"
          onChange={handleEquipmentTypeChange}
          value={equipmentTypeId}
        >
          <option value=""></option>
          {dataEquipmentTypes.map((type: IEquipmentType) => (
            <option key={type.equipment_type_id} value={type.equipment_type_id}>
              {type.equipment_type_name}
            </option>
          ))}
        </select>

        <h2 className="new-equipment__heading-two" data-test="name-heading">
          Name
        </h2>
        <input
          className="new-equipment__name"
          type="text"
          onChange={handleEquipmentNameChange}
          value={equipmentName}
        />

        <h2
          className="new-equipment__heading-two"
          data-test="description-heading"
        >
          Description
        </h2>
        <textarea
          className="new-equipment__description"
          onChange={handleEquipmentDescriptionChange}
          value={equipmentDescription}
        />

        <div className="new-equipment__image">
          <h2 className="new-equipment__heading-two" data-test="image-heading">
            Image of Equipment
          </h2>
          {!equipmentImage && (
            <div>
              {
                !editing
                ? <img src={`${dir}/nobsc-equipment-default`} />
                : prevEquipmentImage && <img src={`${dir}/${prevEquipmentImage}`} />
              }
              <h4>Change</h4>
              <input
                className="new-equipment-image-input"
                type="file"
                accept="image/*"
                onChange={onSelectFile}
              />
            </div>
          )}
          {equipmentImage && (
            <div>
              <ReactCrop
                className="new-equipment__image-crop-tool"
                style={{minHeight: "300px"}}
                imageStyle={{minHeight: "300px"}}
                src={equipmentImage as string}
                crop={crop}
                onImageLoaded={onImageLoaded}
                onChange={onCropChange}
                onComplete={onCropComplete}
              />
              <span className="new-equipment__image-crop-tool-tip">
                Move the crop to your desired position. These two images will be saved for you:
              </span>
              <div className="new-equipment__image-crop-previews">
                <div className="new-equipment-image-crop-full-preview">
                  <span>Full Size: </span><img src={cropFullSizePreview} />
                </div>
                <div className="new-equipment__image-crop-tiny-preview">
                  <span>Tiny Size: </span><img src={cropTinySizePreview} />
                </div>
              </div>
              <button
                className="new-equipment__image-cancel-button"
                disabled={loading}
                onClick={cancelEquipmentImage}
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="new-equipment__finish-area">
          <Link
            className="new-equipment__cancel-button"
            to={path}
          >
            Cancel
          </Link>
          <LoaderButton
            className="new-equipment__submit-button"
            name="submit"
            id="create_new_private_user_equipment_button"
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
  staffIsAuthenticated?: boolean;
  feedback: string;
  loading: boolean;
  editing: boolean;
  equipmentTypeId: number;
  equipmentName: string;
  equipmentDescription: string;
  equipmentImage: string | ArrayBuffer | null;
  prevEquipmentImage: string;
  dataEquipmentTypes: IEquipmentType[];
  handleEquipmentTypeChange(e: React.SyntheticEvent<EventTarget>): void;
  handleEquipmentNameChange(e: React.SyntheticEvent<EventTarget>): void;
  handleEquipmentDescriptionChange(e: React.SyntheticEvent<EventTarget>): void;
  onSelectFile(e: React.ChangeEvent<HTMLInputElement>): void;
  onImageLoaded(image: HTMLImageElement): void;
  crop: Crop;
  cropFullSizePreview: string;
  cropTinySizePreview: string;
  onCropChange(crop: Crop): void;
  onCropComplete(crop: Crop): void;
  cancelEquipmentImage(): void;
  handleSubmit(): void;
};