import React, { Component } from 'react';
import '../../styles/CSS/AppHeader.css';

export default class SignInPopup extends Component {
  render() {
    return(
      <div className={`sign-in-popup ${this.props.isOpenSignInPop ? 'show' : 'hide'}` }>

      </div>
    )
  }
}