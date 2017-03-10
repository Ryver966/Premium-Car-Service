import React, { Component } from 'react';
import '../../../styles/CSS/AppHeader.css';

export default class UserPopup extends Component {
  render() {
    console.log(document.getElementsByClassName('show'))
    return(
      <ul className={ `user-popup ${ this.props.isOpenedUserPopup ? 'show' : 'hide' }` }>
        <h4>Hello!</h4>
        <li>> My Account</li>
        <li>> Check Our Offer</li>
        <li>> Sign Out</li>
      </ul>
    )
  }
}