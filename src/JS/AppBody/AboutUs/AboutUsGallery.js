import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

const galleryImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];

export default class AboutUsGallery extends Component {
  constructor(props) {
    super(props);
    this.changeImg = this.changeImg.bind(this);

    this.state = {
      img: 0
    };
  }

  changeImg(param) {
    console.log(param)
    if(param === 1) { this.setState({ img: this.state.img + 1 }) }
    else { this.setState({ img: this.state.img - 1 }) }
  };

  render() {
    return(
      <div className='about-us-gallery'>
        <img 
          src={ require(`../../../styles/img/gallery/${ galleryImages[this.state.img > 0 ? this.state.img - 1 : this.state.img] }`) } 
          height='200px' 
          width='250px' 
          className={ `no-select-img ${this.state.img > 0 ? 'show-img' : 'no-visible'}` }
        />
        <img 
          src={ require(`../../../styles/img/gallery/${ galleryImages[this.state.img] }`) }  
          height='400px'  
          width='500px' 
        />
        <img 
          src={ require(`../../../styles/img/gallery/${ galleryImages[this.state.img < 3 ? this.state.img + 1 : this.state.img] }`) } 
          height='200px' 
          width='250px' 
          className={ `no-select-img ${this.state.img < 3 ? 'show-img' : 'no-visible'}` }
        />
        <input type='button' onClick={ this.changeImg.bind(this, -1) } id='left' value='<' />
        <input type='button'  onClick={ this.changeImg.bind(this, 1) } id='right' value='>' />
      </div>
    )
  }
}