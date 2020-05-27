import React, { forwardRef } from 'react';

export const Button = forwardRef(
  ({ className, active, reversed, ...props }, ref) => (
    <span
      {...props}
      ref={ref}
      className={className}
      style={{
        cursor: "pointer",
        color: `${
          reversed
          ? active
            ? 'white'
            : '#aaa'
          : active
          ? 'black'
          : '#ccc'
        }`
      }}
    />
  )
);