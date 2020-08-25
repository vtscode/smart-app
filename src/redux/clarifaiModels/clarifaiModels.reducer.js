import clarifaiModelsActionTypes from './clarifaiModels.actionTypes';

const INITIAL_STATE = {
  response: { faces: null, colors: null, concepts: null },
  isLoading: true,
};

const clarifaiModelsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case clarifaiModelsActionTypes.PREDICTION_START:
      return {
        ...state,
        isLoading: true,
      };

    case clarifaiModelsActionTypes.PREDICTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: { ...state.response, ...payload },
      };

    case clarifaiModelsActionTypes.PREDICTION_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case clarifaiModelsActionTypes.CLEAR_RESPONSE:
      return {
        ...state,
        response: { faces: null, colors: null, concepts: null },
        isLoading: true,
      };

    default:
      return state;
  }
};
export default clarifaiModelsReducer;
