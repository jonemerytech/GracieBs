import React, { Component } from 'react';
import './Gallery.css';
import LazyLoad from 'react-lazyload';
import Spinner from '../Spinner/Spinner';
var listOfImages = [];

class Gallery extends Component {
  importAll(r) {
    return r.keys().map(r);
  }
  UNSAFE_componentWillMount() {
    listOfImages = this.importAll(
      require.context('../../assets/Gallery/', false, /\.(png|jpe?g|svg)$/)
    );
  }
  render() {
    return (
      <div className='wrapper pt-5 pb-5 text-center'>
        <h2 className='pb-5'>Gallery</h2>
        <div className='masonry'>
          {listOfImages.map((image, index) => (
            <LazyLoad placeholder={<Spinner />} key={index}>
              <div className='brick'>
                <img src={image} alt='info'></img>
              </div>
            </LazyLoad>
          ))}
        </div>
      </div>
    );
  }
}

export default Gallery;
