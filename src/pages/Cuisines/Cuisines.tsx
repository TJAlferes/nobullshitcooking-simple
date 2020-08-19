import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';

import { ICuisine } from '../../store/data/types';
import './cuisines.css';

export function Cuisines({
  dataCuisines,
  oneColumnATheme
}: Props): JSX.Element {
  const alphabetizedCuisines = dataCuisines
  .reduce((acc: AlphabetizedCuisines, cuisine) => {
    const firstLetter = cuisine['nation'][0].toLocaleUpperCase();

    if (acc[firstLetter]) acc[firstLetter].push(cuisine['nation']);
    else acc[firstLetter] = [cuisine['nation']];

    return acc;
  }, {});

  const letters = Object.keys(alphabetizedCuisines);
  const nations: any[] = Object.values(alphabetizedCuisines);

  let i = 0;

  return (
    <div className={`cuisines one-column-a ${oneColumnATheme}`}>
      <h1 className="cuisine-nav-title">Cuisines</h1>

      {letters.length && letters.map((letter, index) => (
        <div className="cuisine-nav-group" key={letter}>
          <div className="cuisine-nav-letter">{letter}</div>
          {nations[index].map((nation: string) => {
            i++;
            return (
              <div className="cuisine-nav-nation" key={nation}>
                <Link
                  className="cuisine-nav-nation-link"
                  to={`/food/cuisines/${dataCuisines[i - 1].id}`}
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
    cuisines: ICuisine[];
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  oneColumnATheme: string;
};

type AlphabetizedCuisines = {
  [index: string]: any;
};

const mapStateToProps = (state: RootState) => ({
  dataCuisines: state.data.cuisines
});

const connector = connect(mapStateToProps);

export default connector(Cuisines);