import React from 'react';
import './CustomImageButton.scss';

import { connect } from 'react-redux';
import { uploadImage } from '../../redux/uploadImage/uploadImage.actions';
import { setAlert } from '../../redux/alert/alert.actions';
import { clearResponse } from '../../redux/clarifaiModels/clarifaiModels.actions';

const CustomImageButton = ({ uploadImage, setAlert, clearResponse }) => {
  const fileSelectHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileName = file.name;
      const idxDot = fileName.lastIndexOf('.') + 1;
      const extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
      if (
        extFile === 'jpg' ||
        extFile === 'jpeg' ||
        extFile === 'png' ||
        extFile === 'webp'
      ) {
        clearResponse();
        uploadImage(file);
      } else {
        setAlert('Please enter a valid image format', 'danger');
        const frm = document.getElementsByName('form')[0];
        frm.reset();
      }
    }
  };

  return (
    <form name='form' className='custom-image-button'>
      <input
        type='file'
        name='image'
        id='images'
        accept='image/*'
        className='hidden'
        onChange={(e) => fileSelectHandler(e)}
      />
      <label className='image-input' htmlFor='images'>
        <i className='fa fa-file-image-o icon' aria-hidden='true' /> Try your
        own image
      </label>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setAlert: (msg, type) => dispatch(setAlert(msg, type)),
  uploadImage: (imageFile) => dispatch(uploadImage(imageFile)),
  clearResponse: () => dispatch(clearResponse()),
});

export default connect(null, mapDispatchToProps)(CustomImageButton);
