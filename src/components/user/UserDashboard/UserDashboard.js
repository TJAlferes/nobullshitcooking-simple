import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';

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

import UserDashboardView from './UserDashboardView';

export const UserDashboard = ({
  twoColumnATheme,
  message,
  authname,
  avatar,
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
      if (message !== "") window.scrollTo(0,0);
      setFeedback(message);
    }
    return () => isSubscribed = false;
  }, [message]);

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
      userSubmitAvatar(fullAvatar, tinyAvatar);
      authUpdateLocalAvatar(authname);
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
      userDeletePlan(Number(deletePlanId));
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
      userDeletePrivateRecipe(Number(deleteRecipeId));
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
      userDisownPublicRecipe(Number(disownRecipeId));
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
      userUnfavoriteRecipe(id);
    } catch(err) {
      window.scrollTo(0,0);
    } finally {
      setLoading(false);
    }
  };

  const handleUnsaveRecipe = id => {
    setLoading(true);
    try {
      userUnsaveRecipe(id);
    } catch(err) {
      window.scrollTo(0,0);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePrivateEquipment = id => {
    setLoading(true);
    try {
      userDeletePrivateEquipment(id);
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
      userDeletePrivateIngredient(id);
    } catch(err) {
      window.scrollTo(0,0);
    } finally {
      setLoading(false);
      setModalActive(false);
    }
  };

  return (
    <UserDashboardView
      twoColumnATheme={twoColumnATheme}
      authname={authname}
      avatar={avatar}
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