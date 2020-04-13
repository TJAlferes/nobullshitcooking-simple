import React from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import { ICuisine } from '../../../../store/data/types';
import './cuisines.css';

export function Cuisines({ oneColumnATheme, cuisines }: Props): JSX.Element {
  const alphabetized = cuisines.reduce((acc, cuisine) => {
    const firstLetter = cuisine['cuisine_nation'][0].toLocaleUpperCase();
    if (acc[firstLetter]) acc[firstLetter].push(cuisine['cuisine_nation']);
    else acc[firstLetter] = [cuisine['cuisine_nation']];
    return acc;
  }, {});

  const letters = Object.keys(alphabetized);
  const nations = Object.values(alphabetized).map(val => String(val));
  let i = 0;

  return (
    <div className={`cuisines one-column-a ${oneColumnATheme}`}>
      <h1 className="cuisine-nav-title">Cuisines</h1>

      {letters.length && nations.length && letters.map((letter, index) => (
        <div className="cuisine-nav-group" key={letter}>
          <div className="cuisine-nav-letter">{letter}</div>
          {nations[index].map((nation: string) => {
            i++;
            return (
              <div className="cuisine-nav-nation" key={nation}>
                <Link
                  className="cuisine-nav-nation-link"
                  to={`/food/cuisines/${cuisines[i - 1].cuisine_id}`}
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
}

interface RootState {
  data: {
    cuisines: ICuisine[]
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  oneColumnATheme: string
};

const mapStateToProps = (state: RootState) => ({cuisines: state.data.cuisines});

const connector = connect(mapStateToProps);

export default connector(Cuisines);