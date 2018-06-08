import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';

//import { getIngredientsStart } from '../../actions/ingredients';

import { Styles } from './Styles';

// remember you can place logic up here before the class too, as well as import it from elsewhere

// remember to properly separate component and container! (you can mix them at start, especially when app is small)

// which state should be local, which context, and which redux???

// for most of the old PHP $_GET['blah'] sessions, you'll use state(?)

//require 'starter.php';  // this will be cognito user session now (aws amplify)

/*

// >>>>>>>>>>>>>>>>>>>> start pagination logic
// set number of ingredients to list per page
let display = 25;

if (!isset(checkedTypes)) {
	checkedTypes = [];
	SELECT ingredient_type_id FROM nobsc_ingredient_types
	while ((row = $stmt->fetch()) !== false) {
		if (isset($_GET['itid' . row['ingredient_type_id']])) {
			checkedTypes[] = row['ingredient_type_id'];
		}
	}
}
let checkedTypesList = implode(", ", checkedTypes);

// determine how many total pages of ingredients there are without and with filters
if (isset($_GET['p']) && is_numeric($_GET['p'])) {
	let pages = $_GET['p'];
} else {
	// count ingredients, by selected type(s) if any
	if (count($checkedTypes) > 1) {
		let in  = str_repeat('?, ', count(checkedTypes) - 1) . '?';
		SELECT COUNT(*) FROM nobsc_ingredients WHERE ingredient_type_id IN (' + in + ')'
		$stmt = $conn->prepare($sql);
		$stmt->execute($checkedTypes);
		$records = $stmt->fetchColumn();
		
	} elseif (count(checkedTypes) == 1) {
		SELECT COUNT(*) FROM nobsc_ingredients WHERE ingredient_type_id = ?
		$stmt = $conn->prepare($sql);
		$stmt->execute($checkedTypes);
		$records = $stmt->fetchColumn();
		
	} elseif (count(checkedTypes) == 0) {
		SELECT COUNT(*) FROM nobsc_ingredients
		$stmt = $conn->query($sql);
		$records = $stmt->fetchColumn();
	}
	
	if (records > display) {
		pages = ceil(records / display);
	} else {
		pages = 1;
	}
}

let start;
if (isset($_GET['s']) && is_numeric($_GET['s'])) {
	start = $_GET['s'];
} else {
	start = 0;
}
// >>>>>>>>>>>>>>>>>>>> end pagination logic

*/

class Ingredients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      ingredientTypes: []
    };
  }

  componentDidMount() {
    const endpoint = 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com/ingredient-types';

    axios.get(endpoint).then(response => {
      const ingredientTypes = response.data;

      this.setState({ingredientTypes});
    });
  }
  
  getIngredients = async (id) => {
    try {
      const endpoint = id
                       ? `http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com/ingredients/${id}`
                       : 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com/ingredients';
      
      const response = await axios.get(endpoint);
      const ingredients = response.data;

      this.setState({ingredients});
    } catch (err) {
      console.error(err);
    }
  }


  /*
  // functions to automatically apply filter changes
  function ingredientsActionOne() {
    var iTID = document.getElementById('itid');
    iTID.addEventListener("change", niceFilter, false);
  }
  function niceFilter() {
    this.submit();
  }
  
  window.addEventListener("load", ingredientsActionOne, false);
  */


  render() {
    return(
      <Styles>
        <div id="page">
          <div id="page_col_left">
            <div id="list_header">
              <h1>No Bullshit Cooking Ingredients</h1>
              <button onClick={() => this.getIngredients()}>Get Ingredients</button>
            </div>

            <div id="filters">
              <form id="itid" name="itid">
                <span id="filter_title"><b>Filter by:</b></span>
                <div>

                  {/*SELECT ingredient_type_id, ingredient_type_name FROM nobsc_ingredient_types*/}
                  
                  {/* create ingredient type filter UI */}
                  <p className="filter_type"><b>Ingredient type</b></p>
                  {this.state.ingredientTypes}
                  {/*
                  while (($row = $stmt->fetch()) !== false) {
                    let optionHtml = '<span className="filter_span"><input type="checkbox" ';
                    if (isset($_GET['itid' . $row['ingredient_type_id']]) && ($_GET['itid' . $row['ingredient_type_id']] == $row['ingredient_type_id'])) {
                      optionHtml += 'checked ';
                    }
                    optionHtml += 'value="' + row['ingredient_type_id'] + '" name="itid' + row['ingredient_type_id'] + '">';
                    optionHtml += '<label className="filter_label" for="' + row['ingredient_type_id'] + '">' + row['ingredient_type_name'] + '</label></span>';
                    return optionHtml;
                  }
                  */}
                  
                  
                  {/* >>>>>>>>>>>>>>>>>>>> start filter logic */}
                  {/*
                  if (count(checkedTypes) > 1) {  // return multiple checked ingredient types (filter)
                    $inNamed = "";
                    $parameters = [];
                    foreach ($checkedTypes as $j => $chTy) {
                      $key = ":id" . $j;
                      $inNamed .= "$key, ";
                      $parameters[$key] = $chTy;
                    }
                    $inNamedSet = rtrim($inNamed, ", ");
                    
                    const sql = `SELECT ingredient_id, ingredient_name, ingredient_type_id, ingredient_image
                    FROM nobsc_ingredients
                    WHERE ingredient_type_id IN (" . $inNamedSet . ")
                    ORDER BY ingredient_name ASC
                    LIMIT :start, :display`;
                    
                    foreach ($parameters as $k => $chType) {
                      $stmt->bindValue($k, $chType);
                    }
                    $stmt->bindValue(':start', $start, PDO::PARAM_INT);
                    $stmt->bindValue(':display', $display, PDO::PARAM_INT);
                    $stmt->execute();
                    
                    
                  } elseif (count(checkedTypes) == 1) {  // return single checked ingredient type (filter)
                    let ingredientTypeID = checkedTypesList;

                    const sql = `SELECT ingredient_id, ingredient_name, ingredient_type_id, ingredient_image
                    FROM nobsc_ingredients
                    WHERE ingredient_type_id = :ingredientTypeID
                    ORDER BY ingredient_name ASC
                    LIMIT :start, :display`;

                    $stmt->execute([':ingredientTypeID' => $ingredientTypeID, ':start' => $start, ':display' => $display]);
                    
                    
                  } elseif (count(checkedTypes) == 0) {  // return all ingredient types (no filter)

                    const sql = `SELECT ingredient_id, ingredient_name, ingredient_type_id, ingredient_image
                    FROM nobsc_ingredients
                    ORDER BY ingredient_name ASC
                    LIMIT :start, :display`;

                    $stmt = $conn->prepare($sql);
                    $stmt->execute([':start' => $start, ':display' => $display]);
                  }
                  */}
                  {/* >>>>>>>>>>>>>>>>>>>> end filter logic */}
                  
                </div>
                {/* <button type="submit" style="display: none;"> */}
              </form>
            </div>

            <div>
            {this.state.ingredients.map((ingredient, index) => (
              <div key={index}>
                <img src={`https://s3.amazonaws.com/nobsc-images-01/ingredients/${ingredient.ingredient_image}.jpg`} />
                <div className="ingredient_name">{ingredient.ingredient_name}</div>
                <div className="ingredient_id">{ingredient.ingredient_id}</div>
                <div className="ingredient_type_id">{ingredient.ingredient_type_id}</div>
              </div>
            ))}
          </div>
          </div>

          <div id="page_col_right">
          </div>
        </div>
      </Styles>
    );
  }
}

export default Ingredients;