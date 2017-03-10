import React, { Component } from 'react';
import '../../../styles/CSS/AppHeader.css';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import ForgotPassForm from './ForgotPassForm';

export default class FormsContainer extends Component {
  render() {
    return(
      <div className='right-popup-container'>
        <SignInForm 
          isSelectedJoinForm={ this.props.isSelectedJoinForm }
          isSelectedNewPasswordForm={ this.props.isSelectedNewPasswordForm }
          signIn={ this.props.signIn }
        />
        <SignUpForm 
          isSelectedJoinForm={ this.props.isSelectedJoinForm }
          signUp={ this.props.signUp }
        />
        <ForgotPassForm 
          isSelectedNewPasswordForm={ this.props.isSelectedNewPasswordForm }
        />
      </div>
    )
  }
}