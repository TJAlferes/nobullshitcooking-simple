import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './Styles';

import PlusSign from '../../../assets/images/content/plus-sign.png';
import Grill from '../../../assets/images/content/grill.jpg';
import Ribs from '../../../assets/images/content/ribs.jpg';
import AmericaFlag from '../../../assets/images/content/america-flag.png';

// pass react router prop(s) here?
const food = () => (
  <Styles id="page">

    {/* make this a reusable component, breadcrumbs and history, see tyler mcginnis and react router docs */}
    <span id="current_location"><Link to="/">Home</Link> > <Link to="/content/food">Food</Link></span>

    <div id="container">

      <h1>Food</h1>

      {/* restructure / simplify this */}
      <div className="ingredients_sections">
        <Link to="/content/food/nutrition">
          <div className="single_section">
            <span>Nutrition</span>
            <img width="100" title="Nutrition" src={PlusSign} />
          </div>
        </Link>
        <Link to="/content/food/methods">
          <div className="single_section">
            <span>Methods</span>
            <img width="150" title="Methods" src={Grill} />
          </div>
        </Link>
      </div>

      <div className="ingredients_sections">	
        <Link to="/content/food/ingredients">
          <div className="single_section">
            <span>Ingredients</span>
            <img width="150" title="Ingredients" src={Ribs} />
          </div>
        </Link>
        <Link to="/content/food/nations">
          <div className="single_section">
            <span>Cuisines</span>
            <img width="150" title="Cuisines" src={AmericaFlag} />
          </div>
        </Link>
      </div>

    </div>

  </Styles>
);

export default food;