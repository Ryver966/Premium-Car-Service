import React, { Component } from 'react';
import '../../../styles/CSS/AppHeader.css';
import { Link } from 'react-router';

export default class UserPopup extends Component {
  render() {
    return(
      <ul className={ `user-popup ${ this.props.isOpenedUserPopup ? 'show' : 'hide' }` }>
        <h4>Hello!</h4>
        <li><Link to={ '/MyAccount/MyPackage' } className='user-li'>> My Account</Link></li>
        <li><Link to={ '/UserOffer' } className='user-li'>> Check Our Offer</Link></li>
        <li onClick={ this.props.signOut } className='user-li'>> Sign Out</li>
      </ul>
    )
  }
}