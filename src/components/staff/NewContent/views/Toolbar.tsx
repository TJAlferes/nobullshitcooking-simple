import React, { forwardRef, FunctionComponent, Ref } from 'react';

export const Toolbar: FunctionComponent<Props> = forwardRef(
  (
    {
      className,
      ...props
    },
    ref: Ref<HTMLDivElement>
  ) => (
    <div
      {...props}
      ref={ref}
      className={className}
      style={{
        position: "relative",
        padding: "1px 18px 17px",
        margin: "0 -20px",
        borderBottom: "2px solid #eee",
        marginBottom: "20px",
        /*& > * {
          display: inline-block;
        },
        & > * + * {
          margin-left: 15px;
        }*/
      }}
    />
  )
);

type Props = {
  className: string;
};