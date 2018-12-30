import React from 'react';

import '../../styles/Art.scss';

const Eclipse = ({ height, width }) => {
  return (
    <div className="canvas">
      <svg width={width} height={height} fill="none">
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
};

export default Eclipse;
