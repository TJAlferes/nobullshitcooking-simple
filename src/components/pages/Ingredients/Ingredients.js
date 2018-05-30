import React, { Component } from 'react';
import queryString from 'query-string';

import { getIngredientsStart } from '../../actions/ingredients';

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
    //this.props.getIngredientsStart();
  }
  
  // functions to automatically apply filter changes
  function ingredientsActionOne() {
    var iTID = document.getElementById('itid');
    iTID.addEventListener("change", niceFilter, false);
  }
  function niceFilter() {
    this.submit();
  }
  
  window.addEventListener("load", ingredientsActionOne, false);

  render() {
    return(
      <Styles>

        <div id="page_col_left">

          <div id="list_header">
            <h1>No Bullshit Cooking Ingredients</h1>
          </div>

          {/* filter display */}
          <div id="filters">
            <form id="itid" name="itid" method="GET">
              <span id="filter_title"><b>Filter by:</b></span>
              <div>
                {

                }
                
                SELECT ingredient_type_id, ingredient_type_name FROM nobsc_ingredient_types
                
                {/* create ingredient type filter UI */}
                echo '<p className="filter_type"><b>Ingredient type</b></p>';
                while (($row = $stmt->fetch()) !== false) {
                  let optionHtml = '<span className="filter_span"><input type="checkbox" ';
                  if (isset($_GET['itid' . $row['ingredient_type_id']]) && ($_GET['itid' . $row['ingredient_type_id']] == $row['ingredient_type_id'])) {
                    optionHtml += 'checked ';
                  }
                  optionHtml += 'value="' + row['ingredient_type_id'] + '" name="itid' + row['ingredient_type_id'] + '">';
                  optionHtml += '<label className="filter_label" for="' + row['ingredient_type_id'] + '">' + row['ingredient_type_name'] + '</label></span>';
                  return optionHtml;
                }
                
                
                
                {/* >>>>>>>>>>>>>>>>>>>> start filter logic */}
                if (count(checkedTypes) > 1) {  // return multiple checked ingredient types (filter)
                  $inNamed = "";
                  $parameters = [];
                  foreach ($checkedTypes as $j => $chTy) {
                    $key = ":id" . $j;
                    $inNamed .= "$key, ";
                    $parameters[$key] = $chTy;
                  }
                  $inNamedSet = rtrim($inNamed, ", ");
                  
                  SELECT ingredient_id, ingredient_name, ingredient_type_id, ingredient_image
                    FROM nobsc_ingredients
                    WHERE ingredient_type_id IN (" . $inNamedSet . ")
                    ORDER BY ingredient_name ASC
                    LIMIT :start, :display
                  
                  foreach ($parameters as $k => $chType) {
                    $stmt->bindValue($k, $chType);
                  }
                  $stmt->bindValue(':start', $start, PDO::PARAM_INT);
                  $stmt->bindValue(':display', $display, PDO::PARAM_INT);
                  $stmt->execute();
                  
                  
                } elseif (count(checkedTypes) == 1) {  {/* return single checked ingredient type (filter) */}
                  let ingredientTypeID = checkedTypesList;
                  SELECT ingredient_id, ingredient_name, ingredient_type_id, ingredient_image
                    FROM nobsc_ingredients
                    WHERE ingredient_type_id = :ingredientTypeID
                    ORDER BY ingredient_name ASC
                    LIMIT :start, :display
                  $stmt->execute([':ingredientTypeID' => $ingredientTypeID, ':start' => $start, ':display' => $display]);
                  
                  
                } elseif (count(checkedTypes) == 0) {  {/* return all ingredient types (no filter) */}
                  SELECT ingredient_id, ingredient_name, ingredient_type_id, ingredient_image
                      FROM nobsc_ingredients
                      ORDER BY ingredient_name ASC
                      LIMIT :start, :display
                  $stmt = $conn->prepare($sql);
                  $stmt->execute([':start' => $start, ':display' => $display]);
                }
                {/* >>>>>>>>>>>>>>>>>>>> end filter logic */}
                
                ?>
              </div>
              <button type="submit" style="display: none;">
            </form>
          </div>

          {/* sort display */}
          <div id="sorters">
            <span id="sort_title"><b>Sort by:</b></span>
            <a href="">Name</a>
          </div>
          
          {/* pagination display top */}
          <div className="page_links">
            if (pages > 1) {
              {/* >>>>>>>>>>>>>>>>>>>> start pagination logic modification */}
              if (isset($_GET)) {
                let checkedTypesBuild = '';
                foreach ($_GET as cTBkey => cTBvalue) {
                  if ((cTBkey != "s") && (cTBkey != "p")) {
                    checkedTypesBuild += '&' + cTBkey + '=' + cTBvalue;
                  }
                }
                let checkedTypesString = substr(checkedTypesBuild, 1);
              }
              {/* >>>>>>>>>>>>>>>>>>>> end pagination logic modification */}
              
              
              
              {/* create pagination at top of list */}
              let currentPage = (start / display) + 1;
              add '<span className="page_numbers">';
              if (currentPage != 1) {
                add '<a className="page_nav" href="ingredients.php?' + checkedTypesString + '&s=' + (start - display) + '&p=' + pages + '">Prev</a>';
              }
              pages.map(page => {
                if (i != currentPage) {
                  add '<a className="page_number" href="ingredients.php?' + checkedTypesString + '&s=' + (display * (i - 1)) + '&p=' + pages + '">' + i + '</a>';
                } else {
                  add '<a className="current_page_number" href="#">' + i + '</a>';
                }
              });
              if (currentPage != pages) {
                add '<a className="page_nav" href="ingredients.php?' + checkedTypesString + '&s=' + ($start + $display) + '&p=' + $pages + '">Next</a>';
              }
              add '</span>';
            }
          </div>
          
          
          
          {/* list display */}
          <div id="list">
            {/* create list of appropriate ingredients */}
            foreach ($stmt as $row) {
              echo '<div><a href="view_ingredient.php?ingredient_id=' + row['ingredient_id'] + '"><div><span>' + row['ingredient_name'] + '</span></div><img className="list_image" src="images/ingredients/thumbnails/tn_' . $row['ingredient_image'] . '.jpg"></a></div>';
            }
          </div>
          
          
          
          {/* pagination display bottom */}
          <div className="page_links">
            if (this.state.pages > 1) {
              {/* create pagination at bottom of list */}
              let currentPage = (start / display) + 1;
              echo '<span className="page_numbers">';
              if (currentPage != 1) {
                echo '<a className="page_nav" "href="ingredients.php?' + checkedTypesString + '&s=' + (start - display) + '&p=' + pages + '">Prev</a>';
              }
              pages.map(page => {
                if (page != currentPage) {
                  return '<a className="page_number" href="ingredients.php?' + checkedTypesString + '&s=' + ((display * (i - 1))) + '&p=' + pages + '">' + i + '</a>';
                }
                return '<a className="current_page_number" href="#">' + i + '</a>';
              });
              if (currentPage != pages) {
                add this '<a className="page_nav" href="ingredients.php?' + checkedTypesString + '&s=' + (start + display) + '&p=' + pages + '">Next</a>';
              }
              add this '</span>';
            }
          </div>

        </div>

        <div id="page_col_right">
        </div>

      </Styles>
    );
  }
}

export default Ingredients;