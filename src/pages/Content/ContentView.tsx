import React from 'react';
import { Node } from 'slate';

export function ContentView({
  contents,
  oneColumnATheme
}: Props): JSX.Element {
  return (
    <div className={`content one-column-a ${oneColumnATheme}`}>
      {/*render them*/}
      howdy
    </div>
  );
}

type Props = {
  contents: Node[];
  oneColumnATheme: string;
};