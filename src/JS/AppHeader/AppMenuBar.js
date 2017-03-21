import React, { Component } from 'react';
import '../../styles/CSS/AppHeader.css';
import { Link } from 'react-router';

import TopMenuBar from './TopMenuBar/TopMenuBar';

export default class AppHeader extends Component {
  render() {
    return (
      <div className='navi-btn-container'>
        <TopMenuBar
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
          <Link to={ '/AboutUs' } className='user-li'><li>About Us</li></Link>
          <Link to={ '/Packages/Standard' } className='user-li'><li>Packages</li></Link>
          <Link to={ '/Contact' } className='user-li'><li>Contact</li></Link>
        </ul>
      </div>
    )
  }
}