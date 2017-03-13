import React, { Component } from 'react';
import '../../styles/CSS/AppBody.css';

import UserOffer from './UserOffer/UserOffer';
import MyAccount from './MyAccount/MyAccount';

export default class AppBody extends Component {
  render() {
    return(
      <div className='App-body'>
        <UserOffer 
          isSelectedUserOffer={ this.props.isSelectedUserOffer } 
          isUserLogged={ this.props.isUserLogged }
        />
        <MyAccount />
      </div>
    )
  }
}