import React, { forwardRef, FunctionComponent, Ref } from 'react';

export const Icon: FunctionComponent<Props> = forwardRef(
  (
    {
      className,
      ...props
    },
    ref: Ref<HTMLSpanElement>
  ) => (
    <span
      {...props}
      ref={ref}
      className={className}
      style={{fontSize: "18px", verticalAlign: "text-bottom"}}
    />
  )
);

type Props = {
  className: string;
};