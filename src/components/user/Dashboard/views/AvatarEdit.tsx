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
        crop={crop}
        imageStyle={{minHeight: "300px"}}
        onImageLoaded={onImageLoaded}
        onChange={onCropChange}
        onComplete={onCropComplete}
        src={avatar as string}
        style={{minHeight: "300px"}}
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
        disabled={loading}
        name="cancel-avatar"
        onClick={cancelAvatar}
      >
        Cancel
      </button>
      <button
        className="avatar-submit-button"
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
  cropFullSizePreview: string;
  cropTinySizePreview: string;
  loading: boolean;
  onCropChange(crop: Crop): void;
  onCropComplete(crop: Crop): void;
  onImageLoaded(image: HTMLImageElement): void;
  submitAvatar(): void;
};