import React from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import "react-image-crop/lib/ReactCrop.scss";

export function AvatarEdit({
  avatar,
  cancelAvatar,
  crop,
  cropFullSizePreview,
  cropTinySizePreview,
  loading,
  onImageLoaded,
  onCropChange,
  onCropComplete,
  submitAvatar
}: Props): JSX.Element {
  return (
    <div className="dashboard-avatar-edit">
      <ReactCrop
        className="avatar-crop-tool"
        style={{minHeight: "300px"}}
        imageStyle={{minHeight: "300px"}}
        src={avatar as string}
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
  );
}

type Props = {
  avatar: string | ArrayBuffer | null;
  cancelAvatar(): void;
  crop: Crop;
  cropFullSizePreview: string;
  cropTinySizePreview: string;
  loading: boolean;
  onCropChange(crop: Crop): void;
  onCropComplete(crop: Crop): void;
  onImageLoaded(image: HTMLImageElement): void;
  submitAvatar(): void;
};