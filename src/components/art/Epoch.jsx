import React from 'react';

import '../../styles/Art.scss';

const Epoch = ({ height, width }) => {
  return (
    <div className="canvas">
      <svg width={width} height={height} fill="none">
        <path fill="#ad4232" d={`M0 0h${width}v${height}H0z`} />
        <polygon
          points={`0,${height} ${width * 0.35},${height * 0.5} ${width *
            0.65}, ${height * 0.5} ${width},${height}`}
          fill="#211e27"
        />
        <circle
          cx={width * 0.5}
          cy={height * 0.25}
          r={height * 0.075}
          fill="#e0e3d2"
        />
      </svg>
    </div>
  );
};

export default Epoch;
