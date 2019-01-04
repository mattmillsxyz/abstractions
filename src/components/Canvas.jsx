import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';

import Header from './Header';
import Menu from './Menu';
import Epoch from './designs/Epoch';
import Eclipse from './designs/Eclipse';
import Blocked from './designs/Blocked';
import Boxed from './designs/Boxed';
import Gradual from './designs/Gradual';

import { selectDesign, selectPalette, selectDirection } from '../actions';

class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: window.innerHeight - 40,
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    const { design, palette, direction } = this.props.match.params;

    // TODO: This feels dirty, should refactor...
    if (design && design >= 0 && design <= this.props.designs.length) {
      this.props.history.push('/canvas');
      this.props.selectDesign(this.props.designs[design]);
      if (
        palette &&
        this.props.designs[design].palettes.includes(parseInt(palette))
      ) {
        this.props.selectPalette(this.props.palettes[palette]);
      } else {
        this.getInitialPalette(this.props.designs[design]);
      }
      if (
        direction &&
        direction >= 0 &&
        direction < this.props.directions.length
      ) {
        this.props.selectDirection(this.props.directions[direction]);
      } else {
        this.props.selectDirection(this.props.directions[0]);
      }
    }

    window.addEventListener('resize', () => this.updateDimensions());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.updateDimensions());
  }

  getInitialPalette(design) {
    const initialPalette = find(this.props.palettes, palette => {
      if (palette.name === design.palettes[0]) {
        return palette;
      }
    });
    this.props.selectPalette(initialPalette);
  }

  updateDimensions() {
    this.setState({
      height: window.innerHeight - 40,
      width: window.innerWidth,
    });
  }

  getArt = () => {
    switch (this.props.selectedDesign.name) {
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
        <Header />
        {this.getArt()}
        <Menu />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    designs: state.designs,
    directions: state.directions,
    palettes: state.palettes,
    selectedDesign: state.selectedDesign,
  };
};

export default connect(
  mapStateToProps,
  { selectDesign, selectPalette, selectDirection }
)(Canvas);
