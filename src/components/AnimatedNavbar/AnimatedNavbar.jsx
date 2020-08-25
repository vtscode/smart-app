import React, { Fragment } from 'react';
import './AnimatedNavbar.scss';
import { Layout,Menu } from "antd";
import { Link, useLocation } from 'react-router-dom';
import riventus from '../../images/logo.png';
import face from '../../images/face.png';
import apparel from '../../images/apparel.png';
import color from '../../images/color.png';
// import Footer from '../Footer/Footer';

const AnimatedNavbar = () => {
  const { pathname }= useLocation();
  return (
    <Fragment>
      <Layout>
        <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[`${pathname}`]}>
            <Menu.Item key={'/'}>
              <Link to='/' className='logo-link'>
                <img
                  src={riventus}
                  alt='RIVENTUS'
                  width="77%"
                  style={{verticalAlign:'top'}}
                />
              </Link>
            </Menu.Item>
            <Menu.Item key={'/models/facerecon'}>
              <Link to='/models/facerecon' className='nav-link'>
                <img src={face} alt="face"/>
                <span className='link-text'>Face Recognition</span>
              </Link>
            </Menu.Item>
            <Menu.Item key={'/models/color'}>
              <Link to='/models/color' className='nav-link'>
                <img src={color} alt="color"/>
                <span className='link-text'>Color Identifier</span>
              </Link>
            </Menu.Item>
            <Menu.Item key={'/models/apparel'}>
              <Link to='/models/apparel' className='nav-link'>
                <img src={apparel} alt="apparel"/>
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
