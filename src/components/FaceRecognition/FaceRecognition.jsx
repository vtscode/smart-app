import React, { useEffect, Fragment } from 'react';
import OverFrame from '../OverFrame/OverFrame';

import { connect } from 'react-redux';
import { faceRecognition } from '../../redux/clarifaiModels/clarifaiModels.actions';
import { createStructuredSelector } from 'reselect';
import { selectImageUrl } from '../../redux/uploadImage/uploadImage.selectors';
import { selectFaces } from '../../redux/clarifaiModels/clarifaiModels.selectors';

const FaceRecognition = ({ faceRecognition, imageUrl, faces, location }) => {
  const locationName = location.pathname.replace('/models/', '');
  useEffect(() => {
    if (!faces) {
      if (imageUrl) {
        faceRecognition(imageUrl);
      }
    }
  }, [faceRecognition, imageUrl, faces]);

  return (
    <Fragment>
      <OverFrame response={faces} location={locationName} />
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  faceRecognition: (imageUrl) => dispatch(faceRecognition(imageUrl)),
});

const mapStateToProps = createStructuredSelector({
  imageUrl: selectImageUrl,
  faces: selectFaces,
});

export default connect(mapStateToProps, mapDispatchToProps)(FaceRecognition);
