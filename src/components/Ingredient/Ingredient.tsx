import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { IIngredient } from '../../store/data/types';
import { LoaderSpinner } from '../LoaderSpinner/LoaderSpinner';
import { IngredientView } from './IngredientView';

export function Ingredient({
  dataIngredients,
  dataMyPrivateIngredients,
  twoColumnBTheme
}: Props): JSX.Element {
  const history = useHistory();
  const { id } = useParams();

  const [ ingredient, setIngredient ] = useState<IIngredient | null>(null);

  useEffect(() => {
    if (!id) {
      history.push('/home');
      return;
    }

    const localIngredient = (
      dataIngredients.find(i => i.id == Number(id)) ||
      dataMyPrivateIngredients.find(i => i.id == Number(id))
    );

    if (!localIngredient) {
      history.push('/home');
      return;
    }
    
    setIngredient(localIngredient);
  }, []);

  return !ingredient
  ? <LoaderSpinner />
  : (
    <IngredientView
      dataMyPrivateIngredients={dataMyPrivateIngredients}
      ingredient={ingredient}
      twoColumnBTheme={twoColumnBTheme}
    />
  );
}

interface RootState {
  data: {
    myPrivateIngredients: IIngredient[];
    officialIngredients: IIngredient[];
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  twoColumnBTheme: string;
};

const mapStateToProps = (state: RootState) => ({
  dataIngredients: state.data.officialIngredients,
  dataMyPrivateIngredients: state.data.myPrivateIngredients
});

const connector = connect(mapStateToProps, {});

export default connector(Ingredient);