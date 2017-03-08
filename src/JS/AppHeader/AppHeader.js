import React, { Component } from 'react';
import '../../styles/CSS/AppHeader.css';

import AppMenuBar from './AppMenuBar';
import SignInPopup from './SignInPopup';

export default class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.openPopup = this.openPopup.bind(this);

    this.state = {
      isOpenedSignInPopup: false,
    }
  }

  openPopup() {
    console.log('test');
    this.setState({
      isOpenedSignInPopup: !this.state.isOpenedSignInPopup
    });
  };

  render() {
    return (
      <div className='App-header'>
        <img src={ require('../../styles/img/Premium-Cars-Logo.png') } className='header-logo' alt='Logo' />
        <AppMenuBar openPopup={ this.openPopup } />
        <SignInPopup isOpenSignInPop={ this.state.isOpenedSignInPopup } />
      </div>
    )
  }
}
