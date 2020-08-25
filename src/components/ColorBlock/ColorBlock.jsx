import React from 'react';
import './ColorBlock.scss';

const ColorBlock = ({ ...props }) => {
  const {
    value,
    raw_hex,
    w3c: { name },
  } = props;
  return (
    <div className='color-block' style={{ background: raw_hex }}>
      <span className='color-info'>{name}</span>{' '}
      <span className='color-info'>{raw_hex}</span>{' '}
      <span className='color-info'>%{Math.floor(value * 100)}</span>
    </div>
  );
};

export default ColorBlock;
