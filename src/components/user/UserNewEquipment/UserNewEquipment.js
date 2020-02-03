import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';

import {
  getCroppedImage
} from '../../../utils/imageCropPreviews/imageCropPreviews';

import {
  userCreateNewPrivateEquipment,
  userEditPrivateEquipment
} from '../../../store/actions/index';

import UserNewEquipmentView from './UserNewEquipmentView';

export const UserNewEquipment = ({
  match,
  oneColumnATheme,
  message,
  childProps,
  dataEquipmentTypes,
  dataMyPrivateEquipment,
  userCreateNewPrivateEquipment,
  userEditPrivateEquipment
}) => {
  const history = useHistory();

  const [ feedback, setFeedback ] = useState("");
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

      const [ prev ] = dataMyPrivateEquipment
      .filter((equ) => equ.equipment_id === Number(match.params.id));

      setEditingId(prev.equipment_id);
      setEquipmentTypeId(prev.equipment_type_id);
      setEquipmentName(prev.equipment_name);
      setEquipmentDescription(prev.equipment_description);
      setPrevEquipmentImage(prev.equipment_image);
      setLoading(false);
    };
    if (childProps && childProps.editing === "true") {
      getExistingEquipmentToEdit();
    }
  }, []);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (message !== "") window.scrollTo(0,0);
      setFeedback(message);
      if (
        message === "Equipment created." ||
        message === "Equipment updated."
      ) {
        setTimeout(() => history.push('/user/dashboard'), 3000);
      }
      setLoading(false);
    }
    return () => isSubscribed = false;
  }, [message]);

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
    if (!imageRef) return;
    if (!crop.width) return;
    const { resizedFullPreview, resizedFullFinal } = await getCroppedImage(
      280,
      172,
      imageRef.current,
      crop,
      "newFile.jpeg"
    );
    const { resizedTinyPreview, resizedTinyFinal } = await getCroppedImage(
      28,
      18,
      imageRef.current,
      crop,
      "newFile.jpeg"
    );
    setCropFullSizePreview(resizedFullPreview);
    setCropTinySizePreview(resizedTinyPreview);
    setFullEquipmentImage(resizedFullFinal);
    setTinyEquipmentImage(resizedTinyFinal);
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
      setFeedback("You forgot to select the equipment type...");
      setTimeout(() => setFeedback(""), 3000);
      return false;
    }

    if (!validEquipmentName) {
      window.scrollTo(0,0);
      setFeedback("Umm, double check your name...");
      setTimeout(() => setFeedback(""), 3000);
      return false;
    }

    if (!validEquipmentDescription) {
      window.scrollTo(0,0);
      setFeedback("Umm, double check your description...");
      setTimeout(() => setFeedback(""), 3000);
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
    if (editing === true) userEditPrivateEquipment(equipmentInfo);
    else userCreateNewPrivateEquipment(equipmentInfo);
  };
  
  return (
    <UserNewEquipmentView
      oneColumnATheme={oneColumnATheme}
      feedback={feedback}
      loading={loading}

      editing={editing}
      equipmentTypeId={equipmentTypeId}
      equipmentName={equipmentName}
      equipmentDescription={equipmentDescription}
      equipmentImage={equipmentImage}
      prevEquipmentImage={prevEquipmentImage}

      dataEquipmentTypes={dataEquipmentTypes}
      handleEquipmentTypeChange={handleEquipmentTypeChange}
      handleEquipmentNameChange={handleEquipmentNameChange}
      handleEquipmentDescriptionChange={handleEquipmentDescriptionChange}

      onSelectFile={onSelectFile}
      onImageLoaded={onImageLoaded}
      crop={crop}
      cropFullSizePreview={cropFullSizePreview}
      cropTinySizePreview={cropTinySizePreview}
      onCropChange={onCropChange}
      onCropComplete={onCropComplete}

      cancelEquipmentImage={cancelEquipmentImage}
      handleSubmit={handleSubmit}
    />
  );
};

const mapStateToProps = state => ({
  message: state.user.message,
  dataEquipmentTypes: state.data.equipmentTypes,
  dataMyPrivateEquipment: state.data.myPrivateEquipment
});

const mapDispatchToProps = dispatch => ({
  userCreateNewPrivateEquipment: (equipmentInfo) =>
    dispatch(userCreateNewPrivateEquipment(equipmentInfo)),
  userEditPrivateEquipment: (equipmentInfo) =>
    dispatch(userEditPrivateEquipment(equipmentInfo))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserNewEquipment)
);