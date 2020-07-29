import React from 'react';
import { Node } from 'slate';

export function ContentView({
  oneColumnATheme,
  contents
}: Props): JSX.Element {
  return (
    <div className={`content one-column-a ${oneColumnATheme}`}>
      {/*render them*/}
      howdy
    </div>
  );
}

type Props = {
  oneColumnATheme: string;
  contents: Node[];
};