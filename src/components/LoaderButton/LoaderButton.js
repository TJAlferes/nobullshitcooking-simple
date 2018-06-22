import React from 'react';

export default ({
  type,
  name,
  id,
  className,
  text,
  loadingText,
  isLoading,
  disabled = false
}) => (
  <button
    type={type}
    name={name}
    id={id}
    className={`LoaderButton ${className}`}
    text={text}
    disabled={disabled || isLoading}
  >
    {!isLoading ? text : loadingText}
  </button>
);