import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

import {
  NOBSCBackendAPIEndpointOne
} from '../../config/NOBSCBackendAPIEndpointOne';
import { LoaderSpinner } from '../LoaderSpinner/LoaderSpinner';
import { ContentView, IContentItem } from './ContentView';

const endpoint = NOBSCBackendAPIEndpointOne;

export default function Content({ oneColumnATheme }: Props): JSX.Element {
  const history = useHistory();
  const { id } = useParams();

  const [ contents, setContents ] = useState<IContentItem[]>();

  useEffect(() => {
    if (!id) {
      history.push('/home');
      return;
    }

    const getContents = async (id: number) => {
      const res = await axios.get(`${endpoint}/cms/content/${id}`);
      if (res.data.contents) setContents(res.data.contents);
    };

    if (id) getContents(Number(id));
  }, []);

  return !contents
  ? <LoaderSpinner />
  : (
    <ContentView
      oneColumnATheme={oneColumnATheme}
      contents={contents}
    />
  );
}

interface Props {
  oneColumnATheme: string
}

const res = {
  data: {
    content: {
      content_id: 987,
      content_type_id: 18,
      content_items: [
        {
          index: 0,
          key: "uuid/v4",
          element: "h1",
          attributes: {
            className: "content-h1"
          },
          children: "Appetizers"
        },
        {
          index: 1,
          key: "uuid/v4",
          element: "p",
          attributes: {
            className: "content-p"
          },
          children: "Appetizers are great for..."
        }
      ]
    }
  }
};