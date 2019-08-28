import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import './userDashboard.css';
import LeftNav from '../../LeftNav/LeftNav';
import { userSubmitAvatar } from '../../../store/actions/index';

const UserDashboard = props => {
  const [ message, setMessage ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ crop, setCrop ] = useState({
    disabled: true,
    locked: true,
    width: 250,
    maxWidth: 250,
    aspect: 1 / 1
  });
  const [ cropFullSizePreview, setCropFullSizePreview ] = useState(null);
  const [ cropTinySizePreview, setCropTinySizePreview ] = useState(null);
  const [ avatar, setAvatar ] = useState(null);
  const [ fullAvatar, setFullAvatar ] = useState(null);
  const [ tinyAvatar, setTinyAvatar ] = useState(null);
  const [ tab, setTab ] = useState("recipes");
  const [ subTab, setSubTab ] = useState("private");

  const imageRef = useRef(null);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) setMessage(props.message);
    return () => isSubscribed = false;
  });

  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setAvatar(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onImageLoaded = image => imageRef.current = image;

  const onCropChange = crop => setCrop(crop);

  const onCropComplete = crop => makeClientCrops(crop);

  const makeClientCrops = async (crop) => {
    if (imageRef && crop.width) {
      const { resizedFullPreview, resizedFullFinal } = await getCroppedFullImage(imageRef.current, crop, "newFile.jpeg");
      const { resizedTinyPreview, resizedTinyFinal } = await getCroppedTinyImage(imageRef.current, crop, "newFile.jpeg");
      setCropFullSizePreview(resizedFullPreview);
      setCropTinySizePreview(resizedTinyPreview);
      setFullAvatar(resizedFullFinal);
      setTinyAvatar(resizedTinyFinal);
    }
  };

  const getCroppedFullImage = async (image, crop, fileName) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = 250;
    canvas.height = 250;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      250,
      250
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

  const submitAvatar = () => {
    setLoading(true);
    try {
      props.userSubmitAvatar(fullAvatar, tinyAvatar);
    } catch(err) {
      setLoading(false);
      setMessage(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const cancelAvatar = () => {
    setCropFullSizePreview(null);
    setCropTinySizePreview(null);
    setAvatar(null)
    setFullAvatar(null);
    setTinyAvatar(null);
  };

  const handleTabClick = e => {
    setTab(e.target.name);
  };

  const handleSubTabClick = e => {
    setSubTab(e.target.name);
  };

  return (
    <div className={`dashboard two-column-a ${props.twoColumnATheme}`}>

      <LeftNav />

      <section>

        <h1>{props.authname}</h1>

        <p>{message}</p>

        {/* avatar*/}
        <div className="dashboard-avatar">
          {!avatar && (
            <div>
              <h2>Profile Picture</h2>
              <div className="avatar-crop-previews">
                <div className="avatar-crop-full-preview">
                  <span>Full Size: </span><img src={`https://nobsc-user-avatars.s3.amazonaws.com/${props.authname}`} />
                </div>
                <div className="avatar-crop-tiny-preview">
                  <span>Tiny Size: </span><img src={`https://nobsc-user-avatars.s3.amazonaws.com/${props.authname}-tiny`} />
                </div>
              </div>
              <label className="dashboard-avatar-label">Change</label>
              <input className="avatar-input" name="set-avatar" type="file" accept="image/*" onChange={onSelectFile} />
            </div>
          )}

          {avatar && (
            <div>
              <ReactCrop
                className="avatar-crop-tool"
                style={{minHeight: "300px"}}
                imageStyle={{minHeight: "300px"}}
                src={avatar}
                crop={crop}
                onImageLoaded={onImageLoaded}
                onChange={onCropChange}
                onComplete={onCropComplete}
              />
              <span>Move the crop to your desired position, then click "Complete". These two images will be saved for you:</span>
              <div className="avatar-crop-previews">
                <div className="avatar-crop-full-preview">
                  <span>Full Size: </span><img src={cropFullSizePreview} />
                </div>
                <div className="avatar-crop-tiny-preview">
                  <span>Tiny Size: </span><img src={cropTinySizePreview} />
                </div>
              </div>
              <button className="avatar-cancel-button" name="cancel-avatar" disabled={loading} onClick={cancelAvatar}>Cancel</button>
              <button className="avatar-submit-button" name="submit-avatar" disabled={loading} onClick={submitAvatar}>Complete</button>
            </div>
          )}
        </div>

        <hr className="dashboard-hr" />

        {/* tabs */}

        {!avatar && (
          <div className="dashboard-menu-tabs">
            {/*<button className="dashboard-menu-tab" name="notifications" onClick={handleTabClick}>Notifications</button>*/}
            <button className="dashboard-menu-tab" name="plans" onClick={e => handleTabClick(e)}>Plans</button>
            <button className="dashboard-menu-tab" name="recipes" onClick={e => handleTabClick(e)}>Recipes</button>
            <button className="dashboard-menu-tab" name="ingredients" onClick={e => handleTabClick(e)}>Ingredients</button>
            <button className="dashboard-menu-tab" name="equipment" onClick={e => handleTabClick(e)}>Equipment</button>
          </div>
        )}


        {/* subTabs */}

        {
          (!avatar && tab == "recipes") && (
            <div className="dashboard-menu-subtabs">
              <button className="dashboard-menu-subtab" name="private" onClick={e => handleSubTabClick(e)}>Private</button>
              <button className="dashboard-menu-subtab" name="public" onClick={e => handleSubTabClick(e)}>Public</button>
              <button className="dashboard-menu-subtab" name="favorite" onClick={e => handleSubTabClick(e)}>Favorite</button>
              <button className="dashboard-menu-subtab" name="saved" onClick={e => handleSubTabClick(e)}>Saved</button>
            </div>
          )
        }

        {/* content */}

        {/*
          tab == "notifications" && (
            <div className="dashboard-content">
            </div>
          )
        */}

        {
          (!avatar && tab == "plans") && (
            <div className="dashboard-content">
              <h2>Plans</h2>
              <Link to="/user/planner/new">Create New Plan</Link>
              {
                props.myPlans.length
                ? props.myPlans.map(plan => (
                  <div key={plan.plan_id}>
                    <span>{plan.plan_name}</span>
                    <span><Link to={`user/recipes/${recipe.recipe_id}`}>View/Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't created any plans yet.</div>
              }
            </div>
          )
        }

        {
          (!avatar && tab == "recipes" && subTab == "private") && (
            <div className="dashboard-content">
              <h2>Private Recipes</h2>
              <Link to="/user/recipes/submit">Create New Recipe</Link>
              {
                props.myPrivateRecipes.length
                ? props.myPrivateRecipes.map(recipe => (
                  <div key={recipe.recipe_id}>
                    <span><img src={`https://nobsc-user-recipe.s3.amazonaws.com/${recipe.recipe_image}-tiny`} /></span>
                    <span>{recipe.title}</span>
                    <span><Link to={`user/recipes/${recipe.recipe_id}`}>View</Link></span>
                    <span><Link to={`user/recipes/edit/${recipe.recipe_id}`}>Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't created any private recipes yet.</div>
              }
            </div>
          )
        }

        {
          (!avatar && tab == "recipes" && subTab == "public") && (
            <div className="dashboard-content">
              <h2>Public Recipes</h2>
              <Link to="/user/recipes/submit">Create New Recipe</Link>
              {
                props.myPublicRecipes.length
                ? props.myPublicRecipes.map(recipe => (
                  <div key={recipe.recipe_id}>
                    <span>{recipe.recipe_image}</span>
                    <span>{recipe.title}</span>
                    <span><Link to={`user/recipes/${recipe.recipe_id}`}>View</Link></span>
                    <span><Link to={`user/recipes/edit/${recipe.recipe_id}`}>Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't created any public recipes yet.</div>
              }
            </div>
          )
        }

        {
          (!avatar && tab == "recipes" && subTab == "favorite") && (
            <div className="dashboard-content">
              <h2>Favorite Recipes</h2>
              {
                props.myFavoriteRecipes.length
                ? props.myFavoriteRecipes.map(recipe => (
                  <div key={recipe.recipe_id}>
                    <span>{recipe.recipe_image}</span>
                    <span>{recipe.title}</span>
                    <span><Link to={`user/recipes/${recipe.recipe_id}`}>View</Link></span>
                    <span><Link to={`user/recipes/edit/${recipe.recipe_id}`}>Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't favorited any recipes yet.</div>
              }
            </div>
          )
        }

        {
          (!avatar && tab == "recipes" && subTab == "saved") && (
            <div className="dashboard-content">
              <h2>Saved Recipes</h2>
              {
                props.mySavedRecipes.length
                ? props.mySavedRecipes.map(recipe => (
                  <div key={recipe.recipe_id}>
                    <span>{recipe.recipe_image}</span>
                    <span>{recipe.title}</span>
                    <span><Link to={`user/recipes/${recipe.recipe_id}`}>View</Link></span>
                    <span><Link to={`user/recipes/edit/${recipe.recipe_id}`}>Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't saved any recipes yet.</div>
              }
            </div>
          )
        }

        {
          !avatar && tab == "ingredients" && (
            <div className="dashboard-content">
              <h2>Private Ingredients</h2>
              <Link to="/user/ingredients/submit">Create New Ingredient</Link>
              {
                props.myPrivateIngredients.length
                ? props.myPrivateIngredients.map(ingredient => (
                  <div key={ingredient.ingredient_id}>
                    <span>{ingredient.ingredient_image}</span>
                    <span>{ingredient.ingredient_name}</span>
                    <span><Link to={`user/ingredients/${ingredient.ingredient_id}`}>View</Link></span>
                    <span><Link to={`user/ingredients/edit/${ingredient.ingredient_id}`}>Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't created any private ingredients yet.</div>
              }
            </div>
          )
        }

        {
          !avatar && tab == "equipment" && (
            <div className="dashboard-content">
              <h2>Private Equipment</h2>
              <Link to="/user/equipment/submit">Create New Equipment</Link>
              {
                props.myPrivateEquipment.length
                ? props.myPrivateEquipment.map(equipment => (
                  <div key={equipment.equipment_id}>
                    <span>{equipment.equipment_image}</span>
                    <span>{equipment.equipment_name}</span>
                    <span><Link to={`user/equipment/${equipment.equipment_id}`}>View</Link></span>
                    <span><Link to={`user/equipment/edit/${equipment.equipment_id}`}>Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't created any private equipment yet.</div>
              }
            </div>
          )
        }

      </section>

    </div>
  );
};

const mapStateToProps = state => ({
  message: state.user.message,
  authname: state.auth.authname,
  myPlans: state.data.myPlans,
  myPublicRecipes: state.data.myPublicRecipes,
  myPrivateEquipment: state.data.myPrivateEquipment,
  myPrivateIngredients: state.data.myPrivateIngredients,
  myPrivateRecipes: state.data.myPrivateRecipes,
  myFavoriteRecipes: state.data.myFavoriteRecipes,
  mySavedRecipes: state.data.mySavedRecipes
})

const mapDispatchToProps = dispatch => ({
  userSubmitAvatar: (fullAvatar, tinyAvatar) => dispatch(userSubmitAvatar(fullAvatar, tinyAvatar))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);