import React from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import "react-image-crop/lib/ReactCrop.scss";

export function AvatarEdit({
  avatar,
  cancelAvatar,
  crop,
  fullCrop,
  loading,
  onImageLoaded,
  onCropChange,
  onCropComplete,
  submitAvatar,
  tinyCrop,
}: Props): JSX.Element {
  return (
    <div className="dashboard__avatar-edit">
      <ReactCrop
        className="avatar-edit__tool"
        crop={crop}
        imageStyle={{minHeight: "300px"}}
        onChange={onCropChange}
        onComplete={onCropComplete}
        onImageLoaded={onImageLoaded}
        src={avatar as string}
        style={{minHeight: "300px"}}
      />

      <span className="avatar-edit__tool-tip">
        Move the crop to your desired position, then click "Complete". These two images will be saved for you:
      </span>

      <div className="avatar-crops">
        <div className="avatar-crop-full">
          <span>Full Size: </span><img src={fullCrop} />
        </div>

        <div className="avatar-crop-tiny">
          <span>Tiny Size: </span><img src={tinyCrop} />
        </div>
      </div>

      <button
        className="avatar-edit__cancel-button"
        disabled={loading}
        name="cancel-avatar"
        onClick={cancelAvatar}
      >
        Cancel
      </button>

      <button
        className="avatar-edit__submit-button"
        disabled={loading}
        name="submit-avatar"
        onClick={submitAvatar}
      >
        Complete
      </button>
    </div>
  );
}

type Props = {
  avatar: string | ArrayBuffer | null;
  cancelAvatar(): void;
  crop: Crop;
  fullCrop: string;
  loading: boolean;
  onCropChange(crop: Crop): void;
  onCropComplete(crop: Crop): void;
  onImageLoaded(image: HTMLImageElement): void;
  submitAvatar(): void;
  tinyCrop: string;
};