import React from 'react';

import './MobileHours.css';

export default function MobileHours() {
  return (
    <div className='mobtime pt-5 pb-5'>
      <div className='container'>
        <h4 className='text-center'>Our Hours</h4>
        <h6 className='text-center text-white'>
          <strong>*Hours may vary by appointment</strong>
        </h6>
        <div className='row'>
          <div className='col card-s'>
            Open Hours
            <br />
            Tuesday - Saturday
            <br />
            9am-6pm
          </div>
          <div className='col card-s'>
            Call Us!
            <br />
            <br />
            <a href='tel:+18642410450'>(864) 241-0450</a>
          </div>
        </div>
        <div className='row'>
          <div className='col card-s'>
            Click For Directions
            <br />
            <br />
            <a
              href='https://goo.gl/maps/as7LZejtpoXjAVRr9'
              target='_blank'
              rel='noopener noreferrer'
            >
              Click Me
            </a>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
