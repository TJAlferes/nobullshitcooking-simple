import React from 'react';

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
    <div className="messenger-room">

      <div className="messenger-connect-disconnect-outer">
        <div className="messenger-connect-disconnect-container">
          {
            status === "Connected"
            ? (
              <button
                className="messenger-connect-disconnect"
                disabled={loading}
                onClick={handleDisconnect}
              >
                Disconnect
              </button>
            )
            : (
              <button
                className="messenger-connect-disconnect"
                disabled={loading}
                onClick={handleConnect}
              >
                Connect
              </button>
            )
          }
        </div>
        <span className="messenger-connect-disconnect-mobile-spacer"></span>
      </div>

      <div className="messenger-current-container">
        <span className="messenger-channel-switch">Current Room:</span>
        <span className="messenger-channel-current">{channel}</span>
      </div>

      <div className="messenger-go-container">
        <span className="messenger-channel-label">Go To Room:</span>
        <input
          className="messenger-channel-input"
          disabled={(status !== "Connected") || loading}
          name="channel-input"
          onChange={handleRoomInputChange}
          type="text"
          value={roomToEnter}
        />
        <div className="messenger-channel-button-container">
          <button
            className="messenger-channel-button"
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