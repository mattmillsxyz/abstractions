import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';

import '../styles/Menu.scss';
import EditMenu from './edit/EditMenu';
import { selectDesign, selectPalette, selectDirection } from '../actions';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showEditMenu: false,
    };
  }

  randomize() {
    const { designs, palettes, directions } = this.props;
    const randomDesign = designs[Math.floor(Math.random() * designs.length)];
    this.props.selectDesign(randomDesign);

    const randomPaletteNum =
      randomDesign.palettes[
        Math.floor(Math.random() * randomDesign.palettes.length)
      ];
    const randomPalette = find(palettes, palette => {
      if (palette.name === randomPaletteNum) {
        return palette;
      }
    });
    this.props.selectPalette(randomPalette);

    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];
    this.props.selectDirection(randomDirection);
  }

  toggle() {
    this.setState({
      showEditMenu: !this.state.showEditMenu,
    });
  }

  render() {
    return (
      <div className="menu">
        {this.state.showEditMenu && <EditMenu />}
        <button onClick={() => this.toggle()} className="edit-button">
          {this.state.showEditMenu ? 'DONE' : 'EDIT'}
        </button>
        <button className="random-button" onClick={() => this.randomize()}>
          RANDOM
        </button>
        <button className="share-button" disabled>
          SHARE
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    designs: state.designs,
    palettes: state.palettes,
    directions: state.directions,
  };
};

export default connect(
  mapStateToProps,
  { selectDesign, selectPalette, selectDirection }
)(Menu);
