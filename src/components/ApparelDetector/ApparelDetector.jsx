import React, { useEffect, Fragment } from 'react';
import OverFrame from '../OverFrame/OverFrame';

import { connect } from 'react-redux';
import { apparelDetector } from '../../redux/clarifaiModels/clarifaiModels.actions';
import { createStructuredSelector } from 'reselect';
import { selectImageUrl } from '../../redux/uploadImage/uploadImage.selectors';
import { selectConcepts } from '../../redux/clarifaiModels/clarifaiModels.selectors';

const ApparelDetector = ({ apparelDetector, concepts, imageUrl, location }) => {
  const locationName = location.pathname.replace('/models/', '');
  useEffect(() => {
    if (!concepts) {
      if (imageUrl) {
        apparelDetector(imageUrl);
      }
    }
  }, [apparelDetector, concepts, imageUrl]);
  return (
    <Fragment>
      <OverFrame response={concepts} location={locationName} />
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  apparelDetector: (imageUrl) => dispatch(apparelDetector(imageUrl)),
});

const mapStateToProps = createStructuredSelector({
  imageUrl: selectImageUrl,
  concepts: selectConcepts,
});

export default connect(mapStateToProps, mapDispatchToProps)(ApparelDetector);
