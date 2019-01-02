import React from 'react';
import { connect } from 'react-redux';

import '../../styles/Art.scss';

const Eclipse = ({ selectedDirection, selectedPalette, height, width }) => {
  const direction = selectedDirection.name;
  const svgClasses =
    direction === 'down' || direction === 'left' ? 'rotate-svg' : '';

  const renderVertical = () => {
    return (
      <svg className={svgClasses} width={width} height={height} fill="none">
        <path
          fill="url(#prefix__paint0_linear)"
          d={`M0 0h${width}v${height}H0z`}
        />
        <circle
          cx={width * 0.5}
          cy={height * 0.5}
          r={width > height ? height * 0.35 : width * 0.35}
          fill="url(#prefix__paint1_linear)"
        />
        <circle
          cx={width * 0.5}
          cy={height * 0.15}
          r={height * 0.035}
          fill={`${selectedPalette.colors[2]}`}
        />
        <circle
          cx={width * 0.5}
          cy={height * 0.85}
          r={height * 0.035}
          fill={`${selectedPalette.colors[0]}`}
        />
        <defs>
          <linearGradient
            id="prefix__paint0_linear"
            x1={width * 0.5}
            y1={0}
            x2={width * 0.5}
            y2={height}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={`${selectedPalette.colors[1]}`} />
            <stop offset={1} stopColor={`${selectedPalette.colors[2]}`} />
          </linearGradient>
          <linearGradient
            id="prefix__paint1_linear"
            x1={width * 0.5}
            y1={height * 0.5 - height * 0.3}
            x2={width * 0.5}
            y2={height * 0.5 + height * 0.3}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={`${selectedPalette.colors[2]}`} />
            <stop offset={1} stopColor={`${selectedPalette.colors[1]}`} />
          </linearGradient>
        </defs>
      </svg>
    );
  };

  const renderHorizontal = () => {
    return (
      <svg className={svgClasses} width={width} height={height} fill="none">
        <path
          fill="url(#prefix__paint0_linear)"
          d={`M0 0h${width}v${height}H0z`}
        />
        <circle
          cx={width * 0.5}
          cy={height * 0.5}
          r={width > height ? height * 0.35 : width * 0.35}
          fill="url(#prefix__paint1_linear)"
        />
        <circle
          cx={width * 0.15}
          cy={height * 0.5}
          r={height * 0.035}
          fill={`${selectedPalette.colors[2]}`}
        />
        <circle
          cx={width * 0.85}
          cy={height * 0.5}
          r={height * 0.035}
          fill={`${selectedPalette.colors[0]}`}
        />
        <defs>
          <linearGradient
            id="prefix__paint0_linear"
            x1={0}
            y1={height * 0.5}
            x2={width}
            y2={height * 0.5}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={`${selectedPalette.colors[1]}`} />
            <stop offset={1} stopColor={`${selectedPalette.colors[2]}`} />
          </linearGradient>
          <linearGradient
            id="prefix__paint1_linear"
            x1={width * 0.5 - width * 0.3}
            y1={height * 0.5}
            x2={width * 0.5 + width * 0.3}
            y2={height * 0.5}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={`${selectedPalette.colors[2]}`} />
            <stop offset={1} stopColor={`${selectedPalette.colors[1]}`} />
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

export default connect(mapStateToProps)(Eclipse);
