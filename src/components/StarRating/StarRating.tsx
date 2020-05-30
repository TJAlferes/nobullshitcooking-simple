import React, { useState } from 'react';

import { Star } from './Star';
import './starRating.css';

export function StarRating ({
  onChange,
  rating,
  readOnly = false
}: Props): JSX.Element {
  const [ override, setOverride ] = useState<number|null>(null);

  return (
    <span className="star-rating">
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
}

type Props = {
  onChange(): void;  // change
  rating: number;
  readOnly: boolean;
};