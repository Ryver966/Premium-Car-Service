import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

export default class MyAccountMenu extends Component{
  render() {
    return(
      <div className='my-account-menu'>
        <h1>Hello!</h1>
        <ul>
          <li>My Profile</li>
          <li>Edit My Profile</li>
          <li>My Package</li>
          <li>Add Visa Card</li>
          <li>Need help?</li>
          <li>Sign Out</li>
        </ul>
      </div>
    )
  }
}