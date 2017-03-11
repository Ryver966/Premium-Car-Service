import React, { Component } from 'react';
import '../../styles/CSS/AppHeader.css';

export default class HamburgerMenu extends Component {
  render() {
    return(
      <div 
        className='nav-icon'
        onClick={ this.props.openMobileMenu } 
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }
}