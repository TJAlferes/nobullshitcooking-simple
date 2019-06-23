import React from 'react';
import { Link } from 'react-router-dom';

import CurrentPromo from '../../../assets/images/header/announcements/announcement-05-03-17.png';

const Promo = () => <Link to="/"><img src={CurrentPromo} /></Link>;

export default Promo;