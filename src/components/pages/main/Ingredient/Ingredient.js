import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';

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
    if (!id) history.push('/home');
    const localIngredient = (
      dataIngredients.find(ing => ing.ingredient_id == id) ||
      dataMyPrivateIngredients.find(ing => ing.ingredient_id == id)
    );
    if (localIngredient) {
      const localIngredientType = dataIngredientTypes.filter(
        ing => ing.ingredient_type_id == localIngredient.ingredient_type_id
      );
      localIngredient.ingredient_type_name = localIngredientType.ingredient_type_name;
      setIngredient(localIngredient);
    } else {
      history.push('/ingredients');
    }
  }, []);

  return (
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