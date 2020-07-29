import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Node } from 'slate';

import {
  NOBSCBackendAPIEndpointOne
} from '../../config/NOBSCBackendAPIEndpointOne';
import { LoaderSpinner } from '../LoaderSpinner/LoaderSpinner';
import { ContentView } from './ContentView';

const endpoint = NOBSCBackendAPIEndpointOne;

export default function Content({ oneColumnATheme }: Props): JSX.Element {
  const history = useHistory();
  const { id } = useParams();

  const [ contents, setContents ] = useState<Node[]|null>(null);

  useEffect(() => {
    if (!id) {
      history.push('/home');
      return;
    }

    const getContents = async (id: number) => {
      const res = await axios.get(`${endpoint}/content/${id}`);
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