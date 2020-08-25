import uploadImageActionTypes from './uploadImage.actionTypes';

const INITIAL_STATE = {
  imageUrl: 'https://i.ibb.co/GpfCTdT/sample.jpg',
  isImageLoading: false,
  imageDimensions: { width: 519, height: 346 },
  error: undefined,
};

const uploadImageReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case uploadImageActionTypes.UPLOAD_IMAGE_START:
      return {
        ...state,
        isImageLoading: true,
        imageUrl: null,
      };
    case uploadImageActionTypes.UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        isImageLoading: false,
        imageUrl: payload,
      };
    case uploadImageActionTypes.UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        isImageLoading: false,
        error: payload,
      };
    case uploadImageActionTypes.SET_IMAGE_DIMENSIONS:
      return {
        ...state,
        imageDimensions: payload,
      };

    default:
      return state;
  }
};
export default uploadImageReducer;
