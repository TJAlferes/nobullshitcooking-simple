import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { withRouter, Link } from 'react-router-dom';
import ReactCrop from "react-image-crop";
import "react-image-crop/lib/ReactCrop.scss";

import './newIngredient.css';
import LoaderButton from '../../LoaderButton/LoaderButton';
import {
  getCroppedFullImage,
  getCroppedTinyImage
} from '../../../utils/imageCropPreviews/imageCropPreviews';
import {
  userCreateNewPrivateIngredient,
  userEditPrivateIngredient
} from '../../../store/actions/index';

const UserNewIngredient = props => {
  const history = useHistory();

  const [ message, setMessage ] = useState("");
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

      const [ prev ] = props.dataMyPrivateIngredients
      .filter((ing) => ing.ingredient_id === Number(props.match.params.id));

      setEditingId(prev.ingredient_id);
      setIngredientTypeId(prev.ingredient_type_id);
      setIngredientName(prev.ingredient_name);
      setIngredientDescription(prev.ingredient_description);
      setPrevIngredientImage(prev.equipment_image);
      setLoading(false);
    };
    if (props.childProps && props.childProps.editing === "true") {
      getExistingIngredientToEdit();
    }
  }, []);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (props.message !== "") window.scrollTo(0,0);
      setMessage(props.message);
      if (
        props.message === "Ingredient created." ||
        props.message === "Ingredient updated."
      ) {
        setTimeout(() => history.push('/user/dashboard'), 3000);
      }
    }
    return () => isSubscribed = false;
  }, [props.message]);

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
      setFullIngredientImage(resizedFullFinal);
      setTinyIngredientImage(resizedTinyFinal);
    }
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
      setMessage("You forgot to select the ingredient type...");
      setTimeout(() => setMessage(""), 3000);
      return false;
    }

    if (!validIngredientName) {
      window.scrollTo(0,0);
      setMessage("Umm, double check your name...");
      setTimeout(() => setMessage(""), 3000);
      return false;
    }

    if (!validIngredientDescription) {
      window.scrollTo(0,0);
      setMessage("Umm, double check your description...");
      setTimeout(() => setMessage(""), 3000);
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
    try {
      if (editing === true) {
        props.userEditPrivateIngredient(ingredientInfo);
      } else {
        props.userCreateNewPrivateIngredient(ingredientInfo);
      }
    } catch(err) {
      setLoading(false);
      window.scrollTo(0,0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`new-ingredient one-column-a ${props.oneColumnATheme}`}>

      <h1>
        {editing ? 'Edit Private Ingredient' : 'Create New Private Ingredient'}
      </h1>

      <p className="new-ingredient__error-message">{message}</p>

      <h2 className="new-ingredient__heading-two">Type of Ingredient</h2>
      <select
        required
        onChange={handleIngredientTypeChange}
        value={ingredientTypeId}
      >
        <option value=""></option>
        {props.dataIngredientTypes.map(type => (
          <option key={type.ingredient_type_id} value={type.ingredient_type_id}>
            {type.ingredient_type_name}
          </option>
        ))}
      </select>

      <h2 className="new-ingredient__heading-two">Name</h2>
      <input
        className="new-ingredient__name"
        type="text"
        onChange={handleIngredientNameChange}
        value={ingredientName}
      />

      <h2 className="new-ingredient__heading-two">Description</h2>
      <textarea
        className="new-ingredient__description"
        onChange={handleIngredientDescriptionChange}
        value={ingredientDescription}
      />

      <div className="new-ingredient__image">
        <h2 className="new-ingredient__heading-two">Image of Ingredient</h2>
        {!ingredientImage && (
          <div>
            {
              !editing
              ? <img src="https://nobsc-user-ingredients.s3.amazonaws.com/nobsc-ingredient-default" />
              : prevIngredientImage && <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${prevIngredientImage}`} />
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
              src={ingredientImage}
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
          to="/user/dashboard"
        >
          Cancel
        </Link>
        <LoaderButton
          className="new-ingredient__submit-button"
          type="button"
          name="submit"
          id="create_new_private_user_ingredient_button"
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
  dataIngredientTypes: state.data.ingredientTypes,
  dataMyPrivateIngredients: state.data.myPrivateIngredients
});

const mapDispatchToProps = dispatch => ({
  userCreateNewPrivateIngredient: (ingredientInfo) => dispatch(userCreateNewPrivateIngredient(ingredientInfo)),
  userEditPrivateIngredient: (ingredientInfo) => dispatch(userEditPrivateIngredient(ingredientInfo))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserNewIngredient));