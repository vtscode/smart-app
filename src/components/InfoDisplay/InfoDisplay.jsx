import React from 'react';
import './InfoDisplay.scss';
import ColorBlock from '../ColorBlock/ColorBlock';
import FacesBlock from '../FacesBlock/FacesBlock';
import ConceptBlock from '../ConceptBlock/ConceptBlock';

const InfoDisplay = ({ response, location }) => {
  let info = <div className='no-items'>No items detected</div>;
  if (response) {
    switch (location) {
      case 'color':
        info = response.map(({ ...props }, i) => (
          <ColorBlock key={i} {...props} />
        ));
        break;
      case 'facerecon':
        info = <FacesBlock response={response} />;
        break;
      case 'apparel':
        info = response.map(({ id, ...props }) => (
          <ConceptBlock key={id} {...props} />
        ));
        break;
      default:
        break;
    }
  }

  return <div className='info-display'>{info}</div>;
};

export default InfoDisplay;
