import React, { Component } from 'react';
import '../../styles/CSS/AppHeader.css';

export default class AppHeader extends Component {
  render() {
    return (
      <div className='navi-btn-container'>
        <input type='button' className='sign-in-btn' value='Sign In / Join' />
        <ul className='btn-list'>
          <li>About Us</li>
          <li>Packages</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
}