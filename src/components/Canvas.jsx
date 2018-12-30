import React from 'react';
import { connect } from 'react-redux';

import '../styles/App.scss';
import Header from './Header';
import Menu from './Menu';
import Epoch from './art/Epoch';
import Eclipse from './art/Eclipse';

class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.updateDimensions());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.updateDimensions());
  }

  updateDimensions() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }

  getArt = () => {
    switch (this.props.design.name) {
      case 'Epoch':
        return <Epoch height={this.state.height} width={this.state.width} />;
      case 'Eclipse':
        return <Eclipse height={this.state.height} width={this.state.width} />;
      default:
        return <Epoch height={this.state.height} width={this.state.width} />;
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
