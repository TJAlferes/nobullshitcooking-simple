import React from 'react';
import { useSlate } from 'slate-react';

import { isLinkActive, wrapLink } from '../helpers';
import { Button } from './Button';
import { Icon } from './Icon';

export function LinkButton() {
  const editor = useSlate();

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = window.prompt('Enter the URL of the link:');  // change
    if (!url) return;
    if (editor.selection) wrapLink(editor, url);
  };

  return (
    <Button
      active={isLinkActive(editor)}
      onMouseDown={handleMouseDown}
    >
      <Icon className="link-icon">link</Icon>
    </Button>
  );
}