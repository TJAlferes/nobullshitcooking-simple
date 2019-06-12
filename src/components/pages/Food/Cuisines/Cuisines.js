import React from 'react';
import { Link } from 'react-router-dom';

import './cuisines.css';
import ComingSoon from '../../../../assets/images/content/coming-soon-120-120.png';
import RussianThumb from '../../../../assets/images/content/cuisines/russian/nobsc-russian-thumb.png';
import GermanThumb from '../../../../assets/images/content/cuisines/german/nobsc-german-thumb.png';
//import TurkishThumb from '../../../../assets/images/content/cuisines/turkish/nobsc-turkish-thumb.png';
import FrenchThumb from '../../../../assets/images/content/cuisines/french/nobsc-french-thumb.png';
import ItalianThumb from '../../../../assets/images/content/cuisines/italian/nobsc-italian-thumb.png';
import MexicanThumb from '../../../../assets/images/content/cuisines/mexican/nobsc-mexican-thumb.png';
import GreekThumb from '../../../../assets/images/content/cuisines/greek/nobsc-greek-thumb.png';
import IrishThumb from '../../../../assets/images/content/cuisines/irish/nobsc-irish-thumb.png';
//import ChineseThumb from '../../../../assets/images/content/cuisines/chinese/nobsc-chinese-thumb.png';
import IndianThumb from '../../../../assets/images/content/cuisines/indian/nobsc-indian-thumb.png';
//import JapaneseThumb from '../../../../assets/images/content/cuisines/japanese/nobsc-japanese-thumb.png';
import IranianThumb from '../../../../assets/images/content/cuisines/iranian/nobsc-iranian-thumb.png';

const Cuisines = props => (
  <div className={`cuisines one-column-a ${props.oneColumnATheme}`}>
    <h1>Cuisines</h1>
    <div className={`nav-grid-a ${props.navGridATheme}`}>
      <div className="nav-grid-a-item">
        <Link to="/food/cuisines/russian">
          <span className="nav-grid-a-item-text">Russian</span>
          <img className="nav-grid-a-item-image" src={RussianThumb} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/cuisines/german">
          <span className="nav-grid-a-item-text">German</span>
          <img className="nav-grid-a-item-image" src={GermanThumb} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/cuisines/turkish">
          <span className="nav-grid-a-item-text">Turkish</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/cuisines/french">
          <span className="nav-grid-a-item-text">French</span>
          <img className="nav-grid-a-item-image" src={FrenchThumb} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/cuisines/italian">
          <span className="nav-grid-a-item-text">Italian</span>
          <img className="nav-grid-a-item-image" src={ItalianThumb} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/cuisines/mexican">
          <span className="nav-grid-a-item-text">Mexican</span>
          <img className="nav-grid-a-item-image" src={MexicanThumb} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/cuisines/greek">
          <span className="nav-grid-a-item-text">Greek</span>
          <img className="nav-grid-a-item-image" src={GreekThumb} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/cuisines/irish">
          <span className="nav-grid-a-item-text">Irish</span>
          <img className="nav-grid-a-item-image" src={IrishThumb} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/cuisines/chinese">
          <span className="nav-grid-a-item-text">Chinese</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/cuisines/indian">
          <span className="nav-grid-a-item-text">Indian</span>
          <img className="nav-grid-a-item-image" src={IndianThumb} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/cuisines/japanese">
          <span className="nav-grid-a-item-text">Japanese</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/cuisines/iranian">
          <span className="nav-grid-a-item-text">Iranian</span>
          <img className="nav-grid-a-item-image" src={IranianThumb} />
        </Link>
      </div>
    </div>
  </div>
);

export default Cuisines;