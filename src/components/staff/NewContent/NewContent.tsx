import React, { useEffect, useMemo, useState } from 'react';
import { createEditor, Node } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

export default function NewContent(): JSX.Element {
  const editor = useMemo(() => withReact(createEditor()), []);

  const [ value, setValue ] = useState<Node[]>([
    {
      type: 'paragraph',
      children: [{text: 'A line of text in a paragraph.'}],
    }
  ]);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={value => setValue(value)}
    >
      <Editable />
    </Slate>
  );
}