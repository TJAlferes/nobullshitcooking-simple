import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { withRouter, Link } from 'react-router-dom';
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import './newEquipment.css';
import LoaderButton from '../../LoaderButton/LoaderButton';
import {
  getCroppedFullImage,
  getCroppedTinyImage
} from '../../../utils/imageCropPreviews/imageCropPreviews';
import {
  userCreateNewPrivateEquipment,
  userEditPrivateEquipment
} from '../../../store/actions/index';

const UserNewEquipment = props => {
  const history = useHistory();

  const [ message, setMessage ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ editing, setEditing ] = useState(false);
  const [ editingId, setEditingId ] = useState("");
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
  const [ cropTinySizePreview, setCropTinySizePreview ] = useState(null);

  const [ fullEquipmentImage, setFullEquipmentImage ] = useState(null);
  const [ tinyEquipmentImage, setTinyEquipmentImage ] = useState(null);

  const imageRef = useRef(null);

  useEffect(() => {
    const getExistingEquipmentToEdit = () => {
      window.scrollTo(0,0);
      setLoading(true);
      setEditing(true);

      const prev = props.dataMyPrivateEquipment
      .filter((equ) => equ.equipment_id === props.match.params.id);

      setEditingId(prev.equipment_id);
      setEquipmentTypeId(prev.equipment_type_id);
      setEquipmentName(prev.equipment_name);
      setEquipmentDescription(prev.equipment_description);
      setPrevEquipmentImage(prev.equipment_image);
      setLoading(false);
    };
    if (props.childProps && props.childProps.editing === "true") {
      getExistingEquipmentToEdit();
    }
  }, []);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (props.message !== "") window.scrollTo(0,0);
      setMessage(props.message);
      if (
        props.message === "Equipment created." ||
        props.message === "Equipment updated."
      ) {
        setTimeout(() => history.push('/user/dashboard'), 3000);
      }
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
      const {
        resizedFullPreview,
        resizedFullFinal
      } = await getCroppedFullImage(imageRef.current, crop, "newFile.jpeg");
      const {
        resizedTinyPreview,
        resizedTinyFinal
      } = await getCroppedTinyImage(imageRef.current, crop, "newFile.jpeg");
      setCropFullSizePreview(resizedFullPreview);
      setCropTinySizePreview(resizedTinyPreview);
      setFullEquipmentImage(resizedFullFinal);
      setTinyEquipmentImage(resizedTinyFinal);
    }
  };

  const cancelEquipmentImage = () => {
    setCropFullSizePreview(null);
    setCropTinySizePreview(null);
    setEquipmentImage(null);
    setFullEquipmentImage(null);
    setTinyEquipmentImage(null);
  };

  const valid = () => {
    let validEquipmentTypeId = equipmentTypeId !== "";
    let validEquipmentName = equipmentName.trim() !== "";
    let validEquipmentDescription = equipmentDescription.trim() !== "";

    if (!validEquipmentTypeId) {
      window.scrollTo(0,0);
      setMessage("You forgot to select the equipment type...");
      setTimeout(() => setMessage(""), 3000);
      return false;
    }

    if (!validEquipmentName) {
      window.scrollTo(0,0);
      setMessage("Umm, double check your name...");
      setTimeout(() => setMessage(""), 3000);
      return false;
    }

    if (!validEquipmentDescription) {
      window.scrollTo(0,0);
      setMessage("Umm, double check your description...");
      setTimeout(() => setMessage(""), 3000);
      return false;
    }

    return (
      equipmentTypeId !== "" &&
      equipmentName.trim() !== "" &&
      equipmentDescription.trim() !== ""
    );
  };

  const handleSubmit = () => {
    const equipmentInfo = {
      equipmentTypeId,
      equipmentName,
      equipmentDescription,
      equipmentImage,
      fullEquipmentImage,
      tinyEquipmentImage
    };
    if (!valid()) return;
    if (editing === true) {
      equipmentInfo.equipmentId = editingId;
      equipmentInfo.prevEquipmentImage = prevEquipmentImage;
    }
    setLoading(true);
    try {
      if (props.childProps.editing === "true" || editing === true) {
        props.userEditPrivateEquipment(equipmentInfo);
      } else {
        props.userCreateNewPrivateEquipment(equipmentInfo);
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

      <p className="new-equipment__error-message">{message}</p>

      <h2 className="new-equipment__heading-two">Type of Equipment</h2>
      <select
        required
        onChange={handleEquipmentTypeChange}
        value={equipmentTypeId}
      >
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
              : prevEquipmentImage && <img src={`https://nobsc-user-equipment.s3.amazonaws.com/${prevEquipmentImage}`} />
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
            <span>Move the crop to your desired position. These two images will be saved for you:</span>
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