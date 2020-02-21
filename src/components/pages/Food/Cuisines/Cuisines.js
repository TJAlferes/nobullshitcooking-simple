import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './cuisines.css';

const s3Path = 'https://s3.amazonaws.com/nobsc-images-01/content/food/cuisines/';

const ComingSoon = 'https://s3.amazonaws.com/nobsc-images-01/content/misc/coming-soon-120-120.png';

const RussianThumb = `${s3Path}russian/nobsc-russian-thumb.png`;
const GermanThumb = `${s3Path}german/nobsc-german-thumb.png`;
//const TurkishThumb = `${s3Path}turkish/nobsc-turkish-thumb.png`;
const FrenchThumb = `${s3Path}french/nobsc-french-thumb.png`;
const ItalianThumb = `${s3Path}italian/nobsc-italian-thumb.png`;
const MexicanThumb = `${s3Path}mexican/nobsc-mexican-thumb.png`;
const GreekThumb = `${s3Path}greek/nobsc-greek-thumb.png`;
const IrishThumb = `${s3Path}irish/nobsc-irish-thumb.png`;
//const ChineseThumb = `${s3Path}chinese/nobsc-chinese-thumb.png`;
const IndianThumb = `${s3Path}indian/nobsc-indian-thumb.png`;
//const JapaneseThumb = `${s3Path}japanese/nobsc-japanese-thumb.png`;
const IranianThumb = `${s3Path}iranian/nobsc-iranian-thumb.png`;

function alphabetizeCuisines(cuisines) {
  if (cuisines.length === 0) return [];

  const alphabetizedCuisines = cuisines.reduce((acc, cuisine) => {
    const firstLetter = cuisine['cuisine_name'][0].toLocaleUpperCase();
    if (acc[firstLetter]) acc[firstLetter].push(cuisine['cuisine_name']);
    else acc[firstLetter] = [cuisine['cuisine_name']];
    return acc;
  }, {});

  const letterKeys = Object.keys(alphabetizedCuisines);
  const nationValues = Object.values(alphabetizedCuisines);
  return {letterKeys, nationValues};
}

// TO DO: CMS

const Cuisines = ({ oneColumnATheme, navGridATheme, cuisines }) => {
  const [ letters, setLetters ] = useState([]);
  const [ nations, setNations ] = useState([]);

  useEffect(() => {
    const { letterKeys, nationValues } = alphabetizeCuisines(cuisines);
    setLetters(letterKeys);
    setNations(nationValues);
  }, []);

  return (
    <div className={`cuisines one-column-a ${oneColumnATheme}`}>
      <h1 className="cuisine-nav-title">Cuisines</h1>

      {letters.length && nations.length && letters.map((letter, index) => (
        <div className="cuisine-nav-group" key={letter}>
          <div className="cuisine-nav-letter">{letter}</div>
          {nations[index].map(nation => (
            <div className="cuisine-nav-nation" key={nation}>{nation}</div>
          ))}
        </div>
      ))}

      <div className={`nav-grid-a ${navGridATheme}`}>
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
};

const mapStateToProps = state => ({cuisines: state.data.cuisines});

export default connect(mapStateToProps)(Cuisines);