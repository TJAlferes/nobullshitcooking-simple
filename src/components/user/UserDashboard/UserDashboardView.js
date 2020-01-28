import React from 'react';

import LeftNav from '../../LeftNav/LeftNav';

import AvatarView from './views/AvatarView';
import AvatarEditView from './views/AvatarEditView';
import TabsView from './views/TabsView';
import SubtabsView from './views/SubtabsView';
import PlansTabView from './views/PlansTabView';
import PrivateRecipesTabView from './views/PrivateRecipesTabView';
import PublicRecipesTabView from './views/PublicRecipesTabView';
import FavoriteRecipesTabView from './views/FavoriteRecipesTabView';
import SavedRecipesTabView from './view/SavedRecipesTabView';
import IngredientsTabView from './views/IngredientsTabView';
import EquipmentTabView from './views/EquipmentTabView';

import './userDashboard.css';

const UserDashboardView = ({
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
}) => (
  <div className={`dashboard two-column-a ${twoColumnATheme}`}>

    <LeftNav />

    <section>

      <h1>{authname}</h1>

      <p className="error-message">{feedback}</p>

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

      {!avatar && <hr className="dashboard-hr" />}

      {!avatar && <TabsView tab={tab} handleTabClick={handleTabClick} />}

      {(!avatar && tab == "recipes") && (
        <SubtabsView subTab={subTab} handleSubTabClick={handleSubTabClick} />
      )}

      {/*
        tab == "notifications" && (
          <div className="dashboard-content">
          </div>
        )
      */}

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
        />
      )}

      {(!avatar && tab == "recipes" && subTab == "favorite") && (
        <FavoriteRecipesTabView
          myFavoriteRecipes={myFavoriteRecipes}
          handleUnfavoriteRecipe={handleUnfavoriteRecipe}
        />
      )}

      {(!avatar && tab == "recipes" && subTab == "saved") && (
        <SavedRecipesTabView
          mySavedRecipes={mySavedRecipes}
          handleUnsaveRecipe={handleUnsaveRecipe}
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

export default UserDashboardView;