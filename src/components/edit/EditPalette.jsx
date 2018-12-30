import React from 'react';
import { connect } from 'react-redux';

import { selectPalette } from '../../actions';

import DropUp from '../DropUp';

class EditPalette extends React.Component {
  renderList() {
    return this.props.palettes.map(palette => {
      return (
        <button
          key={`${palette.name}-${palette.artist}`}
          onClick={() => this.props.selectPalette(palette)}
        >
          {palette.name}
        </button>
      );
    });
  }

  render() {
    return (
      <div className="edit-block">
        <label>PALETTE</label>
        <DropUp
          type="color"
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
