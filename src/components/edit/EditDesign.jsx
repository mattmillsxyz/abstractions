import React from 'react';
import { connect } from 'react-redux';

import { selectDesign } from '../../actions';

import DropUp from '../DropUp';

class EditDesign extends React.Component {
  renderList() {
    return this.props.designs.map(design => {
      return (
        <button
          key={`${design.name}-${design.artist}`}
          onClick={() => this.props.selectDesign(design)}
        >
          {design.name}
        </button>
      );
    });
  }

  render() {
    return (
      <div className="edit-design">
        <DropUp
          options={this.props.designs}
          selectedItem={this.props.selectedDesign}
          onItemSelect={design => this.props.selectDesign(design)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    designs: state.designs,
    selectedDesign: state.selectedDesign
  };
};

export default connect(
  mapStateToProps,
  { selectDesign }
)(EditDesign);
