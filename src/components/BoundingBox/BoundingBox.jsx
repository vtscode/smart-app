import React from 'react';
import './BoundingBox.scss';

const BoundingBox = ({ width, height, ...props }) => {
  const {
    region_info: {
      bounding_box: { top_row, left_col, bottom_row, right_col },
    },
    data: { concepts },
  } = props;

  const name = concepts[0].name;
  const top = top_row * height;
  const left = left_col * width;
  const bottom = height - bottom_row * height;
  const right = width - right_col * width;

  const boxHeight = height - (bottom + top);

  return (
    <div className='bounding-box' style={{ top, left, bottom, right }}>
      <label className='box-label' style={{ bottom: boxHeight }}>
        {name}
      </label>
    </div>
  );
};

export default BoundingBox;
