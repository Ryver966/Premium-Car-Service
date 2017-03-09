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
          <form id='sign-in-form' className={ `${ this.props.isSelectedJoinForm ? 'hide' : 'show'} ${ this.props.isSelectedNewPasswordForm ? 'hide' : 'show' }` }>
            <h2>Sign In</h2>
            <p>E-Mail:</p>
            <input id='sign-in-email' type='email' required/>
            <p>Password:</p>
            <input id='sign-in-pass' type='password' required/>
            <input type='button' className='sign-in-popup-btn' onClick={ this.props.signIn } value='Sign In' />
          </form>
          
          <form id='sign-up-form' className={ `${ this.props.isSelectedJoinForm ? 'show' : 'hide' } ${ this.props.isSelectedNewPasswordForm ? 'hide' : 'show' }` }>
            <h2>Join</h2>
            <p>E-Mail:</p>
            <input id='sign-up-email' type='email' required/>
            <p>Password:</p>
            <input id='sign-up-pass' type='password' required/>
            <p>Confirm Passowrd:</p>
            <input id='sign-up-conf-pass' type='password' required/>
            <input type='button' className='sign-in-popup-btn' onClick={ this.props.signUp } value='Sign Up' />
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