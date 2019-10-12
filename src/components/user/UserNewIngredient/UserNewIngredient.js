import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import './newIngredient.css';
import LoaderButton from '../../LoaderButton/LoaderButton';
import {
  userCreateNewPrivateIngredient,
  userEditPrivateIngredient
} from '../../../store/actions/index';

const UserNewIngredient = props => {
  const [ message, setMessage ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ editing, setEditing ] = useState(false);
  const [ ingredientTypeId, setIngredientTypeId ] = useState("");
  const [ ingredientName, setIngredientName ] = useState("");
  const [ ingredientDescription, setIngredientDescription ] = useState("");
  const [ ingredientImage, setIngredientImage ] = useState("");

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

  const [ fullIngredientImage, setFullIngredientImage ] = useState(null);
  const [ thumbIngredientImage, setThumbIngredientImage ] = useState(null);
  const [ tinyIngredientImage, setTinyIngredientImage ] = useState(null);

  const imageRef = useRef(null);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (props.message !== "") window.scrollTo(0,0);
      setMessage(props.message);
    }
    return () => isSubscribed = false;
  }, [props.message]);

  const handleIngredientTypeChange = e => setIngredientTypeId(e.target.value);

  const handleIngredientNameChange = e => setIngredientName(e.target.value);

  const handleIngredientDescriptionChange = e => setIngredientDescription(e.target.value);

  //const handleIngredientImageChange = e => setIngredientImage(e.target.files[0]);

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
      const { resizedFullPreview, resizedFullFinal } = await getCroppedFullImage(imageRef.current, crop, "newFile.jpeg");
      const { resizedThumbPreview, resizedThumbFinal } = await getCroppedThumbImage(imageRef.current, crop, "newFile.jpeg");
      const { resizedTinyPreview, resizedTinyFinal } = await getCroppedTinyImage(imageRef.current, crop, "newFile.jpeg");
      setCropFullSizePreview(resizedFullPreview);
      setCropThumbSizePreview(resizedThumbPreview);
      setCropTinySizePreview(resizedTinyPreview);
      setFullIngredientImage(resizedFullFinal);
      setThumbIngredientImage(resizedThumbFinal);
      setTinyIngredientImage(resizedTinyFinal);
    }
  };

  // put in util module?
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

  // put in util module?
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

  // put in util module?
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

  const cancelIngredientImage = () => {
    setCropFullSizePreview(null);
    setCropThumbSizePreview(null);
    setCropTinySizePreview(null);
    setIngredientImage(null);
    setFullIngredientImage(null);
    setThumbIngredientImage(null);
    setTinyIngredientImage(null);
  };

  const validate = () => (ingredientTypeId !== "") && (ingredientName !== "");

  const handleSubmit = () => {
    const ingredientInfo = {
      ingredientTypeId,
      ingredientName,
      ingredientDescription,
      ingredientImage,
      fullIngredientImage,
      thumbIngredientImage,
      tinyIngredientImage
    };
    if (props.childProps.editing === "true" || editing === true) {
      ingredientInfo.prevIngredientImage = prevIngredientImage;
    }
    setLoading(true);
    try {
      if (props.childProps.editing === "true" || editing === true) {
        props.userEditPrivateIngredient(ingredientInfo);
      } else {
        props.userCreateNewPrivateIngredient(ingredientInfo);
      }
    } catch(err) {
      setLoading(false);
      setMessage(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`new-ingredient one-column-a ${props.oneColumnATheme}`}>

      <h1>Create New Private Ingredient</h1>

      <p className="error-message">{message}</p>

      <h2>Type of Ingredient</h2>
      <select onChange={handleIngredientTypeChange}>
        <option value=""></option>
        {props.dataIngredientTypes.map(type => (
          <option key={type.ingredient_type_id} value={type.ingredient_type_id}>
            {type.ingredient_type_name}
          </option>
        ))}
      </select>

      <h2>Name</h2>
      <input onChange={handleIngredientNameChange} />

      <h2>Description</h2>
      <textarea onChange={handleIngredientDescriptionChange} />

      <div className="new-ingredient__image">
        <h2>Image of Ingredient</h2>
        {!ingredientImage && (
          <div>
            {
              !editing
              ? <img src="https://nobsc-user-ingredients.s3.amazon.com/nobsc-ingredients-default" />
              : <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${prevIngredientImage}`} />
            }
            <h4 className="change-default">Change</h4>
            <input
              className="new-ingredient-image-input"
              name="setIngredientImage"
              type="file"
              accept="image/*"
              onChange={onSelectFile}
            />
          </div>
        )}
        {ingredientImage && (
          <div>
            <ReactCrop
              className="new-ingredient-image-crop-tool"
              style={{minHeight: "300px"}}
              imageStyle={{minHeight: "300px"}}
              src={ingredientImage}
              crop={crop}
              onImageLoaded={onImageLoaded}
              onChange={onCropChange}
              onComplete={onCropComplete}
            />
            <span>Move the crop to your desired position. These three images will be saved for you:</span>
            <div className="new-ingredient-image-crop-previews">
              <div className="new-ingredient-image-crop-full-preview">
                <span>Full Size: </span><img src={cropFullSizePreview} />
              </div>
              <div className="new-ingredient-image-crop-thumb-preview">
                <span>Thumb Size: </span><img src={cropThumbSizePreview} />
              </div>
              <div className="new-ingredient-image-crop-tiny-preview">
                <span>Tiny Size: </span><img src={cropTinySizePreview} />
              </div>
            </div>
            <button
              className="new-ingredient-image-cancel-button"
              name="cancel-image"
              disabled={loading}
              onClick={cancelIngredientImage}
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      <div>
        <Link
          className="new-ingredient-cancel-button"
          to="/user/dashboard"
        >
          Cancel
        </Link>
        <LoaderButton
          className="new-ingredient-submit-button"
          type="button"
          name="submit"
          id="create_new_private_user_ingredient_button"
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
  dataIngredientTypes: state.data.ingredientTypes
});

const mapDispatchToProps = dispatch => ({
  userCreateNewPrivateIngredient: (ingredientInfo) => dispatch(userCreateNewPrivateIngredient(ingredientInfo)),
  userEditPrivateIngredient: (ingredientInfo) => dispatch(userEditPrivateIngredient(ingredientInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNewIngredient);