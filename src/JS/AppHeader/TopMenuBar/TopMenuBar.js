import React, { Component } from 'react';

import SignInBtn from './SignInBtn';
import UserPanel from './UserPanel'

export default class TopMenuBar extends Component {
  render() {
    return(
      <div>
        <SignInBtn 
        openPopup={ this.props.openPopup }
        isUserLogged={ this.props.isUserLogged } 
        />
        <UserPanel 
          isUserLogged={ this.props.isUserLogged } 
          isOpenedUserPopup={ this.props.isOpenedUserPopup }
          openUserPopup={ this.props.openUserPopup }
        />
      </div>
    )
  }
}