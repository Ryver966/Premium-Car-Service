import React, { Component } from 'react';
import '../../styles/CSS/AppHeader.css';

import AppMenuBar from './AppMenuBar';
import SignInPopup from './SignInPopup';

export default class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.openJoinForm = this.openJoinForm.bind(this);
    this.openNewPassForm = this.openNewPassForm.bind(this);
    this.openMobileMenu = this.openMobileMenu.bind(this);

    this.state = {
      isOpenedSignInPopup: this.props.isOpenedSignInPopup,
      isSelectedJoinForm: false,
      isSelectedNewPasswordForm: false,
      isOpenedMobileMenu: false
    }
  }

openMobileMenu() {
  this.setState({
    isOpenedMobileMenu: !this.state.isOpenedMobileMenu
  });
};

  openNewPassForm() {
    const getNewPass = document.getElementById('get-new-pass');
    const forgotPass = document.getElementById('forgot-pass');
    this.setState({
      isSelectedNewPasswordForm: !this.state.isSelectedNewPasswordForm,
      isSelectedJoinForm: false
    });
    if(!this.state.isSelectedNewPasswordForm) {
      getNewPass.innerHTML = '> Sign In';
      forgotPass.innerHTML= 'Already Account?';
      document.getElementById('join').innerHTML = '> Join!';
      document.getElementById('is-member').innerHTML = 'Not a member yet?';
    } else {
      getNewPass.innerHTML = '> Get new password';
      forgotPass.innerHTML = 'Forgot password?';
    }
  };

  openJoinForm() {
    const joinBtn = document.getElementById('join');
    const isMember = document.getElementById('is-member');
    this.setState({
      isSelectedJoinForm: !this.state.isSelectedJoinForm,
      isSelectedNewPasswordForm: false
    });
    if(!this.state.isSelectedJoinForm) {
      joinBtn.innerHTML = '> Sign In';
      isMember.innerHTML = 'Already account?';
      document.getElementById('get-new-pass').innerHTML = '> Get new password';
      document.getElementById('forgot-pass').innerHTML = 'Forgot password?';
    } else {
      joinBtn.innerHTML = '> Join!';
      isMember.innerHTML = 'Not a member yet?';
    }
  };


  render() {
    return (
      <div className='App-header'>
        <img src={ require('../../styles/img/Premium-Cars-Logo.png') } className='header-logo' alt='Logo' />
        <AppMenuBar 
          openPopup={ this.props.openPopup }
          isUserLogged={ this.props.isUserLogged }
          isOpenedUserPopup={ this.props.isOpenedPopup }
          isOpenedMobileMenu={ this.state.isOpenedMobileMenu }
          openUserPopup={ this.props.openUserPopup }
          openSignInPopup={ this.props.openSignInPopup }
          signOut={ this.props.signOut }
          openMobileMenu={ this.openMobileMenu }
          openUserOffer={ this.props.openUserOffer }
          openMyAccount={ this.props.openMyAccount }
        />
        <SignInPopup 
          isOpenSignInPop={ this.props.isOpenedSignInPopup } 
          isSelectedJoinForm={ this.state.isSelectedJoinForm }
          isUserLogged={ this.props.isUserLogged }
          isSelectedNewPasswordForm={ this.state.isSelectedNewPasswordForm }
          openJoinForm ={ this.openJoinForm }
          openNewPassForm={ this.openNewPassForm }
          signUp={ this.props.signUp }
          signIn={ this.props.signIn }
          resetPass={ this.props.resetPass }
        />
      </div>
    )
  }
}
