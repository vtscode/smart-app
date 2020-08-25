import React from 'react';
import './ModelFrame.scss';
import ImageDisplay from '../ImageDisplay/ImageDisplay';
import CustomImageButton from '../CustomImageButton/CustomImageButton';
import WithSpinner from '../WithSpinner/WithSpinner';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsImageLoading } from '../../redux/uploadImage/uploadImage.selectors';

const ImageDisplayWithSpinner = WithSpinner(ImageDisplay);

const ModelFrame = ({ isImageLoading }) => {
  return (
    <div className='model-frame'>
      <div className='image-container'>
        <ImageDisplayWithSpinner isLoading={isImageLoading} />
      </div>
      <div className='model-info-container'>
        <div className='info-skeleton'>
          <CustomImageButton />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isImageLoading: selectIsImageLoading,
});

export default connect(mapStateToProps)(ModelFrame);
