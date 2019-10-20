import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import './newEquipment.css';
import LoaderButton from '../../LoaderButton/LoaderButton';
import {
  getCroppedFullImage,
  getCroppedThumbImage,
  getCroppedTinyImage
} from '../../../utils/imageCropPreviews/imageCropPreviews';
import {
  userCreateNewPrivateEquipment,
  userEditPrivateEquipment
} from '../../../store/actions/index';

const UserNewEquipment = props => {
  const [ message, setMessage ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ editing, setEditing ] = useState(false);
  const [ equipmentTypeId, setEquipmentTypeId ] = useState("");
  const [ equipmentName, setEquipmentName ] = useState("");
  const [ equipmentDescription, setEquipmentDescription ] = useState("");
  const [ equipmentImage, setEquipmentImage ] = useState("");
  const [
    prevEquipmentImage,
    setPrevEquipmentImage
  ] = useState("nobsc-equipment-default");

  const [ crop, setCrop ] = useState({
    disabled: true,
    locked: true,
    width: 280,
    maxWidth: 280,
    height: 172,
    maxHeight: 172
  });
  const [ cropFullSizePreview, setCropFullSizePreview ] = useState(null);
  const [ cropThumbSizePreview, setCropThumbSizePreview ] = useState(null);
  const [ cropTinySizePreview, setCropTinySizePreview ] = useState(null);

  const [ fullEquipmentImage, setFullEquipmentImage ] = useState(null);
  const [ thumbEquipmentImage, setThumbEquipmentImage ] = useState(null);
  const [ tinyEquipmentImage, setTinyEquipmentImage ] = useState(null);

  const imageRef = useRef(null);

  useEffect(() => {
    const getExistingEquipmentToEdit = async () => {
      setLoading(true);
      setEditing(true);
      const prev = props.dataMyPrivateEquipment.filter((equ) => equ.equipment_id === props.match.params.id);
      console.log(prev);
      setEquipmentTypeId(prev.equipment_type_id);
      setEquipmentName(prev.equipment_name);
      setEquipmentDescription(prev.equipment_description);
      setPrevEquipmentImage(prev.equipment_image);
      setLoading(false);
    };
    if (props.childProps && props.childProps.editing === "true") getExistingEquipmentToEdit();
  }, []);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (props.message !== "") window.scrollTo(0,0);
      setMessage(props.message);
    }
    return () => isSubscribed = false;
  }, [props.message]);

  const handleEquipmentTypeChange = e => setEquipmentTypeId(e.target.value);

  const handleEquipmentNameChange = e => setEquipmentName(e.target.value);

  const handleEquipmentDescriptionChange = e => setEquipmentDescription(e.target.value);

  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setEquipmentImage(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onImageLoaded = image => imageRef.current = image;

  const onCropChange = crop => setCrop(crop);

  const onCropComplete = crop => makeClientCrops(crop);

  const makeClientCrops = async (crop) => {
    if (imageRef && crop.width) {
      const { resizedFullPreview, resizedFullFinal } = await getCroppedFullImage(imageRef.current, crop, "newFile.jpeg");
      const { resizedThumbPreview, resizedThumbFinal } = await getCroppedThumbImage(imageRef.current, crop, "newFile.jpeg");
      const { resizedTinyPreview, resizedTinyFinal } = await getCroppedTinyImage(imageRef.current, crop, "newFile.jpeg");
      setCropFullSizePreview(resizedFullPreview);
      setCropThumbSizePreview(resizedThumbPreview);
      setCropTinySizePreview(resizedTinyPreview);
      setFullEquipmentImage(resizedFullFinal);
      setThumbEquipmentImage(resizedThumbFinal);
      setTinyEquipmentImage(resizedTinyFinal);
    }
  };

  const cancelEquipmentImage = () => {
    setCropFullSizePreview(null);
    setCropThumbSizePreview(null);
    setCropTinySizePreview(null);
    setEquipmentImage(null);
    setFullEquipmentImage(null);
    setThumbEquipmentImage(null);
    setTinyEquipmentImage(null);
  };

  const validate = () => (equipmentTypeId !== "") && (equipmentName !== "");

  const handleSubmit = () => {
    const equipmentInfo = {
      equipmentTypeId,
      equipmentName,
      equipmentDescription,
      equipmentImage,
      fullEquipmentImage,
      thumbEquipmentImage,
      tinyEquipmentImage
    };
    if (props.childProps.editing === "true" || editing === true) {
      equipmentInfo.prevEquipmentImage = prevEquipmentImage;
    }
    setLoading(true);
    try {
      if (props.childProps.editing === "true" || editing === true) {
        props.userEditPrivateEquipment(equipmentInfo, props.history);
      } else {
        props.userCreateNewPrivateEquipment(equipmentInfo, props.history);
      }
    } catch(err) {
      setLoading(false);
      window.scrollTo(0,0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`new-equipment one-column-a ${props.oneColumnATheme}`}>

      <h1>Create New Private Equipment</h1>

      <p className="error-message">{message}</p>

      <h2 className="new-equipment__heading-two">Type of Equipment</h2>
      <select name="equipment_type_id" required onChange={handleEquipmentTypeChange} value={equipmentTypeId}>
        <option value=""></option>
        {props.dataEquipmentTypes.map(type => (
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
              ? <img src="https://nobsc-user-equipment.s3.amazonaws.com/nobsc-equipment-default" />
              : <img src={`https://nobsc-user-equipment.s3.amazonaws.com/${prevEquipmentImage}`} />
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
            <span>Move the crop to your desired position. These three images will be saved for you:</span>
            <div className="new-equipment__image-crop-previews">
              <div className="new-equipment-image-crop-full-preview">
                <span>Full Size: </span><img src={cropFullSizePreview} />
              </div>
              <div className="new-equipment__image-crop-thumb-preview">
                <span>Thumb Size: </span><img src={cropThumbSizePreview} />
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
          to="/user/dashboard"
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
          disabled={!validate()}
          onClick={handleSubmit}
        />
      </div>

    </div>
  );
};

const mapStateToProps = state => ({
  message: state.user.message,
  dataEquipmentTypes: state.data.equipmentTypes,
  dataMyPrivateEquipment: state.data.myPrivateEquipment
});

const mapDispatchToProps = dispatch => ({
  userCreateNewPrivateEquipment: (equipmentInfo) => dispatch(userCreateNewPrivateEquipment(equipmentInfo)),
  userEditPrivateEquipment: (equipmentInfo) => dispatch(userEditPrivateEquipment(equipmentInfo))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserNewEquipment));