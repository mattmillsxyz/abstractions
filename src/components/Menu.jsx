import React from 'react';

import '../styles/Menu.scss';
import EditMenu from './edit/EditMenu';

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <EditMenu />
        <button className="edit-button">EDIT</button>
        <button className="random-button">RANDOM</button>
      </div>
    );
  }
}

export default Menu;
