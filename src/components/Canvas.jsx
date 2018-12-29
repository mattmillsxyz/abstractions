import React from 'react';
import { connect } from 'react-redux';

import '../styles/App.scss';
import Header from './Header';
import Menu from './Menu';
import Epoch from './art/Epoch';
import Eclipse from './art/Eclipse';

class Canvas extends React.Component {
  getArt = () => {
    switch (this.props.design.name) {
      case 'Epoch':
        return <Epoch />;
      case 'Eclipse':
        return <Eclipse />;
      default:
        return <Epoch />;
    }
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        {this.getArt()}
        <Menu />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    design: state.selectedDesign
  };
};

export default connect(mapStateToProps)(Canvas);
