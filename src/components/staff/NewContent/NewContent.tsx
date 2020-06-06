import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { createEditor, Editor, Node, Range, Transforms } from 'slate';
import { withHistory } from 'slate-history';
import {
  Editable,
  ReactEditor,
  Slate,
  useEditor,
  useFocused,
  useSelected,
  useSlate,
  withReact
} from 'slate-react';
const imageExtensions = require('image-extensions');
import isHotKey from 'is-hotkey';
import isUrl from 'is-url';

import { Button} from './views/Button';
import { Icon } from './views/Icon';
import { Toolbar } from './views/Toolbar';

const HOTKEYS: IHotKeys = {'mod+b': 'bold', 'mod+i': 'italic'};
const LIST_TYPES = ['numbered-list', 'bulleted-list'];
// put in redux? use helpers?
const initialValue = localStorage.getItem('newContent')
? JSON.parse(localStorage.getItem('newContent') as string)
: [
  {
    type: 'paragraph',
    children: [{text: 'A line of text in a paragraph.'}],
  }
];

// =============================================================================

function insertImage(editor: ReactEditor, url: string|ArrayBuffer|null) {
  Transforms.insertNodes(editor, {type: "image", url, children: [{text: ""}]});
}

function insertLink(editor: ReactEditor, url: string|ArrayBuffer|null) {
  if (editor.selection) wrapLink(editor, url);
}



function isBlockActive(editor: ReactEditor, format: string) {
  const [ match ] = Editor.nodes(editor, {match: n => n.type === format});
  return !!match;
}

function isImageUrl(url: string) {
  if (!url) return false;
  if (!isUrl(url)) return false;
  const ext = new URL(url).pathname.split('.').pop();
  return imageExtensions.includes(ext);
}

function isLinkActive(editor: ReactEditor) {
  const [ link ] = Editor.nodes(editor, {match: n => n.type === "link"});
  return !!link;
}

function isMarkActive(editor: ReactEditor, format: string) {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
}



function toggleBlock(editor: ReactEditor, format: string) {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);
  Transforms.unwrapNodes(editor, {
    match: n => typeof n.type === "string" && LIST_TYPES.includes(n.type),
    split: true
  });
  Transforms.setNodes(editor, {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format
  });
  if (!isActive && isList) {
    Transforms.wrapNodes(editor, {type: format, children: []});
  }
}

function toggleMark(editor: ReactEditor, format: string) {
  const isActive = isMarkActive(editor, format);
  if (isActive) Editor.removeMark(editor, format);
  else Editor.addMark(editor, format, true);
}



function withImages(editor: ReactEditor) {
  const insertData = (data: DataTransfer) => {
    const text = data.getData('text/plain');
    const { files } = data;
    if (files && files.length) {
      for (const file of files) {
        const reader = new FileReader();
        const [ mime ] = file.type.split('/');
        if (mime === 'image') {
          reader.addEventListener('load', () => {
            const url = reader.result;
            insertImage(editor, url);
          });
          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  editor.insertData = insertData;

  editor.isVoid = (element) =>
    element.type === "image" ? true : editor.isVoid(element);

  return editor;
}

function withLinks(editor: ReactEditor) {
  const insertData = (data: DataTransfer) => {
    const text = data.getData('text/plain');
    if (text && isUrl(text)) wrapLink(editor, text);
    else insertData(data);
  };

  editor.insertData = insertData;

  editor.isInline = (element) =>
    element.type === "link" ? true : editor.isInline(element);
  
  editor.insertText = (text) => {
    if (text && isUrl(text)) wrapLink(editor, text);
    else editor.insertText(text);
  };

  return editor;
}



function unwrapLink(editor: ReactEditor) {
  Transforms.unwrapNodes(editor, {match: n => n.type === "link"});
}

function wrapLink(editor: ReactEditor, url: string|ArrayBuffer|null) {
  if (isLinkActive(editor)) unwrapLink(editor);
  const { selection } = editor;
  const isCollapsed = selection && Range.isCollapsed(selection);
  if (isCollapsed) {
    const link = {type: "link", url, children: [{text: `${url}`}]};
    Transforms.insertNodes(editor, link);
  } else {
    const link = {type: "link", url, children: [{text: ""}]};
    Transforms.wrapNodes(editor, link, {split: true});
    Transforms.collapse(editor, {edge: 'end'});
  }
}

// =============================================================================

const ImageElement: FunctionComponent<ElementProps> = ({
  attributes,
  children,
  element
}) => {
  const selected = useSelected();
  const focused = useFocused();
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <img
          src={element.url}
          style={{
            display: "block",
            maxWidth: "100%",
            maxHeight: "20em",
            boxShadow: (selected && focused) ? "0 0 0 3px #B4D5FF" : "none"
          }}
        />
      </div>
      {children}
    </div>
  );
};

const Element: FunctionComponent<ElementProps> = ({
  attributes,
  children,
  element
}) => {
  switch (element.type) {
    case 'heading-one': return <h1 {...attributes}>{children}</h1>;
    case 'heading-two': return <h2 {...attributes}>{children}</h2>;
    case 'bulleted-list': return <ul {...attributes}>{children}</ul>;
    case 'list-item': return <li {...attributes}>{children}</li>;
    case 'link': return <a {...attributes} href={element.url}>{children}</a>;
    case 'image':
      return (
        <ImageElement
          {...attributes}
          children={children}
          element={element}
        />
      );
    default: return <p {...attributes}>{children}</p>;
  }
};

const Leaf: FunctionComponent<ElementProps> = ({
  attributes,
  children,
  leaf
}) => {
  if (leaf.bold) children = <strong>{children}</strong>;
  if (leaf.italic) children = <em>{children}</em>;
  return <span {...attributes}>{children}</span>;
};

// =============================================================================

function BlockButton({ format, icon }: ButtonProps) {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={(e: React.MouseEvent) => {
        e.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon className="link-icon">{icon}</Icon>
    </Button>
  );
}

function MarkButton({ format, icon }: ButtonProps) {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(e: React.MouseEvent) => {
        e.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon className="link-icon">{icon}</Icon>
    </Button>
  );
}

function InsertImageButton() {
  const editor = useEditor();
  return (
    <Button
      onMouseDown={(e: React.MouseEvent) => {
        e.preventDefault();
        const url = window.prompt('Enter the URL of the image:');  // change
        if (!url) return;
        insertImage(editor, url);
      }}
    >
      <Icon className="link-icon">image</Icon>
    </Button>
  );
}

function LinkButton() {
  const editor = useSlate();
  return (
    <Button
      active={isLinkActive(editor)}
      onMouseDown={(e: React.MouseEvent) => {
        e.preventDefault();
        const url = window.prompt('Enter the URL of the link:');  // change
        if (!url) return;
        insertLink(editor, url);
      }}
    >
      <Icon className="link-icon">link</Icon>
    </Button>
  );
}

// =============================================================================

export default function NewContent(): JSX.Element {
  const [ value, setValue ] = useState<Node[]>(initialValue);

  const editor = useMemo(
    () => withImages(withLinks(withHistory(withReact(createEditor())))),
    []
  );

  const renderElement = useCallback(props => <Element {...props} />, []);

  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  const handleChange = (value: Node[]) => {
    setValue(value);
    // put in redux? use helpers?
    localStorage.setItem('newContent', JSON.stringify(value));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    for (const hotkey in HOTKEYS) {
      if (!isHotKey(hotkey)) return;  //isHotKey(hotkey, e.key)
      e.preventDefault();
      toggleMark(editor, HOTKEYS[hotkey]);
    }
  };

  return (
    <div className="new-content">
      <h1 className="new-content-heading">New Content</h1>
      <Slate
        editor={editor}
        value={value}
        onChange={handleChange}
      >
        <Toolbar className="toolbar">
          <MarkButton format="bold" icon="format_bold" />
          <MarkButton format="italic" icon="format_italic" />
          <BlockButton format="heading-one" icon="looks_one" />
          <BlockButton format="heading-two" icon="looks_two" />
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

type ButtonProps = {
  format: string;
  icon: string;
};

type ElementProps = {
  attributes: any;
  element: any;
  leaf: any;
};

interface IHotKeys {
  [index: string]: any;
  'mod+b': string;
  'mod+i': string;
}