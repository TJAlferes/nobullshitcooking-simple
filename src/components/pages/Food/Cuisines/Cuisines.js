import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './cuisines.css';

//const s3Path = 'https://s3.amazonaws.com/nobsc-images-01/content/food/cuisines/';

// just do group by in sql?
function alphabetizeCuisines(cuisines) {
  if (cuisines.length === 0) return [];

  const alphabetizedCuisines = cuisines.reduce((acc, cuisine) => {
    const firstLetter = cuisine['cuisine_nation'][0].toLocaleUpperCase();
    if (acc[firstLetter]) acc[firstLetter].push(cuisine['cuisine_nation']);
    else acc[firstLetter] = [cuisine['cuisine_nation']];
    return acc;
  }, {});

  const letterKeys = Object.keys(alphabetizedCuisines);
  const nationValues = Object.values(alphabetizedCuisines);
  return {letterKeys, nationValues};
}

export const Cuisines = ({ oneColumnATheme, cuisines }) => {
  const [ letters, setLetters ] = useState([]);
  const [ nations, setNations ] = useState([]);

  useEffect(() => {
    const { letterKeys, nationValues } = alphabetizeCuisines(cuisines);
    setLetters(letterKeys);
    setNations(nationValues);
  }, []);

  let i = -1;

  return (
    <div className={`cuisines one-column-a ${oneColumnATheme}`}>
      <h1 className="cuisine-nav-title">Cuisines</h1>

      {letters.length && nations.length && letters.map((letter, index) => (
        <div className="cuisine-nav-group" key={letter}>
          <div className="cuisine-nav-letter">{letter}</div>
          {nations[index].map(nation => {
            i++;
            return (
              <div className="cuisine-nav-nation" key={nation}>
                <Link
                  className="cuisine-nav-nation-link"
                  to={`/food/cuisines/${cuisines[i].cuisine_id}`}
                >
                  {nation}
                </Link>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({cuisines: state.data.cuisines});

export default connect(mapStateToProps)(Cuisines);