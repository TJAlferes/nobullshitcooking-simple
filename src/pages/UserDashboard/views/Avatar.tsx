import React from 'react';
import { Link } from 'react-router-dom';

export function Avatar({
  authname,
  currentAvatar,
  onSelectFile
}: Props): JSX.Element {
  return (
    <div className="dashboard__avatar">
      <Link
        className="dashboard__avatar-profile-link"
        to={`/user/profile/${authname}`}
      >
        View Profile
      </Link>

      <h2>Profile Picture</h2>

      <div className="dashboard__avatar-crops">
        <div className="dashboard__avatar-crop-full">
          <span>Full Size: </span>
          <img src={`https://s3.amazonaws.com/nobsc-user-avatars/${currentAvatar}`} />
        </div>

        <div className="dashboard__avatar-crop-tiny">
          <span>Tiny Size: </span>
          <img src={`https://s3.amazonaws.com/nobsc-user-avatars/${currentAvatar}-tiny`} />
        </div>
      </div>

      <label className="dashboard__avatar-label">Change</label>

      <input
        accept="image/*"
        className="dashboard__avatar-input"
        name="set-avatar"
        onChange={onSelectFile}
        type="file"
      />
    </div>
  );
}

type Props = {
  authname: string;
  currentAvatar: string;
  onSelectFile(e: React.ChangeEvent<HTMLInputElement>): void;
};