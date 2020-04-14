import React from 'react';

// spreading on DOM elements is most likely an anti-pattern

function parseContent(contentItem: IContentItem) {
  const elements: any = {
    "h1": <h1 {...contentItem.attributes}>{contentItem.children}</h1>,
    "p": <p {...contentItem.attributes}>{contentItem.children}</p>,
  };
  const element = elements[contentItem.element];
  return element;
}

export function ContentView({
  oneColumnATheme,
  contents
}: Props): JSX.Element {
  return (
    <div className={`cms-content one-column-a ${oneColumnATheme}`}>
      {contents.map(
        (contentItem: IContentItem) => parseContent(contentItem)
      )}
    </div>
  );
}

interface Props {
  oneColumnATheme: string
  contents: IContentItem[]
}

export interface IContentItem {
  key: string
  index: number
  element: string
  attributes: object
  children: (object|string)
}