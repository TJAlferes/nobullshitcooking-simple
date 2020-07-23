import React from 'react';

export function OptionsView({
  loading,
  status,
  channel,
  roomToEnter,
  handleRoomInputChange,
  handleChannelChange,
  handleConnect,
  handleDisconnect
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
                onClick={handleDisconnect}
                disabled={loading}
              >
                Disconnect
              </button>
            )
            : (
              <button
                className="messenger-connect-disconnect"
                onClick={handleConnect}
                disabled={loading}
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
          type="text"
          name="channel-input"
          value={roomToEnter}
          onChange={handleRoomInputChange}
          disabled={(status !== "Connected") || loading}
        />
        <div className="messenger-channel-button-container">
          <button
            className="messenger-channel-button"
            onClick={handleChannelChange}
            disabled={(status !== "Connected") || loading}
          >
            Enter
          </button>
        </div>
      </div>
      
    </div>
  );
}

type Props = {
  loading: boolean;
  status: string;
  channel: string;
  roomToEnter: string;
  handleRoomInputChange(e: React.SyntheticEvent<EventTarget>): void;
  handleChannelChange(): void;
  handleConnect(): void;
  handleDisconnect(): void;
};