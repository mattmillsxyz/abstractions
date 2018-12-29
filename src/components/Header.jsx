import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header-inner">
        <Link className="logo" to="/">
          ABSTRACTIONS
        </Link>
        <button className="info-button">?</button>
      </div>
    </div>
  );
};

export default Header;
