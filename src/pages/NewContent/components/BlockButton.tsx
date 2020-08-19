import React from 'react';
import { useSlate } from 'slate-react';

import { isBlockActive, toggleBlock } from '../helpers';
import { Button } from './Button';
import { Icon } from './Icon';

export function BlockButton({ format, icon }: Props) {
  const editor = useSlate();

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleBlock(editor, format);
  };

  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={handleMouseDown}
    >
      <Icon className="link-icon">{icon}</Icon>
    </Button>
  );
}

type Props = {
  format: string;
  icon: string;
};