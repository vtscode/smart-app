import React from 'react';
import './FacesBlock.scss';

const FacesBlock = ({ response }) => {
  return <div className='faces-block'>Faces detected: {response.length}</div>;
};

export default FacesBlock;
