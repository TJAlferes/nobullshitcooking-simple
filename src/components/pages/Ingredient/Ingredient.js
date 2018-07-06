getIngredient = async (id) => {  // move id into Ingredient.js?
  try {
    const url = id ? `${endpoint}/${id}` : `${endpoint}`;
    const response = await axios.get(url);
    const ingredients = response.data;
    this.setState({ingredients});
  } catch (err) {
    console.error(err);
  }
}