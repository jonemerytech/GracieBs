import React from 'react';

import './ThinNav.css';

export const ThinNav = () => {
  return (
    <div className='top-bar pt-2 pb-2'>
      <div className='container'>
        <div className='row text-center'>
          <div className='col'>
            <span>
              <strong>Contact Us</strong> : (864) 241-0450
            </span>
          </div>
          <div className='col'>
            <span>
              <strong>Open Hours</strong> : Tues-Sat : 9am-6pm
            </span>
          </div>
          <div className='col'>
            <span>
              <strong>*Hours may vary by appointment</strong>
            </span>
          </div>
          <div className='col'>
            <span>
              <a
                href='https://www.facebook.com/Gracie-Bs-Salon-733150640227595/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <strong>
                  <i className='fab fa-facebook-f text-white'></i>
                </strong>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
