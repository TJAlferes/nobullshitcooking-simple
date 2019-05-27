import React from 'react';
import { Link } from 'react-router-dom';

import './food.css';
import PlusSign from '../../../assets/images/content/plus-sign.png';
import Grill from '../../../assets/images/content/grill.jpg';
import Ribs from '../../../assets/images/content/ribs.jpg';
import AmericaFlag from '../../../assets/images/content/america-flag.png';

// pass react router prop(s) here?
const Food = () => (
  <div id="page">
    <div id="container">
      <h1>Food</h1>
      {/* restructure / simplify this */}
      <div className="ingredients_sections">
        <Link to="/food/nutrition">
          <div className="single_section">
            <span>Nutrition</span>
            <img width="100" title="Nutrition" src={PlusSign} />
          </div>
        </Link>
        <Link to="/food/methods">
          <div className="single_section">
            <span>Methods</span>
            <img width="150" title="Methods" src={Grill} />
          </div>
        </Link>
      </div>
      <div className="ingredients_sections">	
        <Link to="/food/ingredients">
          <div className="single_section">
            <span>Ingredients</span>
            <img width="150" title="Ingredients" src={Ribs} />
          </div>
        </Link>
        <Link to="/food/cuisines">
          <div className="single_section">
            <span>Cuisines</span>
            <img width="150" title="Cuisines" src={AmericaFlag} />
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Food;