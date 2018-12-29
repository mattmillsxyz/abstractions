import React from 'react';

class DropUp extends React.Component {
  renderList() {
    return this.props.options.map(option => {
      return (
        <li key={option.name}>
          <button onClick={() => this.props.onItemSelect(option)}>
            {option.name}
          </button>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div>{this.props.selectedItem.name}</div>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

export default DropUp;
