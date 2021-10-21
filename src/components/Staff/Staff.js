import React, { Component } from 'react';

import './Staff.css';

class Staff extends Component {
  state = {
    readmoregracie: false,
    readmoreamy: false,
    readmorekara: false,
    readmorebritt: false,
    readmorenatasha: false,
  };

  changeRead = (e) => {
    e.preventDefault();
    // if (e.target.name === 'readmoregracie') {
    //   this.setState((prevState) => ({
    //     readmoregracie: !prevState.readmoregracie,
    //     readmoreamy: false,
    //     readmorekara: false,
    //     readmorehaley: false,
    //     readmorebritt: false,
    //   }));
    // }
    if (e.target.name === 'readmorenatasha') {
      this.setState((prevState) => ({
        readmorenatasha: !prevState.readmorenatasha,
        readmoreamy: false,
        readmorekara: false,
        readmorehaley: false,
        readmorebritt: false,
      }));
    }
    if (e.target.name === 'readmoreamy') {
      this.setState((prevState) => ({
        readmoreamy: !prevState.readmoreamy,
        readmorekara: false,
        readmorehaley: false,
        readmorebritt: false,
        readmorenatasha: false,
      }));
    }
    // if (e.target.name === 'readmorekara') {
    //   this.setState((prevState) => ({
    //     readmorekara: !prevState.readmorekara,
    //     readmoreamy: false,
    //     readmorehaley: false,
    //     readmorebritt: false,
    //     readmorenatasha: false,
    //   }));
    // }
    if (e.target.name === 'readmorebritt') {
      this.setState((prevState) => ({
        readmorebritt: !prevState.readmorebritt,
        readmoreamy: false,
        readmorekara: false,
        readmorehaley: false,
        readmorenatasha: false,
      }));
    }
  };

  render() {
    // if (this.state.readmoregracie === true) {
    //   var readMoreGrace = (
    //     <p>
    //       Gracie attended Travelers Rest High School and enjoyed being in the
    //       school pageants and this is when she fell in love with makeup. Gracie
    //       also realized in order for your makeup to look great, you need to have
    //       a wonderful skincare routine. Gracie is excited to teach others the
    //       tricks of the trade and latest techniques she learned at school. We
    //       are looking forward to having Gracie at Gracie B's in the near future.
    //     </p>
    //   );
    // }

    if (this.state.readmorenatasha === true) {
      var readMoreNatasha = (
        <p>
          I continue my education with hair shows and classes. I also look
          forward to being in a new salon, and taking on new clients!
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

    // if (this.state.readmorekara === true) {
    //   var readMoreKara = (
    //     <p>
    //       where clients can heal and beautify. I make use of the latest
    //       technologies as well, offering the newest treatments for targeted
    //       answers to any of your skin care concerns. Please feel free to reach
    //       me at <a href='tel:+1843601437'>(864) 360-1437</a>
    //     </p>
    //   );
    // }

    if (this.state.readmorebritt === true) {
      var readMoreBritt = (
        <p>
          , perched at the foot of the Blue Ridge mountains in northern
          Greenville county. I am a mother of Jayce, lover of Jesus, and you can
          find me somewhere in the Sunshine! Hair has been my passion since a
          young age; when I was only a toddler I would chop and style my
          barbie/babydolls hair, and as a teenager I was always the one doing my
          girlfriend's hair and makeup. After high school I decided I wanted to
          make a career out of it, and graduated from hair school at The Academy
          of Hair Technology in 2005. I especially like doing Blondes and men's
          fades as I feel that the two are my strong points. When you are in my
          chair you are more than a client, you're family!
        </p>
      );
    }
    return (
      <div className='staff pt-5 pb-5'>
        <div className='container text-center'>
          <h2>Our Talented Staff</h2>
          <br />
          <div className='row'>
            {/* <div className='col-sm'>
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
            </div> */}

            <div className='col-sm'>
              <div className='pic1 centerBlock'></div>
              <h3>Natasha Pitman</h3>
              <p>
                I have been doing hair since 2013. I love doing color, creative
                color, men and women's cuts as well.
              </p>

              {readMoreNatasha}

              <button
                onClick={this.changeRead}
                className='btn btn-outline-dark'
                name='readmorenatasha'
              >
                {this.state.readmorenatasha ? 'Read Less' : 'Read More'}
              </button>
            </div>

            <div className='col-sm'>
              <div className='pic2 centerBlock'></div>
              <h3>Amy</h3>
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

            {/* <div className='col-sm'>
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
            </div> */}

            <div className='col-sm'>
              <div className='pic5 centerBlock'></div>
              <h3>Brittany</h3>
              <p>
                Hey y'all! My name is Brittany Batson, born and raised in
                Travelers Rest South Carolina
              </p>

              {readMoreBritt}

              <button
                onClick={this.changeRead}
                className='btn btn-outline-dark'
                name='readmorebritt'
              >
                {this.state.readmorebritt ? 'Read Less' : 'Read More'}
              </button>
            </div>

            {/* <div className='col-sm'>
              <div className='pic6 centerBlock'></div>
              <h3>Stephanie</h3>
              <p>
                I am from Easley, SC. I graduated from Upstate College of
                Cosmetology, specializing in blonding, wedding, prom hair and
                makeup
              </p>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Staff;
