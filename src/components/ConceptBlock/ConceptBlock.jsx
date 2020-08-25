import React from 'react';
import './ConceptBlock.scss';

const ConceptBlock = ({ ...props }) => {
  const {
    data: { concepts },
  } = props;
  const name = concepts[0].name;
  const percent = Math.floor(concepts[0].value * 100);

  return (
    <div className='concept-block'>
      <span className='concept-info'>{name}</span>{' '}
      <span className='concept-info'>%{percent}</span>{' '}
    </div>
  );
};

export default ConceptBlock;
