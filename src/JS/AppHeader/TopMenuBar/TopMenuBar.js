import React, { Component } from 'react';

import SignInBtn from './SignInBtn';
import UserPanel from './UserPanel';
import HamburgerMenu from '../HamburgerMenu';

export default class TopMenuBar extends Component {
  render() {
    return(
      <div>
        <SignInBtn 
        openPopup={ this.props.openSignInPopup }
        isUserLogged={ this.props.isUserLogged } 
        />
        <UserPanel 
          isUserLogged={ this.props.isUserLogged } 
          isOpenedUserPopup={ this.props.isOpenedUserPopup }
          openUserOffer={ this.props.openUserOffer }
          openMyAccount={ this.props.openMyAccount }
          openPopup={ this.props.openPopup }
          signOut={ this.props.signOut }
        />
        <HamburgerMenu openMobileMenu={ this.props.openMobileMenu } />
      </div>
    )
  }
}