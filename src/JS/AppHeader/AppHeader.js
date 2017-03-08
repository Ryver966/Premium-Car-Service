import React, { Component } from 'react';
import '../../styles/CSS/AppHeader.css';

import AppMenuBar from './AppMenuBar';

export default class AppHeader extends Component {
  render() {
    return (
      <div className='App-header'>
        <img src={ require('../../styles/img/Premium-Cars-Logo.png') } className='header-logo' alt='Logo' />
        <AppMenuBar />
      </div>
    )
  }
}
