import React from 'react';
import { connect } from 'react-redux';

import { selectPalette } from '../../actions';

import DropUp from '../DropUp';

class EditPalette extends React.Component {
  render() {
    return (
      <div className="edit-block">
        <label>PALETTE</label>
        <DropUp
          type="palette"
          options={this.props.palettes}
          selectedItem={this.props.selectedPalette}
          onItemSelect={palette => this.props.selectPalette(palette)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    palettes: state.palettes,
    selectedPalette: state.selectedPalette
  };
};

export default connect(
  mapStateToProps,
  { selectPalette }
)(EditPalette);
