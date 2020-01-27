import React from 'react';
import { Link } from 'react-router-dom';

const AvatarView = ({ authname, currentAvatar, onSelectFile }) => (
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
        <img src={`https://s3.amazonaws.com/nobsc-user-avatars/${currentAvatar}`} />
      </div>
      <div className="avatar-crop-tiny-preview">
        <span>Tiny Size: </span>
        <img src={`https://s3.amazonaws.com/nobsc-user-avatars/${currentAvatar}-tiny`} />
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
);

export default AvatarView;