import React, { Component } from 'react';
import '../../styles/CSS/AppHeader.css';

export default class SignInPopup extends Component {
  render() {
    return(
      <div className={`sign-in-popup ${this.props.isOpenSignInPop ? 'show' : ''}` }>
        <div className='left-popup-container'>
          <h3>Not a member yet?</h3>
          <p className='sign-up-btn'> > Join!</p>
          <h3>Forgot Password</h3>
          <p>> Get new password</p>
        </div>
        <div className='right-popup-container'>
          <form className='sign-in-form'>
            <p>E-Mail:</p>
            <input type='email' />
            <p>Password</p>
            <input type='password' />
            <input type='button' className='sign-in-btn-in-form' value='Sign In' />
          </form>
        </div>
      </div>
    )
  }
}