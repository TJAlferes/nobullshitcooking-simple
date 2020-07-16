import React, { forwardRef, FunctionComponent, Ref } from 'react';

export const Button: FunctionComponent<Props> = forwardRef(
  (
    {
      //className,
      active,
      //reversed,
      onMouseDown,
      ...props
    },
    ref: Ref<HTMLSpanElement>
  ) => (
    <span
      {...props}
      ref={ref}
      //className={className}
      style={{
        cursor: "pointer",
        /*color: `${
          reversed
          ? active
            ? 'white'
            : '#aaa'
          : active
          ? 'black'
          : '#ccc'
        }`*/
      }}
    />
  )
);

type Props = {
  //className: string;
  active?: boolean;
  //reversed: boolean;
  onMouseDown(e: React.MouseEvent): void;
};