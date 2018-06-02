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

    this.state = {};
  }

  componentDidMount() {
    //this.getIngredients(162);
  }
  
  getIngredients = async (id) => {
    try {
      const endpoint = id
                       ? `http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com/ingredients/${id}`
                       : 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com/ingredients';
      const res = await axios.get(endpoint);

      console.log(res.data);
      console.log(res.data[0]);
      console.log("----------------");
      console.log(res.data[0].ingredient_id);
      console.log(res.data[0].ingredient_type_id);
      console.log(res.data[0].ingredient_name);
      console.log(res.data[0].ingredient_image);
      
      return (
        <div>
          {res.data.map((i) => (
            <div key={i} value={i.ingredient_id}>
              <div>{i.ingredient_type_id}</div>
              <div>{i.ingredient_name}</div>
              <img src={`https://s3.amazonaws.com/nobsc-images-01/ingredients/${i.ingredient_image}.jpg`} />
            </div>
          ))}
        </div>
      );
  
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
    const stuff = this.getIngredients(1);
    return(
      <Styles>

        <div id="page_col_left">
          <div id="list_header">
            <h1>No Bullshit Cooking Ingredients</h1>
          </div>
          <div>
            {stuff}
          </div>
        </div>

        <div id="page_col_right">
        </div>

      </Styles>
    );
  }
}

export default Ingredients;