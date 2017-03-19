import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

import AboutUsTxt from './AboutUsTxt';
import AboutUsGallery from './AboutUsGallery';

export default class AboutUs extends Component {
  render() {
    return(
      <div className='about-us-main'>
        <h1>About Us</h1>
        <AboutUsTxt />
        <AboutUsGallery />
      </div>
    )
  }
}