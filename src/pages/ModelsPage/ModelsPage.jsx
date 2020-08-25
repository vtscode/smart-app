import React from 'react';
import './ModelsPage.scss';
import { Route } from 'react-router-dom';
import ModelFrame from '../../components/ModelFrame/ModelFrame';
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition';
import ColorIdentifier from '../../components/ColorIdentifier/ColorIdentifier';
import ApparelDetector from '../../components/ApparelDetector/ApparelDetector';

const ModelsPage = ({ match }) => {
  return (
    <div className='models-page'>
      <ModelFrame />
      <Route
        exact
        path={`${match.path}/facerecon`}
        component={FaceRecognition}
      />
      <Route exact path={`${match.path}/color`} component={ColorIdentifier} />
      <Route exact path={`${match.path}/apparel`} component={ApparelDetector} />
    </div>
  );
};

export default ModelsPage;
