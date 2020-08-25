import { combineReducers } from 'redux';
import alerts from './alert/alert.reducer';
import uploadImage from './uploadImage/uploadImage.reducer';
import models from './clarifaiModels/clarifaiModels.reducer';

const rootReducer = combineReducers({ alerts, uploadImage, models });

export default rootReducer;
