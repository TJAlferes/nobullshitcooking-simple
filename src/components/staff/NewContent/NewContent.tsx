import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createEditor, Node } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import isHotKey from 'is-hotkey';
import axios from 'axios';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
import {
  ICreatingContentInfo,
  IEditingContentInfo
} from '../../../store/staff/content/types';
import {
  staffCreateNewContent,
  staffEditContent
} from '../../../store/staff/content/actions';
import {
  BlockButton,
  Element,
  InsertImageButton,
  Leaf,
  LinkButton,
  MarkButton,
  Toolbar
} from './components/index';
import { toggleMark, withImages, withLinks } from './helpers';

const HOTKEYS: {
  [index: string]: any;
  'mod+b': string;
  'mod+i': string;
  //'mod+u': string;
  //'mod+`': string;
} = {
  'mod+b': 'bold',
  'mod+i': 'italic'
  //'mod+u': 'underline',
  //'mod+`': 'code',
};

const endpoint = NOBSCBackendAPIEndpointOne;

const initialValue = localStorage.getItem('newContent')
? JSON.parse(localStorage.getItem('newContent') as string)
: [{type: 'paragraph', children: [{text: 'COOK EAT WIN REPEAT'}]}];  // use redux

export default function NewContent({
  oneColumnATheme,
  editing,
  staffMessage,
  staffCreateNewContent,
  staffEditContent
}: Props): JSX.Element {
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
      e.preventDefault();  // required?
      toggleMark(editor, HOTKEYS[hotkey]);
    }
  };

  return (
    <div className={`new-content ${oneColumnATheme}`}>
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

interface RootState {
  staff: {
    message: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  oneColumnATheme: string;
  editing: boolean;
};

const mapStateToProps = (state: RootState) => ({
  staffMessage: state.staff.message
});

const mapDispatchToProps = {
staffCreateNewContent: (contentInfo: ICreatingContentInfo) =>
  staffCreateNewContent(contentInfo),
staffEditContent: (contentInfo: IEditingContentInfo) =>
  staffEditContent(contentInfo)
};

const connector = connect(mapStateToProps, mapDispatchToProps);