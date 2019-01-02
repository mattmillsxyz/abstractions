import React from 'react';
import { connect } from 'react-redux';

import '../../styles/Art.scss';

const Boxed = ({ selectedDirection, selectedPalette, height, width }) => {
  const direction = selectedDirection.name;
  const svgClasses =
    direction === 'down' || direction === 'left' ? 'rotate-svg' : '';

  const renderBoxes = () => {
    const boxes = [];
    const colorOne = direction === 'down' || direction === 'right' ? 1 : 2;
    const colorTwo = direction === 'down' || direction === 'right' ? 2 : 1;
    for (let i = 0; i < 30; i++) {
      let color = i % 2 === 0 ? colorOne : colorTwo;
      let boxWidth = width - i * 0.025 * width;
      let boxHeight = height - i * 0.025 * height;
      if (i < 29) {
        boxes.push(
          <rect
            fill={`${selectedPalette.colors[color]}`}
            x={width * 0.5 - boxWidth * 0.5}
            y={height * 0.5 - boxHeight * 0.5}
            width={boxWidth}
            height={boxHeight}
            key={`box--${i}`}
          />
        );
      } else {
        boxes.push(
          <rect
            fill={`${selectedPalette.colors[0]}`}
            x={width * 0.5 - boxWidth * 0.5}
            y={height * 0.5 - boxHeight * 0.5}
            width={boxWidth}
            height={boxHeight}
            key={`box--${i}`}
          />
        );
      }
    }
    return boxes;
  };

  const renderVertical = () => {
    return (
      <svg className={svgClasses} width={width} height={height} fill="none">
        {renderBoxes()}
      </svg>
    );
  };

  const renderHorizontal = () => {
    return (
      <svg className={svgClasses} width={width} height={height} fill="none">
        {renderBoxes()}
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

export default connect(mapStateToProps)(Boxed);
