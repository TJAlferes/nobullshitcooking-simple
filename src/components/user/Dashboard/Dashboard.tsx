import React, { useEffect, useRef, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Crop } from 'react-image-crop';

import {
  getCroppedImage
} from '../../../utils/imageCropPreviews/imageCropPreviews';
import {
  authUpdateLocalAvatar
} from '../../../store/auth/actions';
import {
  IEquipment,
  IIngredient,
  IPlan,
  IWorkRecipe
} from '../../../store/data/types';
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
import { DashboardView } from './DashboardView';

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

  const imageRef = useRef<HTMLImageElement | null>();

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

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (!(target.files && target.files.length > 0)) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => setAvatar(reader.result));
    reader.readAsDataURL(target.files[0]);
  };

  const onImageLoaded = (image: HTMLImageElement) => imageRef.current = image;

  const onCropChange = (crop: Crop) => setCrop(crop);

  const onCropComplete = (crop: Crop) => makeClientCrops(crop);

  const makeClientCrops = async (crop: Crop) => {
    if (!imageRef || !imageRef.current) return;
    if (!crop.width) return;
    const full = await getCroppedImage(
      250, 250, imageRef.current, crop, "newFile.jpeg"
    );
    const tiny = await getCroppedImage(
      25, 25, imageRef.current, crop, "newFile.jpeg"
    );
    if (!full || !tiny) return;
    setCropFullSizePreview(full.resizedPreview);
    setCropTinySizePreview(tiny.resizedPreview);
    setFullAvatar(full.resizedFinal);
    setTinyAvatar(tiny.resizedFinal);
  };
  
  const submitAvatar = () => {
    setLoading(true);
    userSubmitAvatar(fullAvatar, tinyAvatar);
    authUpdateLocalAvatar(authname);
  };

  const cancelAvatar = () => {
    setCropFullSizePreview("");
    setCropTinySizePreview("");
    setAvatar(null)
    setFullAvatar(null);
    setTinyAvatar(null);
  };

  const handleTabClick = (e: React.SyntheticEvent<EventTarget>) => {
    setTab((e.target as HTMLInputElement).name);
  };

  const handleSubTabClick = (e: React.SyntheticEvent<EventTarget>) => {
    setSubTab((e.target as HTMLInputElement).name);
  };

  const activateDeletePlanModal = (id: number, name: string) => {
    setDeletePlanId(id);
    setDeletePlanName(name);
    setDeletePlanModalActive(true);
  };

  const deactivateDeletePlanModal = () => {
    setDeletePlanId(undefined);
    setDeletePlanName("");
    setDeletePlanModalActive(false);
  };

  const activateDeleteRecipeModal = (id: number, name: string) => {
    setDeleteRecipeId(id);
    setDeleteRecipeName(name);
    setDeleteRecipeModalActive(true);
  };

  const deactivateDeleteRecipeModal = () => {
    setDeleteRecipeId(undefined);
    setDeleteRecipeName("");
    setDeleteRecipeModalActive(false);
  };

  const activateDisownRecipeModal = (id: number, name: string) => {
    setDisownRecipeId(id);
    setDisownRecipeName(name);
    setDisownRecipeModalActive(true);
  };

  const deactivateDisownRecipeModal = () => {
    setDisownRecipeId(undefined);
    setDisownRecipeName("");
    setDisownRecipeModalActive(false);
  };

  const getApplicationNode = (): Element | Node => {
    return document.getElementById('root') as Element | Node;
  };

  const handleDeletePlan = () => {
    if (!deletePlanId) return;
    setLoading(true);
    userDeletePlan(deletePlanId);
  };

  const handleDeletePrivateRecipe = () => {
    if (!deleteRecipeId) return;
    setLoading(true);
    userDeletePrivateRecipe(deleteRecipeId);
  };

  const handleDisownPublicRecipe = () => {
    if (!disownRecipeId) return;
    setLoading(true);
    userDisownPublicRecipe(disownRecipeId);
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
  auth: {
    authname: string;
    avatar: string;
  };
  user: {
    message: string;
  };
  data: {
    myPlans: IPlan[];
    myPublicRecipes: IWorkRecipe[];
    myPrivateEquipment: IEquipment[];
    myPrivateIngredients: IIngredient[];
    myPrivateRecipes: IWorkRecipe[];
    myFavoriteRecipes: IWorkRecipe[];
    mySavedRecipes: IWorkRecipe[];
  };
  planner: {
    creating: boolean;
    editingId: number|null;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  twoColumnATheme: string;
};

const mapStateToProps = (state: RootState) => ({
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
  userSubmitAvatar: (fullAvatar: File | null, tinyAvatar: File | null) =>
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