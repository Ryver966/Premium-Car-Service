import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

import AboutUsGallery from './AboutUsGallery';

export default class AboutUs extends Component {
  render() {
    return(
      <div className='about-us-main'>
        <h1>About Us</h1>
        <div className='article'>
          <p>
            Nullam semper pulvinar gravida. Curabitur orci tellus, egestas nec lacinia non, rhoncus sit amet lectus. Vivamus quis nisi magna. In tincidunt, felis eget posuere viverra, felis turpis euismod odio, vitae bibendum neque tortor nec ex. Fusce sagittis, ligula sit amet facilisis ultrices, enim dui vehicula ligula, nec porttitor massa neque quis nunc. Aliquam sit amet malesuada leo. Mauris vitae dapibus lacus. Vestibulum interdum venenatis eros, nec rhoncus diam commodo vitae. Nam nec laoreet nisl. Pellentesque at nisl eu nisi lacinia cursus a vel eros. Aenean vehicula tincidunt mauris ac venenatis. Vivamus id tellus ullamcorper, egestas leo eu, laoreet mauris.
          </p>
          <p>
            Donec libero metus, pretium non lacinia non, mollis a libero. Duis eu nisl tortor. Donec porttitor auctor ligula in elementum. Cras laoreet quam a lacus vulputate eleifend. Duis hendrerit id magna at faucibus. Mauris sem nisl, commodo sed finibus vitae, interdum sagittis nisl. Ut laoreet tellus erat, a dapibus enim fringilla ac.
          </p>
        </div>
        <AboutUsGallery />
      </div>
    )
  }
}