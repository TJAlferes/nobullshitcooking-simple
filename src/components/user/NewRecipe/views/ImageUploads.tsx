import React from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import "react-image-crop/lib/ReactCrop.scss";

export function ImageUploads({
  recipeImage,
  recipeEquipmentImage,
  recipeIngredientsImage,
  recipeCookingImage,
  editing,
  prevRecipeImage,
  prevEquipmentImage,
  prevIngredientsImage,
  prevCookingImage,
  onSelectFile,
  onSelectEquipmentFile,
  onSelectIngredientsFile,
  onSelectCookingFile,
  cropOne,
  cropTwo,
  cropThree,
  cropFour,
  onImageLoaded,
  onEquipmentImageLoaded,
  onIngredientsImageLoaded,
  onCookingImageLoaded,
  onCropOneChange,
  onCropTwoChange,
  onCropThreeChange,
  onCropFourChange,
  onCropComplete,
  onEquipmentCropComplete,
  onIngredientsCropComplete,
  onCookingCropComplete,
  cropFullSizePreview,
  cropThumbSizePreview,
  cropTinySizePreview,
  equipmentCropFullSizePreview,
  ingredientsCropFullSizePreview,
  cookingCropFullSizePreview,
  loading,
  cancelRecipeImage,
  cancelRecipeEquipmentImage,
  cancelRecipeIngredientsImage,
  cancelRecipeCookingImage
}: Props): JSX.Element {
  return (
    <div className="new-recipe-section-images">

      <div className="new-recipe-section-recipe-image">
        <h2 className="new-recipe-heading-two">Image of Finished Recipe</h2>
        {!recipeImage && (
          <div>
            {
              !editing
              ? <img src="https://s3.amazonaws.com/nobsc-user-recipe/nobsc-recipe-default" />
              : prevRecipeImage && <img src={`https://s3.amazonaws.com/nobsc-user-recipe${prevRecipeImage}`} />
            }
            <h4 className="change-default">Change</h4>
            <input
              className="new-recipe-image-input"
              name="image-input"
              type="file"
              accept="image/*"
              onChange={onSelectFile}
            />
          </div>
        )}
        {recipeImage && (
          <div>
            <ReactCrop
              className="new-recipe-image-crop-tool"
              style={{minHeight: "300px"}}
              imageStyle={{minHeight: "300px"}}
              src={recipeImage as string}
              crop={cropOne}
              onImageLoaded={onImageLoaded}
              onChange={onCropOneChange}
              onComplete={onCropComplete}
              disabled={true}
              locked={true}
            />
            <span className="new-recipe-image-crop-tool-tip">
              Move the crop to your desired position. These three images will be saved for you:
            </span>
            <div className="new-recipe-image-crop-previews">
              <div className="new-recipe-image-crop-full-preview">
                <span>Full Size: </span><img src={cropFullSizePreview} />
              </div>
              <div className="new-recipe-image-crop-thumb-preview">
                <span>Thumb Size: </span><img src={cropThumbSizePreview} />
              </div>
              <div className="new-recipe-image-crop-tiny-preview">
                <span>Tiny Size: </span><img src={cropTinySizePreview} />
              </div>
            </div>
            <button
              className="new-recipe-image-cancel-button"
              disabled={loading}
              onClick={cancelRecipeImage}
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="new-recipe-section-equipment-image">
        <h2 className="new-recipe-heading-two">Image of All Equipment</h2>
        {!recipeEquipmentImage && (
          <div>
            {
              !editing
              ? <img src="https://s3.amazonaws.com/nobsc-user-recipe/nobsc-recipe-default" />
              : prevEquipmentImage && <img src={`https://s3.amazonaws.com/nobsc-user-recipe-equipment/${prevEquipmentImage}`} />
            }
            <h4 className="change-default">Change</h4>
            <input
              className="new-recipe-equipment-image-input"
              name="equipment-image-input"
              type="file"
              accept="image/*"
              onChange={onSelectEquipmentFile}
            />
          </div>
        )}
        {recipeEquipmentImage && (
          <div>
            <ReactCrop
              className="new-recipe-image-crop-tool"
              style={{minHeight: "300px"}}
              imageStyle={{minHeight: "300px"}}
              src={recipeEquipmentImage as string}
              crop={cropTwo}
              onImageLoaded={onEquipmentImageLoaded}
              onChange={onCropTwoChange}
              onComplete={onEquipmentCropComplete}
              disabled={true}
              locked={true}
            />
            <span className="new-recipe-image-crop-tool-tip">
              Move the crop to your desired position. This image will be saved for you:
            </span>
            <div className="new-recipe-image-crop-previews">
              <div className="new-recipe--image-crop-full-preview">
                <span>Full Size: </span><img src={equipmentCropFullSizePreview} />
              </div>
            </div>
            <button
              className="new-recipe-image-cancel-button"
              disabled={loading}
              onClick={cancelRecipeEquipmentImage}
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="new-recipe-section-ingredients-image">
        <h2 className="new-recipe-heading-two">Image of All Ingredients</h2>
        {!recipeIngredientsImage && (
          <div>
            {
              !editing
              ? <img src="https://s3.amazonaws.com/nobsc-user-recipe/nobsc-recipe-default" />
              : prevIngredientsImage && <img src={`https://.s3.amazonaws.com/nobsc-user-recipe-ingredients/${prevIngredientsImage}`} />
            }
            <h4 className="change-default">Change</h4>
            <input
              className="new-recipe-ingredients-image-input"
              name="ingredients-image-input"
              type="file"
              accept="image/*"
              onChange={onSelectIngredientsFile}
            />
          </div>
        )}
        {recipeIngredientsImage && (
          <div>
            <ReactCrop
              className="new-recipe-image-crop-tool"
              style={{minHeight: "300px"}}
              imageStyle={{minHeight: "300px"}}
              src={recipeIngredientsImage as string}
              crop={cropThree}
              onImageLoaded={onIngredientsImageLoaded}
              onChange={onCropThreeChange}
              onComplete={onIngredientsCropComplete}
              disabled={true}
              locked={true}
            />
            <span className="new-recipe-image-crop-tool-tip">
              Move the crop to your desired position. This image will be saved for you:
            </span>
            <div className="new-recipe-image-crop-previews">
              <div className="new-recipe-image-crop-full-preview">
                <span>Full Size: </span><img src={ingredientsCropFullSizePreview} />
              </div>
            </div>
            <button
              className="new-recipe-image-cancel-button"
              disabled={loading}
              onClick={cancelRecipeIngredientsImage}
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="new-recipe-section-cooking-image">
        <h2 className="new-recipe-heading-two">Image of Cooking In Action</h2>
        {!recipeCookingImage && (
          <div>
            {
              !editing
              ? <img src="https://s3.amazonaws.com/nobsc-user-recipe/nobsc-recipe-default" />
              : prevCookingImage && <img src={`https://.s3.amazonaws.com/nobsc-user-recipe-cooking/${prevCookingImage}`} />
            }
            <h4 className="change-default">Change</h4>
            <input
              className="new-recipe-cooking-image-input"
              name="cooking-image-input"
              type="file"
              accept="image/*"
              onChange={onSelectCookingFile}
            />
          </div>
        )}
        {recipeCookingImage && (
          <div>
            <ReactCrop
              className="new-recipe-image-crop-tool"
              style={{minHeight: "300px"}}
              imageStyle={{minHeight: "300px"}}
              src={recipeCookingImage as string}
              crop={cropFour}
              onImageLoaded={onCookingImageLoaded}
              onChange={onCropFourChange}
              onComplete={onCookingCropComplete}
              disabled={true}
              locked={true}
            />
            <span className="new-recipe-image-crop-tool-tip">
              Move the crop to your desired position. This image will be saved for you:
            </span>
            <div className="new-recipe-image-crop-previews">
              <div className="new-recipe-image-crop-full-preview">
                <span>Full Size: </span><img src={cookingCropFullSizePreview} />
              </div>
            </div>
            <button
              className="new-recipe-image-cancel-button"
              disabled={loading}
              onClick={cancelRecipeCookingImage}
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
  recipeImage: string | ArrayBuffer | null;
  recipeEquipmentImage: string | ArrayBuffer | null;
  recipeIngredientsImage: string | ArrayBuffer | null;
  recipeCookingImage: string | ArrayBuffer | null;
  editing: boolean;
  prevRecipeImage: string;
  prevEquipmentImage: string;
  prevIngredientsImage: string;
  prevCookingImage: string;
  onSelectFile(e: React.ChangeEvent<HTMLInputElement>): void;
  onSelectEquipmentFile(e: React.ChangeEvent<HTMLInputElement>): void;
  onSelectIngredientsFile(e: React.ChangeEvent<HTMLInputElement>): void;
  onSelectCookingFile(e: React.ChangeEvent<HTMLInputElement>): void;
  cropOne: Crop;
  cropTwo: Crop;
  cropThree: Crop;
  cropFour: Crop;
  onImageLoaded(image: HTMLImageElement): void;
  onEquipmentImageLoaded(image: HTMLImageElement): void;
  onIngredientsImageLoaded(image: HTMLImageElement): void;
  onCookingImageLoaded(image: HTMLImageElement): void;
  onCropOneChange(crop: Crop): void;
  onCropTwoChange(crop: Crop): void;
  onCropThreeChange(crop: Crop): void;
  onCropFourChange(crop: Crop): void;
  onCropComplete(crop: Crop): void;
  onEquipmentCropComplete(crop: Crop): void;
  onIngredientsCropComplete(crop: Crop): void;
  onCookingCropComplete(crop: Crop): void;
  cropFullSizePreview: string;
  cropThumbSizePreview: string;
  cropTinySizePreview: string;
  equipmentCropFullSizePreview: string;
  ingredientsCropFullSizePreview: string;
  cookingCropFullSizePreview: string;
  loading: boolean;
  cancelRecipeImage(): void;
  cancelRecipeEquipmentImage(): void;
  cancelRecipeIngredientsImage(): void;
  cancelRecipeCookingImage(): void;
};