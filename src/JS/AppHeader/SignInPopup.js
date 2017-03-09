import React, { Component } from 'react';
import '../../styles/CSS/AppHeader.css';

export default class SignInPopup extends Component {
  render() {
    return(
      <div className={`sign-in-popup ${ this.props.isOpenSignInPop ? 'show-popup' : '' }` }>
        <div className='left-popup-container'>
          <h3 id='is-member'>Not a member yet?</h3>
          <p id='join' onClick={ this.props.openJoinForm }> > Join!</p>
          <h3 id='forgot-pass'>Forgot password?</h3>
          <p id='get-new-pass' onClick={ this.props.openNewPassForm }>> Get new password</p>
        </div>
        <div className='right-popup-container'>
          <form className={ `${ this.props.isSelectedJoinForm ? 'hide' : 'show'} ${ this.props.isSelectedNewPasswordForm ? 'hide' : 'show' }` }>
            <h2>Sign In</h2>
            <p>E-Mail:</p>
            <input type='email' />
            <p>Password:</p>
            <input type='password' />
            <input type='button' className='sign-in-popup-btn' value='Sign In' />
          </form>
          <form className={ `${ this.props.isSelectedJoinForm ? 'show' : 'hide' } ${ this.props.isSelectedNewPasswordForm ? 'hide' : 'show' }` }>
            <h2>Join</h2>
            <p>E-Mail:</p>
            <input type='email' />
            <p>Password:</p>
            <input type='password' />
            <p>Confirm Passowrd:</p>
            <input type='password' />
            <input type='button' className='sign-in-popup-btn' value='Sign Up' />
          </form>
          <form className={ `${ this.props.isSelectedNewPasswordForm ? 'show' : 'hide' } ${ this.props.isSelectedJoinForm ? 'hide' : 'show'}` }>
            <h2>Get new password</h2>
            <p>E-Mail:</p>
            <input type='email' />
            <input type='button' className='sign-in-popup-btn' value='Send' />
          </form>
        </div>
      </div>
    )
  }
}