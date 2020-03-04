import React, { Component } from 'react';

import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <section id='contact'>
          <div className='row'>
            <div className='col1'>
              <iframe
                className='map'
                frameBorder='0'
                style={{ border: '0' }}
                src='https://www.google.com/maps/embed/v1/place?key=AIzaSyDUfM1acnylfjYkrCBfIyTS0fEStUC4zLY&q=Graciebs+2403+poinsett+hwy+Greenville+SC+29609'
                allowFullScreen
                title='iframe'
              ></iframe>
            </div>
            <div className='col2 flex' id='glitter'>
              <h1 className='text-center'>Contact Us:</h1>
              <br />
              <h2 className='text-left'>
                <strong>Phone Number:</strong>
              </h2>
              <h4 className='mt-2'>
                <a href='tel:+18642410450'>(864) 241-0450</a>
              </h4>
              <hr />
              <h2 className='text-left'>
                <strong>Facebook:</strong>
              </h2>
              <h4 className='mt-2'>
                <a
                  href='https://www.facebook.com/Gracie-Bs-Salon-733150640227595/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-facebook-f fa-2x'></i>
                </a>
              </h4>
            </div>
          </div>
        </section>

        <div className='footer pt-2 pb-2'>
          <div className='container'>
            <div className='row text-center'>
              <div className='col'>Gracie B's Salon &copy; 2019</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
