import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './ingredients.css';

let endpoint;
if (process.env.NODE_ENV === "production") {
  endpoint = 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com';
} else {
  endpoint = 'http://localhost:3003';
}

const Ingredients = props => {
  const [ ingredients, setIngredients ] = useState([]);
  const [ dataIngredientTypes, setDataIngredientTypes ] = useState([]);
  const [ pages, setPages ] = useState(1);
  const [ starting, setStarting ] = useState(0);
  const [
    checkedIngredientTypesFilters,
    setCheckedIngredientTypesFilters
  ] = useState({
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
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false
  });

  useEffect(() => {
    const fetchDataIngredientTypes = async () => {
      const res = await axios.get(`${endpoint}/ingredient-type`);
      setDataIngredientTypes(res.data);
    };
    fetchDataIngredientTypes();
    if (props.ingredientTypesPreFilter) {
      //setCheckedIngredientTypesFilters();
    } else {
      getIngredients();
    }
  }, []);

  useEffect(() => {
    getIngredients();
  }, [checkedIngredientTypesFilters]);

  const getIngredients = async (startingAt = 0) => {
    try {
      const res = await axios.post(`${endpoint}/ingredient`, {
        types: getCheckedIngredientTypesFilters(),
        start: startingAt
      });
      const { rows, pages, starting } = res.data;
      setIngredients(rows);
      setPages(pages);
      setStarting(starting);
    } catch (err) {
      console.error(err);
    }
  }

  const getCheckedIngredientTypesFilters = () => {
    let checkedIngredientTypes = [];
    Object.entries(checkedIngredientTypesFilters).forEach(([key, value]) => {
      if (value === true) checkedIngredientTypes.push(Number(key));
    });
    return checkedIngredientTypes;
  }

  const handleIngredientTypesFilterChange = async (e) => {
    const id = e.target.id;
    await setCheckedIngredientTypesFilters(prevState => ({
      ...prevState,
      [id]: !prevState[[id]]
    }));
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
            onClick={() => getIngredients(startingAt)}
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
              onClick={() => getIngredients(startingAtPrev)}
            >
              Prev
            </span>
          }
          {paginationNumbers()}
          {
            (currentPage != pages) &&
            <span
              className="page_nav"
              onClick={() => getIngredients(startingAtNext)}
            >
              Next
            </span>
          }
        </span>
      </div>
    );
    return paginationLinks;
  }

  return (
    <div>

      <div id="page">

        <div id="page_col_left">

          <div id="list_header"><h1>Ingredients</h1></div>

          <div id="filters">
            <form
              id="itid"
              name="itid"
              onChange={e => handleIngredientTypesFilterChange(e)}
            >
              <span id="filter_title"><b>Filter by:</b></span>
              <div>
                <p className="filter_type"><b>Ingredient type</b></p>
                {dataIngredientTypes.map(ingredientType => (
                  <span
                    className="filter_span"
                    key={ingredientType.ingredient_type_id}
                  >
                    <input
                      type="checkbox"
                      id={ingredientType.ingredient_type_id}
                    />
                    <label className="filter_label">
                      {ingredientType.ingredient_type_name}
                    </label>
                  </span>
                ))}
              </div>
            </form>
          </div>

          {(pages > 1) && paginate()}

          <div>
            {ingredients.map(ingredient => (
              <div className="ingredient" key={ingredient.ingredient_id}>
                <Link
                  className="ingredient_link"
                  to={`/food/ingredient/${ingredient.ingredient_id}`}
                >
                  <div className="ingredient_name">
                    {ingredient.ingredient_name}
                  </div>
                  {/* TO DO: change to thumbnail image */}
                  <img
                    className="ingredient_thumbnail"
                    src={`https://s3.amazonaws.com/nobsc-images-01/ingredients/${ingredient.ingredient_image}.jpg`}
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

export default Ingredients;