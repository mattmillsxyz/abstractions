import React from 'react';

import '../../styles/Art.scss';

class Eclipse extends React.Component {
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

  updateDimensions() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }

  render() {
    const { height, width } = this.state;

    return (
      <div className="canvas">
        <svg width={width} height={height} fill="none" {...this.props}>
          <path fill="#355C7D" d={`M0 0h${width}v${height}H0z`} />
          <polygon
            points={`0,${height} ${width * 0.35},${height * 0.5} ${width *
              0.65}, ${height * 0.5} ${width},${height}`}
            fill="#F67280"
          />
          <circle
            cx={width * 0.5}
            cy={height * 0.25}
            r={height * 0.075}
            fill="#F8B195"
          />
        </svg>
      </div>
    );
  }
}

export default Eclipse;