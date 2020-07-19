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
} from '../../config/NOBSCBackendAPIEndpointOne';
import {
  ICreatingContentInfo,
  IEditingContentInfo
} from '../../store/user/content/types';
import {
  staffCreateNewContent,
  staffEditContent
} from '../../store/staff/content/actions';
import {
  userCreateNewContent,
  userEditContent
} from '../../store/user/content/actions';
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
  staffIsAuthenticated,
  editing,
  staffMessage,
  userMessage,
  staffCreateNewContent,
  staffEditContent,
  userCreateNewContent,
  userEditContent
}: Props): JSX.Element {
  const history = useHistory();
  const { id } = useParams();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);

  const [ editingId, setEditingId ] = useState<number>(0);  // |null ?
  const [ value, setValue ] = useState<Node[]>(initialValue);

  useEffect(() => {
    const getExistingContentToEdit = async () => {
      if (!id || !staffIsAuthenticated) {
        history.push('/dashboard');
        return;
      }

      window.scrollTo(0,0);
      setLoading(true);

      const url = staffIsAuthenticated
      ? `${endpoint}/staff/content/edit`
      : `${endpoint}/user/content/edit`;

      setLoading(false);
    };

    if (editing) getExistingContentToEdit();
  }, []);

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      const message = staffIsAuthenticated ? staffMessage : userMessage;
      const redirectPath = staffIsAuthenticated
      ? '/staff-dashboard'
      : '/dashboard';

      if (message !== "") window.scrollTo(0,0);

      setFeedback(message);

      if (
        message === "Content created." ||
        message === "Content updated."
      ) {
        setTimeout(() => history.push(redirectPath), 3000);
      }

      setLoading(false);  // move?
    }

    return () => {
      isSubscribed = false;
    };
  }, [staffMessage, userMessage]);

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
  auth: {
    staffIsAuthenticated: boolean;
  };
  staff: {
    message: string;
  };
  user: {
    message: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  oneColumnATheme: string;
  editing: boolean;
};

const mapStateToProps = (state: RootState) => ({
  staffIsAuthenticated: state.auth.staffIsAuthenticated,
  staffMessage: state.staff.message,
  userMessage: state.user.message
});

const mapDispatchToProps = {
  staffCreateNewContent: (contentInfo: ICreatingContentInfo) =>
    staffCreateNewContent(contentInfo),
  staffEditContent: (contentInfo: IEditingContentInfo) =>
    staffEditContent(contentInfo),
  userCreateNewContent: (contentInfo: ICreatingContentInfo) =>
    userCreateNewContent(contentInfo),
  userEditContent: (contentInfo: IEditingContentInfo) =>
    userEditContent(contentInfo)
};

const connector = connect(mapStateToProps, mapDispatchToProps);