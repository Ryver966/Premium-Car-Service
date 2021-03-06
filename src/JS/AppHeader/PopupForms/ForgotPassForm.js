import React, { Component } from 'react';
import '../../../styles/CSS/AppHeader.css';

export default class ForgotPassForm extends Component {
  render() {
    return(
      <form className={ `${ this.props.isSelectedNewPasswordForm ? 'show' : 'hide' }` }>
        <h2>Get new password</h2>
        <p>E-Mail:</p>
        <input id='forgot-pass-email' type='email' />
        <input type='button' onClick={ this.props.resetPass } className='sign-in-popup-btn' value='Send' />
      </form>
    )
  }
}