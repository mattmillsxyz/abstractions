import React from 'react';

import '../styles/Menu.scss';
import EditMenu from './edit/EditMenu';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showEditMenu: false
    };
  }

  toggle() {
    this.setState({
      showEditMenu: !this.state.showEditMenu
    });
  }

  render() {
    return (
      <div className="menu">
        {this.state.showEditMenu && <EditMenu />}
        <button onClick={() => this.toggle()} className="edit-button">
          EDIT
        </button>
        <button className="random-button">RANDOM</button>
      </div>
    );
  }
}

export default Menu;
