import React from 'react';
import './OverFrame.scss';
import InfoDisplay from '../InfoDisplay/InfoDisplay';
import OverImage from '../OverImage/OverImage';
import WithSpinner from '../WithSpinner/WithSpinner';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsLoading } from '../../redux/clarifaiModels/clarifaiModels.selectors';

const InfoDisplayWithSpinner = WithSpinner(InfoDisplay);

const OverFrame = ({ response, location, isLoading }) => {
  let modelName;
  switch (location) {
    case 'color':
      modelName = 'Color Identifier';
      break;
    case 'facerecon':
      modelName = 'Face Recognition';
      break;
    case 'apparel':
      modelName = 'Apparel Detctor';
      break;
    default:
      break;
  }

  return (
    <div className='over-frame'>
      <div className='over-image'>
        <OverImage response={response} location={location} />
      </div>
      <div className='over-info'>
        <h3 className='model-title'>{modelName}</h3>
        <div className='model-info'>
          <InfoDisplayWithSpinner
            isLoading={isLoading}
            response={response}
            location={location}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
});

export default connect(mapStateToProps)(OverFrame);
