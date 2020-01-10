import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import './suggestions.css';

const googleMapsAPIKeyOne = 'AIzaSyCULKDLxoF9O413jjvF5Ot2xXXMdgz0Eag';
const googleMapsAPIKeyTwo = 'AIzaSyA1caERqL2MD4rv2YmbJ139ToyxgT61v6w';

const Suggestions = props => {
  const [ latitude, setLatitude ] = useState("");
  const [ longitude, setLongitude ] = useState("");
  const [ address, setAddress ] = useState("");

  useEffect(() => {
    const getLocation = async () => {
      const geolocation = navigator.geolocation;
      geolocation.getCurrentPosition(function(position) {
        setLatitude(`${position.coords.latitude}`);
        setLongitude(`${position.coords.longitude}`);
      });
    };
    getLocation();
  }, []);

  useEffect(() => {
    const getAddress = async () => {
      if (latitude === "") return;
      if (longitude === "") return;
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapsAPIKeyTwo}`
      );
      if (res.data) setAddress(res.data.results[3].formatted_address);
    };
    getAddress();
  }, [latitude, longitude]);

  return (
    <div className={`suggestions ${props.theme}`}>
      <span className="suggestions__header">Stores near you</span>
      {
        (address !== "") &&
        <div id="suggestions__nearby-stores">
          <iframe
            id="nearby-stores__iframe"
            frameBorder="0"
            style={{border: "0 none"}}
            src={`https://www.google.com/maps/embed/v1/search?q=grocery+stores+near+${address}&center=${latitude},${longitude}&zoom=11&key=${googleMapsAPIKeyOne}`}
          >
          </iframe>
        </div>
      }
      <hr className="suggestions__line"/>
      <span className="suggestions__header">Growers &amp; Ranchers</span>
      <hr className="suggestions__line"/>
      <span className="suggestions__header">Stores &amp; Butchers</span>
      <hr className="suggestions__line"/>
      <span className="suggestions__header">Popular Now</span>
      <hr className="suggestions__line"/>
      <span className="suggestions__header">Suggested for You</span>
    </div>
  );
};

const mapStateToProps = state => ({
  theme: state.theme.suggestionsTheme
});

export default connect(mapStateToProps)(Suggestions);