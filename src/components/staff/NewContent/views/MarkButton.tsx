import React from 'react';
import { useSlate } from 'slate-react';

import { isMarkActive, toggleMark } from '../helpers';
import { Button } from './Button';
import { Icon } from './Icon';

export function MarkButton({ format, icon }: Props) {
  const editor = useSlate();

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleMark(editor, format);
  };
  
  return (
    <Button
      active={isMarkActive(editor, format)}
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