import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { openModal, closeModal } from '../../../store/actions/modalsActions';
import './siteNav.css';

const SiteNav = props => {
  //const { isAuthenticated } = props;

  const displayDropdown = (type, e) => {
    e.stopPropagation();
    console.log('working');
    openModal(type);
    /*props.dispatch(
      openModal({
        id: uuid.v4(),
        type: 'custom',
        content: <CustomModalContent />
      })
    );*/
  }

  return (
    <div className="site_nav">
      <li>
        <NavLink
          className="styled_nav_link"
          onMouseOver={displayDropdown(food)}
          to="/food"
        >
          Food
        </NavLink>
      </li>
      <li>
        <NavLink className="styled_nav_link" to="/fitness">Fitness</NavLink>
      </li>
      <li>
        <NavLink className="styled_nav_link" to="/store/storefront">
          Supply
        </NavLink>
      </li>
      <li>
        <NavLink className="styled_nav_link" to="/welcome">
          New? Start Here
        </NavLink>
      </li>
      {/*
        !isAuthenticated &&
        <li>
          <NavLink className="styled_nav_link" to="/user/dashboard">
            Member Area
          </NavLink>
        </li>
      */}
      <div id="food-dropdown"></div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  //dispatch
  closeModal: () => dispatch(closeModal()),
  openModal: (modalProps, modalType) => {
    dispatch(openModal({ modalProps, modalType }));
  }
});

export default connect(null, mapDispatchToProps)(SiteNav);