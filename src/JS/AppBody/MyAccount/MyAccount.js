import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

import MyAccountMenu from './MyAccountMenu';
import MyProfilePage from './MyProfilePage';

export default class MyAccount extends Component {
  render() {
    return(
      <div className='my-account-page'>
        <MyAccountMenu />
        <MyProfilePage />
      </div>
    )
  }
}