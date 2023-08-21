import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import Alert from './components/Alert/Alert';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ModelsPage from './pages/ModelsPage/ModelsPage';

import AnimatedNavbar from './components/AnimatedNavbar/AnimatedNavbar';
import { setImageDimensions } from './redux/uploadImage/uploadImage.actions';

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
      <AnimatedNavbar />
      <div className="app-content">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/models" component={ModelsPage} />
        </Switch>
        <Alert />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setImageDimensions: (width, height) => dispatch(setImageDimensions(width, height)),
});

export default connect(null, mapDispatchToProps)(App);
