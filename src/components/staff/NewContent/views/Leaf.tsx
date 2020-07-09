import React, { FunctionComponent } from 'react';

export const Leaf: FunctionComponent<Props> = ({
  attributes,
  children,
  leaf
}) => {
  if (leaf.bold) children = <strong>{children}</strong>;
  if (leaf.italic) children = <em>{children}</em>;
  return <span {...attributes}>{children}</span>;
};

type Props = {
  attributes: any;
  children: any;
  leaf: any;
};