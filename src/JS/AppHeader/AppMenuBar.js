import React, { Component } from 'react';
import '../../styles/CSS/AppHeader.css';

import TopMenuBar from './TopMenuBar/TopMenuBar';

export default class AppHeader extends Component {
  render() {
    return (
      <div className='navi-btn-container'>
        <TopMenuBar
          openPopup={ this.props.openPopup }
          isUserLogged={ this.props.isUserLogged }
          />
        <ul className='btn-list'>
          <li>About Us</li>
          <li>Packages</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
}