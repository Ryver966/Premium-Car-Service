import React, { Component } from 'react';
import '../../styles/CSS/AppHeader.css';

import TopMenuBar from './TopMenuBar/TopMenuBar';

export default class AppHeader extends Component {
  render() {
    return (
      <div className='navi-btn-container'>
        <TopMenuBar
          openSignInPopup={ this.props.openSignInPopup }
          openPopup={ this.props.openPopup }
          isUserLogged={ this.props.isUserLogged }
          isOpenedUserPopup={ this.props.isOpenedUserPopup }
          openUserPopup={ this.props.openUserPopup }
          signOut={ this.props.signOut }
          openMobileMenu={ this.props.openMobileMenu }
          openUserOffer={ this.props.openUserOffer }
          openMyAccount={ this.props.openMyAccount }
          />
        <ul className={ `btn-list mobile-list ${ this.props.isOpenedMobileMenu ? 'show' : '' }` }>
          <li>About Us</li>
          <li>Packages</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
}