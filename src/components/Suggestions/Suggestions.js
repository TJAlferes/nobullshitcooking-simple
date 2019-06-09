import React from 'react';
import { connect } from 'react-redux';

import './suggestions.css';

const Suggestions = props => (
  <div className={`suggestions ${props.theme}`}>
    <span>Growers &amp; Ranchers</span>
    <hr />
    <span>Stores &amp; Butchers</span>
    <hr />
    <span>Popular Now</span>
    <hr />
    <span>Suggested for You</span>
  </div>
);

const mapStateToProps = state => ({
  theme: state.theme.suggestionsTheme
});

export default connect(mapStateToProps)(Suggestions);