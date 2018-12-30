import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';

import { selectDesign, selectPalette, selectDirection } from '../../actions';

import DropUp from '../DropUp';

class EditDesign extends React.Component {
  getInitialPalette(design) {
    const initialPalette = find(this.props.palettes, palette => {
      if (palette.name === design.palettes[0]) {
        return palette;
      }
    });
    this.props.selectPalette(initialPalette);
  }

  render() {
    return (
      <div className="edit-block">
        <label>DESIGN</label>
        <DropUp
          options={this.props.designs}
          selectedItem={this.props.selectedDesign}
          onItemSelect={design => {
            this.props.selectDesign(design);
            this.getInitialPalette(design);
            this.props.selectDirection(this.props.directions[0]);
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    palettes: state.palettes,
    designs: state.designs,
    directions: state.directions,
    selectedDesign: state.selectedDesign
  };
};

export default connect(
  mapStateToProps,
  { selectDesign, selectPalette, selectDirection }
)(EditDesign);
