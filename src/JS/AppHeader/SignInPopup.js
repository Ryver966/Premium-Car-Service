import React, { Component } from 'react';
import '../../styles/CSS/AppHeader.css';

import FormsContainer from './PopupForms/FormsContainer';

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
          <FormsContainer
            isSelectedJoinForm={ this.props.isSelectedJoinForm }
            isSelectedNewPasswordForm={ this.props.isSelectedNewPasswordForm }
            signIn={ this.props.signIn }
            signUp={ this.props.signUp }
          />
      </div>
    )
  }
}