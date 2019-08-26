import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import './userDashboard.css';
import LeftNav from '../../LeftNav/LeftNav';
import { userSubmitAvatar } from '../../../store/actions/index';

const UserDashboard = props => {
  const imageRef = useRef(null);

  const [ message, setMessage ] = useState("");
  const [ loading, setLoading ] = useState(false);

  const [ avatar, setAvatar ] = useState(null);
  const [ crop, setCrop ] = useState({
    //disabled: true,
    locked: true,
    width: 250,
    maxWidth: 250,
    aspect: 1 / 1
  });
  const [ cropTinySize, setCropTinySize ] = useState(null);

  const [ tab, setTab ] = useState("recipes");
  const [ subTab, setSubTab ] = useState("private");

  /*useEffect(() => {
    imageRef.current =
  });*/

  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setAvatar(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onImageLoaded = image => {
    console.log('onImageLoaded called');
    console.log('image ', image);
    imageRef.current = image;
    console.log('imageRef.current.getAttribute("src") ', imageRef.current.getAttribute("src"));
  };

  const onCropChange = crop => {
    console.log('onCropChange called');
    setCrop(crop);
  };

  const onCropComplete = crop => {
    console.log('onCropComplete called');
    makeClientCrop(crop);
  };

  const makeClientCrop = async (crop) => {
    console.log('makeClientCrop called');
    //console.log('crop.width: ', crop.width);
    //console.log('crop.height: ', crop.height);
    if (imageRef && crop.width) {
      const resized = await getCroppedImage(imageRef.current, crop, "newFile.jpeg");
      console.log(crop);
      console.log(resized);
      setCropTinySize(resized);
    }
  };

  const getCroppedImage = (image, crop, fileName) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      /*canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        fileUrl = window.URL.createObjectURL(blob);
        resolve(fileUrl);
      }, "image/jpeg");*/
      canvas.toBlob(blob => {
        blob.name = fileName;
        const fileUrl = window.URL.createObjectURL(blob);
        resolve(fileUrl);
      }, 'image/jpeg', 1);
    });
  };

  const submitAvatar = () => {
    setLoading(true);
    try {
      // create 250pxX250px and 32pxX32px, avatarFull, avatarTiny
      props.userSubmitAvatar(avatar);
    } catch(err) {
      setLoading(false);
      setMessage(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTabClick = e => {
    setTab(e.target.name);
  };

  const handleSubTabClick = e => {
    setSubTab(e.target.name);
  };

  return (
    <div className={`dashboard two-column-a ${props.twoColumnATheme}`}>

      <LeftNav />

      <section>

        <h1>{props.authname}</h1>

        <p>{message}</p>

        {/* avatar*/}
        <div className="dashboard-avatar">
          <label>Profile Picture</label>
          <input className="avatar-input" name="set-avatar" type="file" accept="image/*" onChange={onSelectFile} />
          {avatar !== null && (
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
          )}
          {cropTinySize !== null && (
            <img className="avatar-crop-preview" src={cropTinySize} />
          )}
          <button className="avatar-submit-button" name="submit-avatar" disabled={loading} onClick={submitAvatar}>Upload</button>
        </div>

        {/* tabs */}

        <div className="dashboard-menu-tabs">
          {/*<button className="dashboard-menu-tab" name="notifications" onClick={handleTabClick}>Notifications</button>*/}
          <button className="dashboard-menu-tab" name="plans" onClick={e => handleTabClick(e)}>Plans</button>
          <button className="dashboard-menu-tab" name="recipes" onClick={e => handleTabClick(e)}>Recipes</button>
          <button className="dashboard-menu-tab" name="ingredients" onClick={e => handleTabClick(e)}>Ingredients</button>
          <button className="dashboard-menu-tab" name="equipment" onClick={e => handleTabClick(e)}>Equipment</button>
        </div>

        {/* subTabs */}

        {
          (tab == "recipes") && (
            <div className="dashboard-menu-subtabs">
              <button className="dashboard-menu-subtab" name="private" onClick={e => handleSubTabClick(e)}>Private</button>
              <button className="dashboard-menu-subtab" name="public" onClick={e => handleSubTabClick(e)}>Public</button>
              <button className="dashboard-menu-subtab" name="favorite" onClick={e => handleSubTabClick(e)}>Favorite</button>
              <button className="dashboard-menu-subtab" name="saved" onClick={e => handleSubTabClick(e)}>Saved</button>
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
          (tab == "plans") && (
            <div className="dashboard-content">
              <h2>My Plans</h2>
              <Link to="/user/planner/new">Create New Plan</Link>
              {
                props.myPlans.length
                ? props.myPlans.map(plan => (
                  <div key={plan.plan_id}>
                    <span>{plan.plan_name}</span>
                    <span><Link to={`user/recipes/${recipe.recipe_id}`}>View/Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't created any plans yet.</div>
              }
            </div>
          )
        }

        {
          (tab == "recipes" && subTab == "private") && (
            <div className="dashboard-content">
              <h2>My Private Recipes</h2>
              <Link to="/user/recipes/submit">Create New Recipe</Link>
              {
                props.myPrivateRecipes.length
                ? props.myPrivateRecipes.map(recipe => (
                  <div key={recipe.recipe_id}>
                    <span>{recipe.recipe_image}</span>
                    <span>{recipe.title}</span>
                    <span><Link to={`user/recipes/${recipe.recipe_id}`}>View</Link></span>
                    <span><Link to={`user/recipes/edit/${recipe.recipe_id}`}>Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't created any private recipes yet.</div>
              }
            </div>
          )
        }

        {
          (tab == "recipes" && subTab == "public") && (
            <div className="dashboard-content">
              <h2>My Public Recipes</h2>
              <Link to="/user/recipes/submit">Create New Recipe</Link>
              {
                props.myPublicRecipes.length
                ? props.myPublicRecipes.map(recipe => (
                  <div key={recipe.recipe_id}>
                    <span>{recipe.recipe_image}</span>
                    <span>{recipe.title}</span>
                    <span><Link to={`user/recipes/${recipe.recipe_id}`}>View</Link></span>
                    <span><Link to={`user/recipes/edit/${recipe.recipe_id}`}>Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't created any public recipes yet.</div>
              }
            </div>
          )
        }

        {
          (tab == "recipes" && subTab == "favorite") && (
            <div className="dashboard-content">
              <h2>My Favorite Recipes</h2>
              {
                props.myFavoriteRecipes.length
                ? props.myFavoriteRecipes.map(recipe => (
                  <div key={recipe.recipe_id}>
                    <span>{recipe.recipe_image}</span>
                    <span>{recipe.title}</span>
                    <span><Link to={`user/recipes/${recipe.recipe_id}`}>View</Link></span>
                    <span><Link to={`user/recipes/edit/${recipe.recipe_id}`}>Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't favorited any recipes yet.</div>
              }
            </div>
          )
        }

        {
          (tab == "recipes" && subTab == "saved") && (
            <div className="dashboard-content">
              <h2>My Saved Recipes</h2>
              {
                props.mySavedRecipes.length
                ? props.mySavedRecipes.map(recipe => (
                  <div key={recipe.recipe_id}>
                    <span>{recipe.recipe_image}</span>
                    <span>{recipe.title}</span>
                    <span><Link to={`user/recipes/${recipe.recipe_id}`}>View</Link></span>
                    <span><Link to={`user/recipes/edit/${recipe.recipe_id}`}>Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't saved any recipes yet.</div>
              }
            </div>
          )
        }

        {
          tab == "ingredients" && (
            <div className="dashboard-content">
              <h2>My Private Ingredients</h2>
              <Link to="/user/ingredients/submit">Create New Ingredient</Link>
              {
                props.myPrivateIngredients.length
                ? props.myPrivateIngredients.map(ingredient => (
                  <div key={ingredient.ingredient_id}>
                    <span>{ingredient.ingredient_image}</span>
                    <span>{ingredient.ingredient_name}</span>
                    <span><Link to={`user/ingredients/${ingredient.ingredient_id}`}>View</Link></span>
                    <span><Link to={`user/ingredients/edit/${ingredient.ingredient_id}`}>Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't created any private ingredients yet.</div>
              }
            </div>
          )
        }

        {
          tab == "equipment" && (
            <div className="dashboard-content">
              <h2>My Private Equipment</h2>
              <Link to="/user/equipment/submit">Create New Equipment</Link>
              {
                props.myPrivateEquipment.length
                ? props.myPrivateEquipment.map(equipment => (
                  <div key={equipment.equipment_id}>
                    <span>{equipment.equipment_image}</span>
                    <span>{equipment.equipment_name}</span>
                    <span><Link to={`user/equipment/${equipment.equipment_id}`}>View</Link></span>
                    <span><Link to={`user/equipment/edit/${equipment.equipment_id}`}>Edit</Link></span>
                    <span>Delete</span>
                  </div>
                ))
                : <div>You haven't created any private equipment yet.</div>
              }
            </div>
          )
        }

      </section>

    </div>
  );
};

const mapStateToProps = state => ({
  authname: state.auth.authname,
  myPlans: state.data.myPlans,
  myPublicRecipes: state.data.myPublicRecipes,
  myPrivateEquipment: state.data.myPrivateEquipment,
  myPrivateIngredients: state.data.myPrivateIngredients,
  myPrivateRecipes: state.data.myPrivateRecipes,
  myFavoriteRecipes: state.data.myFavoriteRecipes,
  mySavedRecipes: state.data.mySavedRecipes
})

const mapDispatchToProps = dispatch => ({
  userSubmitAvatar: (avatar) => dispatch(userSubmitAvatar(avatar))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);