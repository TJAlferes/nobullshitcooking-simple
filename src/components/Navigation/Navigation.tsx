import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  NOBSCBackendAPIEndpointOne
} from '../../config/NOBSCBackendAPIEndpointOne';
import './navigation.css';

const endpoint = NOBSCBackendAPIEndpointOne;
const s3Path = 'https://s3.amazonaws.com/nobsc-images-01/content';

export default function Navigation({
  links,
  name,
  navGridATheme,
  oneColumnATheme,
  path
}: Props): JSX.Element {
  const [ contentLinks, setContentLinks ] =
    useState<IContentLink[] | null>(null);

  useEffect(() => {
    const getContentLinksByTypeName = async (name: string) => {
      const res = await axios.get(`${endpoint}/content/links/${name}`);

      if (res.data) setContentLinks(res.data);
    };

    if (!links) getContentLinksByTypeName(name);  // if it was a leaf node
  }, []);

  return (
    <div className={`cms-navigation one-column-a ${oneColumnATheme}`}>
      <h1>{name}</h1>
      <div className={`nav-grid-a ${navGridATheme}`}>
        {links && links.map((link: any) => (
          <div className="nav-grid-a-item" key={link.path}>
            <Link to={`${link.path}`}>
              <span className="nav-grid-a-item-text">{link.name}</span>
              {/*<img
                className="nav-grid-a-item-image"
                src={`${s3Path}/${link.category}/${link.image}`}
              />*/}
            </Link>
          </div>
        ))}
        {contentLinks && contentLinks.map((link: any) => (
          <div className="nav-grid-a-item" key={link.path}>
            <Link to={`${link.path}`}>
              <span className="nav-grid-a-item-text">{link.name}</span>
              {/*<img
                className="nav-grid-a-item-image"
                src={`${s3Path}/${link.category}/${link.image}`}
              />*/}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

//.png

type Props = {
  links: any[];
  name: string;
  navGridATheme: string;
  oneColumnATheme: string;
  path: string;
};

interface IContentLink {
  content_id: number;
  content_type_id: number;
  content_type_name: string;
  published: string;
  title: string;
}