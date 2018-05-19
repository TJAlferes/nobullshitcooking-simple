import React from 'react';

import NotFoundDiv from './Styles';
import AngryFace404 from '../../assets/images/not-found-error/angry-face-404.png';

const notFound = () => {
  return (
    <NotFoundDiv>
      <h1>404 Not Found</h1>
      <img src={AngryFace404} />
    </NotFoundDiv>
  );
};

export default notFound;