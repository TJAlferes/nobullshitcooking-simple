import React from 'react';
import { Link } from 'react-router-dom';
import AriaModal from 'react-aria-modal';

import LeftNav from '../../LeftNav/LeftNav';

import AvatarView from './views/AvatarView';
import AvatarEditView from './views/AvatarEditView';
import PlansTabView from './views/PlansTabView';
import PrivateRecipesTabView from './views/PrivateRecipesTabView';
import PublicRecipesTabView from './views/PublicRecipesTabView';
import FavoriteRecipesTabView from './views/FavoriteRecipesTabView';
import SavedRecipesTabView from './view/SavedRecipesTabView';

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

      {
        !avatar && tab == "ingredients" && (
          <div className="dashboard-content">
            <h2>Private Ingredients</h2>
            <Link className="create-new-entity" to="/user/ingredients/submit">
              Create New Ingredient
            </Link>
            {
              myPrivateIngredients.length
              ? myPrivateIngredients.map(ingredient => (
                <div
                  className="dashboard-content-item"
                  key={ingredient.ingredient_id}
                >
                  <span className="dashboard-content-item-tiny">
                    {
                      ingredient.ingredient_image !== "nobsc-ingredient-default"
                      ? <img src={`https://s3.amazonaws.com/nobsc-user-ingredients/${ingredient.ingredient_image}-tiny`} />
                      : <div className="image-default-28-18"></div>
                    }
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
              myPrivateEquipment.length
              ? myPrivateEquipment.map(equipment => (
                <div
                  className="dashboard-content-item"
                  key={equipment.equipment_id}
                >
                  <span className="dashboard-content-item-tiny">
                    {
                      equipment.equipment_image !== "nobsc-equipment-default"
                      ? <img src={`https://s3.amazonaws.com/nobsc-user-equipment/${equipment.equipment_image}-tiny`} />
                      : <div className="image-default-28-18"></div>
                    }
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

export default UserDashboardView;