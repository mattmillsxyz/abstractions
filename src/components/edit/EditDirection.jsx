import React from 'react';
import { connect } from 'react-redux';

import { selectDirection } from '../../actions';

class EditDirection extends React.Component {
  renderButtonList() {
    return this.props.directions.map(direction => {
      const buttonClasses =
        this.props.selectedDirection.name === direction.name
          ? 'button-input active'
          : 'button-input';
      return (
        <button
          key={direction.name}
          className={buttonClasses}
          onClick={() => this.props.selectDirection(direction)}
        >
          {direction.value}
        </button>
      );
    });
  }

  render() {
    return (
      <div className="edit-block">
        <label>DIRECTION</label>
        <div className="button-list">{this.renderButtonList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    directions: state.directions,
    selectedDirection: state.selectedDirection
  };
};

export default connect(
  mapStateToProps,
  { selectDirection }
)(EditDirection);
