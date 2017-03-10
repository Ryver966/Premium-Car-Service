import React, { Component } from 'react';
import '../../../styles/CSS/AppHeader.css';

export default class SignInForm extends Component {
  render() {
    return(
      <form id='sign-in-form' className={ `${ this.props.isSelectedJoinForm ? 'hide' : 'show'} ${ this.props.isSelectedNewPasswordForm ? 'hide' : 'show' }` }>
        <h2>Sign In</h2>
          <p>E-Mail:</p>
          <input id='sign-in-email' type='email' required/>
          <p>Password:</p>
          <input id='sign-in-pass' type='password' required/>
          <input type='button' className='sign-in-popup-btn' onClick={ this.props.signIn } value='Sign In' />
        </form>
    )
  }
}