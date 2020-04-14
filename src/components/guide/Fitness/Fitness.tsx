import React from 'react';
import { Link } from 'react-router-dom';

import './fitness.css';

const s3Path = 'https://s3.amazonaws.com/nobsc-images-01/content/fitness/';

function navItem(path: string, title: string, image: string) {
  return (
    <div className="nav-grid-a-item">
      <Link to={`${path}`}>
        <span className="nav-grid-a-item-text">{title}</span>
        <img
          className="nav-grid-a-item-image"
          src={`${s3Path}${image}.png`}
        />
      </Link>
    </div>
  );
}

export function Fitness({
  oneColumnATheme,
  navGridATheme
}: Props): JSX.Element {
  return (
    <div className={`fitness one-column-a ${oneColumnATheme}`}>
      <h1>Fitness</h1>
      <div className={`nav-grid-a ${navGridATheme}`}>
        {navItem("/fitness/principles", "Principles", "principles")}
        {navItem("/fitness/exercises", "Exercises", "exercises")}
      </div>
    </div>
  );
}

interface Props {
  oneColumnATheme: string
  navGridATheme: string
}