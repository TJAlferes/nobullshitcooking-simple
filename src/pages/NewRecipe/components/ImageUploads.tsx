import React from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import "react-image-crop/lib/ReactCrop.scss";

export function ImageUploads({
  cancelCookingImage,
  cancelEquipmentImage,
  cancelIngredientsImage,
  cancelRecipeImage,
  cookingCrop,
  cookingFullCrop,
  cookingImage,
  cookingPrevImage,
  editing,
  equipmentCrop,
  equipmentFullCrop,
  equipmentImage,
  equipmentPrevImage,
  ingredientsCrop,
  ingredientsFullCrop,
  ingredientsImage,
  ingredientsPrevImage,
  loading,
  onCookingCropChange,
  onCookingCropComplete,
  onCookingImageLoaded,
  onEquipmentCropChange,
  onEquipmentCropComplete,
  onEquipmentImageLoaded,
  onIngredientsCropChange,
  onIngredientsCropComplete,
  onIngredientsImageLoaded,
  onRecipeCropChange,
  onRecipeCropComplete,
  onRecipeImageLoaded,
  onSelectCookingFile,
  onSelectEquipmentFile,
  onSelectIngredientsFile,
  onSelectRecipeFile,
  recipeCrop,
  recipeFullCrop,
  recipeImage,
  recipePrevImage,
  recipeThumbCrop,
  recipeTinyCrop
}: Props): JSX.Element {
  return (
    <div className="new-recipe__images">

      <div className="new-recipe__recipe-image">
        <h2 className="new-recipe__h2" data-test="image-heading">
          Image of Finished Recipe
        </h2>
        {!recipeImage && (
          <div>
            {
              !editing
              ? <img src="https://s3.amazonaws.com/nobsc-user-recipe/nobsc-recipe-default" />
              : recipePrevImage && <img src={`https://s3.amazonaws.com/nobsc-user-recipe${recipePrevImage}`} />
            }
            <h4 className="new-recipe__h4">Change</h4>
            <input
              accept="image/*"
              className="new-recipe__image-input"
              name="image-input"
              onChange={onSelectRecipeFile}
              type="file"
            />
          </div>
        )}
        {recipeImage && (
          <div>
            <ReactCrop
              className="new-recipe__crop-tool"
              crop={recipeCrop}
              disabled={true}
              imageStyle={{minHeight: "300px"}}
              locked={true}
              maxHeight={172}
              maxWidth={280}
              minHeight={172}
              minWidth={280}
              onChange={onRecipeCropChange}
              onComplete={onRecipeCropComplete}
              onImageLoaded={onRecipeImageLoaded}
              src={recipeImage as string}
              style={{minHeight: "300px"}}
            />
            <span className="new-recipe__crop-tool-tip">
              Move the crop to your desired position. These three images will be saved for you:
            </span>
            <div className="new-recipe__crops">
              <div className="new-recipe__crop-full-outer">
                <span>Full Size: </span>
                <img className="new-recipe__crop-full" src={recipeFullCrop} />
              </div>
              <div className="new-recipe__crop-thumb-outer">
                <span>Thumb Size: </span>
                <img className="new-recipe__crop-thumb" src={recipeThumbCrop} />
              </div>
              <div className="new-recipe__crop-tiny-outer">
                <span>Tiny Size: </span>
                <img className="new-recipe__crop-tiny" src={recipeTinyCrop} />
              </div>
            </div>
            <button
              className="new-recipe__image-cancel-button"
              disabled={loading}
              onClick={cancelRecipeImage}
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="new-recipe__equipment-image">
        <h2 className="new-recipe__h2">Image of All Equipment</h2>
        {!equipmentImage && (
          <div>
            {
              !editing
              ? <img src="https://s3.amazonaws.com/nobsc-user-recipe/nobsc-recipe-default" />
              : equipmentPrevImage && <img src={`https://s3.amazonaws.com/nobsc-user-recipe-equipment/${equipmentPrevImage}`} />
            }
            <h4 className="new-recipe__h4">Change</h4>
            <input
              accept="image/*"
              className="new-recipe__equipment-image-input"
              name="equipment-image-input"
              onChange={onSelectEquipmentFile}
              type="file"
            />
          </div>
        )}
        {equipmentImage && (
          <div>
            <ReactCrop
              className="new-recipe__crop-tool"
              crop={equipmentCrop}
              disabled={true}
              imageStyle={{minHeight: "300px"}}
              locked={true}
              maxHeight={172}
              maxWidth={280}
              minHeight={172}
              minWidth={280}
              onChange={onEquipmentCropChange}
              onComplete={onEquipmentCropComplete}
              onImageLoaded={onEquipmentImageLoaded}
              src={equipmentImage as string}
              style={{minHeight: "300px"}}
            />
            <span className="new-recipe__crop-tool-tip">
              Move the crop to your desired position. This image will be saved for you:
            </span>
            <div className="new-recipe__crops">
              <div className="new-recipe__crop-full-outer">
                <span>Full Size: </span>
                <img
                  className="new-recipe__crop-full"
                  src={equipmentFullCrop}
                />
              </div>
            </div>
            <button
              className="new-recipe__image-cancel-button"
              disabled={loading}
              onClick={cancelEquipmentImage}
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="new-recipe__ingredients-image">
        <h2 className="new-recipe__h2">Image of All Ingredients</h2>
        {!ingredientsImage && (
          <div>
            {
              !editing
              ? <img src="https://s3.amazonaws.com/nobsc-user-recipe/nobsc-recipe-default" />
              : ingredientsPrevImage && <img src={`https://.s3.amazonaws.com/nobsc-user-recipe-ingredients/${ingredientsPrevImage}`} />
            }
            <h4 className="new-recipe__h4">Change</h4>
            <input
              accept="image/*"
              className="new-recipe__ingredients-image-input"
              name="ingredients-image-input"
              onChange={onSelectIngredientsFile}
              type="file"
            />
          </div>
        )}
        {ingredientsImage && (
          <div>
            <ReactCrop
              className="new-recipe__crop-tool"
              crop={ingredientsCrop}
              disabled={true}
              imageStyle={{minHeight: "300px"}}
              locked={true}
              maxHeight={172}
              maxWidth={280}
              minHeight={172}
              minWidth={280}
              onChange={onIngredientsCropChange}
              onComplete={onIngredientsCropComplete}
              onImageLoaded={onIngredientsImageLoaded}
              src={ingredientsImage as string}
              style={{minHeight: "300px"}}
            />
            <span className="new-recipe__crop-tool-tip">
              Move the crop to your desired position. This image will be saved for you:
            </span>
            <div className="new-recipe__crops">
              <div className="new-recipe__crop-full-outer">
                <span>Full Size: </span>
                <img
                  className="new-recipe__crop-full"
                  src={ingredientsFullCrop}
                />
              </div>
            </div>
            <button
              className="new-recipe__image-cancel-button"
              disabled={loading}
              onClick={cancelIngredientsImage}
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="new-recipe__cooking-image">
        <h2 className="new-recipe__h2">Image of Cooking In Action</h2>
        {!cookingImage && (
          <div>
            {
              !editing
              ? <img src="https://s3.amazonaws.com/nobsc-user-recipe/nobsc-recipe-default" />
              : cookingPrevImage && <img src={`https://.s3.amazonaws.com/nobsc-user-recipe-cooking/${cookingPrevImage}`} />
            }
            <h4 className="new-recipe__h4">Change</h4>
            <input
              accept="image/*"
              className="new-recipe__cooking-image-input"
              name="cooking-image-input"
              onChange={onSelectCookingFile}
              type="file"
            />
          </div>
        )}
        {cookingImage && (
          <div>
            <ReactCrop
              className="new-recipe__crop-tool"
              crop={cookingCrop}
              disabled={true}
              imageStyle={{minHeight: "300px"}}
              locked={true}
              maxHeight={172}
              maxWidth={280}
              minHeight={172}
              minWidth={280}
              onChange={onCookingCropChange}
              onComplete={onCookingCropComplete}
              onImageLoaded={onCookingImageLoaded}
              src={cookingImage as string}
              style={{minHeight: "300px"}}
            />
            <span className="new-recipe__crop-tool-tip">
              Move the crop to your desired position. This image will be saved for you:
            </span>
            <div className="new-recipe__crops">
              <div className="new-recipe__crop-full-outer">
                <span>Full Size: </span>
                <img className="new-recipe__crop-full" src={cookingFullCrop} />
              </div>
            </div>
            <button
              className="new-recipe__image-cancel-button"
              disabled={loading}
              onClick={cancelCookingImage}
            >
              Cancel
            </button>
          </div>
        )}
      </div>

    </div>
  );
}

type Props = {
  cancelCookingImage(): void;
  cancelEquipmentImage(): void;
  cancelIngredientsImage(): void;
  cancelRecipeImage(): void;
  cookingCrop: Crop;
  cookingFullCrop: string;
  cookingImage: string | ArrayBuffer | null;
  cookingPrevImage: string;
  editing: boolean;
  equipmentCrop: Crop;
  equipmentFullCrop: string;
  equipmentImage: string | ArrayBuffer | null;
  equipmentPrevImage: string;
  ingredientsCrop: Crop;
  ingredientsFullCrop: string;
  ingredientsImage: string | ArrayBuffer | null;
  ingredientsPrevImage: string;
  loading: boolean;
  onCookingCropChange(crop: Crop): void;
  onCookingCropComplete(crop: Crop): void;
  onCookingImageLoaded(image: HTMLImageElement): void;
  onEquipmentCropChange(crop: Crop): void;
  onEquipmentCropComplete(crop: Crop): void;
  onEquipmentImageLoaded(image: HTMLImageElement): void;
  onIngredientsCropChange(crop: Crop): void;
  onIngredientsCropComplete(crop: Crop): void;
  onIngredientsImageLoaded(image: HTMLImageElement): void;
  onRecipeCropChange(crop: Crop): void;
  onRecipeCropComplete(crop: Crop): void;
  onRecipeImageLoaded(image: HTMLImageElement): void;
  onSelectCookingFile(e: React.ChangeEvent<HTMLInputElement>): void;
  onSelectEquipmentFile(e: React.ChangeEvent<HTMLInputElement>): void;
  onSelectIngredientsFile(e: React.ChangeEvent<HTMLInputElement>): void;
  onSelectRecipeFile(e: React.ChangeEvent<HTMLInputElement>): void;
  recipeCrop: Crop;
  recipeFullCrop: string;
  recipeImage: string | ArrayBuffer | null;
  recipePrevImage: string;
  recipeThumbCrop: string;
  recipeTinyCrop: string;
};