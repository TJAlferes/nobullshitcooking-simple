import React from 'react';
import { Link } from 'react-router-dom';
import AriaModal from 'react-aria-modal';
import ReactCrop from "react-image-crop";
import "react-image-crop/lib/ReactCrop.scss";

import LeftNav from '../../LeftNav/LeftNav';

import './userDashboard.css';

const UserDashboardView = ({
  twoColumnATheme,
  authname,
  avatar,
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

      {/* avatar*/}
      <div className="dashboard-avatar">
        {!avatar && (
          <div>
            <Link
              className="view-own-profile"
              to={`/user/profile/${authname}`}
            >
              View Profile
            </Link>
            <h2>Profile Picture</h2>
            <div className="avatar-crop-previews">
              <div className="avatar-crop-full-preview">
                <span>Full Size: </span>
                <img src={`https://nobsc-user-avatars.s3.amazonaws.com/${avatar}`} />
              </div>
              <div className="avatar-crop-tiny-preview">
                <span>Tiny Size: </span>
                <img src={`https://nobsc-user-avatars.s3.amazonaws.com/${avatar}-tiny`} />
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
              (!creatingPlan && !editingId) &&
              <Link className="create-new-entity" to="/user/plan/submit">
                Create New Plan
              </Link>
            }
            {
              (creatingPlan && !editingId) &&
              <Link className="create-new-entity" to="/user/plan/submit">
                Finish Creating Plan
              </Link>
            }
            {
              (!creatingPlan && editingId) &&
              <Link
                className="create-new-entity"
                to={`/user/plan/edit/${editingId}`}
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
              myPlans.length
              ? myPlans.map(plan => (
                <div className="dashboard-content-item" key={plan.plan_id}>
                  <span className="dashboard-content-item-name">
                    <Link to={`/user/plan/${plan.plan_id}`}>
                      {plan.plan_name}
                    </Link>
                  </span>
                  {
                    (!creatingPlan && !editingId) &&
                    <span className="dashboard-content-item-action">
                      <Link to={`/user/plan/edit/${plan.plan_id}`}>
                        Edit
                      </Link>
                    </span>
                  }
                  {
                    (!creatingPlan && !editingId) &&
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
            <Link className="create-new-entity" to="/user/recipes/private/submit">
              Create New Private Recipe
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
              myPrivateRecipes.length
              ? myPrivateRecipes.map(recipe => (
                <div className="dashboard-content-item" key={recipe.recipe_id}>
                  <span className="dashboard-content-item-tiny">
                    {
                      recipe.recipe_image !== "nobsc-recipe-default"
                      ? <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${recipe.recipe_image}-tiny`} />
                      : <div className="image-default-28-18"></div>
                    }
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
            <Link className="create-new-entity" to="/user/recipes/public/submit">
              Create New Public Recipe
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
              myPublicRecipes.length
              ? myPublicRecipes.map(recipe => (
                <div className="dashboard-content-item" key={recipe.recipe_id}>
                  <span className="dashboard-content-item-tiny">
                    {
                      recipe.recipe_image !== "nobsc-recipe-default"
                      ? <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${recipe.recipe_image}-tiny`} />
                      : <div className="image-default-28-18"></div>
                    }
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
              myFavoriteRecipes.length
              ? myFavoriteRecipes.map(recipe => (
                <div className="dashboard-content-item" key={recipe.recipe_id}>
                  <span className="dashboard-content-item-tiny">
                    {
                      recipe.recipe_image !== "nobsc-recipe-default"
                      ? <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${recipe.recipe_image}-tiny`} />
                      : <div className="image-default-28-18"></div>
                    }
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
              mySavedRecipes.length
              ? mySavedRecipes.map(recipe => (
                <div className="dashboard-content-item" key={recipe.recipe_id}>
                  <span className="dashboard-content-item-tiny">
                    {
                      recipe.recipe_image !== "nobsc-recipe-default"
                      ? <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${recipe.recipe_image}-tiny`} />
                      : <div className="image-default-28-18"></div>
                    }
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
              myPrivateIngredients.length
              ? myPrivateIngredients.map(ingredient => (
                <div
                  className="dashboard-content-item"
                  key={ingredient.ingredient_id}
                >
                  <span className="dashboard-content-item-tiny">
                    {
                      ingredient.ingredient_image !== "nobsc-ingredient-default"
                      ? <img src={`https://nobsc-user-ingredients.s3.amazonaws.com/${ingredient.ingredient_image}-tiny`} />
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
                      ? <img src={`https://nobsc-user-equipment.s3.amazonaws.com/${equipment.equipment_image}-tiny`} />
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