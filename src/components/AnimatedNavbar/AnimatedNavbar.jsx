import React, { Fragment } from 'react';
import './AnimatedNavbar.scss';
import { Layout,Menu } from "antd";
import { Link } from 'react-router-dom';
import riventus from '../../images/logo.png';
// import face from '../../images/face.png';
// import apparel from '../../images/apparel.png';
// import color from '../../images/color.png';
// import Footer from '../Footer/Footer';

const AnimatedNavbar = () => {
  return (
    <Fragment>
      <Layout>
        <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
            <Menu.Item key="0">
              <Link to='/' className='logo-link'>
                <img
                  src={riventus}
                  alt='RIVENTUS'
                  width="43%"
                />
                <span className='link-text logo-text'>Smart App</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to='/models/facerecon' className='nav-link'>
                <span className='link-text'>Face Recognition</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/models/color' className='nav-link'>
                <span className='link-text'>Color Identifier</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='/models/apparel' className='nav-link'>
                <span className='link-text'>Apparel Detector</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Layout.Header>
      </Layout>
    </Fragment>
  );
};

export default AnimatedNavbar;
