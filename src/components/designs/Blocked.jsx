import React from 'react';
import { connect } from 'react-redux';

import '../../styles/Art.scss';

const Blocked = ({ selectedDirection, selectedPalette, height, width }) => {
  const direction = selectedDirection.name;
  const svgClasses =
    direction === 'down' || direction === 'left' ? 'rotate-svg' : '';

  const renderVerticalBlocks = () => {
    const blockSize = height / 20;
    const columns = width / blockSize;
    const blocks = [];

    for (let c = 0; c <= columns; c++) {
      const colBlocks = [];
      let color = c === 0 ? 0 : c;
      let iteration = Math.floor(c / selectedPalette.colors.length);

      if (c > selectedPalette.colors.length) {
        color = c - selectedPalette.colors.length * iteration;
      }

      for (let i = 0; i < 20; i++) {
        // Reset color to beginning of array
        if (color >= selectedPalette.colors.length) {
          color = 0;
        }
        // Push color block
        colBlocks.push(
          <rect
            fill={`${selectedPalette.colors[color]}`}
            x={c * blockSize}
            y={i * blockSize}
            width={blockSize}
            height={blockSize}
            key={`block--${i}`}
          />
        );
        // Push another block if white
        if (color === 7 || color === 0) {
          i++;
          colBlocks.push(
            <rect
              fill={`${selectedPalette.colors[color]}`}
              x={c * blockSize}
              y={i * blockSize}
              width={blockSize}
              height={blockSize}
              key={`block--${i}`}
            />
          );
        }

        color++;
      }

      blocks.push(colBlocks);
    }

    return blocks;
  };

  const renderHorizontalBlocks = () => {
    const blockSize = height / 20;
    const rows = height / blockSize;
    const blocks = [];

    for (let c = 0; c <= rows; c++) {
      const colBlocks = [];
      let color = c === 0 ? 0 : c;
      let iteration = Math.floor(c / selectedPalette.colors.length);

      if (c > selectedPalette.colors.length) {
        color = c - selectedPalette.colors.length * iteration;
      }

      for (let i = 0; i <= Math.ceil(width / blockSize); i++) {
        // Reset color to beginning of array
        if (color >= selectedPalette.colors.length) {
          color = 0;
        }
        // Push color block
        colBlocks.push(
          <rect
            fill={`${selectedPalette.colors[color]}`}
            x={width - i * blockSize}
            y={c * blockSize}
            width={blockSize}
            height={blockSize}
            key={`block--${i}`}
          />
        );
        // Push another block if white
        if (color === 7 || color === 0) {
          i++;
          colBlocks.push(
            <rect
              fill={`${selectedPalette.colors[color]}`}
              x={width - i * blockSize}
              y={c * blockSize}
              width={blockSize}
              height={blockSize}
              key={`block--${i}`}
            />
          );
        }

        color++;
      }

      blocks.push(colBlocks);
    }

    return blocks;
  };

  const renderVertical = () => {
    return (
      <svg className={svgClasses} width={width} height={height} fill="none">
        {renderVerticalBlocks()}
      </svg>
    );
  };

  const renderHorizontal = () => {
    return (
      <svg className={svgClasses} width={width} height={height} fill="none">
        {renderHorizontalBlocks()}
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

export default connect(mapStateToProps)(Blocked);
