import React, { Component } from 'react';

import './Services.css';

import Wig from '../../assets/wig.png';
import Lotion from '../../assets/lotion.png';
import Wax from '../../assets/wax.png';
import Cosmetics from '../../assets/cosmetics.png';

class Services extends Component {
  state = {
    viewAllPeels: false,
    viewAllFacials: false,
    viewAllWax: false,
  };

  viewMore = (e) => {
    e.preventDefault();
    if (e.target.name === 'viewAllPeels') {
      this.setState((prevState) => ({
        viewAllPeels: !prevState.viewAllPeels,
        viewAllFacials: false,
        viewAllWax: false,
      }));
    }

    // if (e.target.name === 'viewAllFacials') {
    //   this.setState((prevState) => ({
    //     viewAllFacials: !prevState.viewAllFacials,
    //     viewAllPeels: false,
    //     viewAllWax: false,
    //   }));
    // }

    if (e.target.name === 'viewAllWax') {
      this.setState((prevState) => ({
        viewAllWax: !prevState.viewAllWax,
        viewAllPeels: false,
        viewAllFacials: false,
      }));
    }
  };
  render() {
    if (this.state.viewAllPeels === true) {
      var viewMorePeels = (
        <React.Fragment>
          <li className='list-group-item text-left'>
            <strong>Ormedic Lift</strong>

            <hr />

            <p className='text-center'>
              Helps to rebalance, regenerate, and restore skin with stem cells
              helping you maintain youthfulness of skin.
            </p>
          </li>

          <li className='list-group-item text-left'>
            <strong>Signature Face Lift</strong>

            <hr />

            <p className='text-center'>
              Combination of vitamin C, hydroxy acids, and enzymes to speed up
              cellular renewal. Supports redness prone skin and botanical
              detoxifying and energizing complexes giving noticeable results in
              one session.
            </p>
          </li>

          <li className='list-group-item text-left'>
            <strong>Special O2 Lift A breath of fresh skin - $85</strong>

            <hr />

            <p className='text-center'>
              Treatment designed to exfoliate and oxygenate. Removes all surface
              impurities while balancing and optimizing skins pH. Helping with
              aging, irritation, and pigmentation. Leaving your skin rejuvenated
              and illuminated.
            </p>
          </li>
        </React.Fragment>
      );
    }

    // if (this.state.viewAllFacials === true) {
    //   var viewMoreFacials = (
    //     <React.Fragment>
    //       <li className='list-group-item text-left'>
    //         <strong>Anti-Aging Facial - 1hr $70</strong>

    //         <hr />

    //         <p className='text-center'>
    //           Customized facial for pre-mature, aging skin. Includes special
    //           treatments to help reduce the appearance of fine lines and
    //           wrinkles, while hydrating and plumping the skin.
    //         </p>
    //       </li>

    //       <li className='list-group-item text-left'>
    //         <strong>Purifying Facial - 1hr $70</strong>

    //         <hr />

    //         <p className='text-center'>
    //           Designed for oily and acne skin. It will help minimize oil
    //           production and large congested pores. Includes a deep pore
    //           cleansing, exfoliation, facial extractions (if needed), and
    //           customized facial mask.
    //         </p>
    //       </li>

    //       <li className='list-group-item text-left'>
    //         <strong>Specialty Facial - 1hr $80</strong>

    //         <hr />

    //         <p className='text-center'>
    //           Seasons come and go, but your skin can always glow. With this
    //           specialty facial, you will receive a deep cleanse, seasonal enzyme
    //           facial exfoliation treatment, extractions (if needed), facial
    //           massage, and a seasonal face mask.
    //         </p>
    //       </li>

    //       <li className='list-group-item text-left'>
    //         <strong>Back Facial - 40min $40</strong>

    //         <hr />

    //         <p className='text-center'>
    //           Designed to help you relax and give your back the treatment it
    //           deserves. Includes a deep cleanse, exfoliation, massage, and a
    //           mask.
    //         </p>
    //       </li>

    //       <li className='list-group-item text-left'>
    //         <strong>High Frequency Treatment - $35 add to facial $20</strong>

    //         <hr />

    //         <p className='text-center'>
    //           Helps to prevent stubborn acne, shrink enlarged pores, reduces the
    //           appearance of fine lines and wrinkles, decongest puffy eyes, fade
    //           dark eye circles, rejuvenate the condition of the scalp and
    //           nourish hair follicles for healthier hair.
    //         </p>
    //       </li>

    //       <li className='list-group-item text-left'>
    //         <strong>Microdermabrasion - $45 add to facial $20</strong>

    //         <hr />

    //         <p className='text-center'>
    //           Microdermabrasion helps with dull skin, soften fine lines, smooths
    //           out coarse skin texture, reduces acne, and pore sizes, fades
    //           scars, and brown spots, and stimulates cell turnover and creation
    //           of collagen.
    //         </p>
    //       </li>
    //     </React.Fragment>
    //   );
    // }

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
                  <strong>Color starting at $65</strong>
                </li>
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='col card-s' id='peels'>
              <img src={Lotion} className='cir-bg' alt='Lotion' />
              <br />
              <br />
              <p>
                <u>Peels</u>
              </p>
              <p>*Each peel is $75 and a bundle of 4 for $250</p>
              <ul className='list-group'>
                <li className='list-group-item text-left'>
                  <strong>Wrinkle Lift</strong>

                  <hr />

                  <p className='text-center'>
                    A combination of glycolic acids with retinol to visibly
                    reduce the appearance of fine lines. Leaving your skin firm
                    and revitalized.
                  </p>
                </li>

                <li className='list-group-item text-left'>
                  <strong>Lightening Lift</strong>

                  <hr />

                  <p className='text-center'>
                    Combination of the most innovative and effective botanical
                    brighteners to help with pigmentation, aging, dry/dehydrated
                    skin, and redness.
                  </p>
                </li>

                {viewMorePeels}

                <button
                  onClick={this.viewMore}
                  className='btn btn-outline-dark'
                  name='viewAllPeels'
                >
                  {this.state.viewAllPeels ? 'View Less' : 'View More'}
                </button>
              </ul>
            </div>
          </div>
          {/* <div className='row'>
            <div className='col card-s'>
              <img src={Facial} className='cir-bg' alt='Facial' />
              <br />
              <br />
              <p>
                <u>Facials</u>
              </p>
              <ul className='list-group'>
                <li className='list-group-item text-left'>
                  <strong>Express Facial - 35min $40</strong>

                  <hr />

                  <p className='text-center'>
                    This facial is designed for people on the go and who needs a
                    little pick me up. It includes a deep cleanse, exfoliation,
                    small facial massage, and a mask to leave you feeling
                    refreshed and renwed.
                  </p>
                </li>

                <li className='list-group-item text-left'>
                  <strong>Signature Facial - 1hr $60</strong>

                  <hr />

                  <p className='text-center'>
                    This facial is customized to meet each individual client. It
                    includes a deep cleanse, exfoliation, extractions (if
                    needed), facial massage and a customized treatment mask.
                  </p>
                </li>

                {viewMoreFacials}

                <button
                  onClick={this.viewMore}
                  className='btn btn-outline-dark'
                  name='viewAllFacials'
                >
                  {this.state.viewAllFacials ? 'View Less' : 'View More'}
                </button>
              </ul>
            </div>
          </div> */}
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
          <div className='row'>
            <div className='col card-s'>
              <img src={Cosmetics} className='cir-bg' alt='Cosmetics' />
              <br />
              <br />
              <p>
                <u>Other Services</u>
              </p>
              <ul className='list-group'>
                <li className='list-group-item text-left'>
                  <strong>Lash tint - $15</strong>
                </li>

                <li className='list-group-item text-left'>
                  <strong>Eyebrow Tint - $20</strong>
                </li>

                <li className='list-group-item text-left'>
                  <strong>Eyelash lift and tint - $60</strong>
                </li>
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
                  5<br />
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
