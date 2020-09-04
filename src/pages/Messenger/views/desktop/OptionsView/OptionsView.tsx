import React from 'react';

import './optionsView.css';

export function OptionsView({
  channel,
  handleChannelChange,
  handleConnect,
  handleDisconnect,
  handleRoomInputChange,
  loading,
  roomToEnter,
  status
}: Props): JSX.Element {
  return (
    <div className="messenger__options">

      <div className="options__connection">
        <div className="connection-button-frame">
          <button
            className="connection-button"
            disabled={loading}
            onClick={
              (status === "Connected") ? handleDisconnect : handleConnect
            }
          >
            {(status === "Connected") ? 'Disconnect' : 'Connect'}
          </button>
        </div>

        <span className="connection-spacer"></span>
      </div>

      <div className="options__current-room">
        <span className="current-room-label">Current Room:</span>
        <span className="current-room">{channel}</span>
      </div>

      <div className="options__change-room">
        <span className="change-room-label">Go To Room:</span>

        <input
          className="change-room-input"
          disabled={(status !== "Connected") || loading}
          name="change-room-input"
          onChange={handleRoomInputChange}
          type="text"
          value={roomToEnter}
        />

        <div className="change-room-button-frame">
          <button
            className="change-room-button"
            disabled={(status !== "Connected") || loading}
            onClick={handleChannelChange}
          >
            Enter
          </button>
        </div>
      </div>
      
    </div>
  );
}

type Props = {
  channel: string;
  handleChannelChange(): void;
  handleConnect(): void;
  handleDisconnect(): void;
  handleRoomInputChange(e: React.SyntheticEvent<EventTarget>): void;
  loading: boolean;
  roomToEnter: string;
  status: string;
};