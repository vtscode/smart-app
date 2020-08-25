import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectImageUrl } from '../../redux/uploadImage/uploadImage.selectors';

const ImageDisplay = ({ imageUrl }) => {
  return (
    <img
      src={imageUrl}
      alt=''
      style={{ maxWidth: '90%', maxHeight: '90%' }}
      id='inputImage'
    />
  );
};

const mapStateToProps = createStructuredSelector({
  imageUrl: selectImageUrl,
});

export default connect(mapStateToProps)(ImageDisplay);
