import React from 'react';
import { connect } from 'react-redux';

import '../../styles/Art.scss';

const Epoch = ({ selectedDirection, selectedPalette, height, width }) => {
  const direction = selectedDirection.name;
  const svgClasses =
    direction === 'down' || direction === 'left' ? 'rotate-svg' : '';

  const renderVertical = () => {
    return (
      <svg className={svgClasses} width={width} height={height} fill="none">
        <path
          fill={`${selectedPalette.colors[0]}`}
          d={`M0 0h${width}v${height}H0z`}
        />
        <polygon
          points={`0,${height} ${width * 0.35},${height * 0.5} ${width *
            0.65},${height * 0.5} ${width},${height}`}
          fill={`${selectedPalette.colors[1]}`}
        />
        <circle
          cx={width * 0.5}
          cy={height * 0.25}
          r={height * 0.075}
          fill={`${selectedPalette.colors[2]}`}
        />
      </svg>
    );
  };

  const renderHorizontal = () => {
    return (
      <svg className={svgClasses} width={width} height={height} fill="none">
        <path
          fill={`${selectedPalette.colors[0]}`}
          d={`M0 0h${width}v${height}H0z`}
        />
        <polygon
          points={`0,0 ${width * 0.5},${height * 0.35} ${width * 0.5},${height *
            0.65} 0,${height}`}
          fill={`${selectedPalette.colors[1]}`}
        />
        <circle
          cx={width * 0.75}
          cy={height * 0.5}
          r={height * 0.075}
          fill={`${selectedPalette.colors[2]}`}
        />
      </svg>
    );
  };

  return (
    <div className="canvas">
      {direction === 'up' || direction === 'down'
        ? renderVertical()
        : renderHorizontal()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedPalette: state.selectedPalette,
    selectedDirection: state.selectedDirection
  };
};

export default connect(mapStateToProps)(Epoch);
