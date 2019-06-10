import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './food.css';
import Meal from '../../../assets/images/content/meal.png'
import AmericaFlag from '../../../assets/images/content/america-flag.png';
import Ribs from '../../../assets/images/content/ribs.jpg';
import PlusSign from '../../../assets/images/content/plus-sign.png';
import CuttingBoard from '../../../assets/images/content/cutting-board.png'
import Grill from '../../../assets/images/content/grill.jpg';

const Food = props => (
  <div className={`food ${props.theme}`}>
    <h1>Food</h1>
    <div className="nav-grid-a">
      <div className="nav-grid-a-item">
        <Link to="/food/">
          <span className="nav-grid-a-item-text">Recipes</span>
          <img className="nav-grid-a-item-image" src={Meal} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/">
          <span className="nav-grid-a-item-text">Cuisines</span>
          <img className="nav-grid-a-item-image" src={AmericaFlag} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/">
          <span className="nav-grid-a-item-text">Ingredients</span>
          <img className="nav-grid-a-item-image" src={Ribs} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/">
          <span className="nav-grid-a-item-text">Nutrition</span>
          <img className="nav-grid-a-item-image" src={PlusSign} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/">
          <span className="nav-grid-a-item-text">Equipment</span>
          <img className="nav-grid-a-item-image" src={CuttingBoard} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/">
          <span className="nav-grid-a-item-text">Methods</span>
          <img className="nav-grid-a-item-image" src={Grill} />
        </Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  theme: state.theme.navGridATheme
});
export default connect(mapStateToProps)(Food);