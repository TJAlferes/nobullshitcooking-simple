import React from 'react';
import { Link } from 'react-router-dom';
import ReactCrop from "react-image-crop";
import "react-image-crop/lib/ReactCrop.scss";

import LoaderButton from '../../LoaderButton/LoaderButton';

import './newEquipment.css';

const NewEquipmentView = ({
  oneColumnATheme,
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
}) => (
  <div className="new-equipment-view">

    <div>
      <span>
        <Link to="/home">Home</Link>
        <i> > </i>
      </span>
      <span>
        <Link to="/dashboard">Dashboard</Link>
        <i> > </i>
      </span>
      <span>Create New Private Equipment</span>
    </div>

    <div className={`new-equipment one-column-a ${oneColumnATheme}`}>
      
      <h1>
        {editing ? 'Edit Private Equipment' : 'Create New Private Equipment'}
      </h1>

      <p className="new-equipment__feedback">{feedback}</p>

      <h2 className="new-equipment__heading-two">Type of Equipment</h2>
      <select
        required
        onChange={handleEquipmentTypeChange}
        value={equipmentTypeId}
      >
        <option value=""></option>
        {dataEquipmentTypes.map(type => (
          <option key={type.equipment_type_id} value={type.equipment_type_id}>
            {type.equipment_type_name}
          </option>
        ))}
      </select>

      <h2 className="new-equipment__heading-two">Name</h2>
      <input
        className="new-equipment__name"
        type="text"
        onChange={handleEquipmentNameChange}
        value={equipmentName}
      />

      <h2 className="new-equipment__heading-two">Description</h2>
      <textarea
        className="new-equipment__description"
        onChange={handleEquipmentDescriptionChange}
        value={equipmentDescription}
      />

      <div className="new-equipment__image">
        <h2 className="new-equipment__heading-two">Image of Equipment</h2>
        {!equipmentImage && (
          <div>
            {
              !editing
              ? <img src="https://s3.amazonaws.com/nobsc-user-equipment/nobsc-equipment-default" />
              : prevEquipmentImage && <img src={`https://s3.amazonaws.com/nobsc-user-equipment/${prevEquipmentImage}`} />
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
              src={equipmentImage}
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
          to="/dashboard"
        >
          Cancel
        </Link>
        <LoaderButton
          className="new-equipment__submit-button"
          type="button"
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

export default NewEquipmentView;