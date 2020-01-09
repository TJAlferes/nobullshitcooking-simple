import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import './suggestions.css';

const googleMapsAPIKeyOne = 'AIzaSyCULKDLxoF9O413jjvF5Ot2xXXMdgz0Eag';
const googleMapsAPIKeyTwo = 'AIzaSyA1caERqL2MD4rv2YmbJ139ToyxgT61v6w';

const Suggestions = props => {
  const [ latitude, setLatitude ] = useState(null);
  const [ longitude, setLongitude ] = useState(null);
  const [ address, setAddress ] = useState(null);

  useEffect(() => {
    const geolocation = navigator.geolocation;
    geolocation.getCurrentPosition(function(position) {
      setLatitude(`${position.coords.latitude}`);
      setLongitude(`${position.coords.longitude}`);
    });
  }, []);

  useEffect(() => {
    const getAddress = async () => {
      if (latitude === null) return;
      if (longitude === null) return;
      const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapsAPIKeyTwo}`);
      setAddress(res.data.results[3].formatted_address);
    };
    getAddress();
  }, [latitude, longitude]);

  return (
    <div className={`suggestions ${props.theme}`}>
      <span>Stores near you</span>
      {
        (latitude !== null && longitude !== null) &&
        <iframe
          width="260"
          height="260"
          frameBorder="0"
          style={{border: "0"}}
          src={`https://www.google.com/maps/embed/v1/search?q=grocery+stores+near+${address}&center=${latitude},${longitude}&zoom=11&key=${googleMapsAPIKeyOne}`}
          allowFullScreen
        >
        </iframe>
      }
      <hr />
      <span>Growers &amp; Ranchers</span>
      <hr />
      <span>Stores &amp; Butchers</span>
      <hr />
      <span>Popular Now</span>
      <hr />
      <span>Suggested for You</span>
    </div>
  );
};

const mapStateToProps = state => ({
  theme: state.theme.suggestionsTheme
});

export default connect(mapStateToProps)(Suggestions);