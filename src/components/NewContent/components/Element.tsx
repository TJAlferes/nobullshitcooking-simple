import React, { FunctionComponent } from 'react';
import { useFocused, useSelected } from 'slate-react';

const ImageElement: FunctionComponent<Props> = ({
  attributes,
  children,
  element
}) => {
  const focused = useFocused();
  const selected = useSelected();
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

export const Element: FunctionComponent<Props> = ({
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
        <ImageElement {...attributes} children={children} element={element} />
      );
    default: return <p {...attributes}>{children}</p>;
  }
};

type Props = {
  attributes: any;
  children: any;
  element: any;
};