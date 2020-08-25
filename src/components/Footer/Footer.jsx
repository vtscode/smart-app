import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <span className='my-name'>Fernando Brito</span>
      <div className='a-tags'>
        <a
          href='https://fernandobrito.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa fa-globe fa-2x icon' />
        </a>

        <a
          href='mailto:Fernando_BritoA@hotmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fas fa-envelope fa-2x icon' />
        </a>

        <a
          href='https://www.linkedin.com/in/juan-fernando-brito-aguilar-a6b347199/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa fa-linkedin fa-2x icon' />
        </a>

        <a
          href='https://github.com/FernandoBritoA'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa fa-github fa-2x icon' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
