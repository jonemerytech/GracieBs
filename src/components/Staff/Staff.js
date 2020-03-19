import React, { Component } from 'react';

import './Staff.css';

class Staff extends Component {
  state = {
    readmoregracie: false,
    readmoreamy: false,
    readmorekara: false,
    readmoremac: false
  };

  changeRead = e => {
    e.preventDefault();
    if (e.target.name === 'readmoregracie') {
      this.setState(prevState => ({
        readmoregracie: !prevState.readmoregracie,
        readmoreamy: false,
        readmorekara: false,
        readmorehaley: false,
        readmoremac: false
      }));
    }
    if (e.target.name === 'readmoreamy') {
      this.setState(prevState => ({
        readmoreamy: !prevState.readmoreamy,
        readmoregracie: false,
        readmorekara: false,
        readmorehaley: false,
        readmoremac: false
      }));
    }
    if (e.target.name === 'readmorekara') {
      this.setState(prevState => ({
        readmorekara: !prevState.readmorekara,
        readmoregracie: false,
        readmoreamy: false,
        readmorehaley: false,
        readmoremac: false
      }));
    }
    if (e.target.name === 'readmoremac') {
      this.setState(prevState => ({
        readmoremac: !prevState.readmoremac,
        readmoregracie: false,
        readmoreamy: false,
        readmorekara: false,
        readmorehaley: false
      }));
    }
  };

  render() {
    if (this.state.readmoregracie === true) {
      var readMoreGrace = (
        <p>
          Gracie attended Travelers Rest High School and enjoyed being in the
          school pageants and this is when she fell in love with makeup. Gracie
          also realized in order for your makeup to look great, you need to have
          a wonderful skincare routine. Gracie is excited to teach others the
          tricks of the trade and latest techniques she learned at school. We
          are looking forward to having Gracie at Gracie B's in the near future.
        </p>
      );
    }

    if (this.state.readmoreamy === true) {
      var readMoreAmy = (
        <p>
          years, since 1996 in South Carolina. I am a resident of Travelers
          Rest. I practice in healthy hair and just about anything that pertains
          to hair and any color techniques from short to long, straight to
          curly. I am also blessed to be the manager at Gracie B's salon.
        </p>
      );
    }

    if (this.state.readmorekara === true) {
      var readMoreKara = (
        <p>
          where clients can heal and beautify. I make use of the latest
          technologies as well, offering the newest treatments for targeted
          answers to any of your skin care concerns. Please feel free to reach
          me at <a href='tel:+1843601437'>(864) 360-1437</a>
        </p>
      );
    }

    if (this.state.readmoremac === true) {
      var readMoreMac = (
        <p>
          family,friends,taking trips to the mountains and of
          course...shopping!! I have been doing hair for about 2 years now and I
          have loved every minute of it! I am so excited to be apart of Gracie
          B's salon and continue to build my clientele here! Please feel free to
          reach me at <a href='tel:+1846076588'>(864) 607-6588</a>
        </p>
      );
    }
    return (
      <div className='staff pt-5 pb-5'>
        <div className='container text-center'>
          <h2>Our Talented Staff</h2>
          <br />
          <div className='row'>
            <div className='col-sm'>
              <div className='pic1 centerBlock'></div>
              <h3>Coming Soon: Gracie Bayne</h3>
              <p>
                Gracie's love for makeup and skin care is what motivated her to
                attend Kenneth Shuler.
              </p>

              {readMoreGrace}

              <button
                onClick={this.changeRead}
                className='btn btn-outline-dark'
                name='readmoregracie'
              >
                {this.state.readmoregracie ? 'Read Less' : 'Read More'}
              </button>
            </div>

            <div className='col-sm'>
              <div className='pic2 centerBlock'></div>
              <h3>Amy Wilson</h3>
              <p>
                I am a single mother of three beautiful children, a Christian
                and a licensed cosmetoligist for 22
              </p>

              {readMoreAmy}

              <button
                onClick={this.changeRead}
                className='btn btn-outline-dark'
                name='readmoreamy'
              >
                {this.state.readmoreamy ? 'Read Less' : 'Read More'}
              </button>
            </div>

            <div className='col-sm'>
              <div className='pic3 centerBlock'></div>
              <h3>Kara</h3>
              <p>
                My mission is to offer unsurpassed personalized skin care in a
                friendly, nurturing enviornment
              </p>

              {readMoreKara}

              <button
                onClick={this.changeRead}
                className='btn btn-outline-dark'
                name='readmorekara'
              >
                {this.state.readmorekara ? 'Read Less' : 'Read More'}
              </button>
            </div>

            <div className='col-sm'>
              <div className='pic5 centerBlock'></div>
              <h3>McKenzie</h3>
              <p>
                I'm McKenzie, 23 years old. Born and raised in Easley, SC. I
                enjoy spending time with my
              </p>

              {readMoreMac}

              <button
                onClick={this.changeRead}
                className='btn btn-outline-dark'
                name='readmoremac'
              >
                {this.state.readmoremac ? 'Read Less' : 'Read More'}
              </button>
            </div>

            <div className='col-sm'>
              <div className='pic6 centerBlock'></div>
              <h3>Stephanie Landreth</h3>
              <p>
                I am from Easley, SC. I graduated from Upstate College of
                Cosmetology, specializing in blonding, wedding, prom hair and
                makeup
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Staff;
