import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

import MyAccountMenu from './MyAccountMenu';

export default class MyAccount extends Component {
  render() {
    return(
      <div className='my-account-page'>
        <MyAccountMenu />
      </div>
    )
  }
}