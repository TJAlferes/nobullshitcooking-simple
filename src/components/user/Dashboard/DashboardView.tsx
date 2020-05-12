import React from 'react';
import { Crop } from 'react-image-crop';

import {
  IEquipment,
  IIngredient,
  IPlan,
  IWorkRecipe
} from '../../../store/data/types';
import LeftNav from '../../LeftNav/LeftNav';
import AvatarView from './views/AvatarView';
import AvatarEditView from './views/AvatarEditView';
import TabsView from './views/TabsView';
import PlansTabView from './views/PlansTabView';
import PrivateRecipesTabView from './views/PrivateRecipesTabView';
import PublicRecipesTabView from './views/PublicRecipesTabView';
import FavoriteRecipesTabView from './views/FavoriteRecipesTabView';
import SavedRecipesTabView from './views/SavedRecipesTabView';
import IngredientsTabView from './views/IngredientsTabView';
import EquipmentTabView from './views/EquipmentTabView';
import './dashboard.css';

export function DashboardView({
  twoColumnATheme,
  authname,
  avatar,
  currentAvatar,
  feedback,
  loading,
  creatingPlan,
  editingId,
  onSelectFile,
  onImageLoaded,
  crop,
  cropFullSizePreview,
  cropTinySizePreview,
  onCropChange,
  onCropComplete,
  submitAvatar,
  cancelAvatar,
  tab,
  handleTabClick,
  subTab,
  handleSubTabClick,
  getApplicationNode,
  myPlans,
  deletePlanModalActive,
  activateDeletePlanModal,
  deactivateDeletePlanModal,
  deletePlanName,
  handleDeletePlan,
  myPrivateRecipes,
  deleteRecipeModalActive,
  activateDeleteRecipeModal,
  deactivateDeleteRecipeModal,
  deleteRecipeName,
  handleDeletePrivateRecipe,
  myPublicRecipes,
  disownRecipeModalActive,
  activateDisownRecipeModal,
  deactivateDisownRecipeModal,
  disownRecipeName,
  handleDisownPublicRecipe,
  myFavoriteRecipes,
  handleUnfavoriteRecipe,
  mySavedRecipes,
  handleUnsaveRecipe,
  myPrivateIngredients,
  handleDeletePrivateIngredient,
  myPrivateEquipment,
  handleDeletePrivateEquipment
}: Props): JSX.Element {
  return (
    <div className={`dashboard two-column-a ${twoColumnATheme}`}>

      <LeftNav />

      <section>

        <h1>{authname}</h1>

        <p className="dashboard-feedback">{feedback}</p>

        {/*!avatar && <hr className="dashboard-hr" />*/}

        {!avatar && <TabsView tab={tab} handleTabClick={handleTabClick} />}

        {(tab === "avatar") && (
          <div className="dashboard-avatar">
            {!avatar && (
              <AvatarView
                authname={authname}
                currentAvatar={currentAvatar}
                onSelectFile={onSelectFile}
              />
            )}
            {avatar && (
              <AvatarEditView
                avatar={avatar}
                crop={crop}
                onImageLoaded={onImageLoaded}
                onCropChange={onCropChange}
                onCropComplete={onCropComplete}
                cropFullSizePreview={cropFullSizePreview}
                cropTinySizePreview={cropTinySizePreview}
                loading={loading}
                cancelAvatar={cancelAvatar}
                submitAvatar={submitAvatar}
              />
            )}
          </div>
        )}

        {(!avatar && tab == "plans") && (
          <PlansTabView
            creatingPlan={creatingPlan}
            editingId={editingId}
            deletePlanModalActive={deletePlanModalActive}
            deactivateDeletePlanModal={deactivateDeletePlanModal}
            getApplicationNode={getApplicationNode}
            deletePlanName={deletePlanName}
            handleDeletePlan={handleDeletePlan}
            myPlans={myPlans}
            activateDeletePlanModal={activateDeletePlanModal}
          />
        )}

        {(!avatar && tab == "recipes" && subTab == "private") && (
          <PrivateRecipesTabView
            deleteRecipeModalActive={deleteRecipeModalActive}
            deactivateDeleteRecipeModal={deactivateDeleteRecipeModal}
            getApplicationNode={getApplicationNode}
            deleteRecipeName={deleteRecipeName}
            handleDeletePrivateRecipe={handleDeletePrivateRecipe}
            myPrivateRecipes={myPrivateRecipes}
            activateDeleteRecipeModal={activateDeleteRecipeModal}
            subTab={subTab}
            handleSubTabClick={handleSubTabClick}
          />
        )}

        {(!avatar && tab == "recipes" && subTab == "public") && (
          <PublicRecipesTabView
            disownRecipeModalActive={disownRecipeModalActive}
            deactivateDisownRecipeModal={deactivateDisownRecipeModal}
            getApplicationNode={getApplicationNode}
            disownRecipeName={disownRecipeName}
            handleDisownPublicRecipe={handleDisownPublicRecipe}
            myPublicRecipes={myPublicRecipes}
            activateDisownRecipeModal={activateDisownRecipeModal}
            subTab={subTab}
            handleSubTabClick={handleSubTabClick}
          />
        )}

        {(!avatar && tab == "recipes" && subTab == "favorite") && (
          <FavoriteRecipesTabView
            myFavoriteRecipes={myFavoriteRecipes}
            handleUnfavoriteRecipe={handleUnfavoriteRecipe}
            subTab={subTab}
            handleSubTabClick={handleSubTabClick}
          />
        )}

        {(!avatar && tab == "recipes" && subTab == "saved") && (
          <SavedRecipesTabView
            mySavedRecipes={mySavedRecipes}
            handleUnsaveRecipe={handleUnsaveRecipe}
            subTab={subTab}
            handleSubTabClick={handleSubTabClick}
          />
        )}

        {!avatar && tab == "ingredients" && (
          <IngredientsTabView
            myPrivateIngredients={myPrivateIngredients}
            handleDeletePrivateIngredient={handleDeletePrivateIngredient}
          />
        )}

        {!avatar && tab == "equipment" && (
          <EquipmentTabView
            myPrivateEquipment={myPrivateEquipment}
            handleDeletePrivateEquipment={handleDeletePrivateEquipment}
          />
        )}

      </section>

    </div>
  );
}

type Props = {
  twoColumnATheme: string;
  authname: string;
  avatar: string | ArrayBuffer | null;
  currentAvatar: string;
  feedback: string;
  loading: boolean;
  creatingPlan: boolean;
  editingId: number;
  onSelectFile(e: React.ChangeEvent<HTMLInputElement>): void;
  onImageLoaded(image: HTMLImageElement): void;
  crop: Crop;
  cropFullSizePreview: string;
  cropTinySizePreview: string;
  onCropChange(crop: Crop): void;
  onCropComplete(crop: Crop): void;
  submitAvatar(): void;
  cancelAvatar(): void;
  tab: string;
  handleTabClick(e: React.SyntheticEvent<EventTarget>): void;
  subTab: string;
  handleSubTabClick(e: React.SyntheticEvent<EventTarget>): void;
  getApplicationNode(): void;
  myPlans: IPlan[];
  deletePlanModalActive: boolean;
  activateDeletePlanModal(id: number, name: string): void;
  deactivateDeletePlanModal(): void;
  deletePlanName: string;
  handleDeletePlan(): void;
  myPrivateRecipes: IWorkRecipe[];
  deleteRecipeModalActive: boolean;
  activateDeleteRecipeModal(id: number, name: string): void;
  deactivateDeleteRecipeModal(): void;
  deleteRecipeName: string;
  handleDeletePrivateRecipe(): void;
  myPublicRecipes: IWorkRecipe[];
  disownRecipeModalActive: boolean;
  activateDisownRecipeModal(id: number, name: string): void;
  deactivateDisownRecipeModal(): void;
  disownRecipeName: string;
  handleDisownPublicRecipe(): void;
  myFavoriteRecipes: IWorkRecipe[];
  handleUnfavoriteRecipe(id: number): void;
  mySavedRecipes: IWorkRecipe[];
  handleUnsaveRecipe(id: number): void;
  myPrivateIngredients: IIngredient[];
  handleDeletePrivateIngredient(id: number): void;
  myPrivateEquipment: IEquipment[];
  handleDeletePrivateEquipment(id: number): void;
};