import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import Particles from 'react-particles-js';
import Alert from './components/Alert/Alert';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ModelsPage from './pages/ModelsPage/ModelsPage';

import AnimatedNavbar from './components/AnimatedNavbar/AnimatedNavbar';
import { setImageDimensions } from './redux/uploadImage/uploadImage.actions';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

function App({ setImageDimensions }) {
  const updateImageSize = () => {
    const img = document.getElementById('inputImage');
    if (img) {
      setImageDimensions(img.clientWidth, img.clientHeight);
    }
  };
  window.addEventListener('resize', updateImageSize);
  return (
    <div>
      {<Particles className='particles' params={particlesOptions} />}
      <AnimatedNavbar />
      <div className='app-content'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/models' component={ModelsPage} />
        </Switch>
        <Alert />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setImageDimensions: (width, height) =>
    dispatch(setImageDimensions(width, height)),
});

export default connect(null, mapDispatchToProps)(App);
