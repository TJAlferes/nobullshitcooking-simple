import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createEditor, Editor, Node, Transforms } from 'slate';
import { Editable, Slate, useSlate, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import isHotKey from 'is-hotkey';

import { Button, Icon, Toolbar } from './components';

const HOTKEYS = {'mod+b': 'bold', 'mod+i': 'italic'};
const LIST_TYPES = ['numbered-list', 'bulleted-list'];
const initialValue = [
  {
    type: 'paragraph',
    children: [{text: 'A line of text in a paragraph.'}],
  }
];

function toggleBlock(editor, format) {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);
  Transforms.unwrapNodes(editor, {
    match: n => LIST_TYPES.includes(n.type),
    split: true
  });
  Transforms.setNodes(editor, {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format
  });
  if (!isActive && isList) {
    Transforms.wrapNodes(editor, {type: format, children: []});
  }
}

function toggleMark(editor, format) {
  const isActive = isMarkActive(editor, format);
  if (isActive) Editor.removeMark(editor, format);
  else Editor.addMark(editor, format, true);
}

function isBlockActive(editor, format) {
  const [ match ] = Editor.nodes(editor, {match: n => n.type === format});
  return !!match;
}

function isMarkActive(editor, format) {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
}

function Element({ attributes, children, element }) {
  switch (element.type) {
    case 'heading-one': return <h1 {...attributes}>{children}</h1>;
    case 'heading-two': return <h2 {...attributes}>{children}</h2>;
    case 'bulleted-list': return <ul {...attributes}>{children}</ul>;
    case 'list-item': return <li {...attributes}>{children}</li>;
  }
}

function Leaf({ attributes, children, leaf }) {
  if (leaf.bold) children = <strong>{children}</strong>;
  if (leaf.italic) children = <em>{children}</em>;
  return <span {...attributes}>{children}</span>;
}

function BlockButton({ format, icon }) {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={(e: React.MouseEvent) => {
        e.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
}

function MarkButton({ format, icon }) {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(e: React.MouseEvent) => {
        e.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
}

export default function NewContent(): JSX.Element {
  const [ value, setValue ] = useState<Node[]>(initialValue);

  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const renderElement = useCallback(props => <Element {...props} />, []);

  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    for (const hotkey in HOTKEYS) {
      if (!isHotKey(hotkey, e.key)) return;
      e.preventDefault();
      const mark = HOTKEYS[hotkey];  // ?
      toggleMark(editor, mark);
    }
  };

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={value => setValue(value)}
    >
      <Toolbar>
      </Toolbar>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        spellCheck
        autoFocus
        onKeyDown={handleKeyDown}
      />
    </Slate>
  );
}

