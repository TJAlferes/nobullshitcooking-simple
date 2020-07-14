import { Editor, Range, Transforms } from 'slate';
import { ReactEditor } from 'slate-react';
const imageExtensions = require('image-extensions');
import isUrl from 'is-url';

const LIST_TYPES = ['numbered-list', 'bulleted-list'];

export function wrapLink(editor: ReactEditor, url: string|ArrayBuffer|null) {
  if (isLinkActive(editor)) {
    Transforms.unwrapNodes(editor, {match: n => n.type === "link"});
  }

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

export function isBlockActive(editor: ReactEditor, format: string) {
  const [ match ] = Editor.nodes(editor, {match: n => n.type === format});
  return !!match;
}

export function isLinkActive(editor: ReactEditor) {
  const [ link ] = Editor.nodes(editor, {match: n => n.type === "link"});
  return !!link;
}

export function isMarkActive(editor: ReactEditor, format: string) {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
}

export function toggleBlock(editor: ReactEditor, format: string) {
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

export function toggleMark(editor: ReactEditor, format: string) {
  const isActive = isMarkActive(editor, format);
  if (isActive) Editor.removeMark(editor, format);
  else Editor.addMark(editor, format, true);
}

export function withImages(editor: ReactEditor) {
  const { insertData, isVoid } = editor;

  editor.insertData = (data: DataTransfer) => {
    const isImageUrl = (url: string) => {
      if (!url) return false;
      if (!isUrl(url)) return false;
      const ext = new URL(url).pathname.split('.').pop();
      return imageExtensions.includes(ext);
    };

    const text = data.getData('text/plain');
    const { files } = data;

    if (files && files.length) {

      for (const file of files) {
        const [ mime ] = file.type.split('/');

        if (mime !== 'image') continue;

        const reader = new FileReader();

        reader.addEventListener('load', () => {
          Transforms.insertNodes(editor, {
            type: "image",
            url: reader.result,
            children: [{text: ""}]
          });
        });

        reader.readAsDataURL(file);
      }

    } else if (isImageUrl(text)) {

      Transforms.insertNodes(editor, {
        type: "image",
        url: text,
        children: [{text: ""}]
      });

    } else {

      insertData(data);

    }
  };

  editor.isVoid = element => element.type === "image" ? true : isVoid(element);

  return editor;
}

export function withLinks(editor: ReactEditor) {
  const { insertData, insertText, isInline } = editor;

  editor.insertData = (data: DataTransfer) => {
    const text = data.getData('text/plain');
    if (text && isUrl(text)) wrapLink(editor, text);
    else insertData(data);
  };

  editor.insertText = text => {
    if (text && isUrl(text)) wrapLink(editor, text);
    else insertText(text);
  };

  editor.isInline = element =>
    element.type === "link" ? true : isInline(element);

  return editor;
}