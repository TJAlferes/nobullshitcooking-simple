import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';

import LoaderSpinner from '../../../LoaderSpinner/LoaderSpinner';

import IngredientView from './IngredientView';

export const Ingredient = ({
  match,
  twoColumnBTheme,
  dataIngredientTypes,
  dataIngredients,
  dataMyPrivateIngredients
}) => {
  const history = useHistory();

  const [ ingredient, setIngredient ] = useState("");

  useEffect(() => {
    const { id } = match.params;
    
    if (!id) {
      history.push('/ingredients');
      return;
    }

    const localIngredient = (
      dataIngredients.find(ing => ing.ingredient_id == id) ||
      dataMyPrivateIngredients.find(ing => ing.ingredient_id == id)
    );

    if (!localIngredient) {
      history.push('/ingredients');
      return;
    }

    const localIngredientType = dataIngredientTypes
    .find(ing => ing.ingredient_type_id == localIngredient.ingredient_type_id);

    localIngredient.ingredient_type_name = localIngredientType.ingredient_type_name;
    
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

const mapStateToProps = state => ({
  dataIngredientTypes: state.data.ingredientTypes,
  dataIngredients: state.data.ingredients,
  dataMyPrivateIngredients: state.data.myPrivateIngredients
});

export default withRouter(connect(mapStateToProps)(Ingredient));