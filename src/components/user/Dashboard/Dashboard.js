import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';

import {
  getCroppedImage
} from '../../../utils/imageCropPreviews/imageCropPreviews';

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

import DashboardView from './DashboardView';

export const Dashboard = ({
  twoColumnATheme,
  message,
  authname,
  currentAvatar,
  myPlans,
  myPublicRecipes,
  myPrivateEquipment,
  myPrivateIngredients,
  myPrivateRecipes,
  myFavoriteRecipes,
  mySavedRecipes,
  creatingPlan,
  editingId,
  authUpdateLocalAvatar,
  userSubmitAvatar,
  userDeletePlan,
  userDeletePrivateRecipe,
  userDisownPublicRecipe,
  userUnfavoriteRecipe,
  userUnsaveRecipe,
  userDeletePrivateEquipment,
  userDeletePrivateIngredient
}) => {
  const [ feedback, setFeedback ] = useState("");
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

  const [ tab, setTab ] = useState("avatar");
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
      if (message !== "") window.scrollTo(0,0);
      deactivateDeleteRecipeModal();
      deactivateDisownRecipeModal();
      deactivateDeletePlanModal();
      setFeedback(message);
      setLoading(false);
    }
    return () => isSubscribed = false;
  }, [message]);

  const onSelectFile = e => {
    if (!e.target.files) return;
    if (!(e.target.files.length > 0)) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => setAvatar(reader.result));
    reader.readAsDataURL(e.target.files[0]);
  };

  const onImageLoaded = image => imageRef.current = image;

  const onCropChange = crop => setCrop(crop);

  const onCropComplete = crop => makeClientCrops(crop);

  const makeClientCrops = async (crop) => {
    if (!imageRef) return;
    if (!crop.width) return;

    const {
      resizedFullPreview,
      resizedFullFinal
    } = await getCroppedImage(250, 250, imageRef.current, crop, "newFile.jpeg");

    const {
      resizedTinyPreview,
      resizedTinyFinal
    } = await getCroppedImage(25, 25, imageRef.current, crop, "newFile.jpeg");

    setCropFullSizePreview(resizedFullPreview);
    setCropTinySizePreview(resizedTinyPreview);
    setFullAvatar(resizedFullFinal);
    setTinyAvatar(resizedTinyFinal);
  };
  
  const submitAvatar = () => {
    setLoading(true);
    userSubmitAvatar(fullAvatar, tinyAvatar);
    authUpdateLocalAvatar(authname);
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
    userDeletePlan(Number(deletePlanId));
  };

  const handleDeletePrivateRecipe = () => {
    setLoading(true);
    userDeletePrivateRecipe(Number(deleteRecipeId));
  };

  const handleDisownPublicRecipe = () => {
    setLoading(true);
    userDisownPublicRecipe(Number(disownRecipeId));
  };

  const handleUnfavoriteRecipe = id => {
    setLoading(true);
    userUnfavoriteRecipe(id);
  };

  const handleUnsaveRecipe = id => {
    setLoading(true);
    userUnsaveRecipe(id);
  };

  const handleDeletePrivateEquipment = id => {
    setLoading(true);
    userDeletePrivateEquipment(id);
  };

  const handleDeletePrivateIngredient = id => {
    setLoading(true);
    userDeletePrivateIngredient(id);
  };

  return (
    <DashboardView
      twoColumnATheme={twoColumnATheme}
      authname={authname}
      avatar={avatar}
      currentAvatar={currentAvatar}
      feedback={feedback}
      loading={loading}
      creatingPlan={creatingPlan}
      editingId={editingId}

      onSelectFile={onSelectFile}
      onImageLoaded={onImageLoaded}
      crop={crop}
      cropFullSizePreview={cropFullSizePreview}
      cropTinySizePreview={cropTinySizePreview}
      onCropChange={onCropChange}
      onCropComplete={onCropComplete}
      submitAvatar={submitAvatar}
      cancelAvatar={cancelAvatar}

      tab={tab}
      handleTabClick={handleTabClick}
      subTab={subTab}
      handleSubTabClick={handleSubTabClick}
      getApplicationNode={getApplicationNode}

      myPlans={myPlans}
      deletePlanModalActive={deletePlanModalActive}
      activateDeletePlanModal={activateDeletePlanModal}
      deactivateDeletePlanModal={deactivateDeletePlanModal}
      deletePlanName={deletePlanName}
      handleDeletePlan={handleDeletePlan}

      myPrivateRecipes={myPrivateRecipes}
      deleteRecipeModalActive={deleteRecipeModalActive}
      activateDeleteRecipeModal={activateDeleteRecipeModal}
      deactivateDeleteRecipeModal={deactivateDeleteRecipeModal}
      deleteRecipeName={deleteRecipeName}
      handleDeletePrivateRecipe={handleDeletePrivateRecipe}

      myPublicRecipes={myPublicRecipes}
      disownRecipeModalActive={disownRecipeModalActive}
      activateDisownRecipeModal={activateDisownRecipeModal}
      deactivateDisownRecipeModal={deactivateDisownRecipeModal}
      disownRecipeName={disownRecipeName}
      handleDisownPublicRecipe={handleDisownPublicRecipe}

      myFavoriteRecipes={myFavoriteRecipes}
      handleUnfavoriteRecipe={handleUnfavoriteRecipe}

      mySavedRecipes={mySavedRecipes}
      handleUnsaveRecipe={handleUnsaveRecipe}

      myPrivateIngredients={myPrivateIngredients}
      handleDeletePrivateIngredient={handleDeletePrivateIngredient}

      myPrivateEquipment={myPrivateEquipment}
      handleDeletePrivateEquipment={handleDeletePrivateEquipment}
    />
  );
};

const mapStateToProps = state => ({
  message: state.user.message,
  authname: state.auth.authname,
  currentAvatar: state.auth.avatar,
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
  userSubmitAvatar: (fullAvatar, tinyAvatar) =>
    dispatch(userSubmitAvatar(fullAvatar, tinyAvatar)),
  userDeletePlan: (id) => dispatch(userDeletePlan(id)),
  userDeletePrivateRecipe: (id) => dispatch(userDeletePrivateRecipe(id)),
  userDisownPublicRecipe: (id) => dispatch(userDisownPublicRecipe(id)),
  userUnfavoriteRecipe: (id) => dispatch(userUnfavoriteRecipe(id)),
  userUnsaveRecipe: (id) => dispatch(userUnsaveRecipe(id)),
  userDeletePrivateEquipment: (id) => dispatch(userDeletePrivateEquipment(id)),
  userDeletePrivateIngredient: (id) => dispatch(userDeletePrivateIngredient(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);