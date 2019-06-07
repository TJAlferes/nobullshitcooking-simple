import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './recipes.css';

let endpoint;
if (process.env.NODE_ENV === "production") {
  endpoint = 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com';
} else {
  endpoint = 'http://localhost:3003';
}

const Recipes = props => {
  const [ recipes, setRecipes ] = useState([]);
  const [ dataRecipeTypes, setDataRecipeTypes ] = useState([]);
  const [ dataCuisines, setDataCuisines ] = useState([]);
  const [ pages, setPages ] = useState(1);
  const [ starting, setStarting ] = useState(0);
  const [ checkedRecipeTypesFilters, setCheckedRecipeTypesFilters ] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false
  });
  const [ checkedCuisinesFilters, setCheckedCuisinesFilters ] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false
  });

  useEffect(() => {
    const fetchDataRecipeTypes = async () => {
      const res = await axios.get(`${endpoint}/recipe-type`);
      setDataRecipeTypes(res.data);
    };
    const fetchDataCuisines = async () => {
      const res = await axios.get(`${endpoint}/cuisine`);
      setDataCuisines(res.data);
    };
    fetchDataRecipeTypes();
    fetchDataCuisines();
    //getRecipes();
    //if (props.recipeTypesPreFilter) setCheckedRecipeTypesFilters()
    //if (props.cuisinesPreFilter) setCheckedCuisinesFilters
  }, []);

  useEffect(() => {
    getRecipes();
  });

  const getRecipes = async (startingAt = 0) => {
    try {
      const url = `${endpoint}/recipe`;
      const res = await axios.post(`${endpoint}/recipe`, {
        types: getCheckedRecipeTypesFilters(),
        cuisines: getCheckedCuisinesFilters(),
        start: startingAt
      });
      const { rows, pages, starting } = res.data;
      setRecipes(rows);
      setPages(pages);
      setStarting(starting);
    } catch (err) {
      console.error(err);  // change me
    }
  }

  const getCheckedRecipeTypesFilters = () => {
    let checkedRecipesTypes = [];
    Object.entries(checkedRecipeTypesFilters).forEach(([key, value]) => {
      if (value === true) checkedRecipesTypes.push(Number(key));
    });
    return checkedRecipesTypes;
  }

  const getCheckedCuisinesFilters = () => {
    let checkedCuisines = [];
    Object.entries(checkedCuisinesFilters).forEach(([key, value]) => {
      if (value === true) checkedCuisines.push(Number(key));
    });
    return checkedCuisines;
  }

  const handleRecipeTypesFilterChange = async (e) => {
    try {
      const id = e.target.id;
      await setCheckedRecipeTypesFilters(prevState => ({
        ...prevState,
        checkedRecipeTypesFilters: {
          ...prevState.checkedRecipeTypesFilters,
          [id]: !prevState.checkedRecipeTypesFilters[[id]]
        }
      }));
      getRecipes();
    } catch (err) {
      console.error(err);
    }
  }

  const handleCuisinesFilterChange = async (e) => {
    try {
      const id = e.target.id;
      await setCheckedCuisinesFilters(prevState => ({
        ...prevState,
        checkedCuisinesFilters: {
          ...prevState.checkedCuisinesFilters,
          [id]: !prevState.checkedCuisinesFilters[[id]]
        }
      }));
      getRecipes();
    } catch (err) {
      console.error(err);
    }
  }

  const paginationNumbers = () => {
    const display = 25;
    const currentPage = Math.floor((starting / display) + 1);

    let numbers = [];
    
    for (let i = 1; i <= pages; i++) {
      let startingAt = (display * (i - 1));
      if (i != currentPage) {
        numbers.push(
          <span
            className="page_number"
            onClick={() => getRecipes(startingAt)}
            key={i}
          >
            {i}
          </span>
        );
      } else {
        numbers.push(<span className="current_page_number" key={i}>{i}</span>);
      }
    }

    return numbers;
  }

  const paginate = () => {
    const display = 25;
    const currentPage = Math.floor((starting / display) + 1);
    const startingAtPrev = (starting == 0) ? starting : (starting - display);
    const startingAtNext = (starting + display);

    const paginationLinks = (
      <div className="page_links">
        <span className="page_numbers">
          {
            (currentPage != 1) &&
            <span
              className="page_nav"
              onClick={() => getRecipes(startingAtPrev)}
            >
              Prev
            </span>
          }
          {paginationNumbers()}
          {
            (currentPage != pages) &&
            <span
              className="page_nav"
              onClick={() => getRecipes(startingAtNext)}
            >
              Next
            </span>
          }
        </span>
      </div>
    );

    return paginationLinks;
  }

  return(
    <div>
      <div id="page">

        <div id="page_col_left">

          <div id="list_header"><h1>Recipes</h1></div>

          <div id="filters">

            <form
              id="rtid"
              name="rtid"
              onChange={e => handleRecipeTypesFilterChange(e)}
            >
              <span id="filter_title"><b>Filter by:</b></span>
              <div>
                <p className="filter_type"><b>Recipe type</b></p>
                {dataRecipeTypes.map(recipeType => (
                  <span className="filter_span" key={recipeType.recipe_type_id}>
                    <input type="checkbox" id={recipeType.recipe_type_id} />
                    <label className="filter_label">{recipeType.recipe_type_name}</label>
                  </span>
                ))}
              </div>
            </form>

            <form
              id="cid"
              name="cid"
              onChange={e => handleCuisinesFilterChange(e)}
            >
              <span id="filter_title"><b>Filter by:</b></span>
              <div>
                <p className="filter_type"><b>Cuisine</b></p>
                {dataCuisines.map(cuisine => (
                  <span className="filter_span" key={cuisine.cuisine_id}>
                    <input type="checkbox" id={cuisine.cuisine_id}/>
                    <label className="filter_label">{cuisine.cuisine_name}</label>
                  </span>
                ))}
              </div>
            </form>

          </div>

          {(pages > 1) && paginate()}

          <div>
            {recipes.map(recipe => (
              <div className="recipe" key={recipe.recipe_id}>
                <Link
                  className="recipe_link"
                  to={`/food/recipe/${recipe.recipe_id}`}
                >
                  <div className="recipe_name">{recipe.recipe_name}</div>
                  {/* TO DO: change to thumbnail image */}
                  <img
                    className="recipe_thumbnail"
                    src={`https://s3.amazonaws.com/nobsc-images-01/recipes/recipe/${recipe.recipe_image}.jpg`}
                  />
                </Link>
              </div>
            ))}
          </div>

          {(pages > 1) && paginate()}

        </div>

        <div id="page_col_right">
        </div>

      </div>
    </div>
  );
}

export default Recipes;