import React, { Component } from 'react';
import '../../../styles/CSS/AppHeader.css';

export default class UserPopup extends Component {
  render() {
    return(
      <ul className={ `user-popup ${ this.props.isOpenedUserPopup ? 'show' : 'hide' }` }>
        <h4>Hello!</h4>
        <li>> My Account</li>
        <li>> Check Our Offer</li>
        <li onClick={ this.props.signOut }>> Sign Out</li>
      </ul>
    )
  }
}