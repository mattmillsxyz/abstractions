import React from 'react';
import { connect } from 'react-redux';
import { find, isEqual } from 'lodash';

import '../styles/Menu.scss';
import EditMenu from './edit/EditMenu';
import { selectDesign, selectPalette, selectDirection } from '../actions';
import Modal from './Modal';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showEditMenu: false,
      showShareModal: false,
      twitterLink: '',
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

  shareDesign() {
    let directionIndex = 0;
    this.props.directions.forEach((direction, index) => {
      if (isEqual(this.props.selectedDirection, direction)) {
        directionIndex = index;
      }
    });

    const designIndex = this.props.designs.indexOf(this.props.selectedDesign);
    const paletteIndex = this.props.palettes.indexOf(
      this.props.selectedPalette
    );

    this.setState({
      twitterLink: `${
        window.location
      }/${designIndex}/${paletteIndex}/${directionIndex}`,
    });

    this.toggleShareModal();
  }

  toggleShareModal() {
    this.setState({
      showShareModal: !this.state.showShareModal,
    });
  }

  toggleMenu() {
    this.setState({
      showEditMenu: !this.state.showEditMenu,
    });
  }

  render() {
    return (
      <div className="menu">
        {this.state.showEditMenu && <EditMenu />}
        <button onClick={() => this.toggleMenu()} className="edit-button">
          {this.state.showEditMenu ? 'DONE' : 'EDIT'}
        </button>
        <button className="random-button" onClick={() => this.randomize()}>
          RANDOM
        </button>
        <button className="share-button" onClick={() => this.shareDesign()}>
          SHARE
        </button>
        {this.state.showShareModal && (
          <Modal
            type="share"
            shareLink={this.state.twitterLink}
            twitterMessage="Check out this design I created with ABSTRACTIONS!"
            onDismiss={() => this.toggleShareModal()}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    designs: state.designs,
    palettes: state.palettes,
    directions: state.directions,
    selectedDesign: state.selectedDesign,
    selectedPalette: state.selectedPalette,
    selectedDirection: state.selectedDirection,
  };
};

export default connect(
  mapStateToProps,
  { selectDesign, selectPalette, selectDirection }
)(Menu);
