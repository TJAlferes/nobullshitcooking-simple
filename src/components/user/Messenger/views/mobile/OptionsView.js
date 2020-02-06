import React from 'react';

const OptionsView = ({
  loading,
  status,
  channel,
  roomToEnter,
  handleRoomInputChange,
  handleChannelChange,
  handleConnect,
  handleDisconnect
}) => {
  // Alternative approach. Outside of JSX. Does this actually have any benefit?
  const StatusButton = () => status === "Connected"
  ? (
    <button
      className="mobile-messenger__connect-disconnect"
      onClick={handleDisconnect}
      disabled={loading}
    >
      Disconnect
    </button>
  )
  : (
    <button
      className="mobile-messenger__connect-disconnect"
      onClick={handleConnect}
      disabled={loading}
    >
      Connect
    </button>
  );

  return (
    <div className="mobile-messenger__view">
      <div className="mobile-messenger__connect-disconnect-container">
        <StatusButton />
      </div>

      <div className="mobile-messenger__current-container">
        <span className="mobile-messenger__channel-switch">
          Current Room:
        </span>
        <span className="mobile-messenger__channel-current">
          {channel}
        </span>
      </div>

      <div className="mobile-messenger__go-container">
        <span className="mobile-messenger__channel-label">
          Go To Room:
        </span>
        <input
          className="mobile-messenger__channel-input"
          type="text"
          name="channel-input"
          value={roomToEnter}
          onChange={handleRoomInputChange}
          disabled={(status !== "Connected") || loading}
        />
        <div className="mobile-messenger__channel-button-container">
          <button
            className="mobile-messenger__channel-button"
            onClick={handleChannelChange}
            disabled={(status !== "Connected") || loading}
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptionsView;