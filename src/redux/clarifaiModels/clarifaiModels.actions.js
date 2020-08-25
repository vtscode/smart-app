import clarifaiModelsActionTypes from './clarifaiModels.actionTypes';
import Clarifai from 'clarifai';
import { setImageDimensions } from '../uploadImage/uploadImage.actions';

const app = new Clarifai.App({
  // apiKey: '8a30a594afae4ebcb9d0bb35103a89a4',  // yg lama
  apiKey: 'b3aef77b71f6459194e7c52bb7abd863', // yang baru
  // apiKey: "713ab17e1d3a4fc3b1cab6000235afea", //riventus API key
});

const predictionStart = () => ({
  type: clarifaiModelsActionTypes.PREDICTION_START,
});
const predictionSucess = (response) => ({
  type: clarifaiModelsActionTypes.PREDICTION_SUCCESS,
  payload: response,
});
const predictionFailure = () => ({
  type: clarifaiModelsActionTypes.PREDICTION_FAILURE,
});

export const clearResponse = () => ({
  type: clarifaiModelsActionTypes.CLEAR_RESPONSE,
});

export const colorIdentifier = (imageUrl) => {
  return async (dispatch) => {
    dispatch(predictionStart());
    try {
      const response = await app.models.predict(Clarifai.COLOR_MODEL, imageUrl);
      const colors = response.rawData.outputs[0].data.colors;
      dispatch(predictionSucess({ colors }));
    } catch (error) {
      dispatch(predictionFailure());
    }
  };
};

export const faceRecognition = (imageUrl) => {
  return async (dispatch) => {
    dispatch(predictionStart());
    try {
      const response = await app.models.predict(
        Clarifai.FACE_DETECT_MODEL,
        imageUrl
      );
      const faces = response.outputs[0].data.regions;
      dispatch(predictionSucess({ faces }));

      const image = await document.getElementById('inputImage');
      const width = image.clientWidth;
      const height = image.clientHeight;
      dispatch(setImageDimensions(width, height));
    } catch (error) {
      dispatch(predictionFailure());
    }
  };
};

export const apparelDetector = (imageUrl) => {
  return async (dispatch) => {
    dispatch(predictionStart());
    try {
      const response = await app.models.predict(
        '72c523807f93e18b431676fb9a58e6ad',
        imageUrl
      );

      const concepts = response.outputs[0].data.regions;
      dispatch(predictionSucess({ concepts }));
      const image = await document.getElementById('inputImage');
      const width = image.clientWidth;
      const height = image.clientHeight;
      dispatch(setImageDimensions(width, height));
    } catch (error) {
      dispatch(predictionFailure());
    }
  };
};
