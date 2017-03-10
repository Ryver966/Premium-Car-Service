import React, { Component } from 'react';
import '../../../styles/CSS/AppHeader.css';

export default class SignUpForm extends Component {
  render() {
    return(
      <form id='sign-up-form' className={ `${ this.props.isSelectedJoinForm ? 'show' : 'hide' }` }>
        <h2>Join</h2>
        <p>E-Mail:</p>
        <input id='sign-up-email' type='email' required/>
        <p>Password:</p>
        <input id='sign-up-pass' type='password' required/>
        <p>Confirm Passowrd:</p>
        <input id='sign-up-conf-pass' type='password' required/>
        <input type='button' className='sign-in-popup-btn' onClick={ this.props.signUp } value='Sign Up' />
      </form>
    )
  }
}