import React, { Component } from 'react';

import SignInBtn from './SignInBtn';
import UserPanel from './UserPanel';
import HamburgerMenu from '../HamburgerMenu';

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
          openUserOffer={ this.props.openUserOffer }
          openUserPopup={ this.props.openUserPopup }
          signOut={ this.props.signOut }
        />
        <HamburgerMenu openMobileMenu={ this.props.openMobileMenu } />
      </div>
    )
  }
}