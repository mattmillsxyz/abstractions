import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Menu from './Menu';
import Modal from './Modal';
import Epoch from './designs/Epoch';
import Eclipse from './designs/Eclipse';
import Blocked from './designs/Blocked';
import Boxed from './designs/Boxed';
import Gradual from './designs/Gradual';

class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: window.innerHeight - 40,
      width: window.innerWidth,
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
      height: window.innerHeight - 40,
      width: window.innerWidth,
    });
  }

  getArt = () => {
    switch (this.props.design.name) {
      case 'Epoch':
        return <Epoch height={this.state.height} width={this.state.width} />;
      case 'Eclipse':
        return <Eclipse height={this.state.height} width={this.state.width} />;
      case 'Boxed':
        return <Boxed height={this.state.height} width={this.state.width} />;
      case 'Blocked':
        return <Blocked height={this.state.height} width={this.state.width} />;
      case 'Gradual':
        return <Gradual height={this.state.height} width={this.state.width} />;
      default:
        return <Eclipse height={this.state.height} width={this.state.width} />;
    }
  };

  render() {
    return (
      <div className="wrapper">
        {this.props.showModal && <Modal />}
        <Header />
        {this.getArt()}
        <Menu />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    design: state.selectedDesign,
    showModal: state.showModal,
  };
};

export default connect(mapStateToProps)(Canvas);
