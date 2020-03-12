import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

export default function LoaderButton({
  className,
  type,
  name,
  id,
  text,
  loadingText,
  isLoading,
  onClick,
  onKeyUp,
  disabled = false
}: InferProps<typeof LoaderButton.propTypes>): JSX.Element {
  return (
    <button
      type={type}
      name={name}
      id={id}
      className={`LoaderButton ${className}`}
      onClick={(e) => onClick(e)}
      onKeyUp={(e) => onKeyUp(e)}
      disabled={disabled || isLoading}
    >
      {!isLoading ? text : loadingText}
    </button>
  );
};

LoaderButton.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.any,  // TO DO: fix this
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  loadingText: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};