import React, { useEffect, useRef, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Crop } from 'react-image-crop';

import {
  getCroppedImage
} from '../../../utils/imageCropPreviews/imageCropPreviews';
import {
  authUpdateLocalAvatar
} from '../../../store/auth/actions';
import { userSubmitAvatar } from '../../../store/user/avatar/actions';
import { userDeletePlan } from '../../../store/user/plan/actions';
import {
  userDeletePrivateRecipe,
  userDisownPublicRecipe
} from '../../../store/user/recipe/actions';
import { userUnfavoriteRecipe } from '../../../store/user/favorite/actions';
import { userUnsaveRecipe } from '../../../store/user/save/actions';
import {
  userDeletePrivateEquipment
} from '../../../store/user/equipment/actions';
import { userDeletePrivateIngredient
} from '../../../store/user/ingredient/actions';
import DashboardView from './DashboardView';

export function Dashboard({
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
}: Props): JSX.Element {
  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);

  //disabled: true,
  //locked: true,
  //width: 250,
  //maxWidth: 250,
  const [ crop, setCrop ] = useState<Crop>({
    aspect: 1 / 1
  });
  const [ cropFullSizePreview, setCropFullSizePreview ] = useState("");
  const [ cropTinySizePreview, setCropTinySizePreview ] = useState("");
  const [ avatar, setAvatar ] = useState<string | ArrayBuffer | null>(null);
  const [ fullAvatar, setFullAvatar ] = useState<File | null>(null);
  const [ tinyAvatar, setTinyAvatar ] = useState<File | null>(null);

  const [ tab, setTab ] = useState("avatar");
  const [ subTab, setSubTab ] = useState("private");

  const [ deletePlanId, setDeletePlanId ] = useState<number | undefined>();
  const [ deletePlanName, setDeletePlanName ] = useState("");
  const [ deletePlanModalActive, setDeletePlanModalActive ] = useState(false);

  const [ deleteRecipeId, setDeleteRecipeId ] = useState<number | undefined>();
  const [ deleteRecipeName, setDeleteRecipeName ] = useState("");
  const [ deleteRecipeModalActive, setDeleteRecipeModalActive ] = useState(false);

  const [ disownRecipeId, setDisownRecipeId ] = useState<number | undefined>();
  const [ disownRecipeName, setDisownRecipeName ] = useState("");
  const [ disownRecipeModalActive, setDisownRecipeModalActive ] = useState(false);

  const imageRef = useRef<HTMLImageElement>();

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
    return () => {
      isSubscribed = false;
    };
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

  const activateDeletePlanModal = (id: number, name: string) => {
    setDeletePlanId(Number(id));
    setDeletePlanName(name);
    setDeletePlanModalActive(true);
  };

  const deactivateDeletePlanModal = () => {
    setDeletePlanId("");
    setDeletePlanName("");
    setDeletePlanModalActive(false);
  };

  const activateDeleteRecipeModal = (id: number, name: string) => {
    setDeleteRecipeId(Number(id));
    setDeleteRecipeName(name);
    setDeleteRecipeModalActive(true);
  };

  const deactivateDeleteRecipeModal = () => {
    setDeleteRecipeId("");
    setDeleteRecipeName("");
    setDeleteRecipeModalActive(false);
  };

  const activateDisownRecipeModal = (id: number, name: string) => {
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

  const handleUnfavoriteRecipe = (id: number) => {
    setLoading(true);
    userUnfavoriteRecipe(id);
  };

  const handleUnsaveRecipe = (id: number) => {
    setLoading(true);
    userUnsaveRecipe(id);
  };

  const handleDeletePrivateEquipment = (id: number) => {
    setLoading(true);
    userDeletePrivateEquipment(id);
  };

  const handleDeletePrivateIngredient = (id: number) => {
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

interface RootState {
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
}

type PropsFromRedux = 

type Props = PropsFromRedux & {
  twoColumnATheme: string;
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

const mapDispatchToProps = {
  authUpdateLocalAvatar: (name: string) => authUpdateLocalAvatar(name),
  userSubmitAvatar: (fullAvatar, tinyAvatar) =>
    userSubmitAvatar(fullAvatar, tinyAvatar),
  userDeletePlan: (id: number) => userDeletePlan(id),
  userDeletePrivateRecipe: (id: number) => userDeletePrivateRecipe(id),
  userDisownPublicRecipe: (id: number) => userDisownPublicRecipe(id),
  userUnfavoriteRecipe: (id: number) => userUnfavoriteRecipe(id),
  userUnsaveRecipe: (id: number) => userUnsaveRecipe(id),
  userDeletePrivateEquipment: (id: number) => userDeletePrivateEquipment(id),
  userDeletePrivateIngredient: (id: number) => userDeletePrivateIngredient(id)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Dashboard);