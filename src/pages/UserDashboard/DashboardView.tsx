import React from 'react';
import { Crop } from 'react-image-crop';

import LeftNav from '../../components/LeftNav/LeftNav';
import {
  IEquipment,
  IIngredient,
  IPlan,
  IWorkRecipe
} from '../../store/data/types';
import { Avatar } from './views/Avatar';
import { AvatarEdit } from './views/AvatarEdit';
import { Equipment } from './views/Equipment';
import { FavoriteRecipes } from './views/FavoriteRecipes';
import { Ingredients } from './views/Ingredients';
import { Plans } from './views/Plans';
import { PrivateRecipes } from './views/PrivateRecipes';
import { PublicRecipes } from './views/PublicRecipes';
import { SavedRecipes } from './views/SavedRecipes';
import { Tabs } from './views/Tabs';
import './dashboard.css';

export function DashboardView({
  activateModal,
  authname,
  avatar,
  cancelAvatar,
  creatingPlan,
  crop,
  currentAvatar,
  deactivateModal,
  deleteName,
  editingId,
  feedback,
  fullCrop,
  getApplicationNode,
  handleDeletePlan,
  handleDeletePrivateEquipment,
  handleDeletePrivateIngredient,
  handleDeletePrivateRecipe,
  handleDisownPublicRecipe,
  handleSubTabClick,
  handleTabClick,
  handleUnfavoriteRecipe,
  handleUnsaveRecipe,
  loading,
  modalActive,
  myFavoriteRecipes,
  myPlans,
  myPrivateEquipment,
  myPrivateIngredients,
  myPrivateRecipes,
  myPublicRecipes,
  mySavedRecipes,
  onCropChange,
  onCropComplete,
  onImageLoaded,
  onSelectFile,
  submitAvatar,
  subTab,
  tab,
  tinyCrop,
  twoColumnATheme
}: Props): JSX.Element {
  return (
    <div className={`dashboard two-column-a ${twoColumnATheme}`}>

      <LeftNav />

      <section>

        <h1>{authname}</h1>

        <p className="dashboard__feedback">{feedback}</p>

        {!avatar && <Tabs tab={tab} handleTabClick={handleTabClick} />}

        {(tab === "avatar") && (
          <>
            {!avatar && (
              <Avatar
                authname={authname}
                currentAvatar={currentAvatar}
                onSelectFile={onSelectFile}
              />
            )}
            {avatar && (
              <AvatarEdit
                avatar={avatar}
                cancelAvatar={cancelAvatar}
                crop={crop}
                fullCrop={fullCrop}
                loading={loading}
                onImageLoaded={onImageLoaded}
                onCropChange={onCropChange}
                onCropComplete={onCropComplete}
                submitAvatar={submitAvatar}
                tinyCrop={tinyCrop}
              />
            )}
          </>
        )}

        {(!avatar && tab == "plans") && (
          <Plans
            activateModal={activateModal}
            creatingPlan={creatingPlan}
            deactivateModal={deactivateModal}
            deleteName={deleteName}
            editingId={editingId}
            getApplicationNode={getApplicationNode}
            handleDeletePlan={handleDeletePlan}
            modalActive={modalActive}
            myPlans={myPlans}
          />
        )}

        {(!avatar && tab == "recipes" && subTab == "private") && (
          <PrivateRecipes
            activateModal={activateModal}
            deactivateModal={deactivateModal}
            deleteName={deleteName}
            getApplicationNode={getApplicationNode}
            handleDeletePrivateRecipe={handleDeletePrivateRecipe}
            handleSubTabClick={handleSubTabClick}
            modalActive={modalActive}
            myPrivateRecipes={myPrivateRecipes}
            subTab={subTab}
          />
        )}

        {(!avatar && tab == "recipes" && subTab == "public") && (
          <PublicRecipes
            activateModal={activateModal}
            deactivateModal={deactivateModal}
            deleteName={deleteName}
            getApplicationNode={getApplicationNode}
            handleDisownPublicRecipe={handleDisownPublicRecipe}
            handleSubTabClick={handleSubTabClick}
            modalActive={modalActive}
            myPublicRecipes={myPublicRecipes}
            subTab={subTab}
          />
        )}

        {(!avatar && tab == "recipes" && subTab == "favorite") && (
          <FavoriteRecipes
            handleSubTabClick={handleSubTabClick}
            handleUnfavoriteRecipe={handleUnfavoriteRecipe}
            myFavoriteRecipes={myFavoriteRecipes}
            subTab={subTab}
            
          />
        )}

        {(!avatar && tab == "recipes" && subTab == "saved") && (
          <SavedRecipes
            handleSubTabClick={handleSubTabClick}
            handleUnsaveRecipe={handleUnsaveRecipe}
            mySavedRecipes={mySavedRecipes}
            subTab={subTab}
          />
        )}

        {!avatar && tab == "ingredients" && (
          <Ingredients
            handleDeletePrivateIngredient={handleDeletePrivateIngredient}
            myPrivateIngredients={myPrivateIngredients}
          />
        )}

        {!avatar && tab == "equipment" && (
          <Equipment
            handleDeletePrivateEquipment={handleDeletePrivateEquipment}
            myPrivateEquipment={myPrivateEquipment}
          />
        )}

      </section>

    </div>
  );
}

type Props = {
  activateModal(id: number, name: string): void;
  authname: string;
  avatar: string | ArrayBuffer | null;
  cancelAvatar(): void;
  creatingPlan: boolean;
  crop: Crop;
  currentAvatar: string;
  deactivateModal(): void;
  deleteName: string;
  editingId: number | null;
  feedback: string;
  fullCrop: string;
  getApplicationNode(): Element | Node;
  handleDeletePlan(): void;
  handleDeletePrivateEquipment(id: number): void;
  handleDeletePrivateIngredient(id: number): void;
  handleDeletePrivateRecipe(): void;
  handleDisownPublicRecipe(): void;
  handleSubTabClick(e: React.SyntheticEvent<EventTarget>): void;
  handleTabClick(e: React.SyntheticEvent<EventTarget>): void;
  handleUnfavoriteRecipe(id: number): void;
  handleUnsaveRecipe(id: number): void;
  loading: boolean;
  modalActive: boolean;
  myFavoriteRecipes: IWorkRecipe[];
  myPlans: IPlan[];
  myPrivateEquipment: IEquipment[];
  myPrivateIngredients: IIngredient[];
  myPrivateRecipes: IWorkRecipe[];
  myPublicRecipes: IWorkRecipe[];
  mySavedRecipes: IWorkRecipe[];
  onImageLoaded(image: HTMLImageElement): void;
  onCropChange(crop: Crop): void;
  onCropComplete(crop: Crop): void;
  onSelectFile(e: React.ChangeEvent<HTMLInputElement>): void;
  submitAvatar(): void;
  subTab: string;
  tab: string;
  tinyCrop: string;
  twoColumnATheme: string;
};