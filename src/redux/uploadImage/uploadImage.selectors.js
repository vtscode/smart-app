import { createSelector } from 'reselect';

const selectUploadImage = (state) => state.uploadImage;

export const selectImageUrl = createSelector(
  [selectUploadImage],
  (uploadImage) => (uploadImage.imageUrl ? uploadImage.imageUrl : null)
);

export const selectIsImageLoading = createSelector(
  [selectUploadImage],
  (uploadImage) => uploadImage.isImageLoading
);

export const selectImageDimensions = createSelector(
  [selectUploadImage],
  (uploadImage) => uploadImage.imageDimensions
);
