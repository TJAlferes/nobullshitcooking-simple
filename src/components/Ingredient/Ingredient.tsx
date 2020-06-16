import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { IIngredient } from '../../store/data/types';
import { LoaderSpinner } from '../LoaderSpinner/LoaderSpinner';
import { IngredientView } from './IngredientView';

export function Ingredient({
  twoColumnBTheme,
  dataIngredients,
  dataMyPrivateIngredients
}: Props): JSX.Element {
  const history = useHistory();
  const { id } = useParams();

  const [ ingredient, setIngredient ] = useState<IIngredient|null>(null);

  useEffect(() => {
    if (!id) {
      history.push('/home');
      return;
    }

    const localIngredient = (
      dataIngredients.find(ing => ing.ingredient_id == Number(id)) ||
      dataMyPrivateIngredients.find(ing => ing.ingredient_id == Number(id))
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
      twoColumnBTheme={twoColumnBTheme}
      ingredient={ingredient}
      dataMyPrivateIngredients={dataMyPrivateIngredients}
    />
  );
}

interface RootState {
  data: {
    ingredients: IIngredient[];
    myPrivateIngredients: IIngredient[];
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  twoColumnBTheme: string;
};

const mapStateToProps = (state: RootState) => ({
  dataIngredients: state.data.ingredients,
  dataMyPrivateIngredients: state.data.myPrivateIngredients
});

const connector = connect(mapStateToProps);

export default connector(Ingredient);