import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';
import { Link } from 'react-router';

export default class MyAccountMenu extends Component{
  render() {
    return(
      <div className='my-account-menu'>
        <h1>Hello!</h1>
        <ul>
          <li><Link to='/MyAccount/EditMyProfile' className='user-li'>Edit My Profile</Link></li>
          <li><Link to='/MyAccount/MyPackage' className='user-li'>My Package</Link></li>
          <li>Add Visa Card</li>
          <li>Need help?</li>
          <li>Sign Out</li>
        </ul>
      </div>
    )
  }
}