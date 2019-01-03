import React from 'react';
import { connect } from 'react-redux';

import '../../styles/Art.scss';

const Gradual = ({ selectedDirection, selectedPalette, height, width }) => {
  const direction = selectedDirection.name;
  const svgClasses =
    direction === 'down' || direction === 'left' ? 'rotate-svg' : '';

  const renderStops = () => {
    let stops = [];
    const offset = 100 / (selectedPalette.colors.length * 1.3);
    let color = 0;

    for (let i = 0; i < selectedPalette.colors.length * 1.3; i++) {
      color =
        i === selectedPalette.colors.length
          ? selectedPalette.colors.length
          : color;
      stops.push(
        <stop
          offset={`${offset * i}%`}
          stopColor={`${selectedPalette.colors[color]}`}
          key={`gradual--stop--${i}`}
        />
      );
      if (color === 0) {
        i++;
        stops.push(
          <stop
            offset={`${offset * i}%`}
            stopColor={`${selectedPalette.colors[color]}`}
            key={`gradual--stop--${i}`}
          />
        );
      }
      if (i < selectedPalette.colors.length) {
        color++;
      } else {
        color--;
      }
    }
    return stops;
  };

  const renderStrips = () => {
    let stops = [];
    const offset = 100 / selectedPalette.colors.length;

    for (let i = 0; i < selectedPalette.colors.length; i++) {
      stops.push(
        <stop
          offset={`${offset * i}%`}
          stopColor={`${selectedPalette.colors[i]}`}
          key={`gradual-strip--${i}`}
        />
      );
    }
    return stops;
  };

  const renderVertical = () => {
    return (
      <svg className={svgClasses} width={width} height={height} fill="none">
        <path
          fill="url(#gradual-vertical__paint0_linear)"
          d={`M0 0h${width}v${height}H0z`}
        />
        <path
          fill="url(#gradual-vertical__paint1_linear)"
          d={`M0 ${height * 0.65} L${width} ${height *
            0.65} L${width} ${height * 0.8} L0 ${height * 0.8} Z`}
        />
        <defs>
          <linearGradient
            id="gradual-vertical__paint0_linear"
            x1={width * 0.5}
            y1={0}
            x2={width * 0.5}
            y2={height}
            gradientUnits="userSpaceOnUse"
          >
            {renderStops()}
          </linearGradient>
          <linearGradient
            id="gradual-vertical__paint1_linear"
            x1={width * 0.5}
            y1={height * 0.65}
            x2={width * 0.5}
            y2={height * 0.8}
            gradientUnits="userSpaceOnUse"
          >
            {renderStrips()}
          </linearGradient>
        </defs>
      </svg>
    );
  };

  const renderHorizontal = () => {
    return (
      <svg className={svgClasses} width={width} height={height} fill="none">
        <path
          fill="url(#gradual-horizontal__paint0_linear)"
          d={`M0 0h${width}v${height}H0z`}
        />
        <path
          fill="url(#gradual-horizontal__paint1_linear)"
          d={`M${width * 0.65} 0 L${width *
            0.65} ${height} L${height} ${height} L${height} 0 Z`}
        />
        <defs>
          <linearGradient
            id="gradual-horizontal__paint0_linear"
            x1={0}
            y1={height * 0.5}
            x2={width}
            y2={height * 0.5}
            gradientUnits="userSpaceOnUse"
          >
            {renderStops()}
          </linearGradient>
          <linearGradient
            id="gradual-horizontal__paint1_linear"
            x1={width * 0.65}
            y1={height * 0.5}
            x2={width * 0.8}
            y2={height * 0.5}
            gradientUnits="userSpaceOnUse"
          >
            {renderStrips()}
          </linearGradient>
        </defs>
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
    selectedDirection: state.selectedDirection,
  };
};

export default connect(mapStateToProps)(Gradual);
