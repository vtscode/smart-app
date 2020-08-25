import React, { useEffect, Fragment } from 'react';
import OverFrame from '../OverFrame/OverFrame';

import { connect } from 'react-redux';
import { colorIdentifier } from '../../redux/clarifaiModels/clarifaiModels.actions';
import { createStructuredSelector } from 'reselect';
import { selectImageUrl } from '../../redux/uploadImage/uploadImage.selectors';
import { selectColors } from '../../redux/clarifaiModels/clarifaiModels.selectors';

const ColorIdentifier = ({ colorIdentifier, imageUrl, colors, location }) => {
  const locationName = location.pathname.replace('/models/', '');
  useEffect(() => {
    if (!colors) {
      if (imageUrl) {
        colorIdentifier(imageUrl);
      }
    }
  }, [colorIdentifier, imageUrl, colors]);
  return (
    <Fragment>
      <OverFrame response={colors} location={locationName} />
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  colorIdentifier: (imageUrl) => dispatch(colorIdentifier(imageUrl)),
});

const mapStateToProps = createStructuredSelector({
  imageUrl: selectImageUrl,
  colors: selectColors,
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorIdentifier);
