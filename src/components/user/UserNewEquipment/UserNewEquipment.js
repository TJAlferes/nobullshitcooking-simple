import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import './newEquipment.css';
import LoaderButton from '../../LoaderButton/LoaderButton';
import { userCreateNewPrivateEquipment } from '../../../store/actions/index';

const UserNewEquipment = props => {
  const [ message, setMessage ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ equipmentTypeId, setEquipmentTypeId ] = useState("");
  const [ equipmentName, setEquipmentName ] = useState("");
  const [ equipmentDescription, setEquipmentDescription ] = useState("");

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
  const [ equipmentImage, setEquipmentImage ] = useState("");
  const [ fullEquipmentImage, setFullEquipmentImage ] = useState(null);
  const [ thumbEquipmentImage, setThumbEquipmentImage ] = useState(null);
  const [ tinyEquipmentImage, setTinyEquipmentImage ] = useState(null);

  const imageRef = useRef(null);

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

  const getCroppedFullImage = async (image, crop, fileName) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = 280;
    canvas.height = 172;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      280,
      172
    );

    const resizedFullPreview = await new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) return;
        blob.name = fileName;
        const fileUrl = window.URL.createObjectURL(blob);
        resolve(fileUrl);
      }, 'image/jpeg', 1);
    });

    const resizedFullFinal = await new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) return;
        blob.name = fileName;
        const image = new File([blob], "fullFinal", {type: "image/jpeg"});
        resolve(image);
      }, 'image/jpeg', 1);
    });

    return {resizedFullPreview, resizedFullFinal};
  };

  const getCroppedThumbImage = async (image, crop, fileName) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = 100;
    canvas.height = 62;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      100,
      62
    );

    const resizedThumbPreview = await new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) return;
        blob.name = fileName;
        const fileUrl = window.URL.createObjectURL(blob);
        resolve(fileUrl);
      }, 'image/jpeg', 1);
    });

    const resizedThumbFinal = await new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) return;
        blob.name = fileName;
        const image = new File([blob], "thumbFinal", {type: "image/jpeg"});
        resolve(image);
      }, 'image/jpeg', 1);
    });

    return {resizedThumbPreview, resizedThumbFinal};
  };

  const getCroppedTinyImage = async (image, crop, fileName) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = 25;
    canvas.height = 25;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      25,
      25
    );

    const resizedTinyPreview = await new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) return;
        blob.name = fileName;
        const fileUrl = window.URL.createObjectURL(blob);
        resolve(fileUrl);
      }, 'image/jpeg', 1);
    });

    const resizedTinyFinal = await new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) return;
        blob.name = fileName;
        const image = new File([blob], "tinyFinal", {type: "image/jpeg"});
        resolve(image);
      }, 'image/jpeg', 1);
    });

    return {resizedTinyPreview, resizedTinyFinal};
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
    setLoading(true);
    try {
      props.userCreateNewPrivateEquipment(equipmentInfo);
    } catch(err) {
      setLoading(false);
      window.scrollTo(0,0);
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`new-equipment one-column-a ${props.oneColumnATheme}`}>

      <h1>Create New Private Equipment</h1>

      <p className="error-message">{message}</p>

      <h2 className="red_style">Type of Equipment</h2>
      <select name="equipment_type_id" required onChange={handleEquipmentTypeChange} value={equipmentTypeId}>
        <option value=""></option>
        {props.dataEquipmentTypes.map(type => (
          <option key={type.equipment_type_id} value={type.equipment_type_id}>
            {type.equipment_type_name}
          </option>
        ))}
      </select>

      <h2 className="red_style">Name</h2>
      <input className="equipment-name" name="equipment_name" type="text" onChange={handleEquipmentNameChange} value={equipmentName} />

      <h2 className="red_style">Description</h2>
      <textarea name="equipment_description" onChange={handleEquipmentDescriptionChange} value={equipmentDescription} />

      <div className="new-equipment-image">
        <h2>Image of Equipment</h2>
        {!equipmentImage && (
          <div>
            <img src="https://nobsc-user-equipment.s3.amazonaws.com/nobsc-equipment-default" />
            <h4>Change</h4>
            <input
              className="new-equipment-image-input"
              name="setEquipmentImage"
              type="file"
              accept="image/*"
              onChange={onSelectFile}
            />
          </div>
        )}

        {equipmentImage && (
          <div>
            <ReactCrop
              className="new-equipment-image-crop-tool"
              style={{minHeight: "300px"}}
              imageStyle={{minHeight: "300px"}}
              src={equipmentImage}
              crop={crop}
              onImageLoaded={onImageLoaded}
              onChange={onCropChange}
              onComplete={onCropComplete}
            />
            <span>Move the crop to your desired position. These three images will be saved for you:</span>
            <div className="new-equipment-image-crop-previews">
              <div className="new-equipment-image-crop-full-preview">
                <span>Full Size: </span><img src={cropFullSizePreview} />
              </div>
              <div className="new-equipment-image-crop-thumb-preview">
                <span>Thumb Size: </span><img src={cropThumbSizePreview} />
              </div>
              <div className="new-equipment-image-crop-tiny-preview">
                <span>Tiny Size: </span><img src={cropTinySizePreview} />
              </div>
            </div>
            <button
              className="new-equipment-image-cancel-button"
              name="cancel-image"
              disabled={loading}
              onClick={cancelEquipmentImage}
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      <div>
        <Link
          className="new-equipment-cancel-button"
          to="/user/dashboard"
        >
          Cancel
        </Link>
        <LoaderButton
          className="new-equipment-submit-button"
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
  dataEquipmentTypes: state.data.equipmentTypes
});

const mapDispatchToProps = dispatch => ({
  userCreateNewPrivateEquipment: (equipmentInfo) => dispatch(userCreateNewPrivateEquipment(equipmentInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNewEquipment);