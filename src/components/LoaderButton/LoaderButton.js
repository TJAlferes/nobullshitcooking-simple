import React from 'react';

export default ({
  type,
  name,
  id,
  className,
  text,
  loadingText,
  isLoading,
  onClick,
  onKeyUp,
  disabled = false
}) => (
  <button
    type={type}
    name={name}
    id={id}
    className={`LoaderButton ${className}`}
    text={text}
    onClick={(e) => onClick(e)}
    onKeyUp={(e) => onKeyUp(e)}
    disabled={disabled || isLoading}
  >
    {!isLoading ? text : loadingText}
  </button>
);