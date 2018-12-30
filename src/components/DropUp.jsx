import React from 'react';
import onClickOutside from 'react-onclickoutside';

import '../styles/DropUp.scss';

class DropUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  handleClickOutside = evt => {
    this.setState({
      isOpen: false
    });
  };

  renderList() {
    console.log(this.props.options);
    return this.props.options.map(option => {
      if (this.props.type === 'palette') {
        const colors = option.colors.map(color => {
          return (
            <div
              className="color-block"
              style={{ backgroundColor: `${color}` }}
              key={color}
            />
          );
        });

        return (
          <li
            style={{ padding: 0, borderTop: '1px solid white' }}
            onClick={() => this.props.onItemSelect(option)}
            key={option.name}
          >
            {colors}
          </li>
        );
      }

      return (
        <li onClick={() => this.props.onItemSelect(option)} key={option.name}>
          {option.name}
        </li>
      );
    });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  renderColorInput() {
    const colors = this.props.selectedItem.colors.map(color => {
      return (
        <div
          key={color}
          className="color-block"
          style={{ backgroundColor: `${color}` }}
        />
      );
    });
    return <div className="color-input">{colors}</div>;
  }

  renderTextInput() {
    return <div className="text-input">{this.props.selectedItem.name}</div>;
  }

  render() {
    const listClass =
      this.props.type === 'palette' ? 'input-list color-list' : 'input-list';
    return (
      <div className="drop-up">
        <button className="input-box" onClick={() => this.toggle()}>
          {this.props.type === 'palette'
            ? this.renderColorInput()
            : this.renderTextInput()}
        </button>
        {this.state.isOpen && (
          <ul className={listClass}>{this.renderList()}</ul>
        )}
      </div>
    );
  }
}

export default onClickOutside(DropUp);
