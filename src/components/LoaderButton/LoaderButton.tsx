import React from 'react';

export function LoaderButton({
  className,
  name,
  id,
  text,
  loadingText,
  isLoading,
  onClick,
  onKeyUp = (e: React.KeyboardEvent) => {},
  disabled = false
}: Props): JSX.Element {
  return (
    <button
      type="button"
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

type Props = {
  className: string;
  name: string;
  id: string;
  text: string;
  loadingText: string;
  isLoading: boolean;
  onClick(e?: React.MouseEvent): void;
  onKeyUp?(e: React.KeyboardEvent): void;
  disabled?: boolean;
};