import React, { forwardRef } from 'react';

export const Icon = forwardRef(
  ({ className, ...props }, ref) => (
    <span
      {...props}
      ref={ref}
      className={className}
      style={{fontSize: "18px", verticalAlign: "text-bottom"}}
    />
  )
);