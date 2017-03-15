import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';
import { Link } from 'react-router';

export default class MyAccountMenu extends Component{
  constructor(props) {
    super(props);
    this.state = {
      windowLocation: window.location.href
    }
  }
  render() {
    return(
      <div className='my-account-menu'>
        <h1>Hello!</h1>
        <ul>
          <li><Link to='/MyAccount/EditMyProfile' className='user-li' >Edit My Profile</Link></li>
          <li><Link to='/MyAccount/MyPackage' className='user-li'>My Package</Link></li>
          <li><Link to='/MyAccount/PaymentCards' className='user-li'>Payment Cards</Link></li>
          <li>Need help?</li>
          <li>Sign Out</li>
        </ul>
      </div>
    )
  }
}