import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../styles/Header.scss';
import { showModal } from '../actions';
import { ReactComponent as InfoIcon } from '../assets/images/info-icon.svg';

const Header = props => {
  return (
    <div className="header">
      <div className="header-inner">
        <Link className="logo" to="/">
          ABSTRACTIONS
        </Link>
        <div onClick={() => props.showModal(true)} className="info-button">
          <InfoIcon />
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { showModal }
)(Header);
