import React, { Component } from 'react';

import './Services.css';

import Wig from '../../assets/wig.png';
import Wax from '../../assets/wax.png';

class Services extends Component {
  state = {
    viewAllWax: false,
  };

  viewMore = (e) => {
    e.preventDefault();

    if (e.target.name === 'viewAllWax') {
      this.setState((prevState) => ({
        viewAllWax: !prevState.viewAllWax,
        viewAllPeels: false,
        viewAllFacials: false,
      }));
    }
  };
  render() {
    if (this.state.viewAllWax === true) {
      var viewMoreWax = (
        <React.Fragment>
          <li className='list-group-item text-left'>
            <strong>Underarms - $20</strong>
          </li>

          <li className='list-group-item text-left'>
            <strong>Half arm - $15</strong>
          </li>

          <li className='list-group-item text-left'>
            <strong>Full arm - $30</strong>
          </li>

          <li className='list-group-item text-left'>
            <strong>Half leg - $25</strong>
          </li>

          <li className='list-group-item text-left'>
            <strong>Full leg - $55</strong>
          </li>
        </React.Fragment>
      );
    }
    return (
      <div className='services text-md-center pt-5 pb-5' id='services'>
        <h2 className='text-center'>Here's what we offer ...</h2>
        <div className='container'>
          <div className='row'>
            <div className='col card-s'>
              <img src={Wig} className='cir-bg' alt='Wig' />
              <br />
              <br />
              <p>
                <u>Cut</u>
              </p>
              <ul className='list-group'>
                <li className='list-group-item text-left'>
                  <strong>Shampoo/cut/blowout starting at $35</strong>
                </li>
                <li className='list-group-item text-left'>
                  <strong>Blowout starting at $20</strong>
                </li>
                <li className='list-group-item text-left'>
                  <strong>Foil starting at $75</strong>
                </li>
                <li className='list-group-item text-left'>
                  <strong>Color starting at $70</strong>
                </li>
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='col card-s'>
              <img src={Wax} className='cir-bg' alt='Wax' />
              <br />
              <br />
              <p>
                <u>Waxing</u>
              </p>
              <ul className='list-group'>
                <li className='list-group-item text-left'>
                  <strong>Eyebrows - $10</strong>
                </li>

                <li className='list-group-item text-left'>
                  <strong>Lip - $10</strong>
                </li>

                <li className='list-group-item text-left'>
                  <strong>Chin - $10</strong>
                </li>

                <li className='list-group-item text-left'>
                  <strong>Sideburns - $10</strong>
                </li>

                <li className='list-group-item text-left'>
                  <strong>Full Face - $30</strong>
                </li>

                {viewMoreWax}

                <button
                  onClick={this.viewMore}
                  className='btn btn-outline-dark'
                  name='viewAllWax'
                >
                  {this.state.viewAllWax ? 'View Less' : 'View More'}
                </button>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <div className='testmon pt-5 pb-5'>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <h4>
                  100+
                  <br />
                  Satisfied Customers
                </h4>
              </div>
              <div className='col'>
                <h4>
                  2<br />
                  Talented Specialists
                </h4>
              </div>
              <div className='col' id='gallery'>
                <h4>
                  1<br />
                  Convenient Location
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
