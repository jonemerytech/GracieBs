import React, { useState, useEffect } from 'react';
import './Welcome.css';

import Logo from '../../assets/logo.png';
import LogoWhite from '../../assets/logoWhite.png';

export const Welcome = () => {
  const [showLogo, setShowLogo] = useState('navbar-brand');
  const [showNav, setShowNav] = useState('');
  const [showMobileNav, setShowMobileNav] = useState('');
  const [showChangeColor, setShowChangeColor] = useState('');
  let Change = false;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      var scrolled = window.pageYOffset;

      if (scrolled >= 1) {
        setShowMobileNav('mobileNav');
      } else {
        setShowMobileNav('');
      }

      if (scrolled >= 729) {
        setShowLogo('addLogo');
        setShowNav('changeNav');
      } else {
        setShowLogo('navbar-brand');
        setShowNav('');
      }
    });
  });
  return (
    <div className='welcome' id='home'>
      <div className='overlay'>
        <nav
          className={`navbar navbar-expand-lg nav-padding ${showNav} ${showMobileNav} ${showChangeColor}`}
          id='home'
        >
          <div className={showLogo}>
            <img
              src={LogoWhite}
              style={{ maxHeight: '50px' }}
              className='d-inline-block align-top post'
              alt="Gracie B's"
            />
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => {
              Change = !Change;

              if (Change === true) {
                setShowChangeColor('changeColor');
              } else {
                setShowChangeColor('');
              }
            }}
          >
            <span className='menu__icon menu__icon--open'>
              <span>
                <i className='fas fa-bars'></i>
              </span>
            </span>
            <span
              className='menu__icon menu__icon--close'
              onClick={() => {
                Change = !Change;

                if (Change === true) {
                  setShowChangeColor('changeColor');
                } else {
                  setShowChangeColor('');
                }
              }}
            >
              <span>
                <i className='fas fa-times'></i>
              </span>
            </span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-end nav-padding'
            id='navbarNav'
          >
            <ul className='navbar-nav post'>
              <li className='nav-item'>
                <a className='nav-link' href='#top'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#about'>
                  About Us
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#gallery'>
                  Gallery
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#services'>
                  Services
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='text-md-center main'>
          <img src={Logo} alt="Gracie B's" />
          <h1>Not your average salon,</h1>
          <h3>We're a one stop shop!</h3>
          <br />
          <br />
          <br />
          <a className='rounded-btn' href='#services' id='about'>
            Learn More
          </a>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
