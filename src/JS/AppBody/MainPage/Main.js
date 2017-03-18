import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

import MainPageWelcome from './MainPageWelcome';
import MainPageBody from './MainPageBody';

export default class MainPage extends Component {
  render() {
    return(
      <div className='main-page'>
        <MainPageWelcome />
        <MainPageBody />
      </div>
    )
  }
}