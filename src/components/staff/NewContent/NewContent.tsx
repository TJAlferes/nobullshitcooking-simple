import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createEditor, Node } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import isHotKey from 'is-hotkey';

import {
  BlockButton,
  Element,
  InsertImageButton,
  Leaf,
  LinkButton,
  MarkButton,
  Toolbar
} from './views/index';
import { toggleMark, withImages, withLinks } from './helpers';

const HOTKEYS: {
  [index: string]: any;
  'mod+b': string;
  'mod+i': string;
} = {
  'mod+b': 'bold',
  'mod+i': 'italic'
};

const initialValue = localStorage.getItem('newContent')
? JSON.parse(localStorage.getItem('newContent') as string)
: [{type: 'paragraph', children: [{text: 'COOK EAT WIN REPEAT'}]}];  // use redux

export default function NewContent(): JSX.Element {
  const [ value, setValue ] = useState<Node[]>(initialValue);
  
  const editor = useMemo(
    () => withHistory(withImages(withLinks(withReact(createEditor())))),
    []
  );

  const renderElement = useCallback(props => <Element {...props} />, []);

  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  const handleChange = (value: Node[]) => {
    setValue(value);
    //localStorage.setItem('newContent', JSON.stringify(value));  // use redux
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    for (const hotkey in HOTKEYS) {
      if (!isHotKey(hotkey)(e as unknown as KeyboardEvent)) continue;
      e.preventDefault();
      toggleMark(editor, HOTKEYS[hotkey]);
    }
  };

  return (
    <div className="new-content">
      <h1 className="new-content__heading">New Content</h1>
      <Slate
        editor={editor}
        value={value}
        onChange={handleChange}
      >
        <Toolbar className="toolbar">
          <MarkButton format="bold" icon="bold" />
          <MarkButton format="italic" icon="italic" />
          <BlockButton format="heading-one" icon="h1" />
          <BlockButton format="heading-two" icon="h2" />
          <LinkButton />
          <InsertImageButton />
        </Toolbar>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          spellCheck
          autoFocus
          onKeyDown={handleKeyDown}
          placeholder="COOK EAT WIN REPEAT"
        />
      </Slate>
    </div>
  );
}

//type Props = {};