import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AriaModal from 'react-aria-modal';
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import {
  authUpdateLocalAvatar,
  userSubmitAvatar,
  userDeletePlan,
  userDeletePrivateRecipe,
  userDisownPublicRecipe,
  userUnfavoriteRecipe,
  userUnsaveRecipe,
  userDeletePrivateEquipment,
  userDeletePrivateIngredient
} from '../../../store/actions/index';

import LeftNav from '../../LeftNav/LeftNav';

import './userDashboard.css';

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

  const [ tab, setTab ] = useState("plans");
  const [ subTab, setSubTab ] = useState("private");

  const [ deletePlanId, setDeletePlanId ] = useState("");
  const [ deletePlanName, setDeletePlanName ] = useState("");
  const [ deletePlanModalActive, setDeletePlanModalActive ] = useState(false);

  const [ deleteRecipeId, setDeleteRecipeId ] = useState("");
  const [ deleteRecipeName, setDeleteRecipeName ] = useState("");
  const [ deleteRecipeModalActive, setDeleteRecipeModalActive ] = useState(false);

  const [ disownRecipeId, setDisownRecipeId ] = useState("");
  const [ disownRecipeName, setDisownRecipeName ] = useState("");
  const [ disownRecipeModalActive, setDisownRecipeModalActive ] = useState(false);

  const imageRef = useRef(null);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (props.message !== "") window.scrollTo(0,0);
      setMessage(props.message);
    }
    return () => isSubscribed = false;
  }, [props.message]);

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
      props.authUpdateLocalAvatar(props.authname);
    } catch(err) {
      setLoading(false);
      window.scrollTo(0,0);
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

  const handleTabClick = e => setTab(e.target.name);

  const handleSubTabClick = e => setSubTab(e.target.name);

  const activateDeletePlanModal = (id, name) => {
    setDeletePlanId(Number(id));
    setDeletePlanName(name);
    setDeletePlanModalActive(true);
  };

  const deactivateDeletePlanModal = () => {
    setDeletePlanId("");
    setDeletePlanName("");
    setDeletePlanModalActive(false);
  };

  const activateDeleteRecipeModal = (id, name) => {
    setDeleteRecipeId(Number(id));
    setDeleteRecipeName(name);
    setDeleteRecipeModalActive(true);
  };

  const deactivateDeleteRecipeModal = () => {
    setDeleteRecipeId("");
    setDeleteRecipeName("");
    setDeleteRecipeModalActive(false);
  };

  const activateDisownRecipeModal = (id, name) => {
    setDisownRecipeId(Number(id));
    setDisownRecipeName(name);
    setDisownRecipeModalActive(true);
  };

  const deactivateDisownRecipeModal = () => {
    setDisownRecipeId("");
    setDisownRecipeName("");
    setDisownRecipeModalActive(false);
  };

  const getApplicationNode = () => document.getElementById('root');

  const handleDeletePlan = () => {
    setLoading(true);
    try {
      props.userDeletePlan(Number(deletePlanId));
    } catch(err) {
      window.scrollTo(0,0);
    } finally {
      setLoading(false);
      setDeletePlanId("");
      setDeletePlanName("");
      setDeletePlanModalActive(false);
    }
  };

  const handleDeletePrivateRecipe = () => {
    setLoading(true);
    try {
      props.userDeletePrivateRecipe(Number(deleteRecipeId));
    } catch(err) {
      window.scrollTo(0,0);
    } finally {
      setLoading(false);
      setDeleteRecipeId("");
      setDeleteRecipeName("");
      setDeleteRecipeModalActive(false);
    }
  };

  const handleDisownPublicRecipe = () => {
    setLoading(true);
    try {
      props.userDisownPublicRecipe(Number(disownRecipeId));
    } catch(err) {
      window.scrollTo(0,0);
    } finally {
      setLoading(false);
      setDisownRecipeId("");
      setDisownRecipeName("");
      setDisownRecipeModalActive(false);
    }
  };

  const handleUnfavoriteRecipe = id => {
    setLoading(true);
    try {
      props.userUnfavoriteRecipe(id);
    } catch(err) {
      window.scrollTo(0,0);
    } finally {
      setLoading(false);
    }
  };

  const handleUnsaveRecipe = id => {
    setLoading(true);
    try {
      props.userUnsaveRecipe(id);
    } catch(err) {
      window.scrollTo(0,0);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePrivateEquipment = id => {
    setLoading(true);
    try {
      props.userDeletePrivateEquipment(id);
    } catch(err) {
      window.scrollTo(0,0);
    } finally {
      setLoading(false);
      setModalActive(false);
    }
  };

  const handleDeletePrivateIngredient = id => {
    setLoading(true);
    try {
      props.userDeletePrivateIngredient(id);
    } catch(err) {
      window.scrollTo(0,0);
    } finally {
      setLoading(false);
      setModalActive(false);
    }
  };

  return (
    <div className={`dashboard two-column-a ${props.twoColumnATheme}`}>

      <LeftNav />

      <section>

        <h1>{props.authname}</h1>

        <p className="error-message">{message}</p>

        {/* avatar*/}
        <div className="dashboard-avatar">
          {!avatar && (
            <div>
              <Link
                className="view-own-profile"
                to={`/user/profile/${props.authname}`}
              >
                View Profile
              </Link>
              <h2>Profile Picture</h2>
              <div className="avatar-crop-previews">
                <div className="avatar-crop-full-preview">
                  <span>Full Size: </span>
                  <img src={`https://nobsc-user-avatars.s3.amazonaws.com/${props.avatar}`} />
                </div>
                <div className="avatar-crop-tiny-preview">
                  <span>Tiny Size: </span>
                  <img src={`https://nobsc-user-avatars.s3.amazonaws.com/${props.avatar}-tiny`} />
                </div>
              </div>
              <label className="dashboard-avatar-label">Change</label>
              <input
                className="avatar-input"
                name="set-avatar"
                type="file"
                accept="image/*"
                onChange={onSelectFile}
              />
            </div>
          )}

          {avatar && (
            <div className="dashboard-avatar-edit">
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
              <span className="avatar-crop-tool-tip">
                Move the crop to your desired position, then click "Complete". These two images will be saved for you:
              </span>
              <div className="avatar-crop-previews">
                <div className="avatar-crop-full-preview">
                  <span>Full Size: </span><img src={cropFullSizePreview} />
                </div>
                <div className="avatar-crop-tiny-preview">
                  <span>Tiny Size: </span><img src={cropTinySizePreview} />
                </div>
              </div>
              <button
                className="avatar-cancel-button"
                name="cancel-avatar"
                disabled={loading}
                onClick={cancelAvatar}
              >
                Cancel
              </button>
              <button
                className="avatar-submit-button"
                name="submit-avatar"
                disabled={loading}
                onClick={submitAvatar}
              >
                Complete
              </button>
            </div>
          )}
        </div>

        {!avatar && <hr className="dashboard-hr" />}

        {/* tabs */}

        {!avatar && (
          <div className="dashboard-menu-tabs">
            {/*<button className="dashboard-menu-tab" name="notifications" onClick={handleTabClick}>Notifications</button>*/}
            <button
              className={(tab === "plans")
                ? "dashboard-menu-tab active"
                : "dashboard-menu-tab inactive"
              }
              name="plans"
              onClick={e => handleTabClick(e)}
            >
              Plans
            </button>
            <button
              className={(tab === "recipes")
                ? "dashboard-menu-tab active"
                : "dashboard-menu-tab inactive"
              }
              name="recipes"
              onClick={e => handleTabClick(e)}
            >
              Recipes
            </button>
            <button
              className={(tab === "ingredients")
                ? "dashboard-menu-tab active"
                : "dashboard-menu-tab inactive"
              }
              name="ingredients"
              onClick={e => handleTabClick(e)}
            >
              Ingredients
            </button>
            <button
              className={(tab === "equipment")
                ? "dashboard-menu-tab active"
                : "dashboard-menu-tab inactive"
              }
              name="equipment"
              onClick={e => handleTabClick(e)}
            >
              Equipment
            </button>
          </div>
        )}


        {/* subTabs */}

        {
          (!avatar && tab == "recipes") && (
            <div className="dashboard-menu-subtabs">
              <button
                className={(subTab === "private")
                  ? "dashboard-menu-subtab active"
                  : "dashboard-menu-subtab inactive"
                }
                name="private"
                onClick={e => handleSubTabClick(e)}
              >
                Private
              </button>
              <button
                className={(subTab === "public")
                  ? "dashboard-menu-subtab active"
                  : "dashboard-menu-subtab inactive"
                }
                name="public"
                onClick={e => handleSubTabClick(e)}
              >
                Public
              </button>
              <button
                className={(subTab === "favorite")
                  ? "dashboard-menu-subtab active"
                  : "dashboard-menu-subtab inactive"
                }
                name="favorite"
                onClick={e => handleSubTabClick(e)}
              >
                Favorite
              </button>
              <button
                className={(subTab === "saved")
                  ? "dashboard-menu-subtab active"
                  : "dashboard-menu-subtab inactive"
                }
                name="saved"
                onClick={e => handleSubTabClick(e)}
              >
                Saved
              </button>
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
              {
                (!props.creatingPlan && !props.editingId) &&
                <Link className="create-new-entity" to="/user/plan/submit">
                  Create New Plan
                </Link>
              }
              {
                (props.creatingPlan && !props.editingId) &&
                <Link className="create-new-entity" to="/user/plan/submit">
                  Finish Creating Plan
                </Link>
              }
              {
                (!props.creatingPlan && props.editingId) &&
                <Link
                  className="create-new-entity"
                  to={`/user/plan/edit/${props.editingId}`}
                >
                  Finish Updating Plan
                </Link>
              }
              {
                deletePlanModalActive
                ? (
                  <AriaModal
                    dialogClass="plan-delete-modal"
                    titleText="Cancel?"
                    onExit={deactivateDeletePlanModal}
                    focusDialog="true"
                    getApplicationNode={getApplicationNode}
                    focusTrapOptions={{returnFocusOnDeactivate: false}}
                    underlayClickExits={false}
                  >
                    <p className="plan-delete-prompt">
                      {'Delete Plan: '}{deletePlanName}{' ?'}
                    </p>
                    <button
                      className="plan-delete-cancel-button"
                      onClick={deactivateDeletePlanModal}
                    >
                      No
                    </button>
                    <button
                      className="plan-delete-button"
                      onClick={handleDeletePlan}
                    >
                      Yes, Delete Plan
                    </button>
                  </AriaModal>
                )
                : false
              }
              {
                props.myPlans.length
                ? props.myPlans.map(plan => (
                  <div className="dashboard-content-item" key={plan.plan_id}>
                    <span className="dashboard-content-item-name">
                      <Link to={`/user/plan/${plan.plan_id}`}>
                        {plan.plan_name}
                      </Link>
                    </span>
                    {
                      (!props.creatingPlan && !props.editingId) &&
                      <span className="dashboard-content-item-action">
                        <Link to={`/user/plan/edit/${plan.plan_id}`}>
                          Edit
                        </Link>
                      </span>
                    }
                    {
                      (!props.creatingPlan && !props.editingId) &&
                      <span
                        className="dashboard-content-item-delete"
                        onClick={() => activateDeletePlanModal(plan.plan_id, plan.plan_name)}
                      >
                        Delete
                      </span>
                    }
                  </div>
                ))
                : (
                  <div className="dashboard-content-none">
                    You haven't created any plans yet.
                  </div>
                )
              }
            </div>
          )
        }

        {
          (!avatar && tab == "recipes" && subTab == "private") && (
            <div className="dashboard-content">
              <h2>Private Recipes</h2>
              <Link className="create-new-entity" to="/user/recipes/submit">
                Create New Recipe
              </Link>
              {
                deleteRecipeModalActive
                ? (
                  <AriaModal
                    dialogClass="recipe-delete-modal"
                    titleText="Cancel?"
                    onExit={deactivateDeleteRecipeModal}
                    focusDialog="true"
                    getApplicationNode={getApplicationNode}
                    focusTrapOptions={{returnFocusOnDeactivate: false}}
                    underlayClickExits={false}
                  >
                    <p className="recipe-delete-prompt">
                      {'Delete Recipe: '}{deleteRecipeName}{' ?'}
                    </p>
                    <button
                      className="recipe-delete-cancel-button"
                      onClick={deactivateDeleteRecipeModal}
                    >
                      No
                    </button>
                    <button
                      className="recipe-delete-button"
                      onClick={handleDeletePrivateRecipe}
                    >
                      Yes, Delete Recipe
                    </button>
                  </AriaModal>
                )
                : false
              }
              {
                props.myPrivateRecipes.length
                ? props.myPrivateRecipes.map(recipe => (
                  <div className="dashboard-content-item" key={recipe.recipe_id}>
                    <span className="dashboard-content-item-tiny">
                      <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${recipe.recipe_image}-tiny`} />
                    </span>
                    <span className="dashboard-content-item-name">
                      <Link to={`/user/recipes/${recipe.recipe_id}`}>
                        {recipe.title}
                      </Link>
                    </span>
                    <span className="dashboard-content-item-action">
                      <Link to={`/user/recipes/private/edit/${recipe.recipe_id}`}>
                        Edit
                      </Link>
                    </span>
                    <span
                      className="dashboard-content-item-delete"
                      onClick={() => activateDeleteRecipeModal(recipe.recipe_id, recipe.title)}
                    >
                      Delete
                    </span>
                  </div>
                ))
                : (
                  <div className="dashboard-content-none">
                    You haven't created any private recipes yet.
                  </div>
                )
              }
            </div>
          )
        }

        {
          (!avatar && tab == "recipes" && subTab == "public") && (
            <div className="dashboard-content">
              <h2>Public Recipes</h2>
              <Link className="create-new-entity" to="/user/recipes/submit">
                Create New Recipe
              </Link>
              {
                disownRecipeModalActive
                ? (
                  <AriaModal
                    dialogClass="recipe-disown-modal"
                    titleText="Cancel?"
                    onExit={deactivateDisownRecipeModal}
                    focusDialog="true"
                    getApplicationNode={getApplicationNode}
                    focusTrapOptions={{returnFocusOnDeactivate: false}}
                    underlayClickExits={false}
                  >
                    <p className="recipe-disown-prompt">
                      {'Disown Recipe: '}{disownRecipeName}{' ?'}
                    </p>
                    <button
                      className="recipe-disown-cancel-button"
                      onClick={deactivateDisownRecipeModal}
                    >
                      No
                    </button>
                    <button
                      className="recipe-disown-button"
                      onClick={handleDisownPublicRecipe}
                    >
                      Yes, Disown Recipe
                    </button>
                  </AriaModal>
                )
                : false
              }
              {
                props.myPublicRecipes.length
                ? props.myPublicRecipes.map(recipe => (
                  <div className="dashboard-content-item" key={recipe.recipe_id}>
                    <span className="dashboard-content-item-tiny">
                      <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${recipe.recipe_image}-tiny`} />
                    </span>
                    <span className="dashboard-content-item-name">
                      <Link to={`/recipes/${recipe.recipe_id}`}>
                        {recipe.title}
                      </Link>
                    </span>
                    <span className="dashboard-content-item-action">
                      <Link to={`/user/recipes/public/edit/${recipe.recipe_id}`}>
                        Edit
                      </Link>
                    </span>
                    <span
                      className="dashboard-content-item-delete"
                      onClick={() => activateDisownRecipeModal(recipe.recipe_id, recipe.title)}
                    >
                      Disown
                    </span>
                  </div>
                ))
                : (
                  <div className="dashboard-content-none">
                    You haven't created any public recipes yet.
                  </div>
                )
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
                  <div className="dashboard-content-item" key={recipe.recipe_id}>
                    <span className="dashboard-content-item-tiny">
                      <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${recipe.recipe_image}-tiny`} />
                    </span>
                    <span className="dashboard-content-item-name">
                      <Link to={`/recipes/${recipe.recipe_id}`}>
                        {recipe.title}
                      </Link>
                    </span>
                    <span
                      className="dashboard-content-item-unfavorite"
                      onClick={() => handleUnfavoriteRecipe(recipe.recipe_id)}
                    >
                      Unfavorite
                    </span>
                  </div>
                ))
                : (
                  <div className="dashboard-content-none">
                    You haven't favorited any recipes yet.
                  </div>
                )
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
                  <div className="dashboard-content-item" key={recipe.recipe_id}>
                    <span className="dashboard-content-item-tiny">
                      <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${recipe.recipe_image}-tiny`} />
                    </span>
                    <span className="dashboard-content-item-name">
                      <Link to={`/recipes/${recipe.recipe_id}`}>
                        {recipe.title}
                      </Link>
                    </span>
                    <span
                      className="dashboard-content-item-delete"
                      onClick={() => handleUnsaveRecipe(recipe.recipe_id)}
                    >
                      Unsave
                    </span>
                  </div>
                ))
                : (
                  <div className="dashboard-content-none">
                    You haven't saved any recipes yet.
                  </div>
                )
              }
            </div>
          )
        }

        {
          !avatar && tab == "ingredients" && (
            <div className="dashboard-content">
              <h2>Private Ingredients</h2>
              <Link className="create-new-entity" to="/user/ingredients/submit">
                Create New Ingredient
              </Link>
              {
                props.myPrivateIngredients.length
                ? props.myPrivateIngredients.map(ingredient => (
                  <div
                    className="dashboard-content-item"
                    key={ingredient.ingredient_id}
                  >
                    <span className="dashboard-content-item-tiny">
                      <img src={`https://nobsc-user-ingredients.s3.amazonaws.com/${ingredient.ingredient_image}-tiny`} />
                    </span>
                    <span className="dashboard-content-item-name">
                      <Link to={`/user/ingredients/${ingredient.ingredient_id}`}>
                        {ingredient.ingredient_name}
                      </Link>
                    </span>
                    <span className="dashboard-content-item-action">
                      <Link to={`/user/ingredients/edit/${ingredient.ingredient_id}`}>
                        Edit
                      </Link>
                    </span>
                    <span
                      className="dashboard-content-item-delete"
                      onClick={() => handleDeletePrivateIngredient(ingredient.ingredient_id)}
                    >
                      Delete
                    </span>
                  </div>
                ))
                : (
                  <div className="dashboard-content-none">
                    You haven't created any private ingredients yet.
                  </div>
                )
              }
            </div>
          )
        }

        {
          !avatar && tab == "equipment" && (
            <div className="dashboard-content">
              <h2>Private Equipment</h2>
              <Link className="create-new-entity" to="/user/equipment/submit">
                Create New Equipment
              </Link>
              {
                props.myPrivateEquipment.length
                ? props.myPrivateEquipment.map(equipment => (
                  <div
                    className="dashboard-content-item"
                    key={equipment.equipment_id}
                  >
                    <span className="dashboard-content-item-tiny">
                      <img src={`https://nobsc-user-equipment.s3.amazonaws.com/${equipment.equipment_image}-tiny`} />
                    </span>
                    <span className="dashboard-content-item-name">
                      <Link to={`/user/equipment/${equipment.equipment_id}`}>
                        {equipment.equipment_name}
                      </Link>
                    </span>
                    <span className="dashboard-content-item-action">
                      <Link to={`/user/equipment/edit/${equipment.equipment_id}`}>
                        Edit
                      </Link>
                    </span>
                    <span
                      className="dashboard-content-item-delete"
                      onClick={() => handleDeletePrivateEquipment(equipment.equipment_id)}
                    >
                      Delete
                    </span>
                  </div>
                ))
                : (
                  <div className="dashboard-content-none">
                    You haven't created any private equipment yet.
                  </div>
                )
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
  avatar: state.auth.avatar,

  myPlans: state.data.myPlans,
  myPublicRecipes: state.data.myPublicRecipes,
  myPrivateEquipment: state.data.myPrivateEquipment,
  myPrivateIngredients: state.data.myPrivateIngredients,
  myPrivateRecipes: state.data.myPrivateRecipes,
  myFavoriteRecipes: state.data.myFavoriteRecipes,
  mySavedRecipes: state.data.mySavedRecipes,

  creatingPlan: state.planner.creating,
  editingId: state.planner.editingId
});

const mapDispatchToProps = dispatch => ({
  authUpdateLocalAvatar: (name) => dispatch(authUpdateLocalAvatar(name)),
  userSubmitAvatar: (fullAvatar, tinyAvatar) => dispatch(userSubmitAvatar(fullAvatar, tinyAvatar)),
  userDeletePlan: (id) => dispatch(userDeletePlan(id)),
  userDeletePrivateRecipe: (id) => dispatch(userDeletePrivateRecipe(id)),
  userDisownPublicRecipe: (id) => dispatch(userDisownPublicRecipe(id)),
  userUnfavoriteRecipe: (id) => dispatch(userUnfavoriteRecipe(id)),
  userUnsaveRecipe: (id) => dispatch(userUnsaveRecipe(id)),
  userDeletePrivateEquipment: (id) => dispatch(userDeletePrivateEquipment(id)),
  userDeletePrivateIngredient: (id) => dispatch(userDeletePrivateIngredient(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);