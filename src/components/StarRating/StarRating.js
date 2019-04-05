import React, { useState } from 'react';

import Star from './Star';
import './starRating.css';

const StarRating = ({ onChange, rating, readOnly = false }) => {
  const [ override, setOverride ] = useState(null);
  return (
    <span className="star_rating">
      {[1, 2, 3, 4, 5].map(i =>
        <Star
          key={i}
          index={i}
          full={i <= (override || rating || 0)}
          setOverride={setOverride}
          setRating={onChange}
          readOnly={readOnly}
        />
      )}
    </span>
  );
};

export default StarRating;