import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';

import {
  getCroppedImage
} from '../../../utils/imageCropPreviews/imageCropPreviews';

import {
  userCreateNewPrivateIngredient,
  userEditPrivateIngredient
} from '../../../store/actions/index';

import UserNewIngredientView from './UserNewIngredientView';

export const UserNewIngredient = ({
  match,
  oneColumnATheme,
  message,
  childProps,
  dataIngredientTypes,
  dataMyPrivateIngredients,
  userCreateNewPrivateIngredient,
  userEditPrivateIngredient
}) => {
  const history = useHistory();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ editing, setEditing ] = useState(false);
  const [ editingId, setEditingId ] = useState("");
  const [ ingredientTypeId, setIngredientTypeId ] = useState("");
  const [ ingredientName, setIngredientName ] = useState("");
  const [ ingredientDescription, setIngredientDescription ] = useState("");
  const [ ingredientImage, setIngredientImage ] = useState("");
  const [
    prevIngredientImage,
    setPrevIngredientImage
  ] = useState("nobsc-ingredient-default");

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

  const [ fullIngredientImage, setFullIngredientImage ] = useState(null);
  const [ tinyIngredientImage, setTinyIngredientImage ] = useState(null);

  const imageRef = useRef(null);

  useEffect(() => {
    const getExistingIngredientToEdit = () => {
      window.scrollTo(0,0);
      setLoading(true);
      setEditing(true);

      const [ prev ] = dataMyPrivateIngredients
      .filter((ing) => ing.ingredient_id === Number(match.params.id));

      setEditingId(prev.ingredient_id);
      setIngredientTypeId(prev.ingredient_type_id);
      setIngredientName(prev.ingredient_name);
      setIngredientDescription(prev.ingredient_description);
      setPrevIngredientImage(prev.equipment_image);
      setLoading(false);
    };
    if (childProps && childProps.editing === "true") {
      getExistingIngredientToEdit();
    }
  }, []);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (message !== "") window.scrollTo(0,0);
      setFeedback(message);
      if (
        message === "Ingredient created." ||
        message === "Ingredient updated."
      ) {
        setTimeout(() => history.push('/user/dashboard'), 3000);
      }
      setLoading(false);
    }
    return () => isSubscribed = false;
  }, [message]);

  const handleIngredientTypeChange = e => setIngredientTypeId(e.target.value);

  const handleIngredientNameChange = e => setIngredientName(e.target.value);

  const handleIngredientDescriptionChange = e => setIngredientDescription(e.target.value);

  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setIngredientImage(reader.result));
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
    setFullIngredientImage(resizedFullFinal);
    setTinyIngredientImage(resizedTinyFinal);
  };

  const cancelIngredientImage = () => {
    setCropFullSizePreview(null);
    setCropTinySizePreview(null);
    setIngredientImage(null);
    setFullIngredientImage(null);
    setTinyIngredientImage(null);
  };

  const valid = () => {
    let validIngredientTypeId = ingredientTypeId !== "";
    let validIngredientName = ingredientName.trim() !== "";
    let validIngredientDescription = ingredientDescription.trim() !== "";

    if (!validIngredientTypeId) {
      window.scrollTo(0,0);
      setFeedback("You forgot to select the ingredient type...");
      setTimeout(() => setFeedback(""), 3000);
      return false;
    }

    if (!validIngredientName) {
      window.scrollTo(0,0);
      setFeedback("Umm, double check your name...");
      setTimeout(() => setFeedback(""), 3000);
      return false;
    }

    if (!validIngredientDescription) {
      window.scrollTo(0,0);
      setFeedback("Umm, double check your description...");
      setTimeout(() => setFeedback(""), 3000);
      return false;
    }

    return (
      ingredientTypeId !== "" &&
      ingredientName.trim() !== "" &&
      ingredientDescription.trim() !== ""
    );
  };

  const handleSubmit = () => {
    const ingredientInfo = {
      ingredientTypeId,
      ingredientName,
      ingredientDescription,
      ingredientImage,
      fullIngredientImage,
      tinyIngredientImage
    };
    if (!valid()) return;
    if (editing === true) {
      ingredientInfo.ingredientId = editingId;
      ingredientInfo.prevIngredientImage = prevIngredientImage;
    }
    setLoading(true);
    if (editing === true) userEditPrivateIngredient(ingredientInfo);
    else userCreateNewPrivateIngredient(ingredientInfo);
  };

  return (
    <UserNewIngredientView
      oneColumnATheme={oneColumnATheme}
      feedback={feedback}
      loading={loading}

      editing={editing}
      ingredientTypeId={ingredientTypeId}
      ingredientName={ingredientName}
      ingredientDescription={ingredientDescription}
      ingredientImage={ingredientImage}
      prevIngredientImage={prevIngredientImage}

      dataIngredientTypes={dataIngredientTypes}
      handleIngredientTypeChange={handleIngredientTypeChange}
      handleIngredientNameChange={handleIngredientNameChange}
      handleIngredientDescriptionChange={handleIngredientDescriptionChange}

      onSelectFile={onSelectFile}
      onImageLoaded={onImageLoaded}
      crop={crop}
      cropFullSizePreview={cropFullSizePreview}
      cropTinySizePreview={cropTinySizePreview}
      onCropChange={onCropChange}
      onCropComplete={onCropComplete}

      cancelIngredientImage={cancelIngredientImage}
      handleSubmit={handleSubmit}
    />
  );
};

const mapStateToProps = state => ({
  message: state.user.message,
  dataIngredientTypes: state.data.ingredientTypes,
  dataMyPrivateIngredients: state.data.myPrivateIngredients
});

const mapDispatchToProps = dispatch => ({
  userCreateNewPrivateIngredient: (ingredientInfo) =>
    dispatch(userCreateNewPrivateIngredient(ingredientInfo)),
  userEditPrivateIngredient: (ingredientInfo) =>
    dispatch(userEditPrivateIngredient(ingredientInfo))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserNewIngredient)
);