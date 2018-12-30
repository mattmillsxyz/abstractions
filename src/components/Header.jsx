import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.scss';
import { ReactComponent as InfoIcon } from '../assets/images/info-button.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="header-inner">
        <Link className="logo" to="/">
          ABSTRACTIONS
        </Link>
        <Link to="/" className="info-button">
          <InfoIcon />
        </Link>
      </div>
    </div>
  );
};

export default Header;
