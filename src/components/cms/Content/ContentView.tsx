import React from 'react';

// spreading on DOM elements is most likely an anti-pattern

function parseContent(contentItem: IDataContentItem) {
  const elements: any = {
    "h1": <h1 {...contentItem.attributes}></h1>,
    "p": <p></p>,
  };
  const element = elements[contentItem.element];
}

export function ContentView({
  oneColumnATheme,
  dataContentItems
}: Props): JSX.Element {
  return (
    <div className={`content-view one-column-a ${oneColumnATheme}`}>
      {dataContentItems.map(
        (dataContentItem: IDataContentItem) => parseContent(dataContentItem)
      )}
    </div>
  );
}

interface Props {
  oneColumnATheme: string
  dataContentItems: IDataContentItem[]
}

interface IDataContentItem {
  key: string
  element: string
  attributes: object
}

const dataContentItems = [
  {
    key: "uuid/v4",
    element: "h1",
    attributes: {
      
    }
  },
  {
    key: "uuid/v4",
    element: "p",
    attributes: {

    }
  }
];