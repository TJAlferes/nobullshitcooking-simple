import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import CuisineView from './CuisineView';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;

export const Cuisine = ({
  match,
  oneColumnATheme,
  message,
  dataCuisines
}) => {
  const history = useHistory();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ cuisine, setCuisine ] = useState(null);
  const [ tab, setTab ] = useState("Intro");

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (message !== "") window.scrollTo(0,0);
      setFeedback(message);
      setLoading(false);
    }
    return () => isSubscribed = false;
  }, [message]);

  useEffect(() => {
    const { id } = match.params;
    if (!id) history.push('/home');

    const isCuisine = dataCuisines.find(cui=> cui.cuisine_id == id);
    if (!isCuisine) history.push('/cuisines');

    // TO DO: move to redux saga
    const getCuisine = async (id) => {
      const res = await axios.get(`${endpoint}/cuisine/detail/${id}`);
      console.log(res.data);
      if (res.data) setCuisine(res.data);
    };

    getCuisine(Number(id));
  }, []);

  const handleTabChange = value => setTab(value);

  return (
    <CuisineView
      oneColumnATheme={oneColumnATheme}
      cuisine={cuisine}
      tab={tab}
      handleTabChange={handleTabChange}
    />
  );
}

const mapStateToProps = state => ({dataCuisines: state.data.cuisines});

export default withRouter(connect(mapStateToProps)(Cuisine));