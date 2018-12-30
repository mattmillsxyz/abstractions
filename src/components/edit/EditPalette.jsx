import React from 'react';
import { connect } from 'react-redux';
import { filter } from 'lodash';

import { selectPalette } from '../../actions';

import DropUp from '../DropUp';

class EditPalette extends React.Component {
  render() {
    const palettes = this.props.design.palettes;
    const filteredPalettes = filter(this.props.palettes, palette => {
      if (palettes.includes(palette.name)) {
        return palette;
      }
    });

    return (
      <div className="edit-block">
        <label>PALETTE</label>
        <DropUp
          type="palette"
          options={filteredPalettes}
          selectedItem={this.props.selectedPalette}
          onItemSelect={palette => this.props.selectPalette(palette)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    design: state.selectedDesign,
    palettes: state.palettes,
    selectedPalette: state.selectedPalette
  };
};

export default connect(
  mapStateToProps,
  { selectPalette }
)(EditPalette);
