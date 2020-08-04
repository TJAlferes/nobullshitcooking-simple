import React, { useEffect, useRef, useState } from 'react';
import { Crop } from 'react-image-crop';
import { connect, ConnectedProps } from 'react-redux';

import { authUpdateLocalAvatar } from '../../../store/auth/actions';
import {
  IEquipment,
  IIngredient,
  IPlan,
  IWorkRecipe
} from '../../../store/data/types';
import { userSubmitAvatar } from '../../../store/user/avatar/actions';
import { userUnfavoriteRecipe } from '../../../store/user/favorite/actions';
import {
  userDeletePrivateEquipment
} from '../../../store/user/equipment/actions';
import {
  userDeletePrivateIngredient
} from '../../../store/user/ingredient/actions';
import { userDeletePlan } from '../../../store/user/plan/actions';
import {
  userDeletePrivateRecipe,
  userDisownPublicRecipe
} from '../../../store/user/recipe/actions';
import { userUnsaveRecipe } from '../../../store/user/save/actions';
import {
  getCroppedImage
} from '../../../utils/imageCropPreviews/imageCropPreviews';
import { DashboardView } from './DashboardView';

export function Dashboard({
  authname,
  authUpdateLocalAvatar,
  creatingPlan,
  currentAvatar,
  editingId,
  message,
  myPlans,
  myFavoriteRecipes,
  myPublicRecipes,
  myPrivateEquipment,
  myPrivateIngredients,
  myPrivateRecipes,
  mySavedRecipes,
  twoColumnATheme,
  userDeletePlan,
  userDeletePrivateEquipment,
  userDeletePrivateIngredient,
  userDeletePrivateRecipe,
  userDisownPublicRecipe,
  userSubmitAvatar,
  userUnfavoriteRecipe,
  userUnsaveRecipe
}: Props): JSX.Element {
  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);

  const [ tab, setTab ] = useState("avatar");
  const [ subTab, setSubTab ] = useState("private");
  const [ deleteId, setDeleteId ] = useState<number | undefined>();
  const [ deleteName, setDeleteName ] = useState("");
  const [ modalActive, setModalActive ] = useState(false);

  const [ avatar, setAvatar ] = useState<string | ArrayBuffer | null>(null);
  const [ fullAvatar, setFullAvatar ] = useState<File | null>(null);
  const [ tinyAvatar, setTinyAvatar ] = useState<File | null>(null);

  const [ crop, setCrop ] = useState<Crop>({aspect: 1 / 1});
  const [ fullCrop, setFullCrop ] = useState("");
  const [ tinyCrop, setTinyCrop ] = useState("");

  const imageRef = useRef<HTMLImageElement | null>();

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      if (message !== "") window.scrollTo(0, 0);

      deactivateModal();
      setFeedback(message);
      setLoading(false);
    }

    return () => {
      isSubscribed = false;
    };
  }, [message]);

  const activateModal = (id: number, name: string) => {
    setDeleteId(id);
    setDeleteName(name);
    setModalActive(true);
  };

  const cancelAvatar = () => {
    setFullCrop("");
    setTinyCrop("");
    setAvatar(null)
    setFullAvatar(null);
    setTinyAvatar(null);
  };

  const deactivateModal = () => {
    setDeleteId(undefined);
    setDeleteName("");
    setModalActive(false);
  };

  const getApplicationNode = (): Element | Node => {
    return document.getElementById('root') as Element | Node;
  };

  const handleDeletePlan = () => {
    if (!deleteId) return;
    setLoading(true);
    userDeletePlan(deleteId);
  };

  const handleDeletePrivateEquipment = (id: number) => {
    setLoading(true);
    userDeletePrivateEquipment(id);
  };

  const handleDeletePrivateIngredient = (id: number) => {
    setLoading(true);
    userDeletePrivateIngredient(id);
  };

  const handleDeletePrivateRecipe = () => {
    if (!deleteId) return;
    setLoading(true);
    userDeletePrivateRecipe(deleteId);
  };

  const handleDisownPublicRecipe = () => {
    if (!deleteId) return;
    setLoading(true);
    userDisownPublicRecipe(deleteId);
  };

  const handleSubTabClick = (e: React.SyntheticEvent<EventTarget>) => {
    setSubTab((e.target as HTMLInputElement).name);
  };

  const handleTabClick = (e: React.SyntheticEvent<EventTarget>) => {
    setTab((e.target as HTMLInputElement).name);
  };

  const handleUnfavoriteRecipe = (id: number) => {
    setLoading(true);
    userUnfavoriteRecipe(id);
  };

  const handleUnsaveRecipe = (id: number) => {
    setLoading(true);
    userUnsaveRecipe(id);
  };

  const makeCrops = async (crop: Crop) => {
    if (!imageRef || !imageRef.current) return;
    if (!crop.width) return;

    const full =
      await getCroppedImage(250, 250, imageRef.current, crop, "newFile.jpeg");
    const tiny =
      await getCroppedImage(25, 25, imageRef.current, crop, "newFile.jpeg");

    if (!full || !tiny) return;

    setFullCrop(full.resizedPreview);
    setTinyCrop(tiny.resizedPreview);
    setFullAvatar(full.resizedFinal);
    setTinyAvatar(tiny.resizedFinal);
  };

  const onCropChange = (crop: Crop) => setCrop(crop);

  const onCropComplete = (crop: Crop) => makeCrops(crop);

  const onImageLoaded = (image: HTMLImageElement) => imageRef.current = image;

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (!(target.files && target.files.length > 0)) return;

    const reader = new FileReader();

    reader.addEventListener("load", () => setAvatar(reader.result));
    reader.readAsDataURL(target.files[0]);
  };

  const submitAvatar = () => {
    setLoading(true);
    userSubmitAvatar(fullAvatar, tinyAvatar);
    authUpdateLocalAvatar(authname);
  };

  return (
    <DashboardView
      activateModal={activateModal}
      authname={authname}
      avatar={avatar}
      cancelAvatar={cancelAvatar}
      creatingPlan={creatingPlan}
      crop={crop}
      currentAvatar={currentAvatar}
      deactivateModal={deactivateModal}
      deleteName={deleteName}
      editingId={editingId}
      feedback={feedback}
      fullCrop={fullCrop}
      getApplicationNode={getApplicationNode}
      handleDeletePlan={handleDeletePlan}
      handleDeletePrivateEquipment={handleDeletePrivateEquipment}
      handleDeletePrivateIngredient={handleDeletePrivateIngredient}
      handleDeletePrivateRecipe={handleDeletePrivateRecipe}
      handleDisownPublicRecipe={handleDisownPublicRecipe}
      handleSubTabClick={handleSubTabClick}
      handleTabClick={handleTabClick}
      handleUnfavoriteRecipe={handleUnfavoriteRecipe}
      handleUnsaveRecipe={handleUnsaveRecipe}
      loading={loading}
      modalActive={modalActive}
      myFavoriteRecipes={myFavoriteRecipes}
      myPlans={myPlans}
      myPrivateEquipment={myPrivateEquipment}
      myPrivateIngredients={myPrivateIngredients}
      myPrivateRecipes={myPrivateRecipes}
      myPublicRecipes={myPublicRecipes}
      mySavedRecipes={mySavedRecipes}
      onCropChange={onCropChange}
      onCropComplete={onCropComplete}
      onImageLoaded={onImageLoaded}
      onSelectFile={onSelectFile}
      submitAvatar={submitAvatar}
      subTab={subTab}
      tab={tab}
      tinyCrop={tinyCrop}
      twoColumnATheme={twoColumnATheme}
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
    myFavoriteRecipes: IWorkRecipe[];
    myPlans: IPlan[];
    myPublicRecipes: IWorkRecipe[];
    myPrivateEquipment: IEquipment[];
    myPrivateIngredients: IIngredient[];
    myPrivateRecipes: IWorkRecipe[];
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
  authname: state.auth.authname,
  creatingPlan: state.planner.creating,
  currentAvatar: state.auth.avatar,
  editingId: state.planner.editingId,
  message: state.user.message,
  myFavoriteRecipes: state.data.myFavoriteRecipes,
  myPlans: state.data.myPlans,
  myPrivateEquipment: state.data.myPrivateEquipment,
  myPrivateIngredients: state.data.myPrivateIngredients,
  myPrivateRecipes: state.data.myPrivateRecipes,
  myPublicRecipes: state.data.myPublicRecipes,
  mySavedRecipes: state.data.mySavedRecipes
});

const mapDispatchToProps = {
  authUpdateLocalAvatar: (name: string) => authUpdateLocalAvatar(name),
  userDeletePlan: (id: number) => userDeletePlan(id),
  userDeletePrivateEquipment: (id: number) => userDeletePrivateEquipment(id),
  userDeletePrivateIngredient: (id: number) => userDeletePrivateIngredient(id),
  userDeletePrivateRecipe: (id: number) => userDeletePrivateRecipe(id),
  userDisownPublicRecipe: (id: number) => userDisownPublicRecipe(id),
  userSubmitAvatar: (fullAvatar: File | null, tinyAvatar: File | null) =>
    userSubmitAvatar(fullAvatar, tinyAvatar),
  userUnfavoriteRecipe: (id: number) => userUnfavoriteRecipe(id),
  userUnsaveRecipe: (id: number) => userUnsaveRecipe(id),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Dashboard);