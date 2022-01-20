import React, { Component } from 'react';

import './Staff.css';

class Staff extends Component {
  state = {
    readmoreamy: false,
    readmorebritt: false,
    readmorealyvia: false,
  };

  changeRead = (e) => {
    e.preventDefault();
    if (e.target.name === 'readmoreamy') {
      this.setState((prevState) => ({
        readmoreamy: !prevState.readmoreamy,
        readmorebritt: false,
        readmorealyvia: false,
      }));
    }
    if (e.target.name === 'readmorebritt') {
      this.setState((prevState) => ({
        readmorebritt: !prevState.readmorebritt,
        readmoreamy: false,
        readmorealyvia: false,
      }));
    }
    if (e.target.name === 'readmorealyvia') {
      this.setState((prevState) => ({
        readmorealyvia: !prevState.readmorealyvia,
        readmoreamy: false,
        readmorebritt: false,
      }));
    }
  };

  render() {
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

    if (this.state.readmorebritt === true) {
      var readMoreBritt = (
        <p>
          perched at the foot of the Blue Ridge mountains in northern
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
    if (this.state.readmorealyvia === true) {
      var readMoreAlyvia = (
        <p>
          salon my whole life. My specialty's are hair color, highlighting, and makeup. Hair is my passion and I would love to have you in my chair!
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

            <div className='col-sm'>
              <div className='pic2 centerBlock'></div>
              <h3>Brittany</h3>
              <p>
                Hey y'all! My name is Brittany Batson, born and raised in
                Travelers Rest South Carolina,
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

            <div className='col-sm'>
              <div className='pic3 centerBlock'></div>
              <h3>Alyvia</h3>
              <p>
                I have been a licensed cosmetologist since 2021 but have grown up in a
              </p>

              {readMoreAlyvia}

              <button
                onClick={this.changeRead}
                className='btn btn-outline-dark'
                name='readmorealyvia'
              >
                {this.state.readmorealyvia ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Staff;
