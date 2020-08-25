import React from 'react';
import BoundingBox from '../BoundingBox/BoundingBox';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectImageDimensions } from '../../redux/uploadImage/uploadImage.selectors';

const OverImage = ({ response, imageDimensions, location }) => {
  const width = imageDimensions.width;
  const height = imageDimensions.height;

  let overImage;
  if (response) {
    switch (location) {
      case 'color':
        overImage = null;
        break;
      case 'facerecon':
      case 'apparel':
        overImage = response.map(({ id, ...props }) => (
          <BoundingBox key={id} width={width} height={height} {...props} />
        ));
        break;
      default:
        break;
    }
  }

  return (
    <div
      style={{
        width: width,
        height: height,
        position: 'absolute',
      }}
    >
      {overImage}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  imageDimensions: selectImageDimensions,
});

export default connect(mapStateToProps)(OverImage);
