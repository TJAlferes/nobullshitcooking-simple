import React from 'react';

import { IContentType } from '../../../store/data/types';

export default function ContentTypes({ contentTypes }: Props): JSX.Element {
  return (
    <div className="cms-content-types">
      {contentTypes.map((contentType: any) => <div>{contentType}</div>)}
    </div>
  );
}

type Props = {
  contentTypes: IContentType[];
};